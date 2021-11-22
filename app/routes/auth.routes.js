const { verifySignUp } = require("../middleware");
const controller = require("../controllers/auth.controller");

module.exports = function (app) {
  // initial get
  app.get("/", (req, res) => {
    res.json({ message: "Welcome to start application." });
  });

  // sign up in the app
  app.post(
    "/api/auth/signup",
    [verifySignUp.checkDuplicateEmail],
    controller.signup
  );

  // sign up in the app
  app.get("/api/validate/:id", controller.validateAccount);

  // sign in in the app
  app.post("/api/auth/signin", controller.signin);

  // recover password
  app.post("/api/recover", controller.recoverAccount);
  //update password
  app.put("/api/recover/:id", controller.updatePassword);
};
