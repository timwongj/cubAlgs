module.exports = (function() {

  'use strict';

  var jsIncludes = {};

  /**
   * Cub Algs client side unminified js files
   */
  jsIncludes.cubAlgsUnminified = [
    'app/public/app.js',

    //controllers
    'app/public/controller.js',
    'app/public/components/cubAlgs/admin/admin.controller.js',
    'app/public/components/cubAlgs/algorithms/algorithms.controller.js',
    'app/public/components/cubAlgs/algorithms/createAlgorithm.controller.js',
    'app/public/components/cubAlgs/home/home.controller.js',
    'app/public/components/cubAlgs/profile/profile.controller.js',

    //services
    'app/public/components/shared/services/tags.service.js'
  ];

  /**
   * Third Party minified js files
   * @type {string[]}
   */
  jsIncludes.thirdPartyMinified = [
    'bower_components/jquery/dist/jquery.min.js',
    'bower_components/jquery-ui/jquery-ui.min.js',
    'bower_components/bootstrap/dist/js/bootstrap.min.js',
    'bower_components/angular/angular.min.js',
    'bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js',
    'bower_components/angular-route/angular-route.min.js',
    'bower_components/angular-resource/angular-resource.min.js',
    'bower_components/angular-file-upload/dist/angular-file-upload.min.js',
    'bower_components/moment/min/moment.min.js'
  ];

  return jsIncludes;

})();