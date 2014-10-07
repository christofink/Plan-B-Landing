'use strict';

module.exports = {
    options: {
        force : true //Great power comes with great responsibility
    },
    dev: {
        src: ['<%= paths.www %>/']
    },
    prod: {
        src: ['<%= paths.prod %>/']
    }

};