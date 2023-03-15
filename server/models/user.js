import mongoose from "mongoose"
import { UserRole } from '../config/role_list.js';

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: false,
    },
    email: { type: String, required: true },
    password: { type: String, required: false },
    country: {
        type: String,
        required: false
    },
    roles: {
        type: [Number],
        enum: Object.values(UserRole).map(role => role.valueOf()),
        default: [UserRole.USER.valueOf()],
        required: false
    },
    address: { type: String, required: false },
    profilePicture: { type: String, required: false },
    createdAt: {
        type: Date,
        default: Date.now,
        required: false
    }
})

export const User = mongoose.model('User', userSchema);
