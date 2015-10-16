(function() {

  'use strict';

  module.exports = function(grunt) {

    grunt.config('uglify', {
      cubAlgsJs: {
        files: {
          'dist/js/cubAlgs.min.js': ['dist/js/cubAlgs.js']
        }
      }
    });

    grunt.registerTask('uglify', function() {
      grunt.task.run(['uglify']);
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');

  }

})();