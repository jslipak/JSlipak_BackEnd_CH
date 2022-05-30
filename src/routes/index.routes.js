const express = require('express');
const productRoutes = require('./product.routes');
const cartRoutes = require('./cart.routes');
const viewRoutes = require('./view.routes');
const sessionRouter = require('./session.routes');
const cookieRouter = require('./cookies.routes');
const router = express.Router();

router.use('/api/products', productRoutes);
router.use('/api/carts', cartRoutes);
router.use('/cookies', cookieRouter);
router.use('/sessions', sessionRouter);
router.use('/', viewRoutes);
//router.get('/', (req, res) => {
//return res.send('api root v1');
//});

module.exports = router;
