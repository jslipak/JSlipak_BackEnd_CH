require('dotenv').config();
const input_data = process.argv.slice(2);

const env = {
  PORT: parseInt(input_data[0]),
  NODE_ENV: process.env.NODE_ENV,
  PID: process.pid,
  ARGV: process.argv,
  PLATAFORM: process.platform,
  PATH: process.argv[1],
};

module.exports = env;
