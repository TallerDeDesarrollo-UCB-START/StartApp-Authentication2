module.exports = {
  HOST: "ec2-107-20-24-247.compute-1.amazonaws.com",
  PORT: 5432,
  USER: "kucbjwwgviyzmk",
  PASSWORD: "a52262572f4bc3c60cc7947fed57d4b618fd1aa8a0a05d6615666ae106e087e9",
  DB: "d2t7r859pdvtd5",
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
