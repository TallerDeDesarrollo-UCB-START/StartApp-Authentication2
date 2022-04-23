module.exports = {
  HOST: "ec2-44-194-4-127.compute-1.amazonaws.com",
  PORT: 5432,
  USER: "pvsifhkgosgqog",
  PASSWORD: "afddd3387a8c58046f43d51b8a7bb0a110a5a940e6ad45afe210b4576ac4c9da",
  DB: "db389gkd6ou7j1",
  dialect: "postgres",
  operatorsAliases: 0,
  ssl: true,
  dialectOptions: {
    ssl: {
      require: true, // This will help you. But you will see nwe error
      rejectUnauthorized: false, // This line will fix new error
    },
  },
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
