import { Disc } from '../models/disc.js';
import { tryCatch } from '../utils/tryCatch.js';
import AppError from '../utils/AppError.js';
import { groupBy } from 'lodash-es';
import CurrencyConverter from 'currency-converter-lt';
import { io } from '../index.js';
import { BoughtDisc } from '../models/boughtDisc.js';
import moment from 'moment'
import { FinishedListing } from '../models/finishedListing.js';
import { User } from '../models/user.js';

export const postDisc = tryCatch(async (req, res) => {
    const { seller, pictureURL, quantity, discName, brand, range, condition, plastic, grams, named, dyed, blank, glow, collectible, firstRun, priceType, startingPrice, minPrice, endDay, endTime } = req.body;
    const disc = await Disc.create({ seller, pictureURL, quantity, discName, brand, range, condition, plastic, grams, named, dyed, blank, glow, collectible, firstRun, priceType, startingPrice, minPrice, endDay, endTime, });
    io.emit("bid_added");
    res.status(201).json({ message: 'Disc created successfully', disc });
});

export const postBid = tryCatch(async (req, res) => {
    const { listingId, userId, price, time, fromCurrency, toCurrency } = req.body;

    // Convert bid price to the requested currency
    const currencyConverter = new CurrencyConverter({
        from: fromCurrency,
        to: toCurrency,
        amount: Number(price),
    });
    const convertedPrice = await currencyConverter.convert();

    const disc = await Disc.findById(listingId);
    if (!disc) {
        throw new AppError('invalid_id', 'Invalid Listing ID', 404);
    }
    const bid = {
        user: userId,
        bidPrice: convertedPrice,
        createdAt: time
    };
    disc.bids.push(bid);
    await disc.save();
    io.emit("bid_added");
    res.status(201).json({ message: 'Bid added successfully' });
});

export const getAllDiscsWithSellers = tryCatch(async (req, res) => {
    const requestedCurrency = req.query.userCurrency;
    const discs = await Disc.find({ isActive: true })
        .populate('seller')
        .populate('bids.user')
        .exec();

    if (discs.length === 0) {
        return res.status(200).json([]);
    }

    const discsGroupedBySeller = groupBy(discs, (disc) =>
        disc.seller._id.toString()
    );

    const result = await Promise.all(Object.keys(discsGroupedBySeller).map(async (userId) => {
        const seller = discsGroupedBySeller[userId][0].seller;
        const discs = discsGroupedBySeller[userId];

        // convert prices of each disc to requested currency
        const convertedDiscs = await Promise.all(discs.map(async (disc) => {
            const sellerCurrency = seller.currency;
            const startingPrice = Number(disc.startingPrice);
            if (disc.minPrice === '') {

                const currencyConverter = new CurrencyConverter({
                    from: sellerCurrency,
                    to: requestedCurrency,
                    amount: startingPrice,
                });

                const convertedStartingPrice = await currencyConverter.convert();

                return {
                    ...disc.toObject(),
                    startingPrice: 10

                };
            }


            const minPrice = Number(disc.minPrice);

            const currencyConverter = new CurrencyConverter({
                from: sellerCurrency,
                to: requestedCurrency,
                amount: startingPrice,
            });
            const convertedStartingPrice = await currencyConverter.convert();
            const currencyConverter2 = new CurrencyConverter({
                from: sellerCurrency,
                to: requestedCurrency,
                amount: minPrice,
            });
            const convertedMinPrice = await currencyConverter2.convert();

            // console.log(disc);
            if (disc.bids.length > 0) {
                const highestBid = disc.bids.sort(
                    (a, b) => b.bidPrice - a.bidPrice
                )[0];
                const currencyConverter3 = new CurrencyConverter({
                    from: sellerCurrency,
                    to: requestedCurrency,
                    amount: highestBid.bidPrice,
                });
                const convertedHighestBid = await currencyConverter3.convert();

                return {
                    ...disc.toObject(),
                    startingPrice: 10,
                    minPrice: 10,
                    highestBid: {
                        user: highestBid.user,
                        bidPrice: 10,
                        createdAt: highestBid.createdAt,
                        _id: highestBid._id,
                    },
                };
            }

            return {
                ...disc.toObject(),
                startingPrice: 10,
                minPrice: 10,
            };
        }));
        return {
            seller,
            discs: convertedDiscs,
        };
    }));

    res.status(200).json(result);
});

export const getDiscBids = tryCatch(async (req, res) => {
    const { discId } = req.params;
    const { userCurrency } = req.query;

    const disc = await Disc.findById(discId).populate('seller').populate('bids.user').exec();

    if (!disc) {
        return res.status(404).json({ message: 'Disc not found' });
    }

    // convert prices of each bid to requested currency
    const convertedBids = await Promise.all(disc.bids.map(async (bid) => {
        const bidderCurrency = disc.seller.currency;
        const bidPrice = Number(bid.bidPrice)

        const currencyConverter = new CurrencyConverter({
            from: bidderCurrency,
            to: userCurrency,
            amount: bidPrice,
        });
        const convertedPrice = await currencyConverter.convert();

        return {
            ...bid.toObject(),
            bidPrice: 10,
        };
    }));

    res.status(200).json(convertedBids);
});

export const buyDisc = tryCatch(async (req, res) => {
    const { listingId, userId, time } = req.body;

    const disc = await Disc.findById(listingId);

    if (!disc) {
        return res.status(404).json({ error: "Disc not found" });
    }

    if (!disc.isActive) {
        return res.status(400).json({ error: "Disc has already been sold" });
    }

    const buyer = {
        user: userId,
        buyPrice: disc.startingPrice,
        createdAt: time,
    };

    disc.buyer.push(buyer);
    disc.isActive = false;
    await disc.save();

    io.emit("bid_added");

    res.status(200).json({ success: true, data: disc });
});

export const checkDiscTime = async () => {
    try {
        const discs = await Disc.find({});
        const currentDate = new Date();
        discs.forEach(async (disc) => {
            const discEndTime = new Date(`${disc.endDay} ${disc.endTime}`)
            if (discEndTime < currentDate) {
                if (disc.priceType === "auction" && disc.isActive) {
                    if (disc.bids.length > 0) {
                        if (disc.isActive === false) return;
                        console.log('bids length greater than zero');
                        const highestBid = disc.bids.sort(
                            (a, b) => b.bidPrice - a.bidPrice
                        )[0];
                        disc.winner = highestBid._id;
                        disc.isActive = false;
                        await disc.save();
                        console.log('disc saved');
                        io.emit("bid_added");

                    } else {
                        console.log('bids length is zero');
                        const finishedDisc = new FinishedListing(disc.toJSON());
                        await finishedDisc.save();
                        console.log('disc saved in finished');
                        await Disc.deleteOne({ _id: disc._id });
                        io.emit("bid_added");
                    }
                } else if (disc.priceType === "fixedPrice") {
                    if (disc.isActive) {
                        const finishedDisc = new FinishedListing(disc.toJSON());
                        await finishedDisc.save();
                        await Disc.deleteOne({ _id: disc._id });
                        io.emit("bid_added");
                    }
                }
            }
        });
    } catch (error) {
        console.log(error);
    }
}


export const getActiveDiscs = tryCatch(async (req, res) => {

    const { userId } = req.params;
    console.log(userId);

    // Retrieve all discs belonging to seller where isActive is true
    const discs = await Disc.find({ seller: userId, isActive: true });
    console.log(discs);
    res.send(discs);
})

export const getActiveDiscs2 = tryCatch(async (req, res) => {
    const { userId, userCurrency } = req.params;
    console.log(req.params);
    console.log('---------------');

    const discs = await Disc.find({ seller: userId, isActive: true })
        .populate('seller')
        .populate('bids.user')
        .exec();

    if (discs.length === 0) {
        return res.status(200).json([]);
    }

    const convertedDiscs = await Promise.all(discs.map(async (disc) => {
        const sellerCurrency = disc.seller.currency;
        const startingPrice = Number(disc.startingPrice);

        if (disc.minPrice === '') {
            const currencyConverter = new CurrencyConverter({
                from: sellerCurrency,
                to: userCurrency,
                amount: startingPrice,
            });
            const convertedStartingPrice = await currencyConverter.convert();

            return {
                ...disc.toObject(),
                startingPrice: 10,
            };
        }

        const minPrice = Number(disc.minPrice);

        const currencyConverter1 = new CurrencyConverter({
            from: sellerCurrency,
            to: userCurrency,
            amount: startingPrice,
        });
        const convertedStartingPrice = await currencyConverter1.convert();

        const currencyConverter2 = new CurrencyConverter({
            from: sellerCurrency,
            to: userCurrency,
            amount: minPrice,
        });
        const convertedMinPrice = await currencyConverter2.convert();

        if (disc.bids.length > 0) {
            const highestBid = disc.bids.sort((a, b) => b.bidPrice - a.bidPrice)[0];

            const currencyConverter3 = new CurrencyConverter({
                from: sellerCurrency,
                to: userCurrency,
                amount: highestBid.bidPrice,
            });
            const convertedHighestBid = await currencyConverter3.convert();
            console.log();

            return {
                ...disc.toObject(),
                startingPrice: 10,
                minPrice: 10,
                highestBid: {
                    user: highestBid.user,
                    bidPrice: 10,
                    createdAt: highestBid.createdAt,
                    _id: highestBid._id,
                },
            };
        }

        return {
            ...disc.toObject(),
            startingPrice: 10,
            minPrice: 10,
        };
    }));
    console.log(convertedDiscs);

    res.status(200).json(convertedDiscs);
});
export const getFinishedDiscs = tryCatch(async (req, res) => {

    const { userId } = req.params;
    console.log(userId);

    // Retrieve all discs belonging to seller where isActive is true
    const discs = await FinishedListing.find({ seller: userId });
    console.log(discs);
    res.send(discs);
})

export const getFinishedDiscs2 = tryCatch(async (req, res) => {

    const { userId, userCurrency } = req.params;
    console.log(req.params);

    const discs = await FinishedListing.find({ seller: userId, isActive: true })
        .populate('seller')
        .populate('bids.user')
        .exec();

    if (discs.length === 0) {
        return res.status(200).json([]);
    }
    if (discs.length === 0) {
        return res.status(200).json([]);
    }

    const convertedDiscs = await Promise.all(discs.map(async (disc) => {
        const sellerCurrency = disc.seller.currency;
        const startingPrice = Number(disc.startingPrice);

        if (disc.minPrice === '') {
            const currencyConverter = new CurrencyConverter({
                from: sellerCurrency,
                to: userCurrency,
                amount: startingPrice,
            });
            const convertedStartingPrice = await currencyConverter.convert();

            return {
                ...disc.toObject(),
                startingPrice: 10,
            };
        }

        const minPrice = Number(disc.minPrice);

        const currencyConverter1 = new CurrencyConverter({
            from: sellerCurrency,
            to: userCurrency,
            amount: startingPrice,
        });
        const convertedStartingPrice = await currencyConverter1.convert();

        const currencyConverter2 = new CurrencyConverter({
            from: sellerCurrency,
            to: userCurrency,
            amount: minPrice,
        });
        const convertedMinPrice = await currencyConverter2.convert();

        if (disc.bids.length > 0) {
            const highestBid = disc.bids.sort((a, b) => b.bidPrice - a.bidPrice)[0];

            const currencyConverter3 = new CurrencyConverter({
                from: sellerCurrency,
                to: userCurrency,
                amount: highestBid.bidPrice,
            });
            const convertedHighestBid = await currencyConverter3.convert();

            return {
                ...disc.toObject(),
                startingPrice: 10,
                minPrice: 10,
                highestBid: {
                    user: highestBid.user,
                    bidPrice: 10,
                    createdAt: highestBid.createdAt,
                    _id: highestBid._id,
                },
            };
        }

        return {
            ...disc.toObject(),
            startingPrice: 10,
            minPrice: 10,
        };
    }));

    res.status(200).json(convertedDiscs);
})