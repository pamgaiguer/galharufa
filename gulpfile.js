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

// var bower_folder = require('./app/bower_components/material-design-lite/bower.json');

var paths = {
    sass: ['app/assets/scss/**/*.scss'],
    javascript: [
        './app/bower_components/angular/angular.min.js',
        './app/bower_components/material-design-lite/material.min.js',
        './app/bower_components/angular-ui-router/release/angular-ui-router.min.js',
        './app/app.js',
        './app/app.config.js',
        './app/components/**/*.js',
        './app/shared/**/*.js',
    ],
    css: [
        './app/bower_components/material-design-lite/material.min.css',
        './app/assets/**/*min.css'
    ]
};


gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: "app/"
        }
    });
});

gulp.task('server-sync', function() {
    browserSync.reload();
});

gulp.task('images', function() {
    gulp.src('app/assets/images/**/*')
        .pipe(cache(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })))
        .pipe(gulp.dest('app/assets/images/'));
});

gulp.task('styles', function() {
    gulp.src(['app/assets/scss/custom.scss'])
        .pipe(plumber({
            errorHandler: function(error) {
                console.log(error.message);
                this.emit('end');
            }
        }))
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('app/assets/css/'))
        .pipe(rename({ suffix: '.min' }))
        .pipe(minifycss())
        .pipe(gulp.dest('app/assets/css/'))
        .pipe(browserSync.reload({ stream: true }))
});

// gulp.task('scripts', function(){
//   return gulp.src('app/assets/js/**/*.js')
//     .pipe(plumber({
//       errorHandler: function (error) {
//         console.log(error.message);
//         this.emit('end');
//     }}))
//     .pipe(concat('main.js'))
//     .pipe(gulp.dest('app/assets/js/'))
//     .pipe(rename({suffix: '.min'}))
//     .pipe(uglify())
//     .pipe(gulp.dest('app/assets/js/'))
//     .pipe(browserSync.reload({stream:true}))
// });

gulp.task('index', function() {
    return gulp.src('./app/index.html')
        .pipe(inject(gulp.src(paths.javascript, { read: false }), { relative: true }))
        .pipe(gulp.dest('./app'))
        .pipe(inject(gulp.src(paths.css, { read: false }), { relative: true }))
        .pipe(gulp.dest('./app'));
});



gulp.task('default', ['browser-sync', 'index'], function() {
    gulp.watch("app/assets/scss/custom.scss", ['styles']);
    // gulp.watch("app/assets/js/**/*.js", ['scripts']);
    gulp.watch("app/components/**/*.html", ['server-sync']);
    gulp.watch("app/shared/**/*.html", ['server-sync']);
    gulp.watch("app/*.html", ['server-sync']);
    gulp.watch(paths.sass, ['styles']);
    gulp.watch([
        paths.javascript,
        paths.css
    ], ['index']);
});
