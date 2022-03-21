import express from 'express';
import { readFileSync } from 'fs';
const app = express();
const puerto = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const data = JSON.parse(readFileSync('./src/productos.json', 'utf8'));
let visitas = { visitas: { items: 0, item: 0 } };

app.get('/api/productos/listar', (_req, res) => {
  res.json({ items: data, cantidad: data.length });
  visitas.visitas.items = visitas.visitas.items + 1;
});

app.get('/api/productos/listar/:id', (req, res) => {
  console.log(req.params.id);
  let obj = data.find((x) => x.id == req.params.id);
  res.json({ item: obj });
});

app.post('/api/productos/listar', async (req, res) => {
  const objectArray = await import('./services/objectArray.services.js');
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
app.get('/api/productos/item-random', (_req, res) => {
  res.json(data[Math.floor(Math.random() * data.length)]);
  visitas.visitas.item = visitas.visitas.item + 1;
});

app.get('/visitas', (_req, res) => {
  res.json(visitas);
});

const server = app.listen(puerto, () => {
  console.log(`Servidor inicializado en el puerto ${server.address().port}`);
});

server.on('error', (_err) => console.log('Error en servidor $(err)'));
