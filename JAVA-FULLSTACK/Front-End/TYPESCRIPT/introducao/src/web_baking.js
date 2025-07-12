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
var ClienteBanking = /** @class */ (function () {
    function ClienteBanking(nome, numeroConta, saldo) {
        this.saldo = 0;
        this.nome = nome;
        this.numeroConta = numeroConta;
        this.saldo = saldo;
    }
    return ClienteBanking;
}());
var ContaCorrente = /** @class */ (function (_super) {
    __extends(ContaCorrente, _super);
    function ContaCorrente() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ContaCorrente.prototype.deposito = function (valor, destinatario) {
        if (valor > 0) {
            destinatario.saldo += valor;
            return true;
        }
        return false;
    };
    ContaCorrente.prototype.saque = function (valor, destinatario) {
        if (valor > 0 && this.saldo >= valor) {
            this.saldo -= valor;
            return true;
        }
        return false;
    };
    ContaCorrente.prototype.transferencia = function (valor, destinatario) {
        if (valor > 0 && this.saldo >= valor) {
            this.saldo -= valor;
            destinatario.saldo += valor;
            return true;
        }
        return false;
    };
    return ContaCorrente;
}(ClienteBanking));
var tales = new ContaCorrente('Tales', 1982, 5000);
var theo = new ContaCorrente('Theo', 2022, 7000);
console.log(theo);
tales.transferencia(3000, theo);
console.log(theo);
console.log(tales);
