var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Conta = /** @class */ (function () {
    function Conta(numeroDaConta, saldo) {
        this.saldo = 0;
        this.numeroDaConta = numeroDaConta;
        this.saldo = saldo;
    }
    return Conta;
}());
var ContaSalario = /** @class */ (function (_super) {
    __extends(ContaSalario, _super);
    function ContaSalario() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ContaSalario.prototype.depositar = function (valor) {
        this.saldo += valor;
    };
    return ContaSalario;
}(Conta));
var ContaCorrente2 = /** @class */ (function (_super) {
    __extends(ContaCorrente2, _super);
    function ContaCorrente2() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.taxaTransferencia = 0;
        return _this;
    }
    ContaCorrente2.prototype.transferir = function (valor, destinatario) {
        destinatario.saldo += valor;
        return true;
    };
    ;
    return ContaCorrente2;
}(Conta));
var TheoContaCorrente = new ContaCorrente2(2022, 790);
console.log(TheoContaCorrente);
var TalesContaCorrente = new ContaCorrente2(1982, 500);
TalesContaCorrente.transferir(360, TheoContaCorrente);
console.log(TalesContaCorrente);
console.log(TheoContaCorrente);
// Criando classes que implementam a interface
var Cachorro = /** @class */ (function () {
    function Cachorro(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    Cachorro.prototype.fazerSom = function () {
        return "Auau Au";
    };
    return Cachorro;
}());
var Gato = /** @class */ (function () {
    function Gato(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    Gato.prototype.fazerSom = function () {
        return "Miau";
    };
    return Gato;
}());
// Criando instâncias de Cachorro e Gato com nome e idade
var cachorro = new Cachorro("Rex", 3);
var gato = new Gato("Whiskers", 2);
// Acessando os campos de nome e idade
//console.log("Cachorro faz:", cachorro.fazerSom());  
//console.log("Nome do cachorro:", cachorro.nome);  // Saída: Nome do cachorro: Rex
//console.log("Idade do cachorro:", cachorro.idade);  // Saída: Idade do cachorro: 3
//console.log("Gato faz:", gato.fazerSom());          
//console.log("Nome do gato:", gato.nome);  // Saída: Nome do gato: Whiskers
//console.log("Idade do gato:", gato.idade);  // Saída: Idade do gato: 2
