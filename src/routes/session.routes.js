const { Router } = require('express');
const router = Router();

router.get('/con-session', (req, res) => {
  if (req.session.contador) {
    req.session.contador++ |
      res.send(`Ud. ha visitado el sitio ${req.session.contador} veces.`);
  } else {
    req.session.contador = 1;
    res.send('Bienvenido!');
  }
});

router.post('/login', (req, res) => {
  console.log(req.body);
  console.log(req.session);
  if (!req.session.user) {
    req.session.user = req.body.user;
    req.session.password = req.body.password;
    res.redirect('/home');
  }
});
router.get('/logout', (req, res) => {
  const name = req.session.user;
  req.session.destroy((err) => {
    if (!err) {
      res.send(
        `<h1> Hasta Luego ${name} </h1> <script> setTimeout(()=>{console.log("pasaron 2 seg"); window.location.href = '/'}, 2000) </script> `,
      );
    } else {
      res.send({ status: 'Logout ERROR', body: err });
    }
  });
});
module.exports = router;
