const cliente: ClienteBanking[] = [];//array de clientes
const formClient: HTMLFormElement= document.getElementById('formClient') as HTMLFormElement;;//formulario de resposta
const result: HTMLElement = document.querySelector('.res_newClient') as HTMLFormElement;//div de resposta
const textRes = document.querySelector('#text-res') as HTMLFormElement;//onde vai o testo das resposta

//Butoes
const btnAddClient = document.getElementById('newClient');//butao novo cliente
btnAddClient?.addEventListener('click', AddClient);//evento para observao btn addcliente

const btnDepot = document.getElementById('depot');//butao depot
btnDepot?.addEventListener('click', creatInputDeposit);//evento para observao btnDepot

const btnSolde = document.getElementById('solde');//butao solde
btnSolde?.addEventListener('click', creatInputSaldo);//evento para observao btnSolde

const btnRetrait = document.getElementById('retrait');//butao Retrait
btnRetrait?.addEventListener('click', creatInputRetrait);//evento para observao btnRetrait

const btnTransfert = document.getElementById('transfert');//butao Transfert
btnTransfert?.addEventListener('click', creatInputTransfert);//evento para observao btnTransfert

const btnExit = document.getElementById('sorti');//butao Exit
btnExit?.addEventListener('click', exit);//evento para observao btnTransfert

const buttons = document.querySelectorAll('.btnOptions');//lista dos butoes
let buttonClicked: HTMLElement | null = null;
class ClienteBanking {
    name: string;
    city: string;
    accountNumber: number;
    balance: number = 0;
    
    constructor(name: string, city: string, accountNumber: number, balance: number) {
        this.name = name;
        this.city = city;
        this.accountNumber = accountNumber;
        this.balance = balance;
    }
    
    balanceCheck(clientName: string) {
        if (clientName === this.name) {
            return this.balance;
        }
    }
}


buttons.forEach(button => {
    button.addEventListener('click', function(event) {
        buttonClicked = event.target as HTMLElement;
    });
});

function resetInput(){
    result.style.display = 'block';
    formClient.innerHTML = ''; // Limpa o conteúdo do formulário
    textRes.innerHTML = ''; // Limpa a mensagem de texto
}

function AddClient() {
    resetInput();

    const valorInputName: HTMLInputElement = document.createElement('input');//criando input
    valorInputName.type = 'text';
    valorInputName.id = 'inputName';
    valorInputName.placeholder = 'Tapez votre nom';

    const valorInputCity: HTMLInputElement = document.createElement('input');//criando input
    valorInputCity.type = 'text';
    valorInputCity.id = 'inputCity';
    valorInputCity.placeholder = 'Ville: ';

    const valorInputAccountNumber: HTMLInputElement = document.createElement('input');//criando input
    valorInputAccountNumber.type = 'text';
    valorInputAccountNumber.id = 'accountNumber';
    valorInputAccountNumber.placeholder = 'Numéro de compte : ';

    const valorInputDepot: HTMLInputElement = document.createElement('input');//criando input
    valorInputDepot.type = 'text';
    valorInputDepot.id = 'depot';
    valorInputDepot.placeholder = 'Montant du dépôt :';

    const formButton: HTMLInputElement = document.createElement('input');//criando input submit
    formButton.type = 'submit';
    formButton.id = 'formBtn';

    formClient.appendChild(valorInputName);
    formClient.appendChild(valorInputCity);
    formClient.appendChild(valorInputAccountNumber);
    formClient.appendChild(valorInputDepot);
    formClient.appendChild(formButton);

}

function registeringNewCustomer(){
    const valorInputName: HTMLInputElement | null = formClient.querySelector('#inputName');
    const valorInputCity: HTMLInputElement | null = formClient.querySelector('#inputCity');
    const valorInputAccountNumber: HTMLInputElement | null = formClient.querySelector('#accountNumber');//
    const valorInputDepot: HTMLInputElement | null = formClient.querySelector('#depot');
    
    

    if (valorInputName?.value && valorInputCity?.value && valorInputAccountNumber?.value && valorInputDepot?.value) {

        const idClient = parseFloat(valorInputAccountNumber.value);
        const isClientExists = cliente.some(cliente => cliente.accountNumber === idClient);//some()compara se tem algum igual
        
        if(isClientExists){
            alert(`Ce client existe déjà`)
        }else{
            const newAccount = new ClienteBanking(
            valorInputName.value,
            valorInputCity.value,
            parseFloat(valorInputAccountNumber.value),
            parseFloat(valorInputDepot.value)
        );

        alert('Client enregistré avec succès')

        cliente.push(newAccount);
        valorInputName.value = '';
        valorInputCity.value = '';
        valorInputAccountNumber.value = '';
        valorInputDepot.value = '';
        result.style.display = 'none';
        }

    }else{
        alert("Erreur lors de l'enregistrement du client, veuillez remplir tous les champs")
    }

}

function creatInputDeposit(){
    resetInput()

    const idClientDepot: HTMLInputElement = document.createElement('input');//criando input idClient
    idClientDepot.type = 'text';
    idClientDepot.id = 'accountNumber'
    idClientDepot.placeholder = 'Numéro de compte client'


    const inputDeposit: HTMLInputElement = document.createElement('input');//criando input clientDeposit
    inputDeposit.type = 'text';
    inputDeposit.placeholder = 'Entrez le montant du dépôt'
    inputDeposit.id = 'clientDeposit'

    const btnDepot: HTMLInputElement = document.createElement('input');//criando input submit
    btnDepot.type = 'submit';
    btnDepot.id = 'formBtn';
    btnDepot.type ='submit';


    formClient.appendChild(idClientDepot);
    formClient.appendChild(inputDeposit);
    formClient.appendChild(btnDepot);

}

function clientInputDeposit(){
    
    const valorInputAccountNumber: HTMLInputElement | null = formClient.querySelector('#accountNumber');
    const valorInputDepot: HTMLInputElement | null = formClient.querySelector('#clientDeposit');
    textRes.innerHTML = '';

    if (valorInputAccountNumber && valorInputDepot) {
        const accountNumber = parseFloat(valorInputAccountNumber.value);
        const depositAmount = parseFloat(valorInputDepot.value);
        const clientFound = cliente.find(cliente => cliente.accountNumber === accountNumber);//flitrando a lista de clientes para encontra oque eu pquero

        if(clientFound){
            if(depositAmount > 0){
                clientFound.balance += depositAmount;
                textRes.innerHTML = `Dépôt de ${depositAmount} effectué au client ${clientFound.name}. Nouveau solde : ${clientFound.balance}`
            
            }else{
                textRes.innerHTML = '[Erreur] Veuillez déposer un montant supérieur à 0 euros'
            }
        } else {
            textRes.innerHTML = 'Client introuvable.';
        }
    }
    
    
    
    
}

function creatInputSaldo(){
    resetInput();

    const inputIdClient: HTMLInputElement = document.createElement('input');//criando input clientDeposit
    inputIdClient.type = 'text';
    inputIdClient.placeholder = 'Entrez le numéro de compte'
    inputIdClient.id = 'accountNumber'

    const btnBalance: HTMLInputElement = document.createElement('input');//criando input submit
    btnBalance.type = 'submit';
    btnBalance.id = 'formBtn';
    btnBalance.type ='submit';

    formClient.appendChild(inputIdClient);
    formClient.appendChild(btnBalance);

}

function clienteSolde(){
    const valorInputAccountNumber: HTMLInputElement | null = formClient.querySelector('#accountNumber');
    textRes.innerHTML = '';

   if(valorInputAccountNumber?.value){
    const idClient = parseFloat(valorInputAccountNumber.value)
    const clienteFound = cliente.find(cliente => cliente.accountNumber === idClient);//some()compara se tem algum igual
    if(clienteFound){
        textRes.innerHTML = `Le solde de ${clienteFound.name} et ${clienteFound.balance}`;
    }else{
        textRes.innerHTML = `Le numéro de compte n'existe pas.`;
    }
   }

    
}

function creatInputRetrait(){
    resetInput();

    const inputIdClient: HTMLInputElement = document.createElement('input');//criando input clientDeposit
    inputIdClient.type = 'text';
    inputIdClient.placeholder = 'Entrez votre numéro de compte'
    inputIdClient.id = 'accountNumber'

    const inputBalance: HTMLInputElement = document.createElement('input');//criando input clientDeposit
    inputBalance.type = 'text';
    inputBalance.placeholder = 'Entrez le montant du retrait'
    inputBalance.id = 'retrait'

    const btnBalance: HTMLInputElement = document.createElement('input');//criando input submit
    btnBalance.type = 'submit';
    btnBalance.id = 'formBtn';
    btnBalance.type ='submit';

    formClient.appendChild(inputIdClient);
    formClient.appendChild(inputBalance);
    formClient.appendChild(btnBalance);

}

function clientRetrait(){
    const valorInputIdClient: HTMLInputElement | null = formClient.querySelector('#accountNumber');
    const valorInputRetrait: HTMLInputElement | null = formClient.querySelector('#retrait');
    textRes.innerHTML = '';
    if (valorInputIdClient?.value && valorInputRetrait?.value) {
        const idClient = parseFloat(valorInputIdClient.value);
        const valorRetrait = parseFloat(valorInputRetrait.value);
        const clienteFound = cliente.find(cliente => cliente.accountNumber === idClient);
        if (clienteFound) {
            if (clienteFound.balance >= valorRetrait && valorRetrait > 0) {
                clienteFound.balance -= valorRetrait;
                textRes.innerHTML = `Vous avez retiré ${valorRetrait}, votre nouveau solde est${clienteFound.balance}`;
            } else if (valorRetrait <= 0) {
                textRes.innerHTML = 'Veuillez saisir un montant de retrait valide (supérieur à zéro).';
            } else {
                textRes.innerHTML = 'Solde insuffisant pour le retrait demandé.';
            }
        } else {
            textRes.innerHTML = 'Numéro de compte introuvable.';
        }
    }
}

function creatInputTransfert(){
    resetInput();

    const valueClientOrigen: HTMLInputElement = document.createElement('input');//criando input
    valueClientOrigen.type = 'text';
    valueClientOrigen.id = 'accountNumber';
    valueClientOrigen.placeholder = 'Votre numéro de compte :';

    const valorInputDepot: HTMLInputElement = document.createElement('input');//criando input
    valorInputDepot.type = 'text';
    valorInputDepot.id = 'depot';
    valorInputDepot.placeholder = 'Montant du transfert:';

    const valueClientDest: HTMLInputElement = document.createElement('input');//criando input
    valueClientDest.type = 'text';
    valueClientDest.id = 'accountNumberDest';
    valueClientDest.placeholder = 'Le numéro du destinataire:';

    const formButton: HTMLInputElement = document.createElement('input');//criando input submit
    formButton.type = 'submit';
    formButton.id = 'formBtn';

    formClient.appendChild(valueClientOrigen);
    formClient.appendChild(valorInputDepot);
    formClient.appendChild(valueClientDest);
    formClient.appendChild(formButton);
}

function transfert(){
    const valorInputIdClient: HTMLInputElement | null = formClient.querySelector('#accountNumber');
    const valorInputDepot: HTMLInputElement | null = formClient.querySelector('#depot');
    const valorInputDest: HTMLInputElement | null = formClient.querySelector('#accountNumberDest');

    if(valorInputIdClient && valorInputDepot && valorInputDest){
        const clientOrigin = parseFloat(valorInputIdClient.value);
        const clientDest = parseFloat(valorInputDest.value);
        const valor = parseFloat(valorInputDepot.value);

        const clienteFindOringen = cliente.find(cliente => cliente.accountNumber === clientOrigin);
        const clienteFindDest = cliente.find(cliente => cliente.accountNumber === clientDest);

        if(clienteFindOringen && clienteFindDest){

            if(valor <= clienteFindOringen.balance){
                 clienteFindOringen.balance -= valor;
            clienteFindDest.balance += valor;
            textRes.innerHTML = `O cliente ${clienteFindOringen.name} transferiu o montante de ${valor} para ${clienteFindDest.name}`;
            }else{
                textRes.innerHTML = 'Valor insuficiente';
            }
           
        }else{
            textRes.innerHTML = 'Numéro de compte introuvable.';
        }


    }

}

function exit() {
    const sectionHiddem: HTMLElement | null = document.querySelector('#choiceButton');
    const h2Hiddem: HTMLElement | null = document.querySelector('#merci');
    result.style.display = 'none';
    
if (sectionHiddem && h2Hiddem) {
    sectionHiddem.style.display = 'none';
    h2Hiddem.style.display = 'block';
}

}

formClient.addEventListener('submit', (event: Event) => {
    event.preventDefault();
    switch (buttonClicked?.id) {
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

