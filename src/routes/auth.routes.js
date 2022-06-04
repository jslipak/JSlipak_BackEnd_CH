const express = require('express');
const router = express.Router();
const passport = require('passport');
const User = require('../models/user.mongo.models');

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

router.post('/signup', function (req, res, next) {
  console.log('registering user');
  User.register(
    new User({ username: req.body.username }),
    req.body.password,
    function (err) {
      if (err) {
        console.log('error while user register!', err);
        return next(err);
      }
      console.log('user registered!');
      res.redirect('/');
    },
  );
});

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
