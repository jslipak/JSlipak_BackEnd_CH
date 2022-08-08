const mongoose = require('mongoose');
const products = require('../models/product.models');
const carts = require('../models/cart.models');
const users = require('../models/user.models');

module.exports = { products: products, carts: carts, users: users };
