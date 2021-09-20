module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("autenticaciones", {
    email: {
      type: Sequelize.STRING
    },
    password: {
      type: Sequelize.STRING
    }
  });
  return User;
};