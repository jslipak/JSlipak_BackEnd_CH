const express = require('express');
const router = express.Router();
const auth = require('../services/auth.services');
const user = require('../services/user.services');
const upload = require('../middleware/multer.middleware');

router.get('/login', (req, res) => { res.render('pages/login')});
router.get('/signup', (req, res) => { res.render('pages/signup')});
router.post('/signup', upload.single('avatar'), user.create);
router.post('/login', auth.login);
router.get('/logout', auth.logout);


module.exports = router;
