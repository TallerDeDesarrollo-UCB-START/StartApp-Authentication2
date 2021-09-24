module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define(
    "autenticaciones",
    {
      id_autenticacion: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      email: {
        type: Sequelize.STRING,
      },
      password: {
        type: Sequelize.STRING,
      },
    },
    { timestamps: false }
  );
  return User;
};
