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

  // sign in in the app
  app.post("/api/auth/signin", controller.signin);
};
