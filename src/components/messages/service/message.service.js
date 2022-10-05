const messages = require('../model/message.model');

class Message {
  async getAll() {
    const allMsg = await messages.find();
    return allMsg;
  }
  async getAllByUser(uid) {
    const allMsg = await messages.find({ uid });
    return allMsg;
  }

  async create(data) {
    const newMsg = await messages.create(data);
    return newMsg;
  }
  async deleteById(id) {
    const deletedMsg = await messages.findByIdAndDelete(id);
    return deletedMsg;
  }
}

module.exports = new Message();
