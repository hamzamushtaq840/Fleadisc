import mongoose from "mongoose";

const notificationSchema = mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    disc: { type: mongoose.Schema.Types.ObjectId, ref: 'Disc', required: true },
    message: { type: String, required: true },
    createdAt: { type: Date, default: Date.now, required: true },
});

export const Notification = mongoose.model("Notification", notificationSchema);
