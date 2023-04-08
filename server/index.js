import cookieParser from 'cookie-parser'
import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import helmet from 'helmet'
import mongoose from "mongoose"
import { corsOptions } from './config/corsOptions.js'
import { errorHandler } from './middlewares/errorHandler.js'
import discRoutes from './routes/discRoutes.js'
import token from './routes/tokenRoutes.js'
import userRoutes from './routes/userRoutes.js'

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
app.use('/disc', discRoutes)

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