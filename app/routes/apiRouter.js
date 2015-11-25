var express = require('express');

module.exports = (function() {

  'use strict';

  var apiRouter = express.Router();

  var userRouter = require('./api/userRouter');
  var algRouter = require('./api/algRouter');

  apiRouter.use('/users', userRouter);
  apiRouter.use('/algs', algRouter);

  return apiRouter;

})();
