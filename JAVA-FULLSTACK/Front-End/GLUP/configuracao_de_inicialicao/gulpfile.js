const gulp = require('gulp');//Inmportando o gulp
const sass = require('gulp-sass')(require('sass'));//Importando o sass
const sourcemaps = require('gulp-sourcemaps');//importa a ferramenta do devTools do google para endica a linha de erro exata
const uglify = require('gulp-uglify');// tarefa para mnificar os arquivos
const obfuscate = require('gulp-obfuscate');//Serve para torna meu codigo ilegivel para outros programadores.
const imagemin = require('gulp-imagemin');//serve para compactar minhas imagens



//funcao pra minificar os arquivos
function comprimirJavaScript(){
    return gulp.src('./source/script/*.js')
    .pipe(uglify())//minificar
    .pipe(obfuscate())//torna ilegivel me JS
    .pipe(gulp.dest('./build/script'))
}

//funcao para comprimir imagens
function comprimirImagens(){
    return gulp.src('./source/images/*')
    .pipe(imagemin())//comprimir as imagens
    .pipe(gulp.dest('./build/images'))
}


//Comando para executar o sass usando o gulp
//outputStyle:'compressed' =  
//sourcemaps.write('./maps')  comando para ver meu codigo no devtools.
//
function compilaSass(){
    return gulp.src('./source/style/main.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
        outputStyle:'compressed'
    }))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./build/style'))
}



//funcao para que o sass fique compilando altomaticamente
exports.default = function(){
    gulp.watch('./source/style/*.scss',{ignoreInitial:false}, gulp.series(compilaSass));
    gulp.watch('./source/script/*.js',{ignoreInitial:false}, gulp.series(comprimirJavaScript));
    gulp.watch('./source/images/*',{ignoreInitial:false}, gulp.series(comprimirImagens));
    gulp.watch('./source/images/*',{ignoreInitial:false}, gulp.series(comprimirImagens));

    //uma veis todos os camando aqui dentro basta executa npm run gulp que vai executar todos
}

//exportando  o compilador do sass
exports.sass = compilaSass

//exportando a tarefa de minificar os arquivos
exports.javascript = comprimirJavaScript;

//Exportando o arquivos de comprimir images
exports.images = comprimirImagens; 
