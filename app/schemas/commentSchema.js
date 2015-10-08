var mongoose = require('mongoose');

module.exports = (function() {

  'use strict';

  var Schema = mongoose.Schema;
  var ObjectId = Schema.ObjectId;

  var CommentSchema = new mongoose.Schema({
    id: ObjectId,
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
    replies: [],
    other: {}
  });

  var Comment = mongoose.model('Comment', CommentSchema);

  return Comment;

})();
