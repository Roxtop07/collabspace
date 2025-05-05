import mongoose from 'mongoose';

const teamSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide a team name'],
  },
  description: {
    type: String,
  },
  inviteCode: {
    type: String,
    required: true,
    unique: true,
  },
  ownerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  memberIds: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  }],
}, {
  timestamps: true,
});

// Ensure teams have between 2-8 members
teamSchema.pre('save', function(next) {
  if (this.memberIds.length > 8) {
    return next(new Error('Team cannot have more than 8 members'));
  }
  next();
});

export default mongoose.models.Team || mongoose.model('Team', teamSchema);