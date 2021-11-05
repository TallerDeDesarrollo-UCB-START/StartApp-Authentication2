var nodemailer = require("nodemailer");

exports.transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "ucb.start.project@gmail.com",
    pass: "SomosAgentesDeCambio",
  },
});

exports.mailOptions = {
  from: "ucb.start.project@gmail.com",
  subject: "Bienvenid@ a la cominidad de Start Americas Together!",
};
