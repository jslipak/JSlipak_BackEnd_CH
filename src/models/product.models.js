const mongoose = require('mongoose');

const productCollection = 'Product';
const ProductSchema = new mongoose.Schema({
  timestamp: { type: 'Date', default: Date.now },
  category: { type: 'String', required: true },
  title: { type: 'String', required: true, max: 128 },
  description: { type: 'String', required: true, max: 256 },
  code: { type: 'String', required: true, max: 128 },
  thumbnail: { type: 'String', required: true, max: 128 },
  price: { type: 'Number', required: true },
  stock: { type: 'Number', required: true },
});

module.exports = mongoose.model(productCollection, ProductSchema);
