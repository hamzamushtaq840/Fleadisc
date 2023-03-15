import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import axios from "axios"
import { User } from '../models/user.js'
import { tryCatch } from '../utils/tryCatch.js';
import AppError from '../utils/AppError.js';
import { RefreshToken } from "../models/refreshToken.js";

export const signinController = tryCatch(async (req, res) => {

    if (req.body.googleAccessToken) {
        const userInfo = await axios.get(
            'https://www.googleapis.com/oauth2/v3/userinfo',
            { headers: { Authorization: `Bearer ${req.body.googleAccessToken}` } },
        );
        const user = await User.findOne({ email: userInfo.data.email });
        if (!user) { throw new AppError('account_not_found', 'Email not found, please create an account', 401) }
        const accessToken = jwt.sign(
            { UserInfo: { userId: user._id.toString(), roles: user.roles } },
            process.env.JWT_SECRET,
            {
                //5 to 15 min in production
                expiresIn: '15min'
            }
        );
        const refreshToken = jwt.sign(
            { userId: user._id.toString() },
            process.env.JWT_REFRESH,
            {
                expiresIn: '1d'
            }
        );
        // save refresh token to database
        await RefreshToken.create({ userId: user._id, token: refreshToken, roles: user.roles });

        //maxAge is 24 hours
        res.cookie('refreshToken', refreshToken, { sameSite: 'None', httpOnly: false, secure: false, maxAge: 24 * 60 * 60 * 1000 })
        res.status(200).json({ message: 'Login successful', accessToken: accessToken, userId: user._id.toString(), email: user.email, profilePicture: user.profilePicture, roles: user.roles });
    }
    else {
        const { email, password } = req.body;

        // check if user exists
        const user = await User.findOne({ email });
        if (!user) { throw new AppError('account_not_found', 'Email not found, please create an account', 401) }
        if (user && user.password === undefined) { throw new AppError('gmail_account', 'Sign in with gmail', 401) }

        // match password
        const isPasswordOk = await bcrypt.compare(password, user.password);
        if (!isPasswordOk) { throw new AppError('account_not_exist', 'Email not found', 401) }
        const accessToken = jwt.sign(
            { UserInfo: { userId: user._id.toString(), roles: user.roles } },
            process.env.JWT_SECRET,
            {
                //5 to 15 min in production
                expiresIn: '1H'
            }
        );
        const refreshToken = jwt.sign(
            { userId: user._id.toString() },
            process.env.JWT_REFRESH,
            {
                expiresIn: '1d'
            }
        );
        // save refresh token to database
        await RefreshToken.create({ userId: user._id, token: refreshToken, roles: user.roles });

        //maxAge is 24 hours
        res.cookie('refreshToken', refreshToken, { domain: 'localhost', path: '/', sameSite: 'Lax', httpOnly: true, secure: false, maxAge: 24 * 60 * 60 * 1000 })
        // res.cookie('refreshToken', refreshToken, {
        //     sameSite: 'lax',
        //     httpOnly: true,
        //     secure: false,
        //     maxAge: 24 * 60 * 60 * 1000
        // });

        res.status(200).json({ message: 'Login successful', accessToken: accessToken, userId: user._id.toString(), email: user.email, profilePicture: user.profilePicture, roles: user.roles });
    }
})

export const signupController = tryCatch(async (req, res) => {
    if (req.body.googleAccessToken) {
        const userInfo = await axios.get(
            'https://www.googleapis.com/oauth2/v3/userinfo',
            { headers: { Authorization: `Bearer ${req.body.googleAccessToken}` } },
        );

        const user = await User.findOne({ email: userInfo.data.email });
        if (user) {
            throw new AppError('account_exist', 'Email already exists', 401)
        }
        await User.create({ name: userInfo.data.name, email: userInfo.data.email, profilePicture: userInfo.data.picture })
        res.status(201).json({ message: 'User registered successfully' });
    }
    else {
        const { email, password } = req.body;
        // check if email already exists
        const user = await User.findOne({ email });
        if (user) {
            throw new AppError('account_exist', 'Email already exists', 401)
        }
        const hashedPassword = await bcrypt.hash(password, 12)
        // create new user
        await User.create({ email, password: hashedPassword });
        res.status(201).json({ message: 'User registered successfully' });
    }
})