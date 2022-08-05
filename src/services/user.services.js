const UserModel = require('../models/user.models');
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
    try {
      logger.info(`new user:${req.body.username} at ${Date.now()}`);
      if (res.file !== undefined) {
        fs.writeFileSync(
          `./src/my-uploads/${req.body.username}_avatar.jpg`,
          req.file.buffer,
        );
      }

      UserModel.register(
        new UserModel({
          username: req.body.username,
          fullName: req.body.fullname,
          address: req.body.address,
          birthday: req.body.birthday,
          phone: req.body.phone,
          avatar: req.file
            ? `./src/my-uploads/${req.body.username}_avatar.jpg`
            : `no photo`,
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
      const idMongo = mongo.ObjectId.isValid(req.params.uid)
        ? req.params.uid
        : ObjectId(req.params.uid);
      const user = await UserModel.findById(idMongo);
      res.send(user);
    } catch (err) {
      next(err);
    }
  }

  async updateByIdPassword(req, res, next) {
    try {
      console.log(req.body);
      const idMongo = mongo.ObjectId.isValid(req.params.uid)
        ? req.params.uid
        : ObjectId(req.params.uid);
      const idUser = await UserModel.findById(idMongo);
      try {
        await idUser.changePassword(req.body.oldPassword, req.body.newPassword);
        return res.json({ msg: 'successful' });
      } catch (err) {
        return res.json({ msg: err });
      }
    } catch (err) {
      next(err);
    }
  }

  async updateById(req, res, next) {
    try {
      const idMongo = mongo.ObjectId.isValid(req.params.uid)
        ? req.params.uid
        : ObjectId(req.params.uid);
      const idUser = await UserModel.findById(idMongo);
      console.log(idUser);
      if (req.file) {
        req.body.avatar = `./src/my-uploads/${idUser.username}_avatar.jpg`;
        fs.writeFileSync(
          `./src/my-uploads/${idUser.username}_avatar.jpg`,
          req.file.buffer,
        );
      } else {
        console.log(idUser);
        req.body.avatar = idUser.avatar;
      }

      const updateUser = await UserModel.findByIdAndUpdate(idMongo, req.body);
      res.json(updateUser);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = new User();
