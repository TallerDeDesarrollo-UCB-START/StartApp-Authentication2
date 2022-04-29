module.exports = {
  HOST: "ec2-54-156-24-159.compute-1.amazonaws.com",
  PORT: 5432,
  USER: "hsazteibnsnquc",
  PASSWORD: "96c44f19b6a31a67521c2fa65c9233544ed1d7d5388367c6d9ff4c22c940a340",
  DB: "d5mjf648gc2p7f",
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