const { carts, products } = require('../config/db.config');
const send = require('../utils/twilio.utils');
const sendMail = require('../utils/nodemailer.utils');
const config = require('../config');
const { parseMongoId } = require('../utils/db.utils');

class Cart {
  async getAll(req, res) {
    const data = await carts.find();
    res.json({ items: data });
  }

  async getProductCars(req, res, next) {
    try {
      const cid = parseMongoId(req.params.cid);
      const data = await carts.findById(cid);
      res.json({ products: data.products });
    } catch (err) {
      next(err);
    }
  }

  async getById(req, res) {
    const cid = parseMongoId(req.params.cid);
    let obj = await carts.findById(cid);
    res.json({ item: obj });
  }

  async create(req, res, next) {
    try {
      const newCart = {
        user: req.user.userId,
        products: [],
      };
      const newData = await carts.create(newCart);
      send(`new Cart was created at ${Date.now().toString()} `, true);
      sendMail(
        config.emailTo,
        `<h1>new Cart was created at ${Date.now().toString()}</h1> `,
      );
      res.json({ item: newData });
    } catch (err) {
      next(err);
    }
  }

  async addProductByIdCart(req, res, next) {
    try {
      let pid = parseMongoId(req.params.pid);
      let cid = parseMongoId(req.params.cid);
      const product = await products.findById(pid);
      const cart = await carts.findById(cid);
      console.log(product);
      if (product.stock > 0) {
        console.log(' hay stock');
        const indexCart = cart.products.findIndex(
          (e) => String(e.pid) == String(pid),
        );
        if (indexCart === -1) {
          cart.products.push({ pid, quantity: 1 });
          cart.save();
          console.log(cart);
        } else {
          cart.products[indexCart].quantity += 1;
          cart.save();
        }
      } else {
        console.log('no hay stock');
        res.json({ msg: 'no hay suficiente Stock' });
      }
      res.json(cart);
    } catch (err) {
      next(err);
    }
  }

  async deleteById(req, res, next) {
    try {
      const cid = parseMongoId(req.params.cid);
      const obj = await carts.findOneAndDelete(cid);
      res.json({ item: obj });
    } catch (err) {
      next(err);
    }
  }

  async removeProductByIdCart(req, res, next) {
    try {
      let cid = parseMongoId(req.params.cid);
      const cart = await carts.findById(cid);
      const indexProduct = cart.products.findIndex(
        (e) => String(e.pid) === req.params.pid,
      );
      cart.products[indexProduct].quantity == 1
        ? cart.products[indexProduct].remove()
        : (cart.products[indexProduct].quantity -= 1);
      console.log(cart);
      cart.save();

      res.json({ msg: cart });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = new Cart();
