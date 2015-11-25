(function() {

  'use strict';

  function AlgorithmsController($scope, $resource, $modal) {

    var Algs = $resource('api/algs');

    $scope.algorithms = Algs.query();

    $scope.createAlgorithm = function() {
      $modal.open({
        animation: true,
        templateUrl: '/dist/components/cubAlgs/algorithms/createAlgorithm.html',
        controller: 'CreateAlgorithmController'
      });
    };

  }

  angular.module('CubAlgs').controller('AlgorithmsController', ['$scope', '$resource', '$modal', AlgorithmsController]);

})();
