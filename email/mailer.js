require('dotenv').config
const nodemailer = require('nodemailer')
// const pool =require('../database/db')

const mailer = (name, email) => {

  var name = name
  var email = email
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.DB_EMAIL,
      pass: process.env.DB_EMAIL_PASSWORD
    }
  });

  var mailOptions = {
    from: process.env.DB_EMAIL,
    to: email,
    subject: 'Birthday WIshes',
    text: `Happy Birthday ${name}`
  };

  transporter.sendMail(mailOptions, function (error, info) {
    console.log(mailOptions.from)
    if (error) {
      console.log("Email could not be sent", error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}

module.exports = mailer







