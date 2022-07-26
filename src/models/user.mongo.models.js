const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const validateEmail = function (email) {
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email);
};

const User = new Schema({
  username: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    required: 'Email address is required',
    validate: [validateEmail, 'Please fill a valid email address'],
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      'Please fill a valid email address',
    ],
  },
  fullName: { type: String, require: true, default: 'John Doe' },
  address: { type: String, require: true, default: 'No address' },
  birthday: { type: Date, require: true, default: Date.now },
  phone: { type: String, require: true, default: 'No phone' },
  avatar: { type: String, require: true, default: 'No avatar' },
});

User.plugin(passportLocalMongoose);
module.exports = mongoose.model('User', User);
