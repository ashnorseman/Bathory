/**
 * Created by Ash.Zhang on 2015/5/7.
 */


module.exports = function (grunt) {

  grunt.initConfig({

    uglify: {
      out: {
        options: {
          preserveComments: false
        },
        files: {
          'public/dist/bathory.min.js': [
            'public/js/bathory.js'
          ]
        }
      }
    },

    less: {
      options: {
        compress: true
      },
      out: {
        files: [
          {
            src: ['public/less/base.less'],
            dest: 'public/css/bathory.min.css'
          }
        ]
      }
    },

    karma: {
      unit: {
        configFile: 'karma.conf.js',
        background: true
      }
    },

    watch: {

      css: {
        files: [
          'public/less/**/*.less'
        ],
        tasks: ['less']
      },

      karma: {
        files: ['public/js/**/*.js', 'test/**/*.js'],
        tasks: ['karma:unit:run']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-karma');

  // Default task(s).
  grunt.registerTask('default', [
    'less',
    //'uglify',
    //'karma',
    'watch'
  ]);
};
