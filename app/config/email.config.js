var nodemailer = require("nodemailer");

exports.transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "ucb.start.project@gmail.com",
    pass: "S0m0s.Agentes.De.Cambi0",
  },
});

exports.mailOptions = {
  from: "ucb.start.project@gmail.com",
  subject: "Bienvenid@ a la comunidad de START Americas Together!",
};
