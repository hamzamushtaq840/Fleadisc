import { Disc } from '../models/disc.js';
import { tryCatch } from '../utils/tryCatch.js';
import AppError from '../utils/AppError.js';
import { TempDisc } from '../models/tempDisc.js';
import { FinishedListing } from '../models/finishedListing.js';
import { getUsers, io } from '../index.js';

export const confirmPurchase = tryCatch(async (req, res) => {
    const { id, buyerId } = req.body;
    const listing = await TempDisc.findOne({ id: id });

    if (listing.purchaseConfirmed === true) {
        throw new AppError('already confirmed purchased', 'already confirmed purchased', 404);
    }

    // Update isSold field to true
    await TempDisc.findByIdAndUpdate(id, { purchaseConfirmed: true });
    const receiver = getUsers(buyerId);
    console.log(receiver);
    if (receiver && receiver.socketId) {
        // Emit 'refetchBuying' event to the specific receiver's socketId
        io.to(receiver.socketId).emit('refetchBuying');
    }
    res.status(201).json({ message: 'Purchase Confirmed' });
});