const mongoose = require('mongoose');
const cartCollection = 'Cart';

const ProductSchema = new mongoose.Schema({
  pid: { type: 'ObjectId', ref: 'Product' },
  quantity: { type: 'Number', required: true },
});

const CartSchema = new mongoose.Schema({
  timestamp: { type: 'Date', default: Date.now },
  user: { type: 'ObjectId', ref: 'User' },
  products: [ProductSchema],
});

module.exports = mongoose.model(cartCollection, CartSchema);
