const filhos = ['Camily','Gabriel','Alexandre','Adria','Theo','Thomas'];

//Pecorrendo um array com o for tradicional
for(let i = 0; i < filhos.length; i++){
   // console.log(`${i +1}° ${filhos[i]}`);
}


//=================================== FOREACH =================================== 
//Pecorrendo o for com o forEach
//o for receber uma callback e no minimo 1 parametro um item posso ou nao passar o indece.
//Lembrando que o Indece é opcional
filhos.forEach(function(nomeDosFilho,indece){
    console.log(`${indece + 1}° ${nomeDosFilho}`);
})

// =================================== MAP =================================== 
//Pecorrendo um array utilizando o map e adcionando um objeto a cada um dos membros do array
//vou pecorre cada elemeto do meu array e vou adcionar um objeto para cada membro

const filhoSobreNome = filhos.map(function(itemAtual){
    return {
        nome: itemAtual, //vai recerber um membro da lista
        sobreNome: 'De Paula' 
    }
})

console.log(filhoSobreNome);

// =================================== MAP =================================== 
//Tabem posso utilizar o map para pecorre meu array e fazer uma operacao com cada elemeto do meu array
const dobro = [2,5,4,6, 3,1];

const sum = dobro.map(function(numeroAtul){
    return numeroAtul * 2;
})

console.log(sum)
// =================================== FIND =================================== 
//Fazem uma busca pelo os membro do arrays utilizando find
//FIND Obs preciso preocura no objeto nao no array.
const adria = filhoSobreNome.find(function(item){
    return item.nome == 'Adria' //true or false
}) 
console.log(adria);

// =================================== FINDINDEX =================================== 
//Fazendo uma busca pelo o indece dos Membros
//Quando o membro nao exister no meu array vai me dar o valor de -1
const adriaIndece = filhoSobreNome.findIndex(function(item){
    return item.nome == 'Adria' //true or false
}) 
console.log(adriaIndece);//Retorno indece  3

//===================================  PUSH() =================================== 
//Agora vou adcionar mais um Membro ao meu array para poder fazer oura ferificacao.
filhoSobreNome.push({
    nome: 'Thierry',
    sobreNome: 'Moreira'
})

filhoSobreNome.push({
    nome: 'Taylor',
    sobreNome: 'Moreira'
})


//=================================== EVERY =================================== 
//O EVERY serve para ferificar se um especifico elememto exister no meu array ou objeto dentro do array obs: todos os elemetos do array tem que ter a mesma propriedade
//senao vai dar falso, quer dizer que exister outra 
const verificandoArray = filhoSobreNome.every(function(item){
    return item.sobreNome === 'De Paula'
})
console.log(verificandoArray)//false
console.log(filhoSobreNome)

//ARROW
const verificandoArrayArow = filhoSobreNome.every(item => item.sobreNome === 'De Paula')
console.log(`Utilizando Arrow = ${verificandoArrayArow}`);//false

//=================================== SOME =================================== 
//Agora se eu quizer saber se uma propriedade especifica existe no array posso utilizar o metodo SOME ele vai pecorre meu array
//e ferificar se existe ao menos 1, se exitir ja vai dar true

const preocurandoThierry = filhoSobreNome.some(function(item){
    return item.sobreNome == 'Moreira'
})
console.log(preocurandoThierry)//true
//arrow
const preocurandoThierryArrow = filhoSobreNome.some(item => item == 'Moreira');
console.log(`Utilizando Arrow = ${preocurandoThierryArrow}`);

//=================================== FLITER =================================== 
//é usado para criar um novo array contendo elementos de um array original que atendem a um determinado critério
// por exemple se eu quero somento um array com muneros pares
const numerosMixto = [1,2,3,4,5,6,7,8,9];

const numerosPares = numerosMixto.filter(function(item){
    return item % 2 === 0;
}) 

console.log(numerosPares)

//Tambem tem outra maneira que e usando arrow function
const numerosImpar = numerosMixto.filter(item => item % 2 === 1)
console.log(`Utilizando Arrow = ${numerosImpar}`);

//Tambem e Possivel filtra por string
const filtraFilhos = filhoSobreNome.filter(function(item){
    return item.sobreNome == 'Moreira'
})

console.log(filtraFilhos);
//Arrow
const filtraFilhosArrow = filhoSobreNome.filter(item => item.sobreNome == 'De Paula')
console.log(filtraFilhosArrow);


//=================================== REDUCE ===================================  
// Serve para reduzir (agregar) todos os elementos de um array a um único valor. 
//Posso passa 4 parametro no reduce (acumulador , item , index,valor inicial) 2 e obrigadorio e 2 opcional
// sempre fasso com que meu acumulado comeser com 0 para nao ter erros
const valor = [10,20,30,60,10,70]

const somaValor = valor.reduce(function(acumulador, item){
    return acumulador += item;
},0)
console.log(somaValor)

const somaValorArrow = valor.reduce((acumulador,item) => acumulador + item, 0)
console.log(somaValorArrow)

//Tambem e possivel usar com string podedo concatenar os nomes do meu array em uma unica variavel

const animais = ['Cachorro','Gato', 'Passarinho', 'Galinha'];

const todosAnimais = animais.reduce(function(acumulado,itemAtual){
    return acumulado += ` ${itemAtual}` //vou colocar o ${} para poder ter um espaco entre os animais
})

console.log(todosAnimais)