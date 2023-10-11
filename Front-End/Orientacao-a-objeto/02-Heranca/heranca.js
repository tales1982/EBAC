//fUNCAO CONSTRUTORA
function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
}

Pessoa.prototype.Cumprimentar = function() {
    console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
}

// Usando a função construtora para criar objetos
var pessoa1 = new Pessoa("João", 30);
var pessoa2 = new Pessoa("Maria", 25);

// Acessando propriedades e chamando o método Cumprimentar nos objetos criados
console.log(pessoa1.nome); // Saída: "João"
console.log(pessoa2.idade); // Saída: 25

pessoa1.Cumprimentar(); // Saída: "Olá, meu nome é João e tenho 30 anos."
pessoa2.Cumprimentar(); // Saída: "Olá, meu nome é Maria e tenho 25 anos."
