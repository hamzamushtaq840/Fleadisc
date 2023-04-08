import { Disc } from '../models/disc.js';
import { tryCatch } from '../utils/tryCatch.js';
import AppError from '../utils/AppError.js';
import { groupBy } from 'lodash-es';

export const postDisc = tryCatch(async (req, res) => {
    const { seller, pictureURL, quantity, discName, brand, range, condition, plastic, grams, named, dyed, blank, glow, collectible, firstRun, priceType, startingPrice, minPrice, endDay, endTime } = req.body;
    console.log(req.body);
    const disc = await Disc.create({ seller, pictureURL, quantity, discName, brand, range, condition, plastic, grams, named, dyed, blank, glow, collectible, firstRun, priceType, startingPrice, minPrice, endDay, endTime, });
    res.status(201).json({ message: 'Disc created successfully', disc });
});

export const getAllDiscsWithSellers = tryCatch(async (req, res) => {
    const discs = await Disc.find()
        .populate('seller')
        .populate('bids.user')
        .exec();

    if (discs.length === 0) {
        throw new AppError('no_discs_found', 'No discs found', 404);
    }

    const discsGroupedBySeller = groupBy(discs, (disc) => disc.seller._id.toString());

    const result = Object.keys(discsGroupedBySeller).map((sellerId) => ({
        seller: discsGroupedBySeller[sellerId][0].seller,
        discs: discsGroupedBySeller[sellerId],
    }));

    res.status(200).json(result);
});
