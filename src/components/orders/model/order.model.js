const mongoose = require('mongoose');
const orderCollection = 'Order';

const ProductSchema = new mongoose.Schema({
  pid: { type: 'ObjectId', ref: 'Product' },
  quantity: { type: 'Number', required: true },
});

const OrderSchema = new mongoose.Schema({
  timestamp: { type: 'Date', default: Date.now },
  status: { type: 'String',enum:['processing', 'cancel', 'delay', 'completed'],default:'processing', required: true },
  user: { type: 'ObjectId', ref: 'User' },
  email: { type: 'String', required: true },
  items: [ProductSchema]
});

module.exports = mongoose.model(orderCollection, OrderSchema);
