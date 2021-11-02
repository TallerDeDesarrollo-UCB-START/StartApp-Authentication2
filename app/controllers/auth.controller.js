const db = require("../models");
const config = require("../config/auth.config");

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.signup = (req, res) => {
  // Save user to Database
  if (req.body.tipo === "normal") {
    db.user
      .create({
        email: req.body.email,
        idGoogle: "No aplica",
        password: bcrypt.hashSync(req.body.password, 8),
        tipo: req.body.tipo,
      })
      .then((user) => {
        res.send({
          message: `${req.body.email} was registered successfully!`,
          id_autenticacion: user.id_autenticacion,
        });
      })
      .catch((err) => {
        console.log("entra");
        res.status(500).send({ message: err.message });
      });
  }
  if (req.body.tipo === "google") {
    db.user
      .create({
        email: req.body.email,
        tipo: req.body.tipo,
        password: "No aplica",
        idGoogle: req.body.idGoogle,
      })
      .then((user) => {
        res.send({
          message: `${req.body.email} was registered, using google, successfully!`,
          id_autenticacion: user.id_autenticacion,
        });
      })
      .catch((err) => {
        res.status(500).send({ message: err.message });
      });
  }
};

exports.signin = (req, res) => {
  db.user
    .findOne({
      where: {
        email: req.body.email,
      },
    })
    .then((user) => {
      if (!user) {
        return res.status(404).send({
          accessToken: null,
          message: `User with the email '${req.body.email}' was not found.`,
        });
      }

      var passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );

      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: "Invalid Password!",
        });
      }
      var token = jwt.sign({ id: user.id_autenticacion }, config.secret, {
        expiresIn: 86400, // 24 hours
      });

      res.status(200).send({
        id: user.id_autenticacion,
        email: user.email,
        accessToken: token,
      });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};
