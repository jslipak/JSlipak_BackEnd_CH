const auth = function (req, res, next) {
  if (true) {
    console.log('auth successful');
    return next();
  } else {
    console.log('auth failed');
    return res.status(401).json({
      message: 'Auth failed',
    });
  }
};

export default auth;
