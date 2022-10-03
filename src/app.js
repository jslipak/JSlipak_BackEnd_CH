const config = require('./config');
const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const URL = process.env.DB;
const flash = require('connect-flash');
const puerto = process.env.PORT || 8080;
const logger = require('./utils/logger.utils');
const indexRouter = require('./routes/index.routes');

mongoose
  .connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((data) => console.log('mongo connected'))
  .catch((err) => logger.error(err));

app.use(cookieParser(config.cookieSecret));
app.use(flash());
app.set('view engine', 'ejs');
app.set('views', './src/views');
app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', indexRouter);

const server = app.listen(puerto, () => {
  console.log(`Servidor inicializado en el puerto ${server.address().port}`);
});
server.on('error', (err) => logger.fatal(err));

const io = require('socket.io')(server);
