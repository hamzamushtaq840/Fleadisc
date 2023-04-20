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
    const { id, buyerId, paymentMethod, shippingCost, shippingCostPaidBy } = req.body;
    console.log(req.body);
    const listing = await TempDisc.findOne({ _id: id });
    console.log(listing);

    if (listing.paymentAddressConfirmed === true) {
        throw new AppError('already confirmed purchased', 'already confirmed purchased', 404);
    }

    // Update isSold field to true
    await TempDisc.findByIdAndUpdate(id, { paymentAddressConfirmed: true, paymentMethod: paymentMethod, shippingCost: shippingCost, shippingCostPaidBy: shippingCostPaidBy });
    const receiver = getUsers(buyerId);

    if (receiver && receiver.socketId) {
        io.to(receiver.socketId).emit('refetchBuying');
    }
    res.status(201).json({ message: 'Purchase Confirmed' });
});

export const paymentSent = tryCatch(async (req, res) => {
    const { id, sellerId, selectedPaymentMethod } = req.body;
    console.log(req.body);
    const listing = await TempDisc.findOne({ _id: id });

    if (listing.paymentSent === true) {
        throw new AppError('already confirmed purchased', 'already confirmed purchased', 404);
    }

    const abc = listing.paymentMethod.map((payment) => {
        if (String(payment.accountNo) === String(selectedPaymentMethod)) {
            payment.selected = true;
        } else {
            payment.selected = false;
        }
        return payment;
    });

    await TempDisc.findByIdAndUpdate(id, { paymentSent: true, paymentMethod: abc });
    const receiver = getUsers(sellerId);
    if (receiver && receiver.socketId) {
        io.to(receiver.socketId).emit('refetchSelling');
    }
    res.status(201).json({ message: 'Purchase Confirmed' });
});

export const confirmPayment = tryCatch(async (req, res) => {
    const { id, buyerId } = req.body;
    const listing = await TempDisc.findOne({ _id: id });

    if (listing.paymentConfirmed === true) {
        throw new AppError('already confirmed purchased', 'already confirmed purchased', 404);
    }

    await TempDisc.findByIdAndUpdate(id, { paymentConfirmed: true });
    const receiver = getUsers(buyerId);
    if (receiver && receiver.socketId) {
        io.to(receiver.socketId).emit('refetchBuying');
    }
    res.status(201).json({ message: 'Purchase Confirmed' });

});

export const confirmParcelSent = tryCatch(async (req, res) => {
    const { id, buyerId } = req.body;
    const listing = await TempDisc.findOne({ _id: id });

    if (listing.parcelSent === true) {
        throw new AppError('already confirmed purchased', 'already confirmed purchased', 404);
    }

    await TempDisc.findByIdAndUpdate(id, { parcelSent: true });
    const receiver = getUsers(buyerId);
    if (receiver && receiver.socketId) {
        io.to(receiver.socketId).emit('refetchBuying');
    }
    res.status(201).json({ message: 'Purchase Confirmed' });

});

export const confirmParcel = tryCatch(async (req, res) => {
    const { id, sellerId } = req.body;
    const listing = await TempDisc.findOne({ _id: id });

    if (listing.parcelReceived === true) {
        throw new AppError('already confirmed purchased', 'already confirmed purchased', 404);
    }

    // Update isSold field to true
    await TempDisc.findByIdAndUpdate(id, { parcelReceived: true });
    const receiver = getUsers(sellerId);
    console.log(receiver);
    if (receiver && receiver.socketId) {
        // Emit 'refetchBuying' event to the specific receiver's socketId
        io.to(receiver.socketId).emit('refetchSelling');
    }
    res.status(201).json({ message: 'Parcel Confirmed' });
});