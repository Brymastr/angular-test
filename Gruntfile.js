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
          'app/shared/**/*.js',
          'Gruntfile.js'
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
        files: 'assets/css/main.css',
        tasks: 'cssmin'
      }
    },
    nodemon: {
      dev: {
        script: 'server.js'
      }
    },
    auto_install: {
      local: {}
    },
    markdown: {
      all: {
        files: [
          {
            expand: true,
            flatten: true,
            cwd: 'blog/',
            src: ['**/*.md'],
            dest: 'blog/compiled/',
            ext: '.html'
          }
        ]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-auto-install');
  grunt.loadNpmTasks('grunt-nodemon');
  grunt.loadNpmTasks('grunt-markdown');

  grunt.registerTask('build', [
    'concat',
    'cssmin'
  ]);

  grunt.registerTask('default', ['build', 'markdown', 'nodemon', 'watch']);

  grunt.registerTask('install', 'auto_install');


};
