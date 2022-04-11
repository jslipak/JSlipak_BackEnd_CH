import express from 'express';
//import { readFileSync } from 'fs';
import __dirname from './util.js';

import apiRouter from './routes/index.routes.js';
const app = express();
const puerto = 8081;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
app.use('/api', apiRouter);

const server = app.listen(puerto, () => {
  console.log(`Servidor inicializado en el puerto ${server.address().port}`);
});

server.on('error', (_err) => console.log('Error en servidor $(_err)'));

//const data = JSON.parse(readFileSync(__dirname + '/productos.json', 'utf8'));
