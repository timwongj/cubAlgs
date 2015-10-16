var mongoose = require('mongoose');

module.exports = (function() {

  'use strict';

  var Schema = mongoose.Schema;
  var ObjectId = Schema.ObjectId;

  var ReplySchema = new mongoose.Schema({
    content: String,
    likes: [{type: Schema.Types.ObjectId, ref: 'User'}],
    _creator: {type: Schema.Types.ObjectId, ref: 'User'},
    _createdAt: {type: Date, default: Date.now},
    _updatedAt: {type: Date, default: Date.now}
  });

  var Reply = mongoose.model('Reply', ReplySchema);

  return Reply;

})();
