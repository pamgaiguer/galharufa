var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function(){
    return gulp.src('./www/styles/scss/custom.scss')
      .pipe(sass()) // Using gulp-sass
      .pipe(gulp.dest('./www/styles/css'))
  });