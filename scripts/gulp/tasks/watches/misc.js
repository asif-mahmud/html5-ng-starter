/**
 * Created by shimon on 1/11/17.
 */
var gulp = require('gulp');
var helper = require('../../../helpers.js');

gulp.task('watch:misc', function () {
    // Watch other file changes
    return gulp.watch([
        '**/*',
        '!' + 'apps/**/*',
        '!' + 'sass/**/*',
        '!' + 'apps',
        '!' + 'sass'
    ], {
            cwd : helper.root('src')
    }, ['copy:misc']);
});