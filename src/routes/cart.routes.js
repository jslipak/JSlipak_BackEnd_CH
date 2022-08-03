const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth.middleware');
const Cart = require(`../services/cart.services`);

router.get('/', auth, Cart.getAll); //ok
router.get('/:cid/products', auth, Cart.getProductCars); // ok
router.get('/:cid', auth, Cart.getById); //ok
router.post('/', auth, Cart.create); // ok
router.post('/:cid/products/:pid', auth, Cart.addProductByIdCart); //ok
router.delete('/:cid', auth, Cart.deleteById); //ok
router.delete('/:cid/products/:pid', auth, Cart.removeProductByIdCart); //ok

module.exports = router;
