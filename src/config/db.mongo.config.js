const mongoose = require('mongoose');
const products = require('../models/product.mongo.models');
const carts = require('../models/cart.mongo.models');

class CollectionCRUD {
  constructor(doc) {
    //this.model = doc;
    this._model(doc);
  }

  _model(model) {
    const models = { products: products, carts: carts };
    return (this.model = models[model]);
  }

  async getAll() {
    return this.model
      .find()
      .lean()
      .then((data) => {
        return data;
      });
  }
  async create(value) {
    return this.model.create(value);
  }
  // FIX: to bad id --> send message
  async getById(id) {
    const _id = mongoose.mongo.ObjectId(id);
    return this.model.findById(_id);
  }
  async deleteById(id) {
    const _id = mongoose.mongo.ObjectId(id);
    return this.model.findByIdAndDelete(_id);
  }
  async updateById(id, value) {
    const idMongo = mongoose.mongo.ObjectId(id);
    console.log(value, idMongo);

    return this.model.findByIdAndUpdate(idMongo, value);
  }
}
module.exports = CollectionCRUD;
