const auth = function (req, res, next) {
  if (req.session.user) {
    console.log('auth successful');
    return next();
  } else {
    console.log('auth failed');
    return res.status(401).redirect('/');
  }
};

module.exports = auth;
