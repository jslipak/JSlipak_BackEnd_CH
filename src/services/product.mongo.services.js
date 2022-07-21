const dbConfig = require(`../config/db.mongo.config`);

class Product {
  async getAll(req, res) {
    const db = new dbConfig('products');
    const data = await db.getAll();
    res.json({ items: data });
  }
  async create(req, res) {
    const db = new dbConfig('products');
    const newProduct = {
      title: req.body.title,
      description: req.body.description,
      code: req.body.code,
      thumbnail: req.body.thumbnail,
      price: req.body.price,
      stock: req.body.stock,
    };
    const newData = await db.create(newProduct);
    res.json({ item: newData });
  }
  async getById(req, res) {
    const db = new dbConfig('products');
    console.log(req.params.pid);
    let obj = await db.getById(req.params.pid);
    res.json({ item: obj });
  }
  async deleteById(req, res) {
    const db = new dbConfig('products');
    console.log(req.params.pid);
    const obj = await db.deleteById(req.params.pid);
    res.json({ item: obj });
  }
  async updateById(req, res) {
    console.log(req.params.pid);
    const db = new dbConfig('products');
    let obj = {
      title: req.body.title,
      code: req.body.code,
      thumbnail: req.body.thumbnail,
      price: req.body.price,
      stock: req.body.stock,
    };
    const objRes = await db.updateById(req.params.pid, obj);
    res.json({ item: obj });
  }
}

module.exports = new Product();
