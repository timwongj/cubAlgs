var express = require('express');
var Alg = require('../schemas/algSchema');

module.exports = (function() {

  'use strict';

  var algController = {

    /**
     * Get algs given query.
     * @param req
     * @param res
     */
    getAlgs: function(req, res) {
      Alg.find(req.query)
        .exec(function(err, algs) {
        if (err) {
          res.status(500).json({'message':'cannot get alg'});
        } else {
          res.json(algs);
        }
      });
    },

    /**
     * Get alg given mongo id.
     * @param req
     * @param res
     */
    getAlg: function(req, res) {
      Alg.findOne({id: req.params.id})
        .exec(function(err, alg) {
        if (err) {
          res.status(500).json({'message': 'cannot get alg for id: ' + req.params.id});
        } else {
          res.json(alg);
        }
      });
    },

    /**
     * Create new alg.
     * @param req
     * @param res
     */
    createAlg: function(req, res) {
      var alg = new Alg();
      alg.alg = req.body.alg;
      alg.case = req.body.case;
      alg.description = req.body.description;
      alg.tags = req.body.tags;
      alg.events = req.body.events;
      alg.type = req.body.type;
      alg.save(function(err) {
        if (err) {
          throw err;
          res.status(500).json({'message': 'cannot save alg'});
        } else {
          res.status(200).json(alg);
        }
      });
    },

    /**
     * Update alg given id.
     * @param req
     * @param res
     */
    updateAlg: function(req, res) {
      Alg.update({id: req.params.id})
        .exec(function(err, alg) {
        if (err) {
          res.status(500).json({'message': 'cannot update alg for id: ' + req.params.id});
        } else {
          req.json(alg);
        }
      });
    }

  };

  return algController;

})();