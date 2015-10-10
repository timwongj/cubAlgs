var mongoose = require('mongoose');

module.exports = (function() {

  'use strict';

  var Schema = mongoose.Schema;
  var ObjectId = Schema.ObjectId;

  var UserSchema = new mongoose.Schema({
    _id: {type: ObjectId, unique: true},
    facebook_id: String,
    username: String,
    displayName: String,
    name: {},
    firstName: String,
    lastName: String,
    email: String,
    emails: [],
    gender: String,
    profileUrl: String,
    provider: String,
    locale: String,
    timezone: String,
    bldScheme: {type: Schema.types.ObjectId, ref: 'BldScheme'},
    profPic: String,
    wcaID: String,
    links: [],
    _createdAt: {type: Date, default: Date.now},
    _updatedAt: {type: Date, default: Date.now}
  });

  var User = mongoose.model('User', UserSchema);

  return User;

})();
