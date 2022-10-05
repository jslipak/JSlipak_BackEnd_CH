const express = require('express');
const router = express.Router();
const Products = require('./service/product.service');
const auth = require('../auths/service/auth.service');

router.get('/', Products.getAll);
router.get('/category/:category', Products.getByCategory);
router.get('/:pid', Products.getById);
router.post('/', auth.verifyToken, Products.create);
router.delete('/:pid', auth.verifyToken, Products.deleteById);
router.put('/:pid', auth.verifyToken, Products.updateById);

module.exports = router;
