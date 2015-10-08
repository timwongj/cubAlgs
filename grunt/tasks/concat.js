(function() {

  'use strict';

  module.exports = function(grunt) {

    var jsIncludes = require('../../app/lib/jsIncludes');

    grunt.config('concat', {
      cubAlgsJs: {
        src: jsIncludes.cubAlgsUnminified,
        dest: 'dist/js/cubAlgs.js'
      },
      libJs: {
        src: jsIncludes.thirdPartyMinified,
        dest: 'dist/js/lib.min.js'
      },
      cubAlgsCss: {
        src: [
          'app/public/css/style.css'
        ],
        dest: 'dist/css/cubAlgs.css'

      },
      libCss: {
        src: [
          'bower_components/bootstrap/dist/css/bootstrap.min.css',
          'bower_components/bootstrap/dist/css/bootstrap-theme.min.css',
          'bower_components/components-font-awesome/css/font-awesome.min.css'
        ],
        dest: 'dist/css/lib.css'
      }
    });

    grunt.registerTask('concat', function() {
      grunt.task.run(['concat']);
    });

    grunt.loadNpmTasks('grunt-contrib-concat');

  }

})();