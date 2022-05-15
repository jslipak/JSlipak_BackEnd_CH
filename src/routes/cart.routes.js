const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth.middleware');
const { NODE_ENV } = process.env;
const Cart = require(`../services/cart.${NODE_ENV}.services`);

router.get('/', auth, Cart.getAll);
router.get('/:cid/products', auth, Cart.getProductCars);
router.get('/:cid', auth, Cart.getById);
router.post('/', auth, Cart.create);
router.post('/:cid/products/:pid', auth, Cart.addProductByIdCart);
router.delete('/:cid', auth, Cart.deleteById);
router.delete('/:cid/products/:pid', auth, Cart.removeProductByIdCart);

module.exports = router;
