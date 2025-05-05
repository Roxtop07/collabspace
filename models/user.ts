import mongoose from 'mongoose';
import { UserRole } from '@/types';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide a name'],
  },
  email: {
    type: String,
    required: [true, 'Please provide an email'],
    unique: true,
  },
  image: {
    type: String,
  },
  password: {
    type: String,
    select: false,
  },
  role: {
    type: String,
    enum: Object.values(UserRole),
    default: UserRole.IDEA_MEMBER,
  },
  teamIds: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Team',
  }],
}, {
  timestamps: true,
});

export default mongoose.models.User || mongoose.model('User', userSchema);