// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
import sgMail from '@sendgrid/mail'


const sendMail = ( subject, text, html) => {

    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const msg = {
    to: 'bestrada.web@gmail.com',
    from: 'bestrada.web@gmail.com', // Use the email address or domain you verified above
    subject: subject,
    text: text,
    html: html,
};

//ES8
(async () => {
    try {
        await sgMail.send(msg);
        console.log('Email sent');
    } catch (error) {
        console.error(error);

        if (error.response) {
            console.error(error.response.body)
        }
    }
})();

}

export default sendMail