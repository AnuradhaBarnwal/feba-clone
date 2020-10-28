require('dotenv').config
const nodemailer = require('nodemailer')
// const pool =require('../database/db')
// let transport = nodemailer.createTransport(options[, defaults])
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









    // sendMail: () => {

    //     let transport = nodemailer.createTransport({
    //         host: 'smtp.gmail.com',
    //         port: 587,
    //         auth: {
    //             user: process.env.DB_EMAIL,
    //             pass: process.env.DB_EMAIL_PASSWORD
    //         },

    //         message = {
    //             from: 'shakuntalabarnwal1970@gmail.com', // Sender address
    //             to: 'anu.barnwal24@email.com',         // List of recipients
    //             subject: 'Design Your Model S | Tesla', // Subject line
    //             text: 'Have the most fun you can in a car. Get your Tesla today!' // Plain text body
    //         },
    //     })
    //         transport.sendMail(message, function (err, info) {
    //             if (err) {
    //                 console.log(err)
    //             } else {
    //                 console.log(info);
    //             }
    //         })
    // }













    //     let transporter = nodemailer.createTransport({
    //         host: "smtp.gmail.com",
    //         port: 587,
    //         secure: false, // true for 465, false for other ports
    //         auth: {
    //         user: process.env.DB_EMAIL,
    //         pass: process.env.DB_EMAIL_PASSWORD
    //         },
    //         tls: {
    //           rejectUnauthorized: false
    //         }
    //       })

    //       let receiverEmail = email

    //       let mailOptions = {
    //         to: receiverEmail,
    //         from: process.env.DB_EMAIL,
    //         subject: "<zenith>Password change successful",
    //         text: "Your password has been changed successfully"
    //       }

    //       transporter.sendMail(mailOptions, function(error, response){
    //         if(error){
    //             console.log(error)
    //             callback(error)
    //         }
    //         else{
    //             //console.log("Mail sent: ", response)
    //             callback(null, response)
    //         }
    //       })

    // }

