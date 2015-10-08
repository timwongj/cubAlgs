var express = require('express');
var algController = require('../controllers/algController');

module.exports = (function() {

  'use strict';

  var router = express.Router();

  router.route('/')
    .get(function(req, res) {
      algController.getAlgs(req, res);
    })
    .post(function(req, res) {
      algController.createAlg(req, res);
    });

  router.route('/:id')
    .get(function(req, res) {
      algController.getAlg(req, res);
    })
    .put(function(req, res) {
      algController.updateAlg(req, res);
    });

  return router;

})();
