const { createTransport } = require('nodemailer');
const config = require('../config/index');

const email = config.email;
const password = config.passwordEmail;

const transporter = createTransport({
  host: config.smtpHost,
  port: config.smtpPort,
  auth: {
    user: email,
    pass: password,
  },
});

const senderMail = async (
  subject = 'Notification from Server',
  html = '<p> warning msg</p>',
) => {
  try {
    const opt = {
      from: 'Test Mailer msg',
      to: config.emailTo,
      subject,
      html,
    };
    const response = await transporter.sendMail(opt);
  } catch (err) {
    console.log(err);
  }
};

//(async () => {
//await senderMail().then(() => {
//console.log('Email sent');
//});
//})();
module.exports = senderMail;
