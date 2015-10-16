(function() {

  'use strict';

  function Config($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/dist/components/cubAlgs/home/home.html',
        controller: 'HomeController'
      })
      .when('/profile', {
        templateUrl: '/dist/components/cubAlgs/profile/profile.html',
        controller: 'ProfileController'
      })
      .when('/algorithms', {
        templateUrl: '/dist/components/cubAlgs/algorithms/algorithms.html',
        controller: 'AlgorithmsController'
      })
      .when('/admin', {
        templateUrl: '/dist/components/cubAlgs/admin/admin.html',
        controller: 'AdminController'
      })
      .otherwise({
        redirectTo: '/'
      });
  }

  function Run() {

  }

  angular.module('CubAlgs', ['ui.bootstrap', 'ngRoute', 'ngResource', 'angularFileUpload']);

  angular.module('CubAlgs').config(['$routeProvider', Config]).run([Run]);

})();