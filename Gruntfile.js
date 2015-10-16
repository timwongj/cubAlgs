module.exports = function(grunt) {

  grunt.loadTasks('grunt/tasks');

  grunt.registerTask('default', ['jshint', 'karma', 'clean', 'copy', 'concat', 'less:development', 'uglify', 'watch']);
  grunt.registerTask('prod', ['clean', 'copy', 'concat', 'less:production', 'uglify']);

};