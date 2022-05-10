var nodemailer = require("nodemailer");
var smtpTransport = require('nodemailer-smtp-transport');
require("dotenv").config();

exports.transporter = nodemailer.createTransport({
  secure:true,
  port:process.env.EMAIL_PORT,
  service: process.env.EMAIL_SERVICE,
  auth: {
    user: process.env.EMAIL_AUTH_USER,
    pass: process.env.EMAIL_AUTH_PASS,
  },
  debug: true,
  logger: true
});

exports.mailOptions = {
  from: "ucb.start.project@gmail.com",
  subject: "Bienvenid@ a la comunidad de START Americas Together!",
};
