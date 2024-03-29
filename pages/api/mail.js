// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const mail = require('@sendgrid/mail');
mail.setApiKey("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");

export default function handler(req, res) {
    const body = JSON.parse(req.body);
    const msg = {
        to: 'medexWebsiteContact@gmail.com', // Change to your recipient
        from: 'medexWebsiteContact@gmail.com', // Change to your verified sender
        subject: `message from website`,
        text: `from: ${body.message}`,
        html: `from <strong>${body.email}</strong>, <hr> first name: ${body.name} <hr> last name: ${body.lname} <hr> ${body.message}`,
    }

    mail
        .send(msg)
        .then((response) => {
            console.log(response[0].statusCode)
            console.log(response[0].headers)
            console.log('sent email')
        })
        .catch((error) => {
            console.error(error)
        })

}
