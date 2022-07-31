const twilio = require('twilio');
const config = require('../config');
const accountSid = config.twilioSid;
const authToken = config.twilioToken;
console.log(config);
const send = async (msg, whatsapp = false) => {
  const client = twilio(accountSid, authToken);
  try {
    const message = await client.messages.create({
      body: msg,
      from: whatsapp ? `whatsapp:${config.twilioTo}` : config.twilioPhone,
      to: whatsapp ? `whatsapp:${config.whatsapp}` : config.whatsapp,
    });
    console.log(message);
  } catch (err) {
    console.log('hube error');
    console.log(err);
  }
};

//send('hola estoy probando ', true);
module.exports = send;
