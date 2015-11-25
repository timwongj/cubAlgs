var Alg = require('../schemas/algSchema');
var algService = require('../services/algService');
var Promise = require('bluebird');
var statusCodes = require('../lib/statusCodes');

module.exports = (function() {

  'use strict';

  return {

    /**
     * Get algs given query.
     * @param req
     * @param res
     * @param next
     */
    getAlgs: function(req, res, next) {

      Alg.find(req.query)
        .exec(function(err, algs) {
        if (err) {
          res.status(statusCodes.BAD_REQUEST).json(err.message);
        } else {
          res.json(algs);
        }
      });

    },

    /**
     * Get alg given mongo id.
     * @param req
     * @param res
     * @param next
     */
    getAlg: function(req, res, next) {

      Alg.findOne({_id: req.params._id})
        .exec(function(err, alg) {
        if (err) {
          res.status(statusCodes.BAD_REQUEST).json(err.message);
        } else {
          res.json(alg);
        }
      });

    },

    /**
     * Create new alg.
     * @param req
     * @param res
     * @param next
     */
    createAlg: function(req, res, next) {

      // TODO - add req.user as creator

      algService.validateAlg(req.body.alg, req.body.case)
        .then(function(moves) {
          var alg = new Alg({
            alg: req.body.alg,
            case: req.body.case,
            moveCount: moves,
            description: req.body.description,
            tags: req.body.tags,
            events: req.body.events,
            type: req.body.type
          });
          alg.save(function(err) {
            if (err) {
              res.status(statusCodes.BAD_REQUEST).json(err.message);
            } else {
              res.json(alg);
            }
          });
        })
        .catch(next);

    },

    /**
     * Update alg given id.
     * @param req
     * @param res
     * @param next
     */
    updateAlg: function(req, res, next) {

      // TODO - validate that authorized user is updating

      algService.validateAlg(req.body.alg, req.body.case)
        .then(function(moves) {
          Alg.findByIdAndUpdate(req.params._id, {
            alg: req.body.alg,
            case: req.body.case,
            moveCount: moves,
            description: req.body.description,
            tags: req.body.tags,
            events: req.body.events,
            type: req.body.type,
            _updatedAt: Date.now()
          }, { runValidators: true }, function(err, alg) {
            if (err) {
              res.status(statusCodes.BAD_REQUEST).json(err.message);
            } else {
              res.json(alg);
            }
          });
        })
        .catch(next);

    },

    removeAlg: function(req, res, next) {

      // TODO - validate that authorized user is deleting

      Alg.remove({_id: req.params._id})
        .exec(function(err, response) {
          if (err) {
            res.status(statusCodes.BAD_REQUEST).json(err.message);
          } else {
            res.json(response);
          }
        });

    }

  };

})();