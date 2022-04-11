import express from 'express';
import productRoutes from './product.routes.js';

const router = express.Router();

router.use('/products', productRoutes);
router.get('/', (req, res) => {
  return res.send('api root v1');
});
export default router;
