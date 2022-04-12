import express from 'express';
const router = express.Router();
import Product from '../services/productView.services.js';
router.get('/new', (req, res) => {
  return res.render('new', { layout: 'new' });
});

router.get('/edit/:id', async (req, res) => {
  const id = req.params.id;
  const temp = await Product.getDataId(id);
  console.log(temp);
  return res.render('edit', { layout: 'edit', edit: temp });
});

router.get('/', Product.getAll);
router.get('/:id', Product.findOneById);
router.get('/random', Product.random);
router.get('/visitas', Product.visitas);
router.post('/', Product.create);
router.delete('/:id', Product.deleteOneById);
router.put('/:id', Product.updateOneById);

export default router;
