const express = require('express');
const router = express.Router();
const Products = require(`../services/product.mongo.services`);
const auth = require("../middleware/auth.middleware")

router.get('/', Products.getAll);
router.post('/',auth , Products.create);
router.get('/:pid', Products.getById);
router.delete('/:pid',auth, Products.deleteById);
router.put('/:pid',auth, Products.updateById);

module.exports = router;
