const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth.middleware');
const env = require('../config/process.config');
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

router.get('/home', auth, (req, res) => {
  res.render('pages/home', { name: req.user.username, msg: false });
});

router.get('/info', (req, res) => {
  console.log(env);
  res.render('pages/info', { env });
});

router.get('/error', (req, res) => {
  const name = req.session.user;
  res.send(
    `<h1> Su usuario o contraseña no es correcta </h1> <script> setTimeout(()=>{console.log("pasaron 2 seg"); window.location.href = '/'}, 2000) </script> `,
  );
});

module.exports = router;
