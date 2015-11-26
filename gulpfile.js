var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');
var path        = require('path');

var APP_PATH = './app';

gulp.task('serve', ['sass'], function() {
  browserSync.init({
    server: APP_PATH
  });

  gulp.watch(path.join(APP_PATH,'scss','*.scss'), ['sass']);
  gulp.watch(path.join(APP_PATH,'*.html').on('change', browserSync.reload));
});

gulp.task('sass', function() {
  return gulp.src(path.join(APP_PATH,'scss','*.scss'))
    .pipe(sass())
    .pipe(gulp.dest(path.join(APP_PATH,'styles')))
    .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);
