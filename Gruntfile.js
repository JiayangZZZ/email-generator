module.exports = function(grunt) {

  grunt.initConfig({

    watch : {

      templates : {
        files : [
          '**/*.dot'
        ],

        tasks : ['dot']
      }
    },

    dot : {
      dist: {
        options: {
          variable : 'tmpl',
          root : __dirname + '/build',
          requirejs : true,
          node : true
        },
        src : [
          '**/*.dot'
        ],
        dest : 'build/tmpl.js'
      }
    },

    translate: {
      dist: {
        options: {
          config : './translations',
          requirejs : true,
          defaultLanguage : 'en', // grunt-translate use it to update translation.
          output : './translations/output',
          src : ['**/*.js', '!./vendor/**/*.js'],
          interface: {
            autoOpen : false,
            port     : 3001
          }
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-dot-compiler');
  grunt.loadNpmTasks('grunt-contrib-watch');
};
