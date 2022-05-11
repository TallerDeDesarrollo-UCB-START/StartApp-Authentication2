const db = require("../models");
const config = require("../config/auth.config");
var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
const { mailOptions, transporter } = require("../config/email.config");
require("dotenv").config();

exports.signup = (req, res) => {
  if (req.body.tipo === "normal") {
    db.user
      .create({
        email: req.body.email,
        idGoogle: "No aplica",
        password: bcrypt.hashSync(req.body.password, 8),
        tipo: req.body.tipo,
        validado: false,
      })
      .then((user) => {
        mailOptions.to = req.body.email;
        console.log(req.body.email);
        mailOptions.text = `Valida tu cuenta ingresando al siguiente enlace: 
        https://startamericastogether.web.app/validate/${user.id_autenticacion}`;
        transporter.sendMail(mailOptions,
          function (error, info) 
          {
              if (error) console.log( error );
              else console.log(response);
          });
        console.log(process.env.FRONT_VALIDATE_URL);
        res.send({
          message: `${req.body.email} was registered successfully!`,
          id_autenticacion: user.id_autenticacion,
        });
      })
      .catch((err) => {
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
        validado: true,
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

exports.recoverAccount = (req, res) => {
  db.user
    .findOne({
      where: {
        email: req.body.email,
      },
    })
    .then((user) => {
      if (user.tipo === "google") throw new Error("google");

      return user;
    })
    .then((user) => {
      mailOptions.to = req.body.email;
      mailOptions.text = `Reestablece tu contraseña a través del siguiente enlace: 
      https://startamericastogether.web.app/recover/${Buffer.from(
        user.id_autenticacion
      ).toString("base64")}`;
      transporter.sendMail(mailOptions, function (error, info) {});
      console.log(process.env.FRONT_VALIDATE_URL);
      res.send({
        message: `${req.body.email} message sended!`,
        id_autenticacion: user.id_autenticacion,
      });
    })
    .catch((err) => {
      if (err.message === "google")
        res.status(401).send({
          message: "Solo de editar las cuentas creadas de manera manual",
        });
      else res.status(401).send({ message: "La cuenta no existe" });
    });
};

exports.validateAccount = (req, res) => {
  db.user
    .findOne({
      where: {
        id_autenticacion: req.params.id,
      },
    })
    .then((user) => {
      user.update({
        validado: true,
      });
      return user;
    })
    .then((userEdited) => {
      res.status(200).send({
        message: `User with the email '${userEdited.email}' was validated.`,
        validado: userEdited.validado,
      });
    })
    .catch((err) => {
      res.status(404).send({
        message: `Error.`,
      });
    });
};

exports.updatePassword = (req, res) => {
  db.user
    .findOne({
      where: {
        id_autenticacion: Buffer.from(req.params.id, "base64").toString(
          "ascii"
        ),
      },
    })
    .then((user) => {
      user.update({
        password: bcrypt.hashSync(req.body.password, 8),
      });
      return user;
    })
    .then((userEdited) => {
      res.status(200).send({
        message: `User with the email '${userEdited.email}' was updated.`,
      });
    })
    .catch((err) => {
      res.status(401).send({
        message: err.message,
      });
    });
};

exports.signin = (req, res) => {
  if (req.body.tipo === "google") {
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

        if (req.body.idGoogle !== user.idGoogle) {
          return res.status(401).send({
            accessToken: null,
            message: "Invalid id!",
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
  }
  if (req.body.tipo === "normal") {
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
        if (user.validado === false) {
          return res.status(405).send({
            accessToken: null,
            message: `User with the email '${req.body.email}' was not validated.`,
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
  }
};