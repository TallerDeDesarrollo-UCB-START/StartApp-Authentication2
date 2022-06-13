var nodemailer = require("nodemailer");
var smtpTransport = require('nodemailer-smtp-transport');
require("dotenv").config();

exports.transporter = nodemailer.createTransport({
  host: process.env.EMAIL_SERVICE_HOST, // hostname
  port:process.env.EMAIL_PORT,
  secureConnection: false,
  tls: {
     ciphers:'SSLv3'
  },
  auth: {
    user: process.env.EMAIL_AUTH_USER,
    pass: process.env.EMAIL_AUTH_PASS,
  },

  debug: true,
  logger: true
});

exports.mailOptions = {
  from: "StartAmericasTogheter2022@hotmail.com",
  subject: "Bienvenid@ a la comunidad de START Americas Together!",
};
