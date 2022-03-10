import express from 'express';
import { readFileSync } from 'fs';
const app = express();
const puerto = 8080;
let visitas = { visitas: { items: 0, item: 0 } };
const data = JSON.parse(readFileSync('./productos.json', 'utf8'));

app.get('/items', (_req, res) => {
  res.json({ items: data, cantidad: data.length });
  visitas.visitas.items = visitas.visitas.items + 1;
});
app.get('/item-random', (_req, res) => {
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
