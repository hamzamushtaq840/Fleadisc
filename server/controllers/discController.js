import { Disc } from '../models/disc.js';
import { tryCatch } from '../utils/tryCatch.js';
import AppError from '../utils/AppError.js';
import { groupBy } from 'lodash-es';
import CurrencyConverter from 'currency-converter-lt';
import { io } from '../index.js';

export const postDisc = tryCatch(async (req, res) => {
    const { seller, pictureURL, quantity, discName, brand, range, condition, plastic, grams, named, dyed, blank, glow, collectible, firstRun, priceType, startingPrice, minPrice, endDay, endTime } = req.body;
    console.log(req.body);
    const disc = await Disc.create({ seller, pictureURL, quantity, discName, brand, range, condition, plastic, grams, named, dyed, blank, glow, collectible, firstRun, priceType, startingPrice, minPrice, endDay, endTime, });
    res.status(201).json({ message: 'Disc created successfully', disc });
});

export const getAllDiscsWithSellers = tryCatch(async (req, res) => {
    const requestedCurrency = req.query.userCurrency;
    const discs = await Disc.find()
        .populate('seller')
        .populate('bids.user')
        .exec();

    if (discs.length === 0) {
        return res.status(200).json([]);
    }

    const discsGroupedBySeller = groupBy(discs, (disc) =>
        disc.seller._id.toString()
    );

    const result = await Promise.all(Object.keys(discsGroupedBySeller).map(async (sellerId) => {
        const seller = discsGroupedBySeller[sellerId][0].seller;
        const discs = discsGroupedBySeller[sellerId];

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
                    startingPrice: Math.round(convertedStartingPrice)

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

            return {
                ...disc.toObject(),
                startingPrice: Math.round(convertedStartingPrice),
                minPrice: Math.round(convertedMinPrice),
            };
        }));
        return {
            seller,
            discs: convertedDiscs,
        };
    }));

    res.status(200).json(result);
});


export const postBid = tryCatch(async (req, res) => {
    const { listingId, userId, price, time } = req.body;
    const disc = await Disc.findById(listingId);
    if (!disc) {
        throw new AppError('invalid_id', 'Invalid Listing ID', 404);
    }
    const bid = {
        user: userId,
        bidPrice: price,
        createdAt: time
    };
    disc.bids.push(bid);
    await disc.save();
    io.emit("bid_added", { listingId: disc._id, bid });
    res.status(201).json({ message: 'Bid added successfully' });
});
