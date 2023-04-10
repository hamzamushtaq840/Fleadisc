const router = express.Router();
import express from 'express';
import { buyDisc, getAllDiscsWithSellers, getDiscBids, postBid, postDisc } from '../controllers/discController.js';

router.post('/', postDisc);
router.get('/', getAllDiscsWithSellers);
router.post('/bid', postBid);
router.post('/buy', buyDisc);
router.get('/getBids/:discId/bids', getDiscBids);

export default router;