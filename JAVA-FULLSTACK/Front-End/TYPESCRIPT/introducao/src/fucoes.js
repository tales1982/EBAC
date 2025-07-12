//Tipando uma funcao normal
function calcularArea(base, altura) {
    return base * altura;
}
//Tipando uma Arrow function
var calcularArea2 = function (base, altura) { return base * altura; };
//Operador Rest vem por padrao com a typagem Any, mais posso deixar esplicido qual tipagem quero exemplo:
//Lembrando que o Rest nao tem retorno e uma funcao que retorna nada VOID
function somar() {
    var numeros = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numeros[_i] = arguments[_i];
    }
    console.log(numeros);
}
somar(2, 5, 6);
//Funcao que retorna 2 tipos diferentes
function retornoDiferente() {
    if (15 >= 18) {
        return 'Voçe e de maior';
    }
    else {
        return 'Voçe e de menor';
    }
}
console.log(retornoDiferente());
