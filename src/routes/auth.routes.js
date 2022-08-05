const express = require('express');
const router = express.Router();
const user = require('../services/user.services');
const upload = require('../middleware/multer.middleware');
const passport = require('passport');

router.get('/login', function (req, res) {
  res.render('pages/login');
});

router.get('/signup', function (req, res) {
  res.render('pages/signup');
});

router.get('/logout', function (req, res, next) {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect('/');
  });
});

// FIX: when upload it's empty
router.post('/signup', upload.single('avatar'), user.create);

router.post(
  '/login',
  passport.authenticate('local', {
    failureRedirect: '/error',
    failureFlash: true,
  }),
  function (req, res) {
    console.log('estas logeado');
    res.redirect('/home');
  },
);

module.exports = router;
