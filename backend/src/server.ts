import express from 'express';
import { Request, Response } from 'express';
import cors from 'cors';
import {PORT} from './config';
import waitlistRouter from './routes/waitlist';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/api',waitlistRouter);

app.listen(PORT,() => {
    console.log(`Server is running on port ${PORT}`);
})