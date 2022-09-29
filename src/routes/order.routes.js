const express = require('express');
const router = express.Router();
const auth = require('../services/auth.services');
const order = require('../services/order.services')

router.get('/', auth.verifyToken, order.getAll); 
router.get('/user', auth.verifyToken, order.getAllByUser);
router.get('/:id', auth.verifyToken, order.getById);
router.post('/', auth.verifyToken, order.create);
router.put('/:id', auth.verifyToken, order.changeStatusById);

module.exports = router;
