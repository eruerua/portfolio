var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    cleanCSS = require('gulp-clean-css'),
    imagemin = require('gulp-imagemin');

gulp.task('scripts',function(){
    gulp.src('js/*.js')
        .pipe(uglify())
        .pipe(rename('app.min.js'))
        .pipe(gulp.dest('js/'));
});

gulp.task('minify-css', function() {
    gulp.src('styles/*.css')
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('dist/'));
});

gulp.task('imagemin', function(){
    gulp.src('src/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'))
});

gulp.task('watch',function(){
    gulp.watch('js/*.js',['scripts']);
    gulp.watch('styles/*.css',['minify-css']);
    gulp.watch('src/images/*',['imagemin']);
});

gulp.task('default',['scripts','minify-css','watch','imagemin']);