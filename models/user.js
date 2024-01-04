import mongoose from 'mongoose';

const UserSchema = mongoose.Schema({
  admin: String,
  password: String,
});

const UserModel = mongoose.model('users', UserSchema);

export default UserModel;
