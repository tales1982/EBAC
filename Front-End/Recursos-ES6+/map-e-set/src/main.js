//=========== MAp =============

//Para adcionar um valor utilizo o .set()

let meuMap = new Map();
meuMap.set('nome','Tales');
meuMap.set('stack','HTML, CSS, JS');

console.log(meuMap);

//Para recuperar um valor utilizo o get() e o nome da propriedade que quero recuperar.
const nomeRecuperado = meuMap.get('nome');
console.log(nomeRecuperado);

//Para saber a quantidade de itens dentro de um MAp utilio o atributo .size
console.log(meuMap.size)

//Podemos verificar se uma determinada chave exister dentro do Map passando .has
//Obs vai preocura pela chave nao o valor.
console.log(meuMap.has('nome'));

//Tambem posso apagar a chave e o valor do Map utlizando o .clear() vai zera a minha vareavel.
//meuMap.clear();
//console.log(meuMap)
//Agora tenho minha vareavel vazia

//Metodos para fazer uma iteracao em um Map para buscar pela chave.
for(let chave of meuMap.keys()){
    console.log(chave)
}


//Se eu quizer fazer uma buscar pelos valores tem que utilizar o .values
for(let valor of meuMap.values()){
    console.log(valor)
}

// Tambem posso fazer o for pelas entradas(item = chave + valor) que tem dentro do map.
for(let entrada of meuMap.entries()){
    console.log(entrada)
}

//Tambem posso fazer uma destruturacao; para formata a saida.
for(let [chave, valor] of meuMap.entries()){
    console.log(`${chave} = ${valor}`)
}

//Para apagar uma chave e seu valor utilizor o .delete()
meuMap.delete('stack');
console.log(meuMap);


// =========================== SET =============================
// Em JavaScript, o método set() é usado principalmente em contextos relacionados a estruturas de dados, 
// mais especificamente para a manipulação de objetos do tipo Set. Um Set é uma coleção de valores únicos, 
// o que significa que ele não permite duplicatas. O método set() é utilizado para adicionar um novo elemento a um objeto Set.
// Aqui está um exemplo de como ele é usado:

const cpf = new Set();

cpf.add('0037844855441');
cpf.add('0037844855445');
cpf.add('0037844855448');

console.log(cpf.keys())
console.log(cpf.values())

//possoo pecorre minha vareavel usando foresch
cpf.forEach((valor) =>{
    console.log(valor)
})


//Posso usar o set para remover uma lista de arrays com nomes repetidos 
const nomerRepetidos = ['Tales','Alex','Adria','Theo','Thomas','Tales','Adria'];
console.log(nomerRepetidos);
const nomesComOSet = new Set([...nomerRepetidos]);
console.log(nomesComOSet);
const salvandoNovoArrayDeNome = [...nomesComOSet]
console.log(salvandoNovoArrayDeNome);