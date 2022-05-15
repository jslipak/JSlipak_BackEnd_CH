const express = require('express');
const productRoutes = require('./product.routes');
const cartRoutes = require('./cart.routes');
const router = express.Router();

router.use('/api/products', productRoutes);
router.use('/api/carts', cartRoutes);
router.get('/', (req, res) => {
  return res.send('api root v1');
});

module.exports = router;
