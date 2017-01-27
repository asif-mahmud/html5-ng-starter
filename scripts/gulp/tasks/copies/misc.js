/**
 * Created by shimon on 1/11/17.
 */
var gulp = require('gulp');
var helper = require('../../../helpers.js');

gulp.task('copy:misc', function () {
    //Copy all files except apps, sass
    return gulp.src([
        helper.root('src', '**/*'),
        '!' + helper.root('src', 'apps', '**/*'),
        '!' + helper.root('src', 'sass', '**/*'),
        '!' + helper.root('src', 'apps'),
        '!' + helper.root('src', 'sass')
    ])
        .pipe(gulp.dest(helper.root('dist')));
});