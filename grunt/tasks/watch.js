(function() {

  'use strict';

  module.exports = function(grunt) {

    grunt.config('watch', {
      html: {
        files: ['app/**/*.html'],
        tasks: ['copy']
      },
      js: {
        files: ['server.js', 'app/**/*.js', 'test/**/*', 'config/**/*', 'grunt/**/*', 'Gruntfile.js'],
        tasks: ['jshint', 'concat', 'uglify']
      },
      css: {
        files: ['app/public/less/*.less'],
        tasks: ['concat', 'less:development']
      }
    });

    grunt.registerTask('watch', function() {
      grunt.task.run(['watch']);
    });

    grunt.loadNpmTasks('grunt-contrib-watch');

  }

})();