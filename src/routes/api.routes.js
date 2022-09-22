const express = require('express');
const router = express.Router();
const productRoutes = require('./product.routes');
const cartRoutes = require('./cart.routes');
const orderRoutes = require('./order.routes');

router.use('/products', productRoutes);
router.use('/carts', cartRoutes);
router.use('/orders',orderRoutes );


module.exports = router;
