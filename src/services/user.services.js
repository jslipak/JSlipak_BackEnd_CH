const UserModel = require('../models/user.mongo.models');
const mailer = require('../utils/nodemailer.utils');
const logger = require('../utils/logger.utils');
const { mongo } = require('mongoose');
const fs = require('fs');

class User {
  async getAll(req, res, next) {
    try {
      const data = await UserModel.find({});
      res.json(data);
    } catch (err) {
      next(err);
    }
  }

  async create(req, res, next) {
    logger.info(`new user:${req.body.username} at ${Date.now()}`);
    try {
      UserModel.register(
        new UserModel({
          username: req.body.username,
          fullName: req.body.fullname,
          address: req.body.address,
          birthday: req.body.birthday,
          phone: req.body.phone,
          avatar: `./src/my-uploads/${req.body.username}.jpg`,
        }),
        req.body.password,
        function (err) {
          if (err) {
            logger.error(err);
            return next(err);
          }
          mailer(
            'new user created',
            `<p>new user created: ${req.body.username} , ${req.body.fullname}, ${req.body.phone}</p>`,
          );
          fs.writeFileSync(
            `./src/my-uploads/${req.body.username}_avatar.jpg`,
            req.file.buffer,
          );
          res.redirect('/');
        },
      );
    } catch (err) {
      logger.error(err);
      res.send('erros send ');
    }
  }

  async deleteById(req, res, next) {
    try {
      const idMongo = mongo.ObjectId.isValid(req.params.uid)
        ? req.params.uid
        : ObjectId(req.params.uid);
      await UserModel.findByIdAndDelete(idMongo);
      res.redirect('/');
    } catch (err) {
      next(err);
    }
  }
  async findById(req, res, next) {
    try {
      console.log(req.params.uid);
      const idMongo = mongo.ObjectId.isValid(req.params.uid)
        ? req.params.uid
        : ObjectId(req.params.uid);
      const user = await UserModel.findById(idMongo);
      res.send(user);
    } catch (err) {
      next(err);
    }
  }

  // TODO: make a password change  and password
  async updateById(req, res, next) {
    try {
      const idMongo = mongo.ObjectId.isValid(req.params.uid)
        ? req.params.uid
        : ObjectId(req.params.uid);
      const updateUser = user.findByIdAndUpdate(idMongo, req.body);
      res.json(updateUser);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = new User();
