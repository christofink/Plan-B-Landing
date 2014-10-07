'use strict';

/**
 * Opens the web server in the browser
 * https://github.com/jsoverson/grunt-open
 */
module.exports = {
    dev: {
        path: 'http://<%= ports.hostname %>:<%= ports.connect %>'
    }
};