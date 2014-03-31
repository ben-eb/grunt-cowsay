/*
 * grunt-cowsay
 * https://github.com/ben-eb/cowsay-grunt
 *
 * Copyright (c) 2014 Ben Briggs
 * Licensed under the MIT license.
 */

'use strict';

var cowsay = require('cowsay');

module.exports = function(grunt) {
    grunt.registerMultiTask('cowsay', 'Cowsay for grunt.', function() {

        var options = this.options({
            width: process.stdout.columns,
            message: 'Moo!',
            type: 'say'
        });

        var cowsayOptions = {
            text: options.message,
            f: options.face,
            W: options.width,
            e: options.eyes,
            T: options.tongue
        };

        if (options.mood) {
            cowsayOptions[options.mood] = true;
        }

        console.log(cowsay[options.type](cowsayOptions));

    });
};
