import mongoose from 'mongoose';

const whiteboardSchema = new mongoose.Schema({
  teamId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Team',
    required: true,
  },
  data: {
    type: String, // JSON serialized Excalidraw data
    required: true,
    default: '{}',
  },
}, {
  timestamps: true,
});

export default mongoose.models.Whiteboard || mongoose.model('Whiteboard', whiteboardSchema);