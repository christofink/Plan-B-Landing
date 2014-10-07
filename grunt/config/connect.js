'use strict';


/**
 * Connect port/livereload
 * https://github.com/gruntjs/grunt-contrib-connect
 * Starts a local webserver and injects
 * livereload snippet
 */
module.exports = function(grunt, options) {


    var mountFolder = function (connect, dir) {
        return connect.static(require('path').resolve(dir));
    };

    var lrSnippet = require('connect-livereload')({
        port: options.ports.livereload
    });


    return {
        options: {
            port: options.ports.connect,
            hostname: options.ports.hostname,
            debug: true,
            useAvailablePort: true
        },
        livereload: {
            options: {
                middleware: function (connect) {
                    return [
                        lrSnippet,
                        mountFolder(connect, options.paths.www)
                    ]
                }
            }
        }
    };


};