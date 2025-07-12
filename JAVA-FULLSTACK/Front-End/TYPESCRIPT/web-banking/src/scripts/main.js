var cliente = []; //array de clientes
var formClient = document.getElementById('formClient');
; //formulario de resposta
var result = document.querySelector('.res_newClient'); //div de resposta
var textRes = document.querySelector('#text-res'); //onde vai o testo das resposta
//Butoes
var btnAddClient = document.getElementById('newClient'); //butao novo cliente
btnAddClient === null || btnAddClient === void 0 ? void 0 : btnAddClient.addEventListener('click', AddClient); //evento para observao btn addcliente
var btnDepot = document.getElementById('depot'); //butao depot
btnDepot === null || btnDepot === void 0 ? void 0 : btnDepot.addEventListener('click', creatInputDeposit); //evento para observao btnDepot
var btnSolde = document.getElementById('solde'); //butao solde
btnSolde === null || btnSolde === void 0 ? void 0 : btnSolde.addEventListener('click', creatInputSaldo); //evento para observao btnSolde
var btnRetrait = document.getElementById('retrait'); //butao Retrait
btnRetrait === null || btnRetrait === void 0 ? void 0 : btnRetrait.addEventListener('click', creatInputRetrait); //evento para observao btnRetrait
var btnTransfert = document.getElementById('transfert'); //butao Transfert
btnTransfert === null || btnTransfert === void 0 ? void 0 : btnTransfert.addEventListener('click', creatInputTransfert); //evento para observao btnTransfert
var btnExit = document.getElementById('sorti'); //butao Exit
btnExit === null || btnExit === void 0 ? void 0 : btnExit.addEventListener('click', exit); //evento para observao btnTransfert
var buttons = document.querySelectorAll('.btnOptions'); //lista dos butoes
var buttonClicked = null;
var ClienteBanking = /** @class */ (function () {
    function ClienteBanking(name, city, accountNumber, balance) {
        this.balance = 0;
        this.name = name;
        this.city = city;
        this.accountNumber = accountNumber;
        this.balance = balance;
    }
    ClienteBanking.prototype.balanceCheck = function (clientName) {
        if (clientName === this.name) {
            return this.balance;
        }
    };
    return ClienteBanking;
}());
buttons.forEach(function (button) {
    button.addEventListener('click', function (event) {
        buttonClicked = event.target;
    });
});
function resetInput() {
    result.style.display = 'block';
    formClient.innerHTML = ''; // Limpa o conteúdo do formulário
    textRes.innerHTML = ''; // Limpa a mensagem de texto
}
function AddClient() {
    resetInput();
    var valorInputName = document.createElement('input'); //criando input
    valorInputName.type = 'text';
    valorInputName.id = 'inputName';
    valorInputName.placeholder = 'Tapez votre nom';
    var valorInputCity = document.createElement('input'); //criando input
    valorInputCity.type = 'text';
    valorInputCity.id = 'inputCity';
    valorInputCity.placeholder = 'Ville: ';
    var valorInputAccountNumber = document.createElement('input'); //criando input
    valorInputAccountNumber.type = 'text';
    valorInputAccountNumber.id = 'accountNumber';
    valorInputAccountNumber.placeholder = 'Numéro de compte : ';
    var valorInputDepot = document.createElement('input'); //criando input
    valorInputDepot.type = 'text';
    valorInputDepot.id = 'depot';
    valorInputDepot.placeholder = 'Montant du dépôt :';
    var formButton = document.createElement('input'); //criando input submit
    formButton.type = 'submit';
    formButton.id = 'formBtn';
    formClient.appendChild(valorInputName);
    formClient.appendChild(valorInputCity);
    formClient.appendChild(valorInputAccountNumber);
    formClient.appendChild(valorInputDepot);
    formClient.appendChild(formButton);
}
function registeringNewCustomer() {
    var valorInputName = formClient.querySelector('#inputName');
    var valorInputCity = formClient.querySelector('#inputCity');
    var valorInputAccountNumber = formClient.querySelector('#accountNumber'); //
    var valorInputDepot = formClient.querySelector('#depot');
    if ((valorInputName === null || valorInputName === void 0 ? void 0 : valorInputName.value) && (valorInputCity === null || valorInputCity === void 0 ? void 0 : valorInputCity.value) && (valorInputAccountNumber === null || valorInputAccountNumber === void 0 ? void 0 : valorInputAccountNumber.value) && (valorInputDepot === null || valorInputDepot === void 0 ? void 0 : valorInputDepot.value)) {
        var idClient_1 = parseFloat(valorInputAccountNumber.value);
        var isClientExists = cliente.some(function (cliente) { return cliente.accountNumber === idClient_1; }); //some()compara se tem algum igual
        if (isClientExists) {
            alert("Ce client existe d\u00E9j\u00E0");
        }
        else {
            var newAccount = new ClienteBanking(valorInputName.value, valorInputCity.value, parseFloat(valorInputAccountNumber.value), parseFloat(valorInputDepot.value));
            alert('Client enregistré avec succès');
            cliente.push(newAccount);
            valorInputName.value = '';
            valorInputCity.value = '';
            valorInputAccountNumber.value = '';
            valorInputDepot.value = '';
            result.style.display = 'none';
        }
    }
    else {
        alert("Erreur lors de l'enregistrement du client, veuillez remplir tous les champs");
    }
}
function creatInputDeposit() {
    resetInput();
    var idClientDepot = document.createElement('input'); //criando input idClient
    idClientDepot.type = 'text';
    idClientDepot.id = 'accountNumber';
    idClientDepot.placeholder = 'Numéro de compte client';
    var inputDeposit = document.createElement('input'); //criando input clientDeposit
    inputDeposit.type = 'text';
    inputDeposit.placeholder = 'Entrez le montant du dépôt';
    inputDeposit.id = 'clientDeposit';
    var btnDepot = document.createElement('input'); //criando input submit
    btnDepot.type = 'submit';
    btnDepot.id = 'formBtn';
    btnDepot.type = 'submit';
    formClient.appendChild(idClientDepot);
    formClient.appendChild(inputDeposit);
    formClient.appendChild(btnDepot);
}
function clientInputDeposit() {
    var valorInputAccountNumber = formClient.querySelector('#accountNumber');
    var valorInputDepot = formClient.querySelector('#clientDeposit');
    textRes.innerHTML = '';
    if (valorInputAccountNumber && valorInputDepot) {
        var accountNumber_1 = parseFloat(valorInputAccountNumber.value);
        var depositAmount = parseFloat(valorInputDepot.value);
        var clientFound = cliente.find(function (cliente) { return cliente.accountNumber === accountNumber_1; }); //flitrando a lista de clientes para encontra oque eu pquero
        if (clientFound) {
            if (depositAmount > 0) {
                clientFound.balance += depositAmount;
                textRes.innerHTML = "D\u00E9p\u00F4t de ".concat(depositAmount, " effectu\u00E9 au client ").concat(clientFound.name, ". Nouveau solde : ").concat(clientFound.balance);
            }
            else {
                textRes.innerHTML = '[Erreur] Veuillez déposer un montant supérieur à 0 euros';
            }
        }
        else {
            textRes.innerHTML = 'Client introuvable.';
        }
    }
}
function creatInputSaldo() {
    resetInput();
    var inputIdClient = document.createElement('input'); //criando input clientDeposit
    inputIdClient.type = 'text';
    inputIdClient.placeholder = 'Entrez le numéro de compte';
    inputIdClient.id = 'accountNumber';
    var btnBalance = document.createElement('input'); //criando input submit
    btnBalance.type = 'submit';
    btnBalance.id = 'formBtn';
    btnBalance.type = 'submit';
    formClient.appendChild(inputIdClient);
    formClient.appendChild(btnBalance);
}
function clienteSolde() {
    var valorInputAccountNumber = formClient.querySelector('#accountNumber');
    textRes.innerHTML = '';
    if (valorInputAccountNumber === null || valorInputAccountNumber === void 0 ? void 0 : valorInputAccountNumber.value) {
        var idClient_2 = parseFloat(valorInputAccountNumber.value);
        var clienteFound = cliente.find(function (cliente) { return cliente.accountNumber === idClient_2; }); //some()compara se tem algum igual
        if (clienteFound) {
            textRes.innerHTML = "Le solde de ".concat(clienteFound.name, " et ").concat(clienteFound.balance);
        }
        else {
            textRes.innerHTML = "Le num\u00E9ro de compte n'existe pas.";
        }
    }
}
function creatInputRetrait() {
    resetInput();
    var inputIdClient = document.createElement('input'); //criando input clientDeposit
    inputIdClient.type = 'text';
    inputIdClient.placeholder = 'Entrez votre numéro de compte';
    inputIdClient.id = 'accountNumber';
    var inputBalance = document.createElement('input'); //criando input clientDeposit
    inputBalance.type = 'text';
    inputBalance.placeholder = 'Entrez le montant du retrait';
    inputBalance.id = 'retrait';
    var btnBalance = document.createElement('input'); //criando input submit
    btnBalance.type = 'submit';
    btnBalance.id = 'formBtn';
    btnBalance.type = 'submit';
    formClient.appendChild(inputIdClient);
    formClient.appendChild(inputBalance);
    formClient.appendChild(btnBalance);
}
function clientRetrait() {
    var valorInputIdClient = formClient.querySelector('#accountNumber');
    var valorInputRetrait = formClient.querySelector('#retrait');
    textRes.innerHTML = '';
    if ((valorInputIdClient === null || valorInputIdClient === void 0 ? void 0 : valorInputIdClient.value) && (valorInputRetrait === null || valorInputRetrait === void 0 ? void 0 : valorInputRetrait.value)) {
        var idClient_3 = parseFloat(valorInputIdClient.value);
        var valorRetrait = parseFloat(valorInputRetrait.value);
        var clienteFound = cliente.find(function (cliente) { return cliente.accountNumber === idClient_3; });
        if (clienteFound) {
            if (clienteFound.balance >= valorRetrait && valorRetrait > 0) {
                clienteFound.balance -= valorRetrait;
                textRes.innerHTML = "Vous avez retir\u00E9 ".concat(valorRetrait, ", votre nouveau solde est").concat(clienteFound.balance);
            }
            else if (valorRetrait <= 0) {
                textRes.innerHTML = 'Veuillez saisir un montant de retrait valide (supérieur à zéro).';
            }
            else {
                textRes.innerHTML = 'Solde insuffisant pour le retrait demandé.';
            }
        }
        else {
            textRes.innerHTML = 'Numéro de compte introuvable.';
        }
    }
}
function creatInputTransfert() {
    resetInput();
    var valueClientOrigen = document.createElement('input'); //criando input
    valueClientOrigen.type = 'text';
    valueClientOrigen.id = 'accountNumber';
    valueClientOrigen.placeholder = 'Votre numéro de compte :';
    var valorInputDepot = document.createElement('input'); //criando input
    valorInputDepot.type = 'text';
    valorInputDepot.id = 'depot';
    valorInputDepot.placeholder = 'Montant du transfert:';
    var valueClientDest = document.createElement('input'); //criando input
    valueClientDest.type = 'text';
    valueClientDest.id = 'accountNumberDest';
    valueClientDest.placeholder = 'Le numéro du destinataire:';
    var formButton = document.createElement('input'); //criando input submit
    formButton.type = 'submit';
    formButton.id = 'formBtn';
    formClient.appendChild(valueClientOrigen);
    formClient.appendChild(valorInputDepot);
    formClient.appendChild(valueClientDest);
    formClient.appendChild(formButton);
}
function transfert() {
    var valorInputIdClient = formClient.querySelector('#accountNumber');
    var valorInputDepot = formClient.querySelector('#depot');
    var valorInputDest = formClient.querySelector('#accountNumberDest');
    if (valorInputIdClient && valorInputDepot && valorInputDest) {
        var clientOrigin_1 = parseFloat(valorInputIdClient.value);
        var clientDest_1 = parseFloat(valorInputDest.value);
        var valor = parseFloat(valorInputDepot.value);
        var clienteFindOringen = cliente.find(function (cliente) { return cliente.accountNumber === clientOrigin_1; });
        var clienteFindDest = cliente.find(function (cliente) { return cliente.accountNumber === clientDest_1; });
        if (clienteFindOringen && clienteFindDest) {
            if (valor <= clienteFindOringen.balance) {
                clienteFindOringen.balance -= valor;
                clienteFindDest.balance += valor;
                textRes.innerHTML = "O cliente ".concat(clienteFindOringen.name, " transferiu o montante de ").concat(valor, " para ").concat(clienteFindDest.name);
            }
            else {
                textRes.innerHTML = 'Valor insuficiente';
            }
        }
        else {
            textRes.innerHTML = 'Numéro de compte introuvable.';
        }
    }
}
function exit() {
    var sectionHiddem = document.querySelector('#choiceButton');
    var h2Hiddem = document.querySelector('#merci');
    result.style.display = 'none';
    if (sectionHiddem && h2Hiddem) {
        sectionHiddem.style.display = 'none';
        h2Hiddem.style.display = 'block';
    }
}
formClient.addEventListener('submit', function (event) {
    event.preventDefault();
    switch (buttonClicked === null || buttonClicked === void 0 ? void 0 : buttonClicked.id) {
        case 'newClient':
            registeringNewCustomer();
            break;
        case 'depot':
            clientInputDeposit();
            break;
        case 'solde':
            clienteSolde();
            break;
        case 'retrait':
            clientRetrait();
            break;
        case 'transfert':
            transfert();
            break;
        default:
        // Gérer d'autres cas si nécessaire
    }
});
