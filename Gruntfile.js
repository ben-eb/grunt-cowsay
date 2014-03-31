/*
 * grunt-cowsay
 * https://github.com/ben-eb/cowsay-grunt
 *
 * Copyright (c) 2014 Ben Briggs
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {
    grunt.initConfig({
        jshint: {
            all: ['Gruntfile.js', 'tasks/*.js'],
            options: {
                jshintrc: '.jshintrc'
            }
        },
        cowsay: {
            moo: {
                options: {
                    message: 'Moo!'
                }
            }
        }
    });
    grunt.loadTasks('tasks');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.registerTask('default', ['jshint']);
};
