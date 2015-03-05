module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    cssmin: {
      target: {
        files: {
          'assets/css/style.min.css': 'assets/css/main.css'
        }
      }
    },
    concat: {
      js: {
        src: [
          'app/app.module.js',
          'app/app.routes.js',
          'app/**/*.js'
        ],
        dest: 'app/app.min.js'
      }
    },
    uglify: {
      js: {
        src: 'app/app.min.js',
        dest: 'app/app.min.js'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('default', [
    'concat:js',
    'uglify:js',
    'cssmin:target'
  ]);

};
