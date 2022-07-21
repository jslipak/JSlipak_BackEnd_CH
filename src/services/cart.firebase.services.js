const dbConfig = require(`../config/db.mongo.config`);

class Cart {
  async getAll(req, res) {
    const db = new dbConfig('carts');
    const data = await db.getAll();
    res.json({ items: data });
  }

  async getById(req, res) {
    const db = new dbConfig('carts');
    console.log(req.params.cid);
    let obj = await db.getById(req.params.cid);
    res.json({ item: obj });
  }

  async getProductCars(req, res) {
    const db = new dbConfig('carts');
    console.log(req.params.cid);
    const data = await db.getById(req.params.cid);
    res.json({ products: data.products });
  }

  async create(req, res) {
    const db = new dbConfig('carts');
    const newCart = {
      products: [],
    };
    const newData = await db.create(newCart);
    res.json({ item: newData });
  }

  async deleteById(req, res) {
    const db = new dbConfig('carts');
    console.log(req.params.cid);
    const obj = await db.deleteById(req.params.cid);
    res.json({ item: obj });
  }

  async updateById(req, res) {
    console.log(req.params.cid);
    const db = new dbConfig('carts');
    let obj = req.body;
    const objRes = await db.updateById(req.params.cid, obj);
    res.json({ item: objRes });
  }

  async addProductByIdCart(req, res) {
    try {
      const dbP = new dbConfig('products');
      const dbC = new dbConfig('carts');
      console.log(req.params);
      let pid = req.params.pid;
      let cid = req.params.cid;
      const product = await dbP.getById(pid);
      const cart = await dbC.getById(cid);
      if (product.stock > 0) {
        console.log(' hay stock');
        const indexCart = cart.products.findIndex(
          (e) => String(e.pid) == String(pid),
        );
        if (indexCart === -1) {
          cart.products.push({ pid, quantity: 1 });
          console.log(cart);
        } else {
          cart.products[indexCart].quantity += 1;
        }
        dbC.updateById(cid, cart);
      } else {
        console.log('no hay stock');
        res.json({ msg: 'no hay suficiente Stock' });
      }
      res.json(cart);
    } catch {
      res.json({ error: 'Product not found' });
    }
  }

  async removeProductByIdCart(req, res) {
    try {
      console.log(req.params);
      const dbC = new dbConfig('carts');
      let cid = req.params.cid;
      const cart = await dbC.getById(cid);
      const indexProduct = cart.products.findIndex(
        (e) => String(e.pid) === req.params.pid,
      );
      if (cart.products[indexProduct].quantity == 1) {
        cart.products.splice(indexProduct, 1);
      } else {
        cart.products[indexProduct].quantity -= 1;
      }
      dbC.updateById(cid, cart);

      res.json({ msg: cart });
    } catch {
      res.json({ error: 'Product not found' });
    }
  }
}

module.exports = new Cart();
