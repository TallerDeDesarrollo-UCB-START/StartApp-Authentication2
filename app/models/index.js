const config = require("../config/db.config.js");
const db = {};

db.Sequelize = require("sequelize");
db.sequelize = new db.Sequelize(config.DB, config.USER, config.PASSWORD, {
  host: config.HOST,
  dialect: config.dialect,
  dialectOptions: config.dialectOptions,
  operatorsAliases: config.operatorsAliases,
  pool: config.pool,
});

db.user = require("../models/user.model.js")(db.sequelize, db.Sequelize);

module.exports = db;
