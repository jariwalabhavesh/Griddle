module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    connect: {
      server: {
        options: {
          port: 9000,
          hostname: '*',
          keepalive: true
        }
      }
    },
    open: {
      server: {
        url: 'http://localhost:<%= connect.server.options.port %>/index.html'
      }
    }
  });

  grunt.loadNpmTasks('grunt-open');
  grunt.loadNpmTasks('grunt-contrib-connect');

  grunt.registerTask('serve', function (target) {
    grunt.task.run([
      'open',
      'connect'
    ]);
  });

  // Default task(s).
  grunt.registerTask('default', ['serve']);
};