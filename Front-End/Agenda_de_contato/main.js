const btnEnviar = document.querySelector(".form");
const inputNome = document.querySelector("#nome");
const inputNumero = document.querySelector("#numero");
const salvarContatosNome = [];
const salvarContatosTel = [];
const listaContatos = document.querySelector("ol");

btnEnviar.addEventListener('submit', function (e) {
    e.preventDefault()

    caputuraContato();
    atualizarFormulario();

    inputNome.value = '';
    inputNumero.value = '';
})

function caputuraContato() {
     

    if(salvarContatosTel.includes(inputNumero.value)){
        alert("Esse numero ja esta registrado na agenda.");
        return;
    }else{
        salvarContatosNome.push(inputNome.value);
        salvarContatosTel.push(inputNumero.value);
    }
}

function atualizarFormulario() {
    listaContatos.innerHTML = '';

    /*if(salvarContatosNome.includes(salvarContatosNome.value)){
        alert("Esse numero ja esta registrado na agenda.")
    }*/
        for (let i = 0; i < salvarContatosNome.length; i++) {
        const adcionarLinha = document.createElement('li');
        adcionarLinha.innerHTML = `<img src="./img/userAgenda.png" alt="Agenda" class="img"> Nome: <b class="stiloLinha">${salvarContatosNome[i]}</b>, Telefone: <b class="stiloLinha">${salvarContatosTel[i]}</b>`;
        listaContatos.appendChild(adcionarLinha);
            
    }
    
}

