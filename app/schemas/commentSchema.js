var mongoose = require('mongoose');

module.exports = (function() {

  'use strict';

  var Schema = mongoose.Schema;
  var ObjectId = Schema.ObjectId;

  var CommentSchema = new mongoose.Schema({
    _id: {type: ObjectId, unique: true},
    _creator: {type: Schema.Types.ObjectId, ref: 'User'},
    content: String,
    likes: [{type: Schema.Types.ObjectId, ref: 'User'}],
    replies: [{type: Schema.Types.ObjectId, ref: 'Reply'}],
    _createdAt: {type: Date, default: Date.now},
    _updatedAt: {type: Date, default: Date.now}
  });

  var Comment = mongoose.model('Comment', CommentSchema);

  return Comment;

})();
