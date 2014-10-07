'use strict';

module.exports = function (grunt) {


    //Load grunt tasks automatically
    require('load-grunt-tasks')(grunt, {pattern: ['grunt-*', 'assemble'] });

    //Path and properties
    var options = {
        pkg: grunt.file.readJSON('package.json'),
        paths: {
            bower: '../bower/components',
            src: '../src',
            www: '../www',
            prod: '../prod',
            docs: '../docs',

            // All vendors are referenced from bower
            jsVendor: [
                'modernizr/modernizr.js',
                'angular/angular.min.js'
            ],


            jsMain: [

            ]
        },

        ports: {
            livereload: 35729,
            connect: 9000,
            hostname: 'localhost'
        }

    };


    //Load grunt configurations automatically
    var configs = require('load-grunt-configs')(grunt, options);


    //Define the configuration for all the tasks
    grunt.initConfig(configs);


    //Hosting
    grunt.registerTask('default', ['host']);
    grunt.registerTask('host',      ['connect', 'open', 'watch']);



    //Development tasks
    grunt.registerTask('dev', ['assemble:dev', 'copy:dev', 'sass:dev']);
    //Delete folder rebuild
    grunt.registerTask('re-dev', ['clean:dev', 'dev']);


    //Production ready
    grunt.registerTask('prod', ['assemble:prod', 'copy:prod', 'sass:prod']);
    //Delete folder rebuild
    grunt.registerTask('re-prod', ['clean:prod', 'prod']);

};
