'use strict';
var gulp = require('gulp');
var sass = require('gulp-sass');
var del = require('del');

gulp.task('sass', function() {
    return gulp.src('./public/styles/app.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest('./public/stylesheets'));
});

gulp.task('watch', function() {
   gulp.watch('./public/styles/pages/**/*.scss', ['sass']);
});

gulp.task('clean', function() {
    return del.sync(['./public/stylesheets/style.css']);
});

gulp.task('default', ['clean', 'sass', 'watch']);

