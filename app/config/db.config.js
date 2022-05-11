module.exports = {
  HOST: "ec2-34-199-209-37.compute-1.amazonaws.com",
  PORT: 5432,
  USER: "abljdtipxtfxkr",
  PASSWORD: "78738cdd773fadbcd7add9091f3599a63aef0b9418b391b9d243d60af2c481b8",
  DB: "dbai369fgoe9vk",
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