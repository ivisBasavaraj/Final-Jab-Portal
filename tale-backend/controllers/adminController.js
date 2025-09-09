const jwt = require('jsonwebtoken');
const Admin = require('../models/Admin');
const Candidate = require('../models/Candidate');
const Employer = require('../models/Employer');
const Job = require('../models/Job');
const Application = require('../models/Application');
const Blog = require('../models/Blog');
const Contact = require('../models/Contact');
const Testimonial = require('../models/Testimonial');
const FAQ = require('../models/FAQ');
const Partner = require('../models/Partner');
const SiteSettings = require('../models/SiteSettings');

const generateToken = (id, role) => {
  return jwt.sign({ id, role }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRE });
};

// Authentication Controller
exports.loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const admin = await Admin.findOne({ email });
    if (!admin || !(await admin.comparePassword(password))) {
      return res.status(401).json({ success: false, message: 'Invalid credentials' });
    }

    if (admin.status !== 'active') {
      return res.status(401).json({ success: false, message: 'Account is inactive' });
    }

    const token = generateToken(admin._id, 'admin');

    res.json({
      success: true,
      token,
      admin: {
        id: admin._id,
        name: admin.name,
        email: admin.email,
        role: admin.role
      }
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Dashboard Statistics Controller
exports.getDashboardStats = async (req, res) => {
  try {
    const totalCandidates = await Candidate.countDocuments();
    const totalEmployers = await Employer.countDocuments();
    const totalJobs = await Job.countDocuments();
    const totalApplications = await Application.countDocuments();
    const activeJobs = await Job.countDocuments({ status: 'active' });
    const pendingJobs = await Job.countDocuments({ status: 'pending' });

    const stats = {
      totalCandidates,
      totalEmployers,
      totalJobs,
      totalApplications,
      activeJobs,
      pendingJobs
    };

    res.json({ success: true, stats });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// User Management Controllers
exports.getUsers = async (req, res) => {
  try {
    const { type, page = 1, limit = 10 } = req.query;
    
    let users;
    if (type === 'candidates') {
      users = await Candidate.find().select('-password')
        .limit(limit * 1).skip((page - 1) * limit);
    } else if (type === 'employers') {
      users = await Employer.find().select('-password')
        .limit(limit * 1).skip((page - 1) * limit);
    } else {
      const candidates = await Candidate.find().select('-password').limit(5);
      const employers = await Employer.find().select('-password').limit(5);
      users = { candidates, employers };
    }

    res.json({ success: true, users });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const { userId, userType } = req.params;
    
    if (userType === 'candidate') {
      await Candidate.findByIdAndDelete(userId);
    } else if (userType === 'employer') {
      await Employer.findByIdAndDelete(userId);
    }

    res.json({ success: true, message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const { userId, userType } = req.params;
    
    let user;
    if (userType === 'candidate') {
      user = await Candidate.findByIdAndUpdate(userId, req.body, { new: true }).select('-password');
    } else if (userType === 'employer') {
      user = await Employer.findByIdAndUpdate(userId, req.body, { new: true }).select('-password');
    }

    res.json({ success: true, user });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Job Management Controllers
exports.approveJob = async (req, res) => {
  try {
    const job = await Job.findByIdAndUpdate(
      req.params.jobId,
      { status: 'active' },
      { new: true }
    );

    res.json({ success: true, job });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.rejectJob = async (req, res) => {
  try {
    const job = await Job.findByIdAndUpdate(
      req.params.jobId,
      { status: 'closed' },
      { new: true }
    );

    res.json({ success: true, job });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.getAllJobs = async (req, res) => {
  try {
    const { status, page = 1, limit = 10 } = req.query;
    
    let query = {};
    if (status) query.status = status;

    const jobs = await Job.find(query)
      .populate('employerId', 'companyName email')
      .sort({ createdAt: -1 })
      .limit(limit * 1)
      .skip((page - 1) * limit);

    res.json({ success: true, jobs });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Content Management Controllers
exports.createContent = async (req, res) => {
  try {
    const { type } = req.params;
    let content;

    switch (type) {
      case 'blog':
        content = await Blog.create({ ...req.body, author: req.user._id });
        break;
      case 'testimonial':
        content = await Testimonial.create(req.body);
        break;
      case 'faq':
        content = await FAQ.create(req.body);
        break;
      case 'partner':
        content = await Partner.create(req.body);
        break;
      default:
        return res.status(400).json({ success: false, message: 'Invalid content type' });
    }

    res.status(201).json({ success: true, content });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.updateContent = async (req, res) => {
  try {
    const { type, contentId } = req.params;
    let content;

    switch (type) {
      case 'blog':
        content = await Blog.findByIdAndUpdate(contentId, req.body, { new: true });
        break;
      case 'testimonial':
        content = await Testimonial.findByIdAndUpdate(contentId, req.body, { new: true });
        break;
      case 'faq':
        content = await FAQ.findByIdAndUpdate(contentId, req.body, { new: true });
        break;
      case 'partner':
        content = await Partner.findByIdAndUpdate(contentId, req.body, { new: true });
        break;
      default:
        return res.status(400).json({ success: false, message: 'Invalid content type' });
    }

    res.json({ success: true, content });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.deleteContent = async (req, res) => {
  try {
    const { type, contentId } = req.params;

    switch (type) {
      case 'blog':
        await Blog.findByIdAndDelete(contentId);
        break;
      case 'testimonial':
        await Testimonial.findByIdAndDelete(contentId);
        break;
      case 'faq':
        await FAQ.findByIdAndDelete(contentId);
        break;
      case 'partner':
        await Partner.findByIdAndDelete(contentId);
        break;
      default:
        return res.status(400).json({ success: false, message: 'Invalid content type' });
    }

    res.json({ success: true, message: 'Content deleted successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Contact Form Management Controllers
exports.getContactForms = async (req, res) => {
  try {
    const { status, page = 1, limit = 10 } = req.query;
    
    let query = {};
    if (status) query.status = status;

    const contacts = await Contact.find(query)
      .sort({ createdAt: -1 })
      .limit(limit * 1)
      .skip((page - 1) * limit);

    res.json({ success: true, contacts });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.deleteContactForm = async (req, res) => {
  try {
    await Contact.findByIdAndDelete(req.params.contactId);
    res.json({ success: true, message: 'Contact form deleted successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Site Settings Controllers
exports.updateSettings = async (req, res) => {
  try {
    const settings = await SiteSettings.findOneAndUpdate(
      {},
      req.body,
      { new: true, upsert: true }
    );

    res.json({ success: true, settings });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.getSettings = async (req, res) => {
  try {
    let settings = await SiteSettings.findOne();
    if (!settings) {
      settings = await SiteSettings.create({});
    }
    res.json({ success: true, settings });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};