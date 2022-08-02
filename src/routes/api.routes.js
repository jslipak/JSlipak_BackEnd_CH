const express = require('express');
const router = express.Router();
const productRoutes = require('./product.routes');
const cartRoutes = require('./cart.routes');

router.use('/products', productRoutes);
router.use('/carts', cartRoutes);

module.exports = router;
