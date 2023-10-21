class Conta{
    numeroDaConta: number;
    saldo: number = 0;

    constructor(numeroDaConta: number, saldo:number){
        this.numeroDaConta = numeroDaConta;
        this.saldo = saldo;
    }
}

class ContaSalario extends Conta{
    depositar(valor: number){
        this.saldo += valor;
    }
}

interface ITransacional{
    transferir:(valor:number, destinatario:Conta)=> boolean;
    taxaTransferencia: Number;
}

interface IExemplo2{
    cnpj:number
}

interface IExemplo3 extends IExemplo2{
    telefone: number
}

class ContaCorrente extends Conta implements ITransacional, IExemplo3{
    telefone: number;
    cnpj: number;
    
    transferir(valor: number, destinatario: Conta){
        destinatario.saldo += valor;
        return true;
    };
    taxaTransferencia: Number = 0;
    
}

const TheoContaCorrente = new ContaCorrente(2022, 790)
console.log(TheoContaCorrente)
const TalesContaCorrente = new ContaCorrente(1982,500)

TalesContaCorrente.transferir(360,TheoContaCorrente)
console.log(TalesContaCorrente)
console.log(TheoContaCorrente)
/*============================================ 2° EXEMPLO ============================================================*/
// Outro exemplo de como utilizar o interface na classe
// Definindo a interface Comportamento

interface IComportamento {
    fazerSom:() => string;
    // ou assim, fazerSom():string;
}

// Criando classes que implementam a interface
class Cachorro implements IComportamento {
    nome: string;
    idade: number;

    constructor(nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade;
    }

    fazerSom(): string {
        return "Auau Au";
    }
}

class Gato implements IComportamento {
    nome: string;
    idade: number;

    constructor(nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade;
    }

    fazerSom(): string {
        return "Miau";
    }
}

// Criando instâncias de Cachorro e Gato com nome e idade
const cachorro = new Cachorro("Rex", 3);
const gato = new Gato("Whiskers", 2);

// Acessando os campos de nome e idade
//console.log("Cachorro faz:", cachorro.fazerSom());  
//console.log("Nome do cachorro:", cachorro.nome);  // Saída: Nome do cachorro: Rex
//console.log("Idade do cachorro:", cachorro.idade);  // Saída: Idade do cachorro: 3

//console.log("Gato faz:", gato.fazerSom());          
//console.log("Nome do gato:", gato.nome);  // Saída: Nome do gato: Whiskers
//console.log("Idade do gato:", gato.idade);  // Saída: Idade do gato: 2

