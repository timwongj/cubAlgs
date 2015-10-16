var mongoose = require('mongoose');

module.exports = (function() {

  'use strict';

  var Schema = mongoose.Schema;
  var ObjectId = Schema.ObjectId;

  var BldSchemeSchema = new mongoose.Schema({
    buffers: {
      x3Cube: {
        edges: String,
        corners: String
      },
      x4Cube: {
        wings: String,
        corners: String,
        centers: String
      },
      x5Cube: {
        wings: String,
        edges: String,
        corners: String,
        xCenters: String,
        plusCenters: String
      }
    },
    colorScheme: {
      U: String,
      D: String,
      F: String,
      B: String,
      L: String,
      R: String
    },
    letterScheme: {
      x3Cube: {
        edges: {
          UR: String,
          RU: String,
          UF: String,
          FU: String,
          UL: String,
          LU: String,
          UB: String,
          BU: String,
          DR: String,
          RD: String,
          DF: String,
          FD: String,
          DL: String,
          LD: String,
          DB: String,
          BD: String,
          FL: String,
          LF: String,
          FR: String,
          RF: String,
          BL: String,
          LB: String,
          BR: String,
          RB: String
        },
        corners: {
          URF: String,
          RFU: String,
          FUR: String,
          UFL: String,
          FLU: String,
          LUF: String,
          ULB: String,
          LBU: String,
          BUL: String,
          UBR: String,
          BRU: String,
          RUB: String,
          DFR: String,
          FRD: String,
          RDF: String,
          DLF: String,
          LFD: String,
          FDL: String,
          DBL: String,
          BLD: String,
          LDB: String,
          DRB: String,
          RBD: String,
          BDR: String
        }
      },
      x4Cube: {},
      x5Cube: {}
    },
    _creator: {type: Schema.Types.ObjectId, ref: 'User'},
    _createdAt: {type: Date, default: Date.now},
    _updatedAt: {type: Date, default: Date.now}
  });

  var BldScheme = mongoose.model('BldScheme', BldSchemeSchema);

  return BldScheme;

})();
