var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function(){
    return gulp.src('./www/styles/scss/custom.scss')
      .pipe(sass()) // Using gulp-sass
      .pipe(gulp.dest('./www/styles/css'))
});

gulp.task('hello', function() {
    console.log('Hello Zell');
  });

  gulp.task('default', function (callback) {
    // runSequence(['sass','browserSync', 'watch'],
    runSequence(['sass','browserSync', 'watch'],
      callback
    )
  });