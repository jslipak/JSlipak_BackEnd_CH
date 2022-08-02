const mongoose = require('mongoose');
const products = require('../models/product.models');
const carts = require('../models/cart.models');
const users = require('../models/user.models');

// TODO: refactoring  Crud , I don't know if a need these class

class CollectionCRUD {
  constructor(doc) {
    //this.model = doc;
    this._model(doc);
  }

  _model(model) {
    const models = { products: products, carts: carts, users: users };
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
