import { tryCatch } from '../utils/tryCatch.js';
import AppError from '../utils/AppError.js';
import { Chat } from '../models/chat.js';

export const getUserAllChats = tryCatch(async (req, res) => {
    const { userId } = req.params;
    const listing = await Chat.findOne({ sender: userId });

    if (listing.length === 0) {
        return res.status(201).json([]);
    }

    res.status(201).json(listing);
});