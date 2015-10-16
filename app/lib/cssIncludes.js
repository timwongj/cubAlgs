module.exports = (function() {

  'use strict';

  var cssIncludes = {};

  /**
   * Cub Algs client side unminified js files
   */
  cssIncludes.cubAlgsUnminified = [
    'app/public/less/algorithms.less'
  ];

  cssIncludes.thirdPartyMinified = [
    'bower_components/bootstrap/dist/css/bootstrap.min.css',
    'bower_components/bootstrap/dist/css/bootstrap-theme.min.css',
    'bower_components/components-font-awesome/css/font-awesome.min.css'
  ];

  return cssIncludes;

})();