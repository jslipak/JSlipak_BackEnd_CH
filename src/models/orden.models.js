const mongoose = require('mongoose');
const ordenCollection = 'Orden';

const ProductSchema = new mongoose.Schema({
  pid: { type: 'ObjectId', ref: 'Product' },
  quantity: { type: 'Number', required: true },
});

const OrdenSchema = new mongoose.Schema({
  timestamp: { type: 'Date', default: Date.now },
  status: { type: 'String',enum:['processing', 'cancel', 'delay', 'completed'],default:'processing', required: true },
  user: { type: 'ObjectId', ref: 'User' },
  email: { type: 'String', required: true },
  items: [ProductSchema]
});

module.exports = mongoose.model(ordenCollection, OrdenSchema); 
