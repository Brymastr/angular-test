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
    watch: {
      options: {
        livereload: true
      },
      js: {
        files: [
          'app/app.module.js',
          'app/app.routes.js',
          'app/pages/**/*.js',
          'app/shared/**/*.js'
        ],
        tasks: 'concat'
      },
      html: {
        files: [
          'app/pages/**/*.html',
          'app/shared/**/*.html',
          'index.html'
        ],
        tasks: []
      },
      css: {
        files: 'public/css/style.css',
        tasks: 'cssmin'
      }
    },
    nodemon: {
      dev: {
        script: './server.js'
      }
    },
    auto_install: {
      local: {}
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-auto-install');
  grunt.loadNpmTasks('grunt-nodemon');

  grunt.registerTask('build', [
    'concat',
    'cssmin'
  ]);

  grunt.registerTask('default', ['watch', 'nodemon']);

  grunt.registerTask('install', 'auto_install');


};
