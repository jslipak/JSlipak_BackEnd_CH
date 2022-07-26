require('dotenv').config();

const config = {
  port: process.env.PORT,
  db: process.env.DB,
  email: process.env.EMAIL,
  passwordEmail: process.env.PASSWORD_EMAIL,
  smtpHost: process.env.SMTP_HOST,
  smtpPort: process.env.SMTP_PORT,
  emailTo: process.env.EMAIL_TO,
};

module.exports = config;
