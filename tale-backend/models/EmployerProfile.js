const mongoose = require('mongoose');

const employerProfileSchema = new mongoose.Schema({
  employerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Employer', required: true, unique: true },
  companyDescription: { type: String },
  logo: { type: String },
  website: { type: String },
  industry: { type: String },
  companySize: { type: String, enum: ['1-10', '11-50', '51-200', '201-500', '500+'] },
  location: { type: String },
  foundedYear: { type: Number },
  socialLinks: {
    linkedin: String,
    twitter: String,
    facebook: String
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('EmployerProfile', employerProfileSchema);