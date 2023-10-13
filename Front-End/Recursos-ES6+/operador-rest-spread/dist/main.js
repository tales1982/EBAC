"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/*
Em JavaScript, "arguments" é um objeto especial que está disponível em todas as funções 
e contém os argumentos passados para a função quando ela é chamada. 
Este objeto é uma espécie de array que permite acessar os valores dos argumentos fornecidos,
 independentemente de quantos argumentos foram passados para a função.

O objeto "arguments" é útil quando você não sabe quantos argumentos serão passados para a função
 ou quando deseja criar uma função que aceite um número variável de argumentos. 
 Você pode acessar os valores dos argumentos usando índices numéricos, como arguments[0], arguments[1], etc.
*/
// ============ ARGUMETS ==================
function somar() {
  var somar = 0;
  for (var i = 0; i < arguments.length; i++) {
    somar += arguments[i];
  }
  return console.log(somar);
}
somar(10, 52, 45, 65);

// Posso utilizar para string tambem

function nomes() {
  var listaNomes = '';
  for (var i = 0; i < arguments.length; i++) {
    listaNomes += " ".concat(arguments[i]);
  }
  return console.log(listaNomes);
}
nomes('Tales', 'Theo', 'Thomas');
// LEMBRANDO QUE O ARGUMENTS NAO E UM ARRAY POR ISSO OS METODOS DO ARRAY NAO FUCIONA NELE
// Para resover este problema temos o REST
//========================================================================================
// Operador Rest (...):
// O operador rest é usado em parâmetros de função para coletar argumentos restantes em um array.
// Ele é útil quando você deseja criar uma função que aceite um número variável de argumentos.
//##################################################################################################
// Operador Spread (...):
// O operador spread é usado para espalhar elementos de uma estrutura iterável (como um array, objeto ou string)
// em outro contexto, como em um novo array, objeto ou em argumentos de função. Ele é útil para criar cópias,
// combinar elementos, ou passar argumentos de maneira flexível.

// ============== REST ... =================

function somarComRest() {
  for (var _len = arguments.length, numeros = new Array(_len), _key = 0; _key < _len; _key++) {
    numeros[_key] = arguments[_key];
  }
  var soma = numeros.reduce(function (total, numeroAtual) {
    total += numeroAtual;
    return total;
  }, 0);
  return soma;
}
console.log(somarComRest(10, 20, 30));
// So posso ter um rest parametro no meu escopo exemplo (...num, ...num2) isso nao e permitido so posso possuir 1 argumento rest 
// Quando utilizo o rest so obrigado a declara o rest sempre como o ultimo argumento exemplo (test, num, ...rest) temque ser sempre o ultimo a ser declaro.

// =========== spred ===============
/*
O operador spread (...) em JavaScript é usado para espalhar elementos de uma estrutura iterável, 
como um array, objeto ou string, em outro contexto, como em um novo array ou objeto. 
Ele é útil para criar cópias de arrays, combinar vários arrays ou objetos em um único array ou objeto, 
e também pode ser usado para passar argumentos para funções de forma mais flexível. 
O operador spread torna o código mais conciso e legível, permitindo uma manipulação eficiente de elementos em várias situações.
*/

//Por exemplo, você pode usar o operador spread para criar uma cópia de um array:
var numOriginal = [10, 20, 30, 40, 50];
var numCopia = [].concat(numOriginal);
console.log(numCopia);

//Você também pode usá-lo para combinar arrays:
var numPar = [2, 4, 6, 8];
var numImpar = [1, 3, 5, 7, 9];
var todosNumeros = [].concat(numImpar, numPar);
console.log(todosNumeros);

//com strings
var nomes1 = ['alex', 'Adria'];
var nomes2 = ['Thomas', 'Theo'];
var todosFilhos = [].concat(nomes1, nomes2);
console.log(todosFilhos);

//Além disso, o operador spread pode ser usado para criar objetos com base em outros objetos:

var carroTales = {
  marca: 'Nissan',
  modelo: 'Quasquai',
  ano: 2014,
  cor: 'Vermelho',
  propietario: 'Tales'
};
var carroSuelia = _objectSpread(_objectSpread({}, carroTales), {}, {
  //tenho que sempre chamar em primeiro assim vou erdar as propriedades do outro objeto
  marca: 'Ford',
  modelo: 'Cmax',
  propietario: 'Suelia'
});
console.log(carroSuelia);

// DESESTRUTURACAO
/*
A desestruturação, ou "destructuring" em inglês, é uma característica do JavaScript que permite extrair
 valores de arrays ou propriedades de objetos e atribuí-los a variáveis individuais. 
 Isso simplifica a manipulação de dados ao acessar elementos de arrays ou propriedades de objetos de forma mais concisa. */

var numericos = [11, 22, 33];
var a = numericos[0],
  b = numericos[1],
  c = numericos[2];
console.log(a);
console.log(b);
console.log(c);
//extrai todos os elementos e joguei em outro array

var nomeDestruct = {
  nome: 'Antonio',
  idade: 30
};
var nome = nomeDestruct.nome,
  idade = nomeDestruct.idade;
console.log(nome);
console.log(idade);
console.log("Seu nome \xE9 : ".concat(nome, ", e sua idade \xE9: ").concat(idade));