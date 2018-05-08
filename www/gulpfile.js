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

var paths = {
    sass: [
    'styles/scss/**/*.scss'
    ],
    javascript: [
    './js/libs/jquery.min.js',
    './js/libs/angular.min.js',
    './js/libs/angular-sanitize.min.js',
    './js/libs/angular-route.min.js',
    './js/libs/materialize.min.js',
    './js/libs/ng-file-upload.min.js',
    './js/libs/',
    './js/app.js',
    './js/services/*.js',
    './shared/**/*.js',
    './js/controllers/*.js',
    ],
    css: [
    './styles/scss/libs/materialize/dist/css/materialize.min.css',
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
