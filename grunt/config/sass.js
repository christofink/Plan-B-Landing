'use strict';


/**
 * https://www.npmjs.org/package/grunt-contrib-sass
 * @type {{}}
 */

module.exports = {
    options: {
      banner: '/*\n Project: <%= pkg.name %>\nVersion: <%= pkg.version %> \n*/'
    },
    dev: {
       files: [{
           expand : true,
           cwd: '<%= paths.src %>/scss',
           src: ['*.scss'],
           dest: '<%= paths.www %>/css',
           ext: '.css'
       }]
    },
    prod: {
      files: [{
        expand: false,
        cwd: '<%= paths.src %>/scss',
        src: ['*.scss'],
        dest: '<%= paths.prod %>/css',
        ext: '.css'
      }]
    }
};
