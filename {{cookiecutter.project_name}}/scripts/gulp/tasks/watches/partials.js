/**
 * Created by {{cookiecutter.author}} {% now 'utc' %}.
 */
var gulp = require('gulp');
var helper = require('../../../helpers.js');

gulp.task('watch:partials', function () {
    gulp.watch('**/*.html', { cwd : helper.root('src', 'apps') }, ['copy:partials']);
});