const msg = require('../../messages/service/message.service');

module.exports = function (io) {
  io.on('connection', (socket) => {
    const evalText = (text) => {
      return text.match(/<[^>]*>/g);
    };
    socket.broadcast.emit('notification');
    socket.on('addMsg', async (data) => {
      console.log(evalText(data.message));
      if (evalText(data.message) !== null)
        data.messagesg = 'No seas tonto , no inyectest STYLE in Line ';
      const toSend = await msg.create(data);
      io.emit('logMsg', toSend);
    });
  });
};
