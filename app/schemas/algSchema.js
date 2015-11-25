var mongoose = require('mongoose');

module.exports = (function() {

  'use strict';

  var Schema = mongoose.Schema;

  var AlgSchema = new mongoose.Schema({
    alg: {type: String, unique: true, required: true},
    case: {type: {}, required: true},
    caseName: {type: String},
    moveCount: {type: Number, required: true},
    description: String,
    tags: [String],
    events: {type: [String], required: true},
    type: [String],
    users: [{type: Schema.Types.ObjectId, ref: 'User'}],
    likes: [{type: Schema.Types.ObjectId, ref: 'User'}],
    comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}],
    _creator: {type: Schema.Types.ObjectId, ref: 'User'},
    _createdAt: {type: Date, default: Date.now},
    _updatedAt: {type: Date, default: Date.now}
  });

  var Alg = mongoose.model('Alg', AlgSchema);

  return Alg;

})();
