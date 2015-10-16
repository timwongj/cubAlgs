(function() {

  'use strict';

  function AlgorithmsController($scope, $resource) {

    var Algs = $resource('/algs');
    $scope.algorithms = Algs.query();

    $scope.algorithm = {};

    $scope.algorithm.alg = "[(R' U R U') M2 (U R' U' R) M2]";
    $scope.algorithm.case = {
      'DF': 'UR',
      'UR': 'UB',
      'UB': 'DF'
    };
    $scope.algorithm.description = 'This is an edge commutator';
    $scope.algorithm.tags = ['Edge 3-Cycle', 'Pure Commutator'];
    $scope.algorithm.events = ['x3BLD'];
    $scope.algorithm.type = 'Commutator';

    $scope.more = function() {
      console.log('more');
    };

    $scope.submit = function() {
      console.log($scope.algorithm);

      var alg = new Algs({
        alg: $scope.algorithm.alg,
        case: $scope.algorithm.case,
        description: $scope.algorithm.description,
        tags: $scope.algorithm.tags,
        events: $scope.algorithm.events,
        type: $scope.algorithm.type
      });
      alg.$save(function(response) {
        console.log(response);
      });

    }

  }

  angular.module('CubAlgs').controller('AlgorithmsController', ['$scope', '$resource', AlgorithmsController]);

})();
