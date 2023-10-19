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
var ContaBancariaPessoaFisica = /** @class */ (function (_super) {
    __extends(ContaBancariaPessoaFisica, _super);
    function ContaBancariaPessoaFisica() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ContaBancariaPessoaFisica.prototype.depositar = function (valor) {
        this.saldo = valor * 2;
    };
    return ContaBancariaPessoaFisica;
}(ContaBancaria));
