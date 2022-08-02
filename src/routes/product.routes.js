const express = require('express');
const router = express.Router();
const Products = require(`../services/product.services`);
const auth = require('../middleware/auth.middleware');

router.get('/', Products.getAll);
router.get('/:pid', Products.getById);
router.post('/', auth, Products.create);
router.delete('/:pid', auth, Products.deleteById);
router.put('/:pid', auth, Products.updateById);

module.exports = router;
