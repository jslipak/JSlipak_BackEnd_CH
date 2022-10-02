const mongoose = require('mongoose');
const messageCollecion = 'Message';

const MessageSchema = new mongoose.Schema({
  uid: {type: 'ObjectId', ref: 'User'},
  issue: {type: String, required: true},
  message: {type: String, required: true},
  date: {type: Date, default: Date.now},
});

module.exports = mongoose.model(messageCollecion, MessageSchema);
