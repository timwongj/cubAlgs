var mongoose = require('mongoose');

module.exports = (function() {

  'use strict';

  var Schema = mongoose.Schema;
  var ObjectId = Schema.ObjectId;

  var ReplySchema = new mongoose.Schema({
    _id: {type: ObjectId, unique: true},
    _creator: {type: Schema.types.ObjectId, ref: 'User'},
    content: String,
    likes: [{type: Schema.types.ObjectId, ref: 'User'}],
    _createdAt: {type: Date, default: Date.now},
    _updatedAt: {type: Date, default: Date.now}
  });

  var Reply = mongoose.model('Reply', ReplySchema);

  return Reply;

})();
