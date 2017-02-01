/**
 * Created by {{cookiecutter.author}} {% now 'utc' %}.
 */
var gulp = require('gulp');

gulp.task('build', [
    /* Copy AngularJS */
    'copy:angular.js',

    /* Build and Minify AngularJS sources first */
    'build:app',

    /* Copy Partials */
    'copy:partials',

    /* Build the stylesheet */
    'build:sass',

    /* Copy misc */
    'copy:misc'
    ]
);