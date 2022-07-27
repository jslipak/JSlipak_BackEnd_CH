const twilio = require('twilio');
const config = require('../config');
console.log(config);
const accountSid = config.twilioSid;
const authToken = config.twilioToken;

const sendSMS = async (msg) => {
  const client = twilio(accountSid, authToken);
  try {
    const message = await client.messages.create({
      body: msg,
      from: config.twilioPhone,
      to: config.whatsapp,
    });
    console.log(message);
  } catch (err) {
    console.log(err);
  }
};

module.exports = sendSMS;
