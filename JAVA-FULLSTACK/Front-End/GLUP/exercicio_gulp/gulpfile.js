const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const uglify = require('gulp-uglify');
const imagemin = require ('gulp-imagemin');

function compresionJavacript(){
    return gulp.src('./source/script/*.js')
    .pipe(uglify())
.pipe(gulp.dest('./build/script'))
}

function compresionImage(){
    return gulp.src('./source/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./build/images'))
}

function compilaSass(){
    return gulp.src('./source/style/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./build/style'))
}


exports.default = function(){
    gulp.watch('./source/style/*.scss',{ignoreInitial:false}, gulp.series(compilaSass));
    gulp.watch('./source/script/*.js',{ignoreInitial:false}, gulp.series(compresionJavacript));
    gulp.watch('./source/images/*',{ignoreInitial:false}, gulp.series(compresionImage));
}

exports.sass = compilaSass;
exports.javaScript = compresionJavacript;
exports.images = compresionImage;