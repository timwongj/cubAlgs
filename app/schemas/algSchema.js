var mongoose = require('mongoose');

module.exports = (function() {

  'use strict';

  var Schema = mongoose.Schema;
  var ObjectId = Schema.ObjectId;

  var AlgSchema = new mongoose.Schema({
    id: ObjectId,
    events: [String],
    case: {},
    alg: {},
    description: String,
    createdBy: {},
    createdAt: {
      type: Date,
      default: Date.now
    },
    updatedAt: {
      type: Date,
      default: Date.now
    },
    likes: [],
    comments: [],
    other: {}
  });

  var Alg = mongoose.model('Alg', AlgSchema);

  return Alg;

})();
