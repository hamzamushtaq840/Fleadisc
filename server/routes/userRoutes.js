const router = express.Router();
import express from 'express';
import { addToFollowing, checkEmail, getUserFollowing, removeFromFollowing, signinController, signupController } from '../controllers/userController.js';

router.post('/login', signinController);
router.post('/checkEmail', checkEmail);
router.post('/register', signupController);
router.get('/following/:userId', getUserFollowing);
router.post('/following', addToFollowing);
router.delete('/following/:userId/:discId', removeFromFollowing);

export default router;