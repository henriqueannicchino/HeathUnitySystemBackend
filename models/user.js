import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    name: { type: String, required: true },
    userName: { type: String, required: true, unique: true },
    password: { type: String },
    type: { type: String },
    createdAt: {type: Date, default: Date.now }
})

export default mongoose.model("User", userSchema);