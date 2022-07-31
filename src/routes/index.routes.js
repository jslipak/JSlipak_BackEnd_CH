const express = require('express');
const productRoutes = require('./product.routes');
const cartRoutes = require('./cart.routes');
const viewRoutes = require('./view.routes');
const authRoutes = require('./auth.routes');
const userRoutes = require('./user.routes');
const router = express.Router();

router.use('/api/products', productRoutes);
router.use('/api/carts', cartRoutes);
router.use('/users', userRoutes);
router.use('/auth', authRoutes);
router.use('/', viewRoutes);

module.exports = router;
