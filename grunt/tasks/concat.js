(function() {

  'use strict';

  module.exports = function(grunt) {

    var jsIncludes = require('../../app/lib/jsIncludes');
    var cssIncludes = require('../../app/lib/cssIncludes');

    grunt.config('concat', {
      cubAlgsJs: {
        src: jsIncludes.cubAlgsUnminified,
        dest: 'dist/js/cubAlgs.js'
      },
      libJs: {
        src: jsIncludes.thirdPartyMinified,
        dest: 'dist/js/lib.min.js'
      },
      cubAlgsLess: {
        src: cssIncludes.cubAlgsUnminified,
        dest: 'dist/css/cubAlgs.less'
      },
      libCss: {
        src: cssIncludes.thirdPartyMinified,
        dest: 'dist/css/lib.css'
      }
    });

    grunt.registerTask('concat', function() {
      grunt.task.run(['concat']);
    });

    grunt.loadNpmTasks('grunt-contrib-concat');

  }

})();