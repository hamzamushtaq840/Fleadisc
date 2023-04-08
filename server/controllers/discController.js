import { Disc } from '../models/disc.js';
import { tryCatch } from '../utils/tryCatch.js';

export const postDisc = tryCatch(async (req, res) => {
    const { seller, pictureURL, quantity, discName, brand, range, condition, plastic, grams, named, dyed, blank, glow, collectible, firstRun, priceType, startingPrice, minPrice, endDay, endTime } = req.body;
    console.log(req.body);
    const disc = await Disc.create({
        seller,
        pictureURL,
        quantity,
        discName,
        brand,
        range,
        condition,
        plastic,
        grams,
        named,
        dyed,
        blank,
        glow,
        collectible,
        firstRun,
        priceType,
        startingPrice,
        minPrice,
        endDay,
        endTime,
    });

    res.status(201).json({ message: 'Disc created successfully', disc });
});


