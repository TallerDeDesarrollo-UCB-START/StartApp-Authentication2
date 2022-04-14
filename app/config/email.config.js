var nodemailer = require("nodemailer");
var smtpTransport = require('nodemailer-smtp-transport');

exports.transporter = nodemailer.createTransport({
  secure:true,
  port:465,
  service: "gmail",
  auth: {
    user: "greatfrogman1@gmail.com",
    pass: "Seal4ever",
  },
  debug: true,
  logger: true
});

exports.mailOptions = {
  from: "ucb.start.project@gmail.com",
  subject: "Bienvenid@ a la comunidad de START Americas Together!",
};
