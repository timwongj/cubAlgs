(function() {

  'use strict';

  function AlgorithmsController($scope) {

    $scope.algorithm = '';
    $scope.displacements = [{}, {}, {}];

    console.log($scope.algorithm);
    console.log($scope.displacements);

  }

  angular.module('CubAlgs').controller('AlgorithmsController', ['$scope', AlgorithmsController]);

})();
