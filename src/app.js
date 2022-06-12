const env = require('./config/process.config');
const express = require('express');
const app = express();
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const cookieParser = require('cookie-parser');
const MongoStore = require('connect-mongo');
const morgan = require('morgan');
const mongoose = require('mongoose');
const indexRouter = require('./routes/index.routes');
const URL = 'mongodb://root:example@127.0.0.1:27017/ecommerce?authSource=admin';
const flash = require('connect-flash');
const puerto = env.PORT || 8080;

mongoose
  .connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((data) => console.log('se ha conectado con mongo'))
  .catch((err) => console.log(err));

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
app.use(
  cookieParser(
    'Como te ven te tratan , si te ven mal te maltrata y si te ven bien te contrata',
  ),
);
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
const User = require('./models/user.mongo.models');
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

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

server.on('error', (_err) => console.log(`Error en servidor ${_err}`));
