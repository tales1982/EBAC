//Objeto Literal
const carroDoJoao = {
    modelo: 'Fiesta',
    fabricante: 'Ford',
    anoModelo: '2020',
    anoFrabricacao: '2019',
//detro do objeto literal podemos ter um metodo
    acelera: function(){
        console.log('Acelerara')
    }
}

//Criando um objeto com uma funcao construtora.
//A diferença da funçao construtora de um objeto literal, e que no lugar do (: temos o = )

function Veiculo(proprietario,modelo,fabricante,anoModelo,anoFrabricacao){
    this.proprietario = proprietario
    this.modelo = modelo;
    this.fabricante = fabricante;
    this.anoModelo = anoModelo;
    this.anoFrabricacao = anoFrabricacao;
}

const carroDoCliente = new Veiculo('Tales','S-max','Ford',2016,2014);

console.log(carroDoCliente)

//Maneira de acessa meus atributos
// 1° Pelo notacao (.) utilizando o .
console.log(carroDoCliente.proprietario)

//2° pelos [] coloco a propriedado que quero chamar dentro de [''] entre aspas
console.log(carroDoCliente['proprietario'])


//Para verificar se um atributo exiter em uma class posso usar o (in) exemplo abaixo

if('proprietario' in carroDoCliente){
    console.log('Exister')
}else{
    console.log('Nao Exister')
}


//Posso transformar meu objeto em um array, isso e ultil para quando presisar saber quantos contidade de propriedades tem no objeto. exemplo
//Usando o (Object.keys)
console.log(Object.keys(carroDoCliente).length);//me mostra o tamanho 
console.log(Object.keys(carroDoCliente));// Me mostra as Propriedades que conten no objeto
console.log(Object.values(carroDoCliente));// Me mostra os valores da propriedades
