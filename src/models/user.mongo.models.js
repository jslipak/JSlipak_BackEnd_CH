const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const User = new Schema({});

User.plugin(passportLocalMongoose);
module.exports = mongoose.model('User', User);

//const mongoose = require('mongoose');

//const userCollection = 'User';

//const UserSchema = new mongoose.Schema({
//email: {
//type: String,
//trim: true,
//lowercase: true,
//unique: true,
//required: 'Email address is required',
//validate: [validateEmail, 'Please fill a valid email address'],
//match: [
///^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
//'Please fill a valid email address',
//],
//},
//password: { type: String, required: true },
//});

//module.exports = mongoose.model(userCollection, UserSchema);
