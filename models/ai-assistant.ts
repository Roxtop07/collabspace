import mongoose from 'mongoose';

const aiMessageSchema = new mongoose.Schema({
  content: {
    type: String,
    required: [true, 'Message content is required'],
  },
  role: {
    type: String,
    enum: ['user', 'assistant'],
    required: true,
  },
}, {
  timestamps: true,
});

const aiConversationSchema = new mongoose.Schema({
  messages: [aiMessageSchema],
}, {
  timestamps: true,
});

const aiAssistantSchema = new mongoose.Schema({
  teamId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Team',
    required: true,
  },
  conversations: [aiConversationSchema],
}, {
  timestamps: true,
});

export default mongoose.models.AIAssistant || mongoose.model('AIAssistant', aiAssistantSchema);