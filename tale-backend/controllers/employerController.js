const jwt = require('jsonwebtoken');
const Employer = require('../models/Employer');
const EmployerProfile = require('../models/EmployerProfile');
const Job = require('../models/Job');
const Application = require('../models/Application');
const Message = require('../models/Message');
const Subscription = require('../models/Subscription');

const generateToken = (id, role) => {
  return jwt.sign({ id, role }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRE });
};

// Authentication Controllers
exports.registerEmployer = async (req, res) => {
  try {
    const { name, email, password, phone, companyName } = req.body;

    const existingEmployer = await Employer.findOne({ email });
    if (existingEmployer) {
      return res.status(400).json({ success: false, message: 'Email already registered' });
    }

    const employer = await Employer.create({ name, email, password, phone, companyName });
    await EmployerProfile.create({ employerId: employer._id });
    await Subscription.create({ employerId: employer._id });

    const token = generateToken(employer._id, 'employer');

    res.status(201).json({
      success: true,
      token,
      employer: {
        id: employer._id,
        name: employer.name,
        email: employer.email,
        companyName: employer.companyName
      }
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.loginEmployer = async (req, res) => {
  try {
    const { email, password } = req.body;

    const employer = await Employer.findOne({ email });
    if (!employer || !(await employer.comparePassword(password))) {
      return res.status(401).json({ success: false, message: 'Invalid credentials' });
    }

    if (employer.status !== 'active') {
      return res.status(401).json({ success: false, message: 'Account is inactive' });
    }

    const token = generateToken(employer._id, 'employer');

    res.json({
      success: true,
      token,
      employer: {
        id: employer._id,
        name: employer.name,
        email: employer.email,
        companyName: employer.companyName
      }
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Profile Controllers
exports.getProfile = async (req, res) => {
  try {
    const profile = await EmployerProfile.findOne({ employerId: req.user._id })
      .populate('employerId', 'name email phone companyName');
    
    if (!profile) {
      return res.json({ success: true, profile: null });
    }

    res.json({ success: true, profile });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.updateProfile = async (req, res) => {
  try {
    const profile = await EmployerProfile.findOneAndUpdate(
      { employerId: req.user._id },
      req.body,
      { new: true, upsert: true }
    ).populate('employerId', 'name email phone companyName');

    // Create notification for admin when profile is updated
    try {
      const { createNotification } = require('./notificationController');
      await createNotification({
        title: 'Company Profile Updated',
        message: `${profile.employerId?.companyName || 'A company'} has updated their profile`,
        type: 'profile_submitted',
        role: 'admin',
        relatedId: profile._id,
        createdBy: req.user._id
      });
    } catch (notifError) {
      console.error('Notification creation failed:', notifError);
    }

    res.json({ success: true, profile });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.uploadLogo = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ success: false, message: 'No file uploaded' });
    }

    const profile = await EmployerProfile.findOneAndUpdate(
      { employerId: req.user._id },
      { logo: req.file.path },
      { new: true, upsert: true }
    );

    res.json({ success: true, logo: req.file.path, profile });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.uploadCover = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ success: false, message: 'No file uploaded' });
    }

    const profile = await EmployerProfile.findOneAndUpdate(
      { employerId: req.user._id },
      { coverImage: req.file.path },
      { new: true, upsert: true }
    );

    res.json({ success: true, coverImage: req.file.path, profile });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Job Management Controllers
exports.createJob = async (req, res) => {
  try {
    const jobData = { ...req.body, employerId: req.user._id };
    const job = await Job.create(jobData);

    // Create notification for all candidates when job is posted
    try {
      const { createNotification } = require('./notificationController');
      await createNotification({
        title: 'New Job Posted',
        message: `New ${job.title} position available at ${req.user.companyName}`,
        type: 'job_posted',
        role: 'candidate',
        relatedId: job._id,
        createdBy: req.user._id
      });
    } catch (notifError) {
      console.error('Notification creation failed:', notifError);
    }

    res.status(201).json({ success: true, job });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.updateJob = async (req, res) => {
  try {
    const job = await Job.findOneAndUpdate(
      { _id: req.params.jobId, employerId: req.user._id },
      req.body,
      { new: true }
    );
    
    if (!job) {
      return res.status(404).json({ success: false, message: 'Job not found' });
    }

    res.json({ success: true, job });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.deleteJob = async (req, res) => {
  try {
    const job = await Job.findOneAndDelete({ 
      _id: req.params.jobId, 
      employerId: req.user._id 
    });
    
    if (!job) {
      return res.status(404).json({ success: false, message: 'Job not found' });
    }

    res.json({ success: true, message: 'Job deleted successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.getEmployerJobs = async (req, res) => {
  try {
    const jobs = await Job.find({ employerId: req.user._id })
      .sort({ createdAt: -1 });
    res.json({ success: true, jobs });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Application Management Controllers
exports.reviewApplication = async (req, res) => {
  try {
    const application = await Application.findOne({
      _id: req.params.applicationId,
      employerId: req.user._id
    })
    .populate('candidateId', 'name email phone')
    .populate('jobId', 'title');

    if (!application) {
      return res.status(404).json({ success: false, message: 'Application not found' });
    }

    res.json({ success: true, application });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.updateApplicationStatus = async (req, res) => {
  try {
    const { status, notes } = req.body;
    
    const application = await Application.findOneAndUpdate(
      { _id: req.params.applicationId, employerId: req.user._id },
      { 
        status,
        $push: {
          statusHistory: {
            status,
            changedBy: req.user._id,
            changedByModel: 'Employer',
            notes
          }
        }
      },
      { new: true }
    );

    if (!application) {
      return res.status(404).json({ success: false, message: 'Application not found' });
    }

    res.json({ success: true, application });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Message Controllers
exports.sendMessage = async (req, res) => {
  try {
    const { receiverId, message } = req.body;
    const conversationId = [req.user._id, receiverId].sort().join('-');
    
    const newMessage = await Message.create({
      senderId: req.user._id,
      senderModel: 'Employer',
      receiverId,
      receiverModel: 'Candidate',
      message,
      conversationId
    });

    res.status(201).json({ success: true, message: newMessage });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.getMessages = async (req, res) => {
  try {
    const { conversationId } = req.params;
    
    const messages = await Message.find({ conversationId })
      .populate('senderId', 'name companyName')
      .populate('receiverId', 'name')
      .sort({ createdAt: 1 });

    res.json({ success: true, messages });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Subscription Management Controllers
exports.createSubscription = async (req, res) => {
  try {
    const { plan, paymentData } = req.body;
    
    const subscription = await Subscription.findOneAndUpdate(
      { employerId: req.user._id },
      { 
        plan,
        $push: { paymentHistory: paymentData }
      },
      { new: true, upsert: true }
    );

    res.json({ success: true, subscription });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.getSubscription = async (req, res) => {
  try {
    const subscription = await Subscription.findOne({ employerId: req.user._id });
    res.json({ success: true, subscription });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.updateSubscription = async (req, res) => {
  try {
    const subscription = await Subscription.findOneAndUpdate(
      { employerId: req.user._id },
      req.body,
      { new: true }
    );

    res.json({ success: true, subscription });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.getDashboardStats = async (req, res) => {
  try {
    const employerId = req.user._id;
    
    const totalJobs = await Job.countDocuments({ employerId });
    const activeJobs = await Job.countDocuments({ employerId, status: 'active' });
    const totalApplications = await Application.countDocuments({ employerId });
    const shortlisted = await Application.countDocuments({ employerId, status: 'shortlisted' });
    
    const employer = await req.user.populate('companyName');
    
    res.json({
      success: true,
      stats: { totalJobs, activeJobs, totalApplications, shortlisted },
      employer: { companyName: req.user.companyName }
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.getEmployerApplications = async (req, res) => {
  try {
    const applications = await Application.find({ employerId: req.user._id })
      .populate('candidateId', 'name email phone')
      .populate('jobId', 'title location')
      .sort({ createdAt: -1 });

    res.json({ success: true, applications });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};