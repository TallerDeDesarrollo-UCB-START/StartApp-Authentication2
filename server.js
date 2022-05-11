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
