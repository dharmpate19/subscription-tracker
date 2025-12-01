import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "User name is required"],
        trin: true,
        minLenght: 2,
        maxLenght: 50
    },
    email: {
        type: String,
        required: [true, "User email is required"],
        unique: true,
        trin: true,
        lowercase: true,
        match: [
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            "Please provide a valid email"
        ]
    },
    password: {
        type: String,
        required: [true, "User password is required"],
        minLenght: 6
    }
}, { timeStamps: true })

const User = mongoose.model("User", userSchema);

export default User;