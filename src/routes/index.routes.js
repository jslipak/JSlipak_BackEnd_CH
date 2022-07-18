const express = require('express');
const productRoutes = require('./product.routes');
const cartRoutes = require('./cart.routes');
const viewRoutes = require('./view.routes');
const sessionRoutes = require('./session.routes');
const cookieRoutes = require('./cookies.routes');
const authRoutes = require('./auth.routes');
const router = express.Router();
const gzip = require('compression');
const log4js = require('../utils/loggers/log4js');

router.use((req, res, next) => {
  let logger = log4js.getLogger();
  logger.info(`RUTA: ${req.path} - METODO: ${req.method}`);
  return next();
});
router.use('/api/products', productRoutes);
router.use('/api/carts', cartRoutes);
router.use('/cookies', cookieRoutes);
router.use('/sessions', sessionRoutes);
router.use('/auth', authRoutes);

// parte gzip
router.get('/info', gzip(), (req, res) => {
  let info = 'Estoy probando y viendo que pasa';
  res.send(info.repeat(10000));
});
router.get('/infonozip', (req, res) => {
  let info = 'Estoy probando y viendo que pasa';
  res.send(info.repeat(10000));
});
// fin gzip

// Inicio Logger log4js
router.get('/suma', (req, res) => {
  let { a, b } = req.query;
  if (!a || !b) {
    log4js.fatal('Te falta un número');
    return res.json({ bad_req: 'Te falta un dato' });
  }
  let response = Number(a) + Number(b);
  log4js.debug('Operacion exitosa!');
  res.json({ response });
});

// fin log4js
router.use('/', viewRoutes);
router.use('*', (req, res) => {
  log4js.getLogger('warning').warn(`RUTA: ${req.path} - METODO: ${req.method}`);
  res.status(404).send('404 Not Found');
});
module.exports = router;
