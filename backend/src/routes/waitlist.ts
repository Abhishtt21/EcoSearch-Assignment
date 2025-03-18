import express from 'express';
import { Request, Response } from 'express';
import {sendEmail} from '../services/emailService';

const router = express.Router();

const message = `
    <h1>Thank you for joining the waitlist!</h1>
    <p>You will be the first to know when we launch.</p>`


router.post('/waitlist',async(req: Request, res: Response) => {
    try{
        const {email} = req.body;
        await sendEmail({email,subject:'Waitlist Confirmation',html:message});

        res.status(200).json({message:'Email sent successfully'});
    }

    catch(err){
        console.log(err);
        res.status(500).json({message:'Internal server error'});
    }
})

export default router;