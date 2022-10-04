const express = require('express');
const router = express.Router();
const auth = require('../services/auth.services');
const orders = require('../services/order.services');
const messages = require('../services/message.service');

router.get('/', (req, res) => {
  req.user?.username
    ? res.render('pages/home', {
        name: req.user.username,
        msg: `ya estas logueado ${req.user.username}`,
      })
    : res.render('pages/login');
});
router.get('/signup', (req, res) => {
  res.render('pages/signup');
});

router.get('/home', auth.verifyToken, async (req, res) => {
  console.log(`esto es el id ${req.socketIO}`);
  const userOrders = await orders.viewAllByUser(req.user.userId);
  const userMessages = await messages.getAllByUser(req.user.userId);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.render('pages/home', {
    name: req.user.username,
    msg: false,
    msgs: userMessages,
    orders: userOrders,
    userId: req.user.userId,
  });
});

router.get('/error', (req, res) => {
  res.send(
    `<h1> Su usuario o contraseña no es correcta </h1> <script> setTimeout(()=>{console.log("pasaron 2 seg"); window.location.href = '/'}, 2000) </script> `,
  );
});

module.exports = router;
