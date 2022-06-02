const express = require('express');
const app = express();
const session = require('express-session');
const cookieParser = require('cookie-parser');
const MongoStore = require('connect-mongo');
const puerto = process.env.PORT || 8080;
const morgan = require('morgan');
const mongoose = require('mongoose');
const URL = 'mongodb://root:example@127.0.0.1:27017/ecommerce?authSource=admin';
const { NODE_ENV } = process.env;
console.log(process);
mongoose
  .connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((data) => console.log('se ha conectado con mongo'))
  .catch((err) => console.log(err));

if (NODE_ENV === 'firebase') {
  // add credential outside of the scoop to git don't put it github
  // IMPROVE: with dotenv --> have a issue with parser
  var admin = require('firebase-admin');
  const firebaseKey = require('./../../ecommercecoder-c1868-firebase-adminsdk-xf5z3-5f4d046d8b.json');
  admin.initializeApp({
    credential: admin.credential.cert(firebaseKey),
    databaseURL: 'https:/ecommercecoder-c1868.firebaseio.com',
  });
  console.log('Base firebase conectada');
}

app.use(
  session({
    store: MongoStore.create({
      mongoUrl:
        'mongodb://root:example@127.0.0.1:27017/sessions?authSource=admin',
    }),
    secret:
      'Como te ven te tratan , si te ven mal te maltrata y si te ven bien te contrata',
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 600000 },
    rolling: true,
  }),
);
app.use(cookieParser());

app.set('view engine', 'ejs');
app.set('views', './src/views');

app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));
const indexRouter = require('./routes/index.routes');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', indexRouter);

const server = app.listen(puerto, () => {
  console.log(`Servidor inicializado en el puerto ${server.address().port}`);
});

server.on('error', (_err) => console.log(`Error en servidor ${_err}`));
