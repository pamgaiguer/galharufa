import { task, src, dest, series, watch } from 'gulp';
import plumber from 'gulp-plumber';
import rename from 'gulp-rename';
import concat from 'gulp-concat';
import uglify from 'gulp-uglify';
import imagemin from 'gulp-imagemin';
import cache from 'gulp-cache';
import minifycss from 'gulp-minify-css';
import sass, { logError } from 'gulp-sass';
import browserSync, { reload } from 'browser-sync';
import inject from 'gulp-inject';

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
    './js/libs/*',
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

task('browser-sync', function() {
    browserSync({
        port: 3002,
        server: {
            baseDir: "./",
        }
    });
});

task('server-sync', function() {
    reload();
});

task('images', function() {
    src('styles/images/**/*')
    .pipe(cache(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })))
    .pipe(dest('styles/images/'));
});

task('styles', function() {
    src(['styles/scss/custom.scss'])
    .pipe(plumber({
        errorHandler: function(error) {
            console.log(error.message);
            this.emit('end');
        }
    }))
    .pipe(sass().on('error', logError))
    .pipe(dest('styles/css/'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(minifycss())
    .pipe(dest('styles/css/'))
    .pipe(reload({ stream: true }))
});


task('index', function() {
    return src('./index.html')
    .pipe(inject(src(paths.javascript, { read: false }), { relative: true }))
    .pipe(dest('./'))
    .pipe(inject(src(paths.css, { read: false }), { relative: true }))
    .pipe(dest('./'));
});



task('default', series('browser-sync', 'index', function() {
    watch("styles/scss/custom.scss", ['styles']);
    // gulp.watch("styles/js/**/*.js", ['scripts']);
    watch("shared/**/*.html", ['server-sync']);
    watch("*.html", ['server-sync']);
    watch(paths.sass, ['styles']);
    watch([
        paths.javascript,
        paths.css
    ], ['index']);
}));
