const {
  validatePasswordLength,
  validatePasswordQuantityOfNumbers,
} = require("./verifyPassword");
const { validateEmail } = require("./verifyEmail");
const db = require("../models");

checkDuplicateEmail = (req, res, next) => {
  if (!validateEmail(req.body.email)) {
    res.status(400).send({
      message: "The email doesn't have the correct format",
    });
    return;
  }
  if (!validatePasswordLength(req.body.password)) {
    res.status(400).send({
      message: "The password must have more than 5 characters",
    });
    return;
  }
  if (!validatePasswordQuantityOfNumbers(req.body.password)) {
    res.status(400).send({
      message: "The password must at least one number",
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
          message: "Failed! Email is already in use!",
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
