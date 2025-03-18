import nodemailer from 'nodemailer';
import { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } from '../config';

const transporter = nodemailer.createTransport({
    service: SMTP_HOST,
    auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
    },
});

export const sendEmail = async (userData :{
    email: string,
    subject: string,
    html?: string,
    message?: string,
}) => {
    try{
        const info = await transporter.sendMail({
            from: SMTP_USER,
            to: userData.email,
            subject: userData.subject,
            html: userData.html,
            text: userData.message,
        })

        console.log(`Message sent: ${info.messageId}`);
    }
    catch(err){
        console.log(err);
    }
}
