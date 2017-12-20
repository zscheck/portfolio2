const gulp = require('gulp');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const nodemon = require('gulp-nodemon');

gulp.task('build:js', function() {
    return gulp.src('src/js/*.js')
        .pipe(uglify())
        .pipe(concat('bundle.min.js'))
        .pipe(gulp.dest('dist'))
});

gulp.task('build:css', function() {
    return gulp.src('src/css/*.css')
        .pipe(concat('bundle.min.css'))
        .pipe(gulp.dest('dist'))
});