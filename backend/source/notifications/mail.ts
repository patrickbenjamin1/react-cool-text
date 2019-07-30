import nodemailer from 'nodemailer';

import * as config from '../config';

const transport = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    service: 'gmail',
    auth: {
        user: config.emailCreds.sender,
        pass: config.emailCreds.password
    }
})

const sendMail = async (recipient: string, subject: string, template: string) => {
    try {
        const mail = {
            from: `${config.nameHumanised}<${config.emailCreds.sender}>`,
            to: recipient,
            subject: subject,
            html: template
        }
        await transport.sendMail(mail);
    }
    catch (error) {
        console.error(error);
    }
}