/**
 * Created by shimon on 1/2/17.
 */
var gulp = require('gulp');
//var ngAnnotate = require('gulp-ng-annotate'); //Not Working
var uglify = require('gulp-uglify');
var plugin = require('gulp-load-plugins')();
var angularOrder = require('gulp-angular-filesort');
var concat = require('gulp-concat');
var helper = require('../../../helpers.js');

gulp.task('build:app', function () {
    return gulp.src(
        helper.root('src', 'apps', '**/*.js'))
        .pipe(angularOrder())
        .pipe(concat('app.bundle.js'))
        //.pipe(ngAnnotate())
        .pipe(gulp.dest(helper.root('dist', 'apps')))
        .pipe(uglify({
            mangle : { toplevel : true}
        }))
        .pipe(plugin.rename('main.min.js'))
        .pipe(gulp.dest(helper.root('dist', 'apps')));
});