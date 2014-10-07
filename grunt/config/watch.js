'use strict';


module.exports = {

    assemble: {
        files: ['<%= paths.src %>/templates/**/*.hbs', '<%= paths.src %>/md/**/*.md'],
        tasks: ['assemble:dev']
    },
    sass: {
        files: ['<%= paths.src %>/scss/**/*.scss'],
        tasks: ['sass:dev']
    },
    js: {
        files: ['<%= paths.src %>/js/site/**/*.js'],
        tasks: ['copy:dev']
    },
    livereload : {
        options : {
            livereload: '<%= ports.livereload %>'
        },
        files: [
            '<%= paths.src %>**/js/**/*.js',                //JS files
            '<%= paths.src %>/**/scss/**/*.scss',
            '<%= paths.src %>/md/**/*.md',                 //Markdown files
            '<%= paths.src %>/templates/**/*.hbs',         //HBS files
        ]
    }
};