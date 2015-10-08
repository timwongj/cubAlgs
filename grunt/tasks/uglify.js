(function() {

  'use strict';

  module.exports = function(grunt) {

    grunt.config('uglify', {
      my_target: {
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