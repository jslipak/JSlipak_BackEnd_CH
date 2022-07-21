require('dotenv').config();

const config = {
  port: process.env.PORT,
  db: process.env.DB,
};

module.exports = config;
