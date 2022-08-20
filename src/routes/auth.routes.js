const express = require('express');
const router = express.Router();
const user = require('../services/user.services');
const upload = require('../middleware/multer.middleware');
const jwt = require('jsonwebtoken');

router.get('/login', function (req, res) {
  res.render('pages/login');
});

router.post('/login', async (req, res, next) => {
  let { username, password } = req.body;

  let existingUser;
  try {
    existingUser = await user.getUserByEmail(username);
    const isSamePassword = await bcrypt.compare(password, existingUser.hash);
    if (!isSamePassword) return res.status(401).send('Wrong password');
    const token = jwt.sign(
      { userId: existingUser.id, email: existingUser.email },
      'secretkeyappearshere',
      { expiresIn: '1h' },
    );
    res.cookie('token', token, { httpOnly: true }).redirect('/');
  } catch {
    const error = new Error('Error! Something went wrong.');
    return next(error);
  }
});

// Handling post request
router.get('/signup', function (req, res) {
  res.render('pages/signup');
});

router.post('/signup', upload.single('avatar'), user.create);

//router.get('/logout', function (req, res, next) {
//req.logout(function (err) {
//if (err) {
//return next(err);
//}
//res.redirect('/');
//});
//});

//router.post(
//'/login',
//passport.authenticate('local', {
//failureRedirect: '/error',
//failureFlash: true,
//}),
//function (req, res) {
//console.log('estas logeado');
//res.redirect('/home');
//},
//);

module.exports = router;
