const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth.middleware');

router.get('/', (req, res) => {
  res.render('pages/login');
});
router.get('/signup', (req, res) => {
  res.render('pages/signup');
});

router.get('/home', auth, (req, res) => {
  res.render('pages/home', { name: req.session.user });
});

module.exports = router;
