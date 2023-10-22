const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');
const ts = require('gulp-typescript');


function compileTypeScript() {
    return gulp.src('src/scripts/*.ts')
       .pipe(ts())
       .js.pipe(gulp.dest('src/scripts'));
}

function scripts() {
  return gulp.src(['src/scripts/*.js'])
       .pipe(uglify())
       .pipe(gulp.dest('./dist/js'));
}


function styles() {
    return gulp.src("./src/styles/*.scss")
        .pipe(sass({ outputStyle: "compressed" }))
        .pipe(gulp.dest("./dist/css/"));
}

function images() {
    return gulp.src("./src/img/**/*")
        .pipe(imagemin())
        .pipe(gulp.dest("./dist/images"));
}


function watch() {
    gulp.watch("./src/styles/*.scss", gulp.series(styles))
    gulp.watch('./src/scripts/*.js', gulp.series(scripts))
    gulp.watch('./src/**/*.ts', gulp.series(compileTypeScript));
}
exports.default = gulp.series(styles, images, scripts,compileTypeScript);
exports.watch = watch;