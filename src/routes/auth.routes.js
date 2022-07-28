const express = require('express');
const router = express.Router();
const passport = require('passport');
const User = require('../models/user.mongo.models');
const mailer = require('../utils/nodemailer.utils');
const upload = require('../middleware/multer.middleware');
const fs = require('fs');
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

router.post('/signup', upload.single('avatar'), function (req, res, next) {
  console.log(req.file);
  console.log('registering user');
  try {
    User.register(
      new User({
        username: req.body.username,
        fullName: req.body.fullname,
        address: req.body.address,
        birthday: req.body.birthday,
        phone: req.body.phone,
        avatar: `./src/my-uploads/${req.body.username}.jpg`,
      }),
      req.body.password,
      function (err) {
        if (err) {
          console.log('error while user register!', err);
          return next(err);
        }
        mailer(
          'new user created',
          `<p>new user created: ${req.body.username} , ${req.body.fullname}, ${req.body.phone}</p>`,
        );
        console.log(req);
        // copy from file buffer to jpg file
        fs.writeFileSync(
          `./src/my-uploads/${req.body.username}_avatar.jpg`,
          req.file.buffer,
        );
        console.log('user registered!');
        res.redirect('/');
      },
    );
  } catch (err) {
    // TODO: handle error
    console.log(err);
  }
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
