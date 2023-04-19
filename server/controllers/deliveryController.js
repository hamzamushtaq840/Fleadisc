import { Disc } from '../models/disc.js';
import { tryCatch } from '../utils/tryCatch.js';
import AppError from '../utils/AppError.js';
import { TempDisc } from '../models/tempDisc.js';
import { FinishedListing } from '../models/finishedListing.js';
import { getUsers, io } from '../index.js';

export const confirmPurchase = tryCatch(async (req, res) => {
    const { id, buyerId } = req.body;
    console.log(id);
    const listing = await TempDisc.findOne({ _id: id });
    console.log(listing);

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


export const sendAddress = tryCatch(async (req, res) => {
    const { id, sellerId, address } = req.body;
    console.log(req.body);
    const listing = await TempDisc.findOne({ _id: id });

    if (listing.addressSent === true) {
        throw new AppError('already confirmed purchased', 'already confirmed purchased', 404);
    }

    // Update isSold field to true
    await TempDisc.findByIdAndUpdate(id, { addressSent: true, address: address });
    const receiver = getUsers(sellerId);
    console.log(receiver);
    if (receiver && receiver.socketId) {
        // Emit 'refetchBuying' event to the specific receiver's socketId
        io.to(receiver.socketId).emit('refetchSelling');
    }
    res.status(201).json({ message: 'Purchase Confirmed' });
});

export const sendPaymentDetails = tryCatch(async (req, res) => {
    const { id, buyerId, paymentMethod, shippingCost } = req.body;
    const listing = await TempDisc.findOne({ _id: id });
    console.log(listing);

    if (listing.paymentAddressConfirmed === true) {
        throw new AppError('already confirmed purchased', 'already confirmed purchased', 404);
    }

    // Update isSold field to true
    await TempDisc.findByIdAndUpdate(id, { paymentAddressConfirmed: true, paymentMethod: paymentMethod, shippingCost: shippingCost });
    const receiver = getUsers(buyerId);
    console.log('----------------');
    console.log(receiver);
    console.log('----------------');

    if (receiver && receiver.socketId) {
        io.to(receiver.socketId).emit('refetchBuying');
    }
    res.status(201).json({ message: 'Purchase Confirmed' });
});