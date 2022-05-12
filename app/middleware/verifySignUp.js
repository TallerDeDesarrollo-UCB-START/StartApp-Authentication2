const {
  validatePasswordLength,
  validatePasswordQuantityOfNumbers,
} = require("./verifyPassword");
const { validateEmail } = require("./verifyEmail");
const db = require("../models");

checkDuplicateEmail = (req, res, next) => {
  if (!validateEmail(req.body.email)) {
    res.status(400).send({
      message: "El email no tiene el correcto formato.",
    });
    return;
  }
  if (
    req.body.tipo === "normal" &&
    !validatePasswordLength(req.body.password)
  ) {
    res.status(400).send({
      message: "La contraseña deberia tener mas de 5 caracteres.",
    });
    return;
  }
  if (
    req.body.tipo === "normal" &&
    !validatePasswordQuantityOfNumbers(req.body.password)
  ) {
    res.status(400).send({
      message: "La contraseña deberia tener al menos un numero.",
    });
    return;
  }

  db.user
    .findOne({
      where: {
        email: req.body.email,
      },
    })
    .then((user) => {
      if (user) {
        res.status(400).send({
          message: "Falla! Email ya esta en uso!",
        });
        return;
      }
      next();
    });
};
const verifySignUp = {
  checkDuplicateEmail: checkDuplicateEmail,
};

module.exports = verifySignUp;
