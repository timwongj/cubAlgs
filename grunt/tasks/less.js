(function() {

  'use strict';

  module.exports = function(grunt) {

    grunt.config('less', {
      development: {
        files: {
          'dist/css/cubAlgs.css': 'dist/css/cubAlgs.less'
        }
      },
      production: {
        options: {
          cleancss: true
        },
        files: {
          'dist/css/cubAlgs.css': 'dist/css/cubAlgs.less'
        }
      }
    });

    grunt.registerTask('less', function() {
      grunt.task.run(['less']);
    });

    grunt.loadNpmTasks('grunt-contrib-less');

  }

})();