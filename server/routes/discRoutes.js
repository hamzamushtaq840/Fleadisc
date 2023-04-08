const router = express.Router();
import express from 'express';
import { getAllDiscsWithSellers, postDisc } from '../controllers/discController.js';

router.post('/', postDisc);
router.get('/', getAllDiscsWithSellers);

export default router;