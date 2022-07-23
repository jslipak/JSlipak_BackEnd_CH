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
    try {
      const _id = mongoose.mongo.ObjectId(id);
      return this.model.findById(_id);
    } catch (err) {
      return { err };
    }
  }
  async deleteById(id) {
    try {
      const _id = mongoose.mongo.ObjectId(id);
      return this.model.findByIdAndDelete(_id);
    } catch (err) {
      return { err };
    }
  }
  async updateById(id, value) {
    try {
      const idMongo = mongoose.mongo.ObjectId(id);
      return this.model.findByIdAndUpdate(idMongo, value);
    } catch (err) {
      return { err };
    }
  }
}
module.exports = CollectionCRUD;
