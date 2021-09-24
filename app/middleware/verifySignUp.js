const { IsAValidPassword } = require("./verifyPassword");

const db = require("../models");

checkDuplicateEmail = (req, res, next) => {
  if (!IsAValidPassword(req.body.password)) {
    res.status(400).send({
      message: "The password must have more than 5 characters",
    });
    return;
  } // Email
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
