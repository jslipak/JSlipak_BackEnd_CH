require('dotenv').config();

const config = {
  port: process.env.PORT,
  db: process.env.DB,
  email: process.env.EMAIL,
  passwordEmail: process.env.PASSWORD_EMAIL,
  smtpHost: process.env.SMTP_HOST,
  smtpPort: process.env.SMTP_PORT,
  emailTo: process.env.EMAIL_TO,
  whatsapp: process.env.WHATSAPP,
  twilioSid: process.env.TWILIO_SID,
  twilioToken: process.env.TWILIO_TOKEN,
  twilioPhone: process.env.TWILIO_PHONE,
  twilioTo: process.env.TWILIO_WHATSAPP,
  jwtSecret: process.env.JWT_SECRET,
  cookieSecret: process.env.COOKIE_SECRET,
  socketPort: process.env.SOCKET_PORT,
};

module.exports = config;
