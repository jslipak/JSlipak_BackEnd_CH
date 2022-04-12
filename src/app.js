import express from 'express';
const app = express();
const puerto = 8080;
import __dirname from './util.js';
import morgan from 'morgan';
import handlebars from 'express-handlebars';

app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));
import indexRouter from './routes/index.routes.js';

app.engine(
  'hbs',
  handlebars.engine({
    extname: 'hbs',
    partialsDir: __dirname + '/views/partials',
    layoutsDir: __dirname + '/views/layouts',
    defaultLayout: 'index.hbs',
  }),
);
app.set('views', __dirname + '/views/layouts');
app.set('view engine', 'hbs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', indexRouter);

const server = app.listen(puerto, () => {
  console.log(`Servidor inicializado en el puerto ${server.address().port}`);
});

server.on('error', (_err) => console.log('Error en servidor $(_err)'));
