'use strict';


module.exports = {
    options: {
        force : true,
        //brace_style: 'end-expand',
        condense: true,
        preserve_newlines: true,
        padcomments: false
    },
    dev: {
        expand: true,
        cwd: '<%= paths.www %>/',
        ext: '.html',
        src: ['*.html'],
        dest: '<%= paths.www %>/'
    },
    prod: {
        expand: true,
        cwd: '<%= paths.prod %>/',
        ext: '.html',
        src: ['*.html'],
        dest: '<%= paths.prod %>/'
    }
}