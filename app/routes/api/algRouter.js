var express = require('express');
var algController = require('../../controllers/algController');

module.exports = (function() {

  'use strict';

  var router = express.Router();

  router.route('/')
    .get(algController.getAlgs)
    .post(algController.createAlg);

  router.route('/:_id')
    .get(algController.getAlg)
    .put(algController.updateAlg)
    .delete(algController.removeAlg);

  return router;

})();
