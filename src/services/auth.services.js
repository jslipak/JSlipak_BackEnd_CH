const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const user = require('../services/user.services');

class Auth {
  constructor() {
    this.secret = 'secret';
  }
  async login(req, res) {
    try {
      let { username, password } = req.body;
      const existingUser = await user.getUserByEmail(username);
      console.log(existingUser);
      const isSamePassword = await bcrypt.compare(password, existingUser.hash);
      console.log(isSamePassword);
      if (!isSamePassword) return res.status(401).send('Wrong password');
      const token = jwt.sign(
        { userId: existingUser.id, username: existingUser.username },
        'secretkeyappearshere',
        { expiresIn: '1h' },
      );
      res.cookie('token', token, { httpOnly: true }).redirect('/home');
    } catch {
      res.status(401).redirect('/error');
    }
  }
  logout (req, res) {
    res.cookie('token', '', { httpOnly: true }).redirect('/');
  }
  verifyToken(req, res, next) {
    try {
        const token = req.cookies.token;
        const decoded = jwt.verify(token, 'secretkeyappearshere');
        req.user = decoded;
        next();
      } catch (err) {
        res.redirect('/');
      }
    }
}


module.exports = new Auth();
