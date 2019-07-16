const express = require('express')
const nodemailer = require("nodemailer");
const path = require('path');
require('dotenv').config()
const app = express()
app.use(express.json());

app.use(express.static(`${__dirname}/../build`))
const { SERVER_PORT, SMTP_CONNECTION} = process.env

app.post('/mailer/send', async (req, res) => {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
        return res.status(401).send({error: 401, message: 'Invalid User Input: Fields cannot be empty'});
    }
    let transporter = nodemailer.createTransport(SMTP_CONNECTION)

    let responseMessage = await transporter.sendMail({
        from: 'tstrat.pro@gmail.com', // sender address
        to: "t.strat7@gmail.com", // list of receivers
        subject: `New Message ${name}`, // Subject line
        text: `From - ${name}`, // plain text body
        html: `Message sent from tstrat.pro: sent <b>${new Date().toLocaleString()}</b><hr/><h2>${name}</h2><h2>${email}</h2><p>${message}</p>` // html body
      });

    res.status(200).send(responseMessage);
})

app.listen(SERVER_PORT || 4000, () => console.log(`Server started, port: ${SERVER_PORT}
Don't spook the monkey 🙈`))
