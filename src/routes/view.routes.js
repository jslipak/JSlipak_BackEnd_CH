const express = require('express');
const router = express.Router();
const auth = require('../services/auth.services');
const orders = require('../services/order.services');
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

router.get('/home', auth.verifyToken, async(req, res) => {
  const userOrders = await orders.viewAllByUser(req.user.userId);
  res.render('pages/home', { name: req.user.username, msg: false, orders: userOrders });
});

router.get('/error', (req, res) => {
  res.send(
    `<h1> Su usuario o contraseña no es correcta </h1> <script> setTimeout(()=>{console.log("pasaron 2 seg"); window.location.href = '/'}, 2000) </script> `,
  );
});

module.exports = router;
