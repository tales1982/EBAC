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
var Pessoa = /** @class */ (function () {
    function Pessoa(nome, renda) {
        this.nome = nome;
        this.renda = renda;
    }
    Pessoa.prototype.dizOla = function () {
        return "".concat(this.nome, " disse oi");
    };
    return Pessoa;
}());
//ENCAPSULAMENTO PRIVADO OU PUBLICO
// O protected esta disponivel nas classe e na classes filhos
// Ja o private so esta disponivel somente na classe onde e declarado na, na classe mae.
// O static esta disponivel somente al nivo da classe,  nao passando para as instancia, somente na classe
var ContaBancaria = /** @class */ (function () {
    function ContaBancaria(numeroConta) {
        this.saldo = 0;
        this.numeroConta = numeroConta;
    }
    ContaBancaria.retonarNumerosDoBanco = function () {
        return 145;
    };
    ContaBancaria.prototype.pegarSaldo = function () {
        return this.saldo;
    };
    ContaBancaria.prototype.depositar = function (valor) {
        this.saldo += valor;
    };
    return ContaBancaria;
}());
// Eranças (extends)
var ContaBancariaPessoaFisica = /** @class */ (function (_super) {
    __extends(ContaBancariaPessoaFisica, _super);
    function ContaBancariaPessoaFisica() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ContaBancariaPessoaFisica.prototype.depositar = function (valor) {
        this.saldo = valor;
    };
    return ContaBancariaPessoaFisica;
}(ContaBancaria));
var contaDoPedro = new ContaBancariaPessoaFisica(123456);
console.log(ContaBancaria.retonarNumerosDoBanco());
