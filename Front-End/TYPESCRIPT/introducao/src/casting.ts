/*
 Casting em Programação: Em programação, o casting é usado para converter um tipo de dado em outro.
 Isso é útil quando você deseja realizar operações com variáveis de tipos diferentes. Por exemplo, 
 se você tem um número inteiro (int) e deseja usá-lo como um número de ponto flutuante (float), 
 você pode fazer um "casting" para realizar essa conversão. Em muitas linguagens de programação, 
 como C, C++, Java, e outras, existem operadores ou funções específicas para fazer casting de tipos.
*/

let valor: any = "42"; // valor é do tipo 'any' e contém uma string
// Fazendo casting para o tipo 'number'
let numero: number = <number>valor;
console.log(numero); // Isso imprimirá o número 42 em vez de uma string


let valor2: any = "42"; // valor é do tipo 'any' e contém uma string
// Fazendo casting para o tipo 'number' usando 'as'
let numero2: number = valor as number;
console.log(numero2); // Isso imprimirá o número 42 em vez de uma string



// O namespace é uma construção que permite agrupar e organizar o código em partes distintas e isoladas,
// evitando conflitos de nomes de variáveis, funções e classes. 
// Ele é usado principalmente para criar módulos e namespaces que encapsulam funcionalidades relacionadas.

namespace casting{
    let idade:any = 25;
    (idade as number).toFixed();
    (idade as string).length;
}