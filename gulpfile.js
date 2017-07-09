var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    rename = require('gulp-rename');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin'),
    cache = require('gulp-cache');
var minifycss = require('gulp-minify-css');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var inject = require('gulp-inject');

// var bower_folder = require('./bower_components/material-design-lite/bower.json');

var paths = {
    sass: ['styles/scss/**/*.scss'],
    javascript: [
        './bower_components/angular/angular.min.js',
        './bower_components/angular-ui-router/release/angular-ui-router.min.js',
        './bower_components/angular-materialize/src/angular-materialize.js',
        './bower_components/materialize/dist/js/materialize.min.js',
        './app.js',
        './js/controllers/*.js',
        './js/services/*.js',
        './shared/**/*.js',
    ],
    css: [
        './bower_components/materialize/dist/css/materialize.min.css',
        './styles/**/*min.css'
    ]
};


gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: ""
        }
    });
});

gulp.task('server-sync', function() {
    browserSync.reload();
});

gulp.task('images', function() {
    gulp.src('styles/images/**/*')
        .pipe(cache(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })))
        .pipe(gulp.dest('styles/images/'));
});

gulp.task('styles', function() {
    gulp.src(['styles/scss/custom.scss'])
        .pipe(plumber({
            errorHandler: function(error) {
                console.log(error.message);
                this.emit('end');
            }
        }))
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('styles/css/'))
        .pipe(rename({ suffix: '.min' }))
        .pipe(minifycss())
        .pipe(gulp.dest('styles/css/'))
        .pipe(browserSync.reload({ stream: true }))
});

// gulp.task('scripts', function(){
//   return gulp.src('styles/js/**/*.js')
//     .pipe(plumber({
//       errorHandler: function (error) {
//         console.log(error.message);
//         this.emit('end');
//     }}))
//     .pipe(concat('main.js'))
//     .pipe(gulp.dest('styles/js/'))
//     .pipe(rename({suffix: '.min'}))
//     .pipe(uglify())
//     .pipe(gulp.dest('styles/js/'))
//     .pipe(browserSync.reload({stream:true}))
// });

gulp.task('index', function() {
    return gulp.src('./index.html')
        .pipe(inject(gulp.src(paths.javascript, { read: false }), { relative: true }))
        .pipe(gulp.dest('./'))
        .pipe(inject(gulp.src(paths.css, { read: false }), { relative: true }))
        .pipe(gulp.dest('./'));
});



gulp.task('default', ['browser-sync', 'index'], function() {
    gulp.watch("styles/scss/custom.scss", ['styles']);
    // gulp.watch("styles/js/**/*.js", ['scripts']);
    gulp.watch("shared/**/*.html", ['server-sync']);
    gulp.watch("*.html", ['server-sync']);
    gulp.watch(paths.sass, ['styles']);
    gulp.watch([
        paths.javascript,
        paths.css
    ], ['index']);
});
