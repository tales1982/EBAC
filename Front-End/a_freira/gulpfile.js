const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');


function fonts(){
    return gulp.src('./src/font/*.ttf')
    .pipe(gulp.dest('./dist/font'))
};

function scripts(){
    return gulp.src('./src/scripts/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js'));
};

function styles(){
    return gulp.src("./src/styles/*.scss")
    .pipe(sass({outputStyle: "compressed"}))
    .pipe(gulp.dest("./dist/css/"));
}

function images(){
    return gulp.src("./src/img/**/*")
    .pipe(imagemin())
    .pipe(gulp.dest("./dist/images"));
}

exports.default = gulp.series(styles,images,scripts,fonts);

exports.watch = function(){
    gulp.watch("./src/styles/*.scss", gulp.series(styles))
    gulp.watch('./src/scripts/*.js',gulp.series(scripts))
}