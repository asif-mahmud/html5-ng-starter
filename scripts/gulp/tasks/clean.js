/**
 * Created by shimon on 1/2/17.
 */
var gulp = require("gulp");
var rmdir = require("gulp-clean");
var helper = require('../../helpers.js');

gulp.task('clean', function () {
    return gulp.src([
        helper.root('dist')
    ]).pipe(rmdir());
});