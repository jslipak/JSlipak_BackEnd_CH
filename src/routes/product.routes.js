const express = require('express');
const router = express.Router();
const { readFileSync } = require('fs');
const Products = require('../services/product.services');

router.get('/', Products.getAll);
router.post('/', Products.create);
router.get('/:pid', Products.getById);
router.delete('/:pid', Products.deleteById);
router.put('/:pid', Products.updateById);

module.exports = router;
