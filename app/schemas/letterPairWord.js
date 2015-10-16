var mongoose = require('mongoose');

module.exports = (function() {

  'use strict';

  var Schema = mongoose.Schema;
  var ObjectId = Schema.ObjectId;

  var LetterPairWordSchema = new mongoose.Schema({
    letters: {},
    word: {type: String},
    tags: [String],
    users: [{type: Schema.Types.ObjectId, ref: 'User'}],
    likes: [{type: Schema.Types.ObjectId, ref: 'User'}],
    comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}],
    _creator: {type: Schema.Types.ObjectId, ref: 'User'},
    _createdAt: {type: Date, default: Date.now},
    _updatedAt: {type: Date, default: Date.now}
  });

  var LetterPairWord = mongoose.model('LetterPairWord', LetterPairWordSchema);

  return LetterPairWord;

})();
