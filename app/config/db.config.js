module.exports = {
    HOST: process.env.MYSQL_IP,
    USER: process.env.MYSQL_DB_USR,
    PASSWORD: process.env.MYSQL_DB_PWS,
    DB: process.env.MYSQL_DB,
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };
  