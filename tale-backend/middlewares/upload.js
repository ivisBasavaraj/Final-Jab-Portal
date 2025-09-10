const multer = require('multer');
const path = require('path');
const fs = require('fs');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    let uploadPath = 'uploads/';
    if (file.fieldname === 'resume') uploadPath += 'resumes/';
    else if (file.fieldname === 'logo') uploadPath += 'logos/';
    else if (file.fieldname === 'cover') uploadPath += 'images/';
    else if (file.fieldname === 'document') uploadPath += 'documents/';
    else if (file.fieldname === 'profilePicture') uploadPath += 'profile-pictures/';
    else uploadPath += 'images/';
    
    // Create directory if it doesn't exist
    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath, { recursive: true });
    }
    
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${Math.round(Math.random() * 1E9)}${path.extname(file.originalname)}`);
  }
});

const fileFilter = (req, file, cb) => {
  if (file.fieldname === 'resume') {
    if (file.mimetype === 'application/pdf' || file.mimetype.includes('document')) {
      cb(null, true);
    } else {
      cb(new Error('Only PDF and DOC files allowed for resume'), false);
    }
  } else if (file.fieldname === 'document') {
    if (file.mimetype === 'application/pdf' || file.mimetype.startsWith('image/')) {
      cb(null, true);
    } else {
      cb(new Error('Only PDF and image files allowed for documents'), false);
    }
  } else {
    if (file.mimetype.startsWith('image/')) {
      cb(null, true);
    } else {
      cb(new Error('Only image files allowed'), false);
    }
  }
};

const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 5 * 1024 * 1024 }
});

module.exports = upload;