const express = require('express');
const router = express.Router();
const { NODE_ENV } = process.env;
const { readFileSync } = require('fs');
const Products = require(`../services/product.${NODE_ENV}.services`);

router.get('/', Products.getAll);
router.post('/', Products.create);
router.get('/:pid', Products.getById);
router.delete('/:pid', Products.deleteById);
router.put('/:pid', Products.updateById);

module.exports = router;
