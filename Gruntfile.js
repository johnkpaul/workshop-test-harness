/*global module:false, require:false*/
module.exports = function(grunt) {

  grunt.initConfig({
    qunit: {
      files: ['www-root/test/**/*.html']
    },
    watch: {
      files: ['./www-root/**/*.js'],
      tasks: ['jshint', 'qunit']
    },
    jshint: {
      files: ['grunt.js', './www-root/src/show-more-view.js', 'www-root/test/*.js'],
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        boss: true,
        eqnull: true,
        browser: true,
        globals: {
          'ok': false,
          'jQuery': false
        }
      }
    },
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-qunit-junit');
  grunt.loadNpmTasks('grunt-contrib-watch');


  grunt.registerTask('default', ['jshint', 'qunit']);


};
