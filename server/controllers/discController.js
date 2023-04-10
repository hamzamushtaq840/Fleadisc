import { Disc } from '../models/disc.js';
import { tryCatch } from '../utils/tryCatch.js';
import AppError from '../utils/AppError.js';
import { groupBy } from 'lodash-es';
import CurrencyConverter from 'currency-converter-lt';
import { io } from '../index.js';
import { BoughtDisc } from '../models/boughtDisc.js';

export const postDisc = tryCatch(async (req, res) => {
    const { seller, pictureURL, quantity, discName, brand, range, condition, plastic, grams, named, dyed, blank, glow, collectible, firstRun, priceType, startingPrice, minPrice, endDay, endTime } = req.body;
    console.log(req.body);
    const disc = await Disc.create({ seller, pictureURL, quantity, discName, brand, range, condition, plastic, grams, named, dyed, blank, glow, collectible, firstRun, priceType, startingPrice, minPrice, endDay, endTime, });
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
    io.emit("bid_added", { listingId: disc._id, bid });
    res.status(201).json({ message: 'Bid added successfully' });
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
                    startingPrice: convertedStartingPrice

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
                startingPrice: convertedStartingPrice,
                minPrice: convertedMinPrice,
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
            bidPrice: convertedPrice,
        };
    }));

    res.status(200).json(convertedBids);
});

export const buyDisc = tryCatch(async (req, res) => {
    const { listingId, userId, time } = req.body;
    const disc = await Disc.findOneAndRemove({ _id: listingId });
    if (!disc) {
        return res.status(404).json({ error: "Disc not found" });
    }
    const boughtDisc = await BoughtDisc.create({
        buyer: userId,
        disc: {
            ...disc.toObject(),
            seller: disc.seller._id,
        },
        time,
    });
    io.emit("bid_added");
    res.status(201).json({ success: true, data: boughtDisc });
});