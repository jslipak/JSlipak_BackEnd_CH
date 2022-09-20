const { products } = require(`../config/db.config`);
const { parseMongoId } = require('../utils/db.utils');

class Product {
  async getAll(req, res) {
    const data = await products.find();
    res.json({ items: data });
  }
  async create(req, res) {
    const newProduct = {
      title: req.body.title,
      category: req.body.category,
      description: req.body.description,
      code: req.body.code,
      thumbnail: req.body.thumbnail,
      price: req.body.price,
      stock: req.body.stock,
    };
    const newData = await products.create(newProduct);
    res.json({ item: newData });
  }
  async getById(req, res, next) {
    try {
      const mongoId = parseMongoId(req.params.pid);
      const obj = await products.findById(mongoId);
      res.json({ item: obj });
    } catch (err) {
      next(err);
    }
  }
  
  async getByCategory(req, res, next){
    try{
      const category = req.params.category
      const obj = await products.find({category: category})
      res.json({items: obj})
    }catch(err){
      next(err)
    }
  }

  async deleteById(req, res, next) {
    try {
      const mongoId = parseMongoId(req.params.pid);
      const obj = await products.findOneAndDelete(mongoId);
      res.json({ item: obj });
    } catch (err) {
      next(err);
    }
  }

  async updateById(req, res, next) {
    try {
      const idMongo = parseMongoId(req.params.pid);
      let obj = {
        title: req.body.title,
        description: req.body.description,
        code: req.body.code,
        thumbnail: req.body.thumbnail,
        price: req.body.price,
        stock: req.body.stock,
      };
      const objRes = await products.findByIdAndUpdate(idMongo, obj);
      res.json({ item: obj });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = new Product();
