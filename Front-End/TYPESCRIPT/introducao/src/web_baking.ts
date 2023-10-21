class ClienteBanking{
    nome?:string;
    numeroConta: number;
    saldo?:number = 0;

    constructor(nome:string, numeroConta:number,saldo:number){
        this.nome = nome;
        this.numeroConta = numeroConta;
        this.saldo = saldo;
    }
}

interface IDeposito extends ClienteBanking{
    deposito:(valor:number,destinatario:ClienteBanking)=>true;
}

interface IRetirada extends ClienteBanking{
    saque:(valor:number,destinatario:ClienteBanking)=>true;
}

interface ITransferencia extends ClienteBanking{
    transferencia:(valor:number, destinatario:ClienteBanking)=>true;
}

class ContaCorrente extends ClienteBanking implements IDeposito, IRetirada, ITransferencia {

    deposito(valor: number, destinatario: ClienteBanking): true {
        if (valor > 0) {
            destinatario.saldo += valor;
            return true;
        }
        return false;
    }

    saque(valor: number, destinatario: ClienteBanking): true {
        if (valor > 0 && this.saldo >= valor) {
            this.saldo -= valor;
            return true;
        }
        return false;
    }

    transferencia(valor: number, destinatario: ClienteBanking): true {
        if (valor > 0 && this.saldo >= valor) {
            this.saldo -= valor;
            destinatario.saldo += valor;
            return true;
        }
        return false;
    }
}

const tales = new ContaCorrente('Tales',1982,5000)
const theo = new ContaCorrente('Theo',2022,7000)
console.log(theo)
tales.transferencia(3000,theo)
console.log(theo)
console.log(tales)