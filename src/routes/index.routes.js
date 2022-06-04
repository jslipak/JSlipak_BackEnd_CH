const express = require('express');
const productRoutes = require('./product.routes');
const cartRoutes = require('./cart.routes');
const viewRoutes = require('./view.routes');
const sessionRoutes = require('./session.routes');
const cookieRoutes = require('./cookies.routes');
const authRoutes = require('./auth.routes');
const router = express.Router();

router.use('/api/products', productRoutes);
router.use('/api/carts', cartRoutes);
router.use('/cookies', cookieRoutes);
router.use('/sessions', sessionRoutes);
router.use('/auth', authRoutes);
router.use('/', viewRoutes);

//router.get('/', (req, res) => {
//return res.send('api root v1');
//});

module.exports = router;
