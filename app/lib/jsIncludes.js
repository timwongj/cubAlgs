module.exports = (function() {

  'use strict';

  var jsIncludes = {};

  /**
   * Cub Algs client side unminified js files
   */
  jsIncludes.cubAlgsUnminified = [
    'app/public/app.js',
    'app/public/controller.js',
    'app/public/components/home/home.controller.js',
    'app/public/components/admin/admin.controller.js',
    'app/public/components/profile/profile.controller.js'
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