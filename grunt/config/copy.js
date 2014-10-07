'use strict';


/**
 * https://www.npmjs.org/package/grunt-contrib-copy
 * @type {{}}
 */


module.exports = function(grunt, options) {

    return {

        // Copy files to www folder to testing and development
        dev: {
            files: [
                // Vendor - bower
                { expand: true, cwd: '<%= paths.bower %>/', src: '<%= paths.jsVendor %>', dest: '<%= paths.www %>/js/' },

                // JS files in src folder
                { expand: true, cwd: '<%= paths.src %>/js/site', src: '**/*.*', dest: '<%= paths.www %>/js' },

                // Images
                { expand: true, cwd: '<%= paths.src %>/imgs/', src: '**/*.*', dest: '<%= paths.www %>/imgs' },

                // Fonts
                { expand: true, cwd: '<%= paths.src %>/fonts/', src: '**/*.*', dest: '<%= paths.www %>/fonts' }
            ]
        },

        // Copy files to prod folder for production
        prod: {
            files: [
                // Vendor - bower
                { expand: true, cwd: '<%= paths.bower %>/', src: '<%= paths.jsVendor %>', dest: '<%= paths.prod %>/js/' },

                // JS files in src folder
                { expand: true, cwd: '<%= paths.src %>/js/site', src: '**/*.*', dest: '<%= paths.prod %>/js' },

                // Images
                { expand: true, cwd: '<%= paths.src %>/imgs/', src: '**/*.*', dest: '<%= paths.prod %>/imgs' },

                // Fonts
                { expand: true, cwd: '<%= paths.src %>/fonts/', src: '**/*.*', dest: '<%= paths.prod %>/fonts' }
            ]
        }
    }
};
