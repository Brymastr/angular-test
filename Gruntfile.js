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
      //angular: {
      //  src: [
      //    'bower_components/angular/angular.js',
      //    'bower_components/angular-animate/angular-animate.js',
      //    'bower_components/angular-route/angular-route.js'
      //  ],
      //  dest: 'app/angular.min.js'
      //},
      app: {
        src: [
          'app/app.module.js',
          'app/app.routes.js',
          'app/pages/**/*.js',
          'app/shared/**/*.js'
        ],
        dest: 'app/app.min.js'
      }
    },
    auto_install: {
      local: {}
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-auto-install');

  grunt.registerTask('default', [
    'concat',
    'cssmin'
  ]);

  grunt.registerTask('install', 'auto_install');


};
