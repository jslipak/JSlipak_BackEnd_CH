const mongoose = require('mongoose');

const productCollection = 'Product';
//NOTE: El id dejo que lo cree mongo
const ProductSchema = new mongoose.Schema({
  timestamp: { type: 'Date', default: Date.now },
  title: { type: 'String', required: true, max: 128 },
  code: { type: 'String', required: true, max: 128 },
  thumbnail: { type: 'String', required: true, max: 128 },
  price: { type: 'Number', required: true },
  stock: { type: 'Number', required: true },
});

module.exports = mongoose.model(productCollection, ProductSchema);
