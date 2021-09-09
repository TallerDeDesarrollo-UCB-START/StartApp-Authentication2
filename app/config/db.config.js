module.exports = {
  HOST: "ec2-54-173-138-144.compute-1.amazonaws.com",
  PORT: 5432,
  USER: "hgpmlfhmjxvnfr",
  PASSWORD: "e3fcf341e4ff4a68075b951e1c9a75239afaa42d7eccc3e9c7db81bda6c77a05",
  DB: "d966qfatdj765h",
  dialect: "postgres",
  ssl: true, 
  dialectOptions: {
    ssl: {
      require: true, // This will help you. But you will see nwe error
      rejectUnauthorized: false // This line will fix new error
    }
  },
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};