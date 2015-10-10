var mongoose = require('mongoose');

module.exports = (function() {

  'use strict';

  var Schema = mongoose.Schema;
  var ObjectId = Schema.ObjectId;

  var AlgSchema = new mongoose.Schema({
    _id: {type: ObjectId, unique: true},
    _creator: {type: Schema.types.ObjectId, ref: 'User'},
    alg: {type: String, unique: true},
    case: {},
    description: String,
    events: [String],
    type: [String],
    users: [{type: Schema.types.ObjectId, ref: 'User'}],
    likes: [{type: Schema.types.ObjectId, ref: 'User'}],
    comments: [{type: Schema.types.ObjectId, ref: 'Comment'}],
    _createdAt: {type: Date, default: Date.now},
    _updatedAt: {type: Date, default: Date.now}
  });

  var Alg = mongoose.model('Alg', AlgSchema);

  return Alg;

})();
