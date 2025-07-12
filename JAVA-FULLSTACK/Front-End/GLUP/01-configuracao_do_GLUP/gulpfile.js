//Importando o pacote do Gulp
const gulp = require('gulp')


//Tarefa publica
function funcaoPadrao(callback){
    console.log("Executando o Gulp");
    callback()
};


function dizerOi(callback){
    console.log("OI fazendo teste");
    dizerTchau();
    callback();
};
//2 maneiras de exporta minha funcao 
//1° a padrao, para chama a padrao digite no terminal (npm rum gulp)
exports.default = funcaoPadrao;
//2° A NOMINAL, para chamar a nominal digito (npm rum gulp ola)
exports.ola = dizerOi;

//Tarefa privada e aquela que nao exportamos, mais e executa entro de outra por exemplo (dizerTchau) vou chamar ela dentrto de outra funcao.
function dizerTchau(){
    console.log("Chamando uma Tareva privada");
};

//usando o pacote do gulpe posso executar varias funcoes ao mesmo tempo (seriais)
exports.default = gulp.series(funcaoPadrao,dizerOi);