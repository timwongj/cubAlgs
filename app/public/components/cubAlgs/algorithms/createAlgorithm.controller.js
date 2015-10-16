(function() {

  'use strict';

  function CreateAlgorithmController($scope, $resource, $modalInstance, TagsService) {

    var Algs = $resource('/algs');

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

    };

    $scope.cancel = function() {
      $modalInstance.close();
    };

  }

  angular.module('CubAlgs').controller('CreateAlgorithmController', ['$scope', '$resource', '$modalInstance', 'TagsService', CreateAlgorithmController]);

})();
