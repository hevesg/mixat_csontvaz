module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
      options: {
        globals: {
          jQuery: true
        }
      }
    },

    concat: {
      options: {
        stripBanners: true,
        banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
          '<%= grunt.template.today("yyyy-mm-dd HH:MM:ss") %> */',
        separator: ';',
      },
      dist: {
        src: [
          'node_modules/jquery/dist/jquery.js',

          'node_modules/bootstrap/js/transition.js',
          'node_modules/bootstrap/js/alert.js',
          'node_modules/bootstrap/js/button.js',
          'node_modules/bootstrap/js/carousel.js',
          'node_modules/bootstrap/js/collapse.js',
          'node_modules/bootstrap/js/dropdown.js',
          'node_modules/bootstrap/js/modal.js',
          'node_modules/bootstrap/js/tooltip.js',
          'node_modules/bootstrap/js/popover.js',
          'node_modules/bootstrap/js/scrollspy.js',
          'node_modules/bootstrap/js/tab.js',

          /*'app/drupal-prefix.js',*/
          'app/analytics.js',
          'app/javascript.js',
          'app/drupal-postfix.js'
        ],
        dest: 'js/<%= pkg.name %>.js',
      },
    },

    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
          '<%= grunt.template.today("yyyy-mm-dd HH:MM:ss") %> */',
        preserveComments: false
      },
      my_target: {
        files: {
          'js/<%= pkg.name %>.min.js': ['js/<%= pkg.name %>.js']
        }
      }
    },

    less: {
      production: {
        options: {
          options: {
            //paths: ['app/bootstrap/less']
          },
          banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
            '<%= grunt.template.today("yyyy-mm-dd HH:MM:ss") %> */'
        },
        files: {
          'css/<%= pkg.name %>.css': 'bootstrap/less/bootstrap.less',
          //'css/<%= pkg.name %>.import.css': 'bootstrap/less/imports.less'
        }
      }
    },
    cssmin: {
      options: {
        shorthandCompacting: false,
        roundingPrecision: -1,
        keepSpecialComments:1
      },
      target: {
        files: {
          'css/<%= pkg.name %>.min.css': ['css/<%= pkg.name %>.css']
        }
      }
    },
    watch: {
      scripts: {
        files: ['app/js/javascript.js'],
        tasks: ['js'],
      },
      styles: {
        files: ['**/*.less'],
        tasks: ['css'],
      }
    },
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('js', ['concat', 'uglify']);
  grunt.registerTask('css', ['less', 'cssmin']);
  grunt.registerTask('default', ['js','css']);
};
