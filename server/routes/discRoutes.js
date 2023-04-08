const router = express.Router();
import express from 'express';
import { postDisc } from '../controllers/discController.js';

router.post('/', postDisc);

export default router;