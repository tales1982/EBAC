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
function somar(){
    let somar = 0
    for(let i = 0; i < arguments.length;i++){
        somar += arguments[i];
        
    }
    return console.log(somar);
}

somar(10,52,45,65);

// Posso utilizar para string tambem

function nomes(){
    let listaNomes = '';
    for(let i = 0; i < arguments.length; i++){
        listaNomes += ` ${arguments[i]}`
    }
    return console.log(listaNomes)
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

function somarComRest(...numeros){
    const soma = numeros.reduce((total, numeroAtual) =>{
        total += numeroAtual;
        return total;
    },0)
    return soma
}

console.log(somarComRest(10,20,30,))
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
const numOriginal = [10,20,30,40,50];
const numCopia = [...numOriginal]
console.log(numCopia);

//Você também pode usá-lo para combinar arrays:
let numPar = [2,4,6,8,];
let numImpar = [1,3,5,7,9];
let todosNumeros = [...numImpar,...numPar]
console.log(todosNumeros);

//com strings
const nomes1 = ['alex', 'Adria'];
const nomes2 = ['Thomas','Theo'];
const todosFilhos = [...nomes1, ...nomes2];
console.log(todosFilhos);


//Além disso, o operador spread pode ser usado para criar objetos com base em outros objetos:

const carroTales = {
    marca:'Nissan',
    modelo:'Quasquai',
    ano:2014,cor:'Vermelho',
    propietario:'Tales'
};

const carroSuelia = {
    ...carroTales,//tenho que sempre chamar em primeiro assim vou erdar as propriedades do outro objeto
    marca:'Ford',
    modelo:'Cmax',
    propietario:'Suelia'
};
console.log(carroSuelia)

// DESESTRUTURACAO
/*
A desestruturação, ou "destructuring" em inglês, é uma característica do JavaScript que permite extrair
 valores de arrays ou propriedades de objetos e atribuí-los a variáveis individuais. 
 Isso simplifica a manipulação de dados ao acessar elementos de arrays ou propriedades de objetos de forma mais concisa. */


 const numericos = [11,22,33,];
 const [a,b,c] = numericos;
 console.log(a);
 console.log(b);
 console.log(c);
 //extrai todos os elementos e joguei em outro array

 const nomeDestruct ={nome:'Antonio',idade:30}
 const {nome,idade} = nomeDestruct;
 console.log(nome);
 console.log(idade);
 console.log(`Seu nome é : ${nome}, e sua idade é: ${idade}`);

 const serieA = ['Corinthias','Sao Paulo','Santos','Palmeiras','Cruzeiro', 'Vasco', 'Botafogo','Bahia'];

 const [item11, item22, item33, ...restoDosTimes] = serieA
 console.log(item11);
 console.log(item22); 
 console.log(item33);
 console.log(restoDosTimes);