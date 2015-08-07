module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    concurrent: {
      target: {
        tasks: [
          'watch',
          'nodemon'
        ],
        options: {logConcurrentOutput: true}
      }
    },
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
      server: {
        files: [
          'server/**/*.js',
          'Gruntfile.js'
        ],
        tasks: []
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
        files: 'assets/css/main.css',
        tasks: 'cssmin'
      },
      markdown: {
        files: 'server/blog/markdown/**/*.md',
        tasks: 'syncAll'
      }
    },
    nodemon: {
      dev: {
        script: 'server.js'
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
  grunt.loadNpmTasks('grunt-http');
  grunt.loadNpmTasks('grunt-concurrent');
  grunt.loadNpmTasks('grunt-markdown');

  grunt.registerTask('build', [
    'concat',
    'cssmin'
  ]);

  grunt.registerTask('default', ['build', 'concurrent:target']);

  grunt.registerTask('install', 'auto_install');

  grunt.registerTask('syncAll', 'http');

};
