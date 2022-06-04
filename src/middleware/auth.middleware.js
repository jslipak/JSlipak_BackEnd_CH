//const auth = function (req, res, next) {
//if (req.isAuthenticated()) {
//console.log('auth successful');
//return next();
//} else {
//console.log('auth failed');
//return res.status(401).redirect('/');
//}
//};
const auth = function (req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  } else {
    res.status(401).redirect('/');
  }
};

module.exports = auth;
