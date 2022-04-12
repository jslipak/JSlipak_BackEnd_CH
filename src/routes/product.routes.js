import express from 'express';
const router = express.Router();
import { readFileSync } from 'fs';
import __dirname from '../util.js';

const data = JSON.parse(readFileSync(__dirname + '/productos.json', 'utf8'));

let visitas = { visitas: { items: 0, item: 0 } };

router.post('/', async (req, res) => {
  const objectArray = await import(
    __dirname + '/services/objectArray.services.js'
  );
  const arrayClass = new objectArray.default(data);
  console.log(arrayClass);
  const maxId = await arrayClass.getMaxId();

  const newProduct = {
    id: maxId + 1,
    title: req.body.title,
    price: req.body.price,
    thumbnail: req.body.thumbnail,
  };
  data.push(newProduct);
  res.json({ item: newProduct });
});

router.get('/item-random', (req, res) => {
  console.log('aca esta data', data);
  res.json(data[Math.floor(Math.random() * data.length)]);
  visitas.visitas.item = visitas.visitas.item + 1;
});

router.get('/visitas', (req, res) => {
  res.json(visitas);
});

router.get('/', (_req, res) => {
  res.json({ items: data, cantidad: data.length });
  visitas.visitas.items = visitas.visitas.items + 1;
});

router.get('/:id', (req, res) => {
  console.log(req.params.id);
  let obj = data.find((x) => x.id == req.params.id);
  res.json({ item: obj });
});

export default router;
