const express = require('express');
const router = express.Router();
const auth = require('../auths/service/auth.service');
const Cart = require(`./service/cart.service`);

router.get('/', auth.verifyToken, Cart.getAll); //ok
router.get('/:cid/products', auth.verifyToken, Cart.getProductCars); // ok
router.get('/:cid', auth.verifyToken, Cart.getById); //ok
router.post('/', auth.verifyToken, Cart.create); // ok
router.post('/:cid/products/:pid', auth.verifyToken, Cart.addProductByIdCart); //ok
router.delete('/:cid', auth.verifyToken, Cart.deleteById); //ok
router.delete(
  '/:cid/products/:pid',
  auth.verifyToken,
  Cart.removeProductByIdCart,
); //ok

module.exports = router;
