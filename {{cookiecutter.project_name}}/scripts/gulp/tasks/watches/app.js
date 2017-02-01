/**
 * Created by {{cookiecutter.author}} {% now 'utc' %}.
 */
var gulp = require('gulp');
var helper = require('../../../helpers.js');

gulp.task('watch:app', function () {
    /* Add more watches as new apps are included */
    gulp.watch('**/*.js', { cwd : helper.root('src', 'apps') }, ['build:app']);
});