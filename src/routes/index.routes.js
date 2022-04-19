import express from 'express';
import productRoutes from './product.routes.js';
import cartRoutes from './cart.routes.js';
const router = express.Router();

router.use('/api/products', productRoutes);
router.use('/api/carts', cartRoutes);
//router.use('/products', productViewRoutes);
router.get('/', (req, res) => {
  return res.send('api root v1');
});
export default router;
