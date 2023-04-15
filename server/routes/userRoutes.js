const router = express.Router();
import express from 'express';
import { addToFollowing, changePicture, checkEmail, editUser, getUserFollowing, removeFromFollowing, signinController, signupController, userInfoById } from '../controllers/userController.js';

router.get('/:userId', userInfoById);
router.post('/editUser/:userId', editUser);
router.post('/profilePic', changePicture);
router.post('/login', signinController);
router.post('/checkEmail', checkEmail);
router.post('/register', signupController);
router.get('/following/:userId', getUserFollowing);
router.post('/following', addToFollowing);
router.delete('/following/:userId/:discId', removeFromFollowing);

export default router;