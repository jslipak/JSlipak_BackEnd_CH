const express = require('express');
const router = express.Router();
const productRoutes = require('../components/products');
const cartRoutes = require('../components/carts');
const orderRoutes = require('../components/orders');

router.use('/products', productRoutes);
router.use('/carts', cartRoutes);
router.use('/orders', orderRoutes);

module.exports = router;
