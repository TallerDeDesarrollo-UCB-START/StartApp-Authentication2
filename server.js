//dependencies
require("body-parser");
require("./app/models");
require("dotenv").config();

// server init
const { app, localhostPort } = require("./app/config/server.config");

// listen html requests
require("./app/routes/auth.routes")(app);

// launch the server
const PORT = process.env.PORT || localhostPort;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});




console.log("AAAAAAAAAAAAAAAAAAAAAAAAAA")
console.log("AAAAAAAAAAAAAAAAAAAAAAAAAA")
console.log("AAAAAAAAAAAAAAAAAAAAAAAAAA")
console.log("AAAAAAAAAAAAAAAAAAAAAAAAAA")

console.log(process.env.AUTH_SECRET)
console.log(process.env.DB_HOST)
console.log(process.env.DB_PORT)
console.log(process.env.DB_USER)
console.log(process.env.DB_PASSWORD)
console.log(process.env.DB_DIALECT)
console.log(process.env.EMAIL_PORT)
console.log(process.env.EMAIL_SERVICE)
console.log(process.env.EMAIL_AUTH_USER)
console.log(process.env.EMAIL_AUTH_PASS)
console.log(process.env.URL_CAMBIO)