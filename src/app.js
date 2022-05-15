const express = require('express');
const app = express();
const puerto = process.env.PORT || 8080;
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const { NODE_ENV } = process.env;

if (NODE_ENV === 'mongo') {
  const mongoose = require('mongoose');
  const URL =
    'mongodb://root:example@127.0.0.1:27017/ecommerce?authSource=admin';
  mongoose
    .connect(URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((data) => console.log('se ha conectado con mongo'))
    .catch((err) => console.log(err));
}

app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));
const indexRouter = require('./routes/index.routes');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', indexRouter);

const server = app.listen(puerto, () => {
  console.log(`Servidor inicializado en el puerto ${server.address().port}`);
});

server.on('error', (_err) => console.log('Error en servidor $(_err)'));
