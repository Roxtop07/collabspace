import mongoose from 'mongoose';

const fileUploadSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'File name is required'],
  },
  url: {
    type: String,
    required: [true, 'File URL is required'],
  },
  type: {
    type: String,
    required: [true, 'File type is required'],
  },
  size: {
    type: Number,
    required: [true, 'File size is required'],
  },
  uploaderId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  teamId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Team',
    required: true,
  },
}, {
  timestamps: true,
});

export default mongoose.models.FileUpload || mongoose.model('FileUpload', fileUploadSchema);