'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');

gulp.task('sass', function () {
    return gulp.src('./style/scss/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('style.css'))
        .pipe(gulp.dest('./style'));
});

gulp.task('sass:watch', function () {
    gulp.watch('./style/**/*.scss', ['sass']);
});