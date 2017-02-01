/**
 * Created by {{cookiecutter.author}} {% now 'utc' %}.
 */
var gulp = require('gulp');
var helper = require('../../../helpers.js');
var plugin = require('gulp-load-plugins')();

gulp.task('copy:partials', function () {
    return gulp.src(helper.root('src', 'apps', '**/*.html'))
        //.pipe(plugin.rename({dirname:''}))
        .pipe(gulp.dest(helper.root('dist', 'apps', 'partials')));
});