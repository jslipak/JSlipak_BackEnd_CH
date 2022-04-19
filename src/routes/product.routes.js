import express from 'express';
const router = express.Router();
import { readFileSync } from 'fs';
import __dirname from '../util.js';

const data = JSON.parse(
  readFileSync(__dirname + '/json/products.json', 'utf8'),
);

// TODO: Write a FS json file with the prouducts in Delete , Post , Update

router.get('/', (_req, res) => {
  res.json({ items: data });
});

router.post('/', async (req, res) => {
  const objectArray = await import(
    __dirname + '/services/objectArray.services.js'
  );
  const arrayClass = new objectArray.default(data);
  const maxId = await arrayClass.getMaxId();
  const newProduct = {
    id: maxId + 1,
    timestamp: new Date(),
    title: req.body.title,
    description: req.body.description,
    code: req.body.code,
    thumbnail: req.body.thumbnail,
    price: req.body.price,
    stock: req.body.stock,
  };
  data.push(newProduct);
  res.json({ item: newProduct });
});

router.get('/:pid', (req, res) => {
  console.log(req.params.pid);
  let obj = data.find((x) => x.id == req.params.pid);
  res.json({ item: obj });
});

router.delete('/:pid', (req, res) => {
  console.log(req.params.pid);
  let obj = data.find((x) => x.id == req.params.pid);
  data.splice(data.indexOf(obj), 1);
  res.json({ item: obj });
});

router.put('/:pid', (req, res) => {
  // TODO: Save in FS
  console.log(req.params.pid);
  let objId = data.findIndex((x) => x.id == req.params.pid);
  data[objId] = {
    id: req.params.pid,
    timestamp: new Date(),
    title: req.body.title,
    description: req.body.description,
    code: req.body.code,
    thumbnail: req.body.thumbnail,
    price: req.body.price,
    stock: req.body.stock,
  };
  res.json({ item: data[objId] });
});

export default router;
