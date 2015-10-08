var mongoose = require('mongoose');

module.exports = (function() {

  'use strict';

  var Schema = mongoose.Schema;
  var ObjectId = Schema.ObjectId;

  var UserSchema = new mongoose.Schema({
    id: ObjectId,
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
    createdAt: {
      type: Date,
      default: Date.now
    },
    updatedAt: {
      type: Date,
      default: Date.now
    },
    bldScheme: {},
    profPic: String,
    wcaID: String,
    links: [],
    other: {}
  });

  var User = mongoose.model('User', UserSchema);

  return User;

})();
