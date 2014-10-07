'use strict';

/**
 * Templating tool of awesomeness
 * http://assemble.io/docs/
 */


module.exports = function (grunt, options) {



    return {
        options: {
            flatten: true,
            marked: {
                sanitize: false
            }
        },
        dev: {
            options: {
                data: '<%= paths.src %>/data/**/*.json',
                assets: '<%= paths.src %>',
                helpers: '<%= paths.src %>/helpers/**/*.js',
                isDev: true,
                layoutdir: '<%= paths.src %>/templates/layout/',
                partials: ['<%= paths.src %>/templates/partials/**/*.hbs'],
                marked: {
                    gfm:true,
                    sanitize: true,
                    breaks: false

                }
            },
            files: {
                '<%= paths.www %>/': ['<%= paths.src %>/templates/pages/**/*.hbs']
            }
        },
        prod: {
            options: {
                data: '<%= paths.src %>/data/**/*.json',
                assets: '<%= paths.src %>',
                helpers: '<%= paths.src %>/helpers/**/*.js',
                isDev: false,
                layoutdir: '<%= paths.src %>/templates/layout/',
                partials: ['<%= paths.src %>/templates/partials/**/*.hbs'],
                marked: {
                    gfm:true,
                    sanitize: false,
                    breaks: false

                }
            },
            files: {
                '<%= paths.www %>/': ['<%= paths.src %>/templates/pages/**/*.hbs']
            }
        },
    }
};
