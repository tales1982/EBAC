//Algumas Maneira de declara uma classe 
//Utilizando construtores
class Negociacao{
    constructor(data, quantidade, valor){
        this.data = data//Data atual
        this.quantidade = quantidade;
        this.valor = valor;
    }
}

let venda1 = new Negociacao(new Date, 30, 256)
let venda2 = new Negociacao()
console.log(venda1)
//console.log(venda2)

//Redeclarando uma classe
venda1.quantidade = 5;
venda1.valor = 60;

//console.log(venda1)


/*=========================== Usando uma funcao contrutora ================= */

const Negociacao2 = function(data,quantidade,valor){
    this.data = data;
    this.quantidade = quantidade;
    this.valor = valor;
}


const client1 = new Negociacao2(new Date(),7,100);
console.log(client1)