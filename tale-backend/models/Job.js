const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  employerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Employer', required: true },
  location: { type: String, required: true },
  salary: {
    min: { type: Number },
    max: { type: Number },
    currency: { type: String, default: 'USD' }
  },
  jobType: { type: String, enum: ['full-time', 'part-time', 'contract', 'internship'], required: true },
  category: { type: String },
  requirements: [String],
  benefits: [String],
  skills: [String],
  experienceLevel: { type: String, enum: ['entry', 'mid', 'senior', 'executive'] },
  status: { type: String, enum: ['active', 'closed', 'draft', 'pending'], default: 'pending' },
  expiresAt: { type: Date },
  isRemote: { type: Boolean, default: false },
  applicationCount: { type: Number, default: 0 }
}, {
  timestamps: true
});

jobSchema.index({ title: 'text', description: 'text' });

module.exports = mongoose.model('Job', jobSchema);