class Pessoa {
    nome: string;
    renda?: number;//

    constructor(nome:string,renda?:number){
        this.nome = nome;
        this.renda = renda;
    }

    dizOla(): string{
        return `${this.nome} disse oi`
    }
}

//ENCAPSULAMENTO PRIVADO OU PUBLICO
// O protected esta disponivel nas classe e na classes filhos
// Ja o private so esta disponivel somente na classe onde e declarado na, na classe mae.
// O static esta disponivel somente al nivo da classe,  nao passando para as instancia, somente na classe
class ContaBancaria{
    protected saldo: number = 0;
    numeroConta: number;

    constructor(numeroConta: number){
        this.numeroConta = numeroConta;  
    }   

    static retonarNumerosDoBanco(){
        return 145;
    }

    private pegarSaldo(){
            return this.saldo;
    }
    
    depositar(valor:number){
        this.saldo += valor
    }
        
}

// Eranças (extends)
class ContaBancariaPessoaFisica extends ContaBancaria{
    depositar(valor: number): void {//Polimorfismo, e quando altero a funcao que erdei.
        this.saldo = valor
    }
}

const contaDoPedro = new ContaBancariaPessoaFisica(123456)
console.log(ContaBancaria.retonarNumerosDoBanco())

