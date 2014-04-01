# grunt-cowsay

> Cowsay for grunt.

*This is a tiny wrapper around the node port of [cowsay](https://github.com/piuccio/cowsay).*

```
 _____________________
< grunt! i mean, moo! >
 ---------------------

        \   ^__^
         \  (oo)\_______
            (__)\       )\/\
                ||----w |
                ||     ||
```

Install with npm:

```sh
npm install grunt-cowsay --save-dev
```

## Example

```js
module.exports = function(grunt) {
    grunt.initConfig({
        cowsay: {
            moo: {
                options: {
                    message: 'Moo!'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-cowsay');
    grunt.registerTask('moo', 'Make the cow say moo!', ['cowsay:moo']);
}
```

## Options

### options.message
Default value: `Moo!`

What you would like the cow to say.

### options.width
Default value: `process.stdout.columns`

This will, by default, contain the message bubble in the available screen space. Set a number here if you would like to make the bubble smaller.

### options.type
Default value: `say`

Set this to `think` to get a thought bubble instead of a speech bubble.

### options.face

Use any of the alternative faces. [See here for the full list](https://github.com/piuccio/cowsay/tree/master/cows). e.g. 'elephant'

### options.eyes

A two character string, if you'd like to change the cow's eyes. e.g. `OO`

### options.tongue

A two character string, if you'd like to change the cow's tongue. e.g. `U `

### options.mood

Set an alternative mood for the cow:

* `b` - Borg
* `d` - Dead
* `g` - Greedy
* `p` - Paranoid
* `s` - Stoned
* `t` - Tired
* `w` - Wired
* `y` - Youthful
