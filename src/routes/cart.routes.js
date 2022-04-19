import express from 'express';
const router = express.Router();
import { readFileSync } from 'fs';
import __dirname from '../util.js';
import auth from '../middleware/auth.middleware.js';

let data = JSON.parse(readFileSync(__dirname + '/json/carts.json', 'utf8'));
// TODO: FS persistence for carts

router.get('/', auth, (req, res) => {
  res.json(data);
});

router.get('/:cid/products', async (req, res) => {
  const objectArray = await import(
    __dirname + '/services/objectArray.services.js'
  );
  const arrayClass = new objectArray.default(data);
  console.log(req.params.cid);
  const cart = await arrayClass.getObjectById(req.params.cid);
  res.json(cart[0].products);
});

router.get('/:cid', auth, async (req, res) => {
  const objectArray = await import(
    __dirname + '/services/objectArray.services.js'
  );
  const arrayClass = new objectArray.default(data);
  const showCart = await arrayClass.getObjectIndex(req.params.cid);
  res.json(data[showCart]);
});

router.post('/', auth, async (req, res) => {
  const objectArray = await import(
    __dirname + '/services/objectArray.services.js'
  );
  const arrayClass = new objectArray.default(data);
  console.log(arrayClass);
  const maxId = await arrayClass.getMaxId();
  let newCart = {
    id: maxId + 1,
    timestamp: new Date().toISOString(),
    products: [],
  };
  data.push(newCart);
  res.send(newCart);
});

router.delete('/:cid', (req, res) => {
  console.log(req.params.cid);
  let obj = data.find((x) => x.id == req.params.cid);
  data.splice(data.indexOf(obj), 1);
  res.json({ item: obj });
});

router.delete('/:cid/products/:pid', async (req, res) => {
  const objectArray = await import(
    __dirname + '/services/objectArray.services.js'
  );
  console.log(req.params);
  const arrayClass = new objectArray.default(data);
  const index = await arrayClass.getObjectIndex(req.params.cid);
  const arrayProducts = new objectArray.default(data[index].products);
  const indexProductDelete = await arrayProducts.getObjectIndex(req.params.pid);
  if (indexProductDelete !== -1) {
    data[index].products.splice(indexProductDelete, 1);
    res.json({ item: data[index].products });
  } else {
    res.status(404).send('Product not found');
  }
});

export default router;
