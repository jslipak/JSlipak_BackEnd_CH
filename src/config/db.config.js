const products = require('../models/product.models');
const carts = require('../models/cart.models');
const users = require('../models/user.models');
const orders = require('../models/order.models');

module.exports = { products: products, carts: carts, users: users, orders: orders };
