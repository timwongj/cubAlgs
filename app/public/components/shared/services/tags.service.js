(function() {

  'use strict';

  function Tags() {

    return [
      {tag: '3-Cycle Edges', color: 'green'},
      {tag: '3-Cycle Corners', color: 'blue'},
      {tag: 'M2 Edges', color: 'yellow'},
      {tag: 'OP Edges', color: 'orange'},
      {tag: 'OP Corners', color: 'purple'},
      {tag: 'Pure Commutator', color: 'pink'},
      {tag: 'A9', color: 'brown'}
    ];

  }

  angular.module('CubAlgs').factory('TagsService', Tags);

})();
