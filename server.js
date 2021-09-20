const express = require('express');
const bodyParser = require("body-parser");
const cors = require("cors");
 
const app = express();

// var corsOptions = {
// };
// app.use(cors(corsOptions));

app.use(cors());

const db = require("./app/models");


app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get("/", (req, res) => {
  res.json({ message: "Welcome to start application." });
});

// routes
require('./app/routes/auth.routes')(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

//Descomentar para crear DATABASE cuando no la tienes
// db.sequelize.sync({force: true}).then(() => {
//   console.log('Drop and Resync Db');
//   initial();
// });

// function initial() {
// }