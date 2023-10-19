/*
 Casting em Programação: Em programação, o casting é usado para converter um tipo de dado em outro.
 Isso é útil quando você deseja realizar operações com variáveis de tipos diferentes. Por exemplo,
 se você tem um número inteiro (int) e deseja usá-lo como um número de ponto flutuante (float),
 você pode fazer um "casting" para realizar essa conversão. Em muitas linguagens de programação,
 como C, C++, Java, e outras, existem operadores ou funções específicas para fazer casting de tipos.
*/
var valor = "42"; // valor é do tipo 'any' e contém uma string
// Fazendo casting para o tipo 'number'
var numero = valor;
console.log(numero); // Isso imprimirá o número 42 em vez de uma string
var valor2 = "42"; // valor é do tipo 'any' e contém uma string
// Fazendo casting para o tipo 'number' usando 'as'
var numero2 = valor;
console.log(numero2); // Isso imprimirá o número 42 em vez de uma string
// O namespace é uma construção que permite agrupar e organizar o código em partes distintas e isoladas,
// evitando conflitos de nomes de variáveis, funções e classes. 
// Ele é usado principalmente para criar módulos e namespaces que encapsulam funcionalidades relacionadas.
var casting;
(function (casting) {
    var idade = 25;
    idade.toFixed();
    idade.length;
})(casting || (casting = {}));
