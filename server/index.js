import express from 'express'
import mongoose from "mongoose"
import dotenv from 'dotenv'
import cors from 'cors'
import { corsOptions } from './config/corsOptions.js'
import { errorHandler } from './middlewares/errorHandler.js'
import verifyJWT from './middlewares/verifyJWT.js'
import userRoutes from './routes/userRoutes.js'
import helmet from 'helmet'
import token from './routes/tokenRoutes.js'
import listing from './routes/listingRoutes.js'
import cookieParser from 'cookie-parser'

const app = express()

// const corsOptions2 = {
//     origin: 'http://localhost:5173',
//     credentials: true,            //access-control-allow-credentials:true
//     // exposedHeaders: ['set-cookie'],
//     optionSuccessStatus: 200
// }

dotenv.config({ path: "./.env" })
mongoose.set('strictQuery', true);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(helmet());
app.use(cookieParser())
app.use(cors(corsOptions))

app.use('/user', userRoutes)
app.use('/token', token)
app.use('/listing', listing)

const PORT = process.env.PORT || 5000

mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Database Connected');
        app.listen(PORT, () => { console.log(`Server started on port ${PORT}`); })
    })
    .catch((e) => {
        console.log(e.code, '=>', e.message);
    })

app.use(errorHandler)


// app.get('/setcookie', (req, res) => {
//     res.cookie(`Cookie token name`, `encrypted cookie string Value`, {
//         maxAge: 5000,
//         // expires works the same as the maxAge
//         expires: new Date('01 12 2021'),
//         secure: true,
//         httpOnly: true,
//         sameSite: 'lax'
//     });
//     res.send('Cookie have been saved successfully');
// });