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

class ContaBancariaPessoaFisica extends ContaBancaria{
    depositar(valor: number): void {
        this.saldo = valor * 2
    }
}

