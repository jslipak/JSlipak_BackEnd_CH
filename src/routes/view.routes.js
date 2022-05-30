const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth.middleware');

router.get('/', (req, res) => {
  req.session.user
    ? res.render('pages/home', {
        name: req.session.user,
        msg: `ya estas logueado ${req.session.user}`,
      })
    : res.render('pages/login');
});
router.get('/signup', (req, res) => {
  res.render('pages/signup');
});

router.get('/home', auth, (req, res) => {
  res.render('pages/home', { name: req.session.user, msg: false });
});

module.exports = router;
