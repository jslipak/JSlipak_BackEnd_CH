const { fork } = require('child_process');
const express = require('express');
const router = express.Router();
router.get('/', (req, res) => {
  const cant = req.query.cant || 10000000000;
  const child = fork('./src/child/numberArrayEvent.child.js');
  child.send(cant);
  child.on('message', (message) => {
    res.json(message);
  });
  child.on('exit', (code) => {
    console.log('child exited with code ' + code);
  });
});

module.exports = router;

//https://www.youtube.com/watch?v=uldi59cB7HU
