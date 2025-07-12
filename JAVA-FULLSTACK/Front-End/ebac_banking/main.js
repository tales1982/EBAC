const form = document.querySelector('#form-deposito');
const nomeBeneficiario = document.getElementById('nome-beneficiario');
let formValido = false;

//captura o nome etranfor em um array
function validaNome(nomeCompleto) {
    const nomeComArray = nomeCompleto.split(' ');//transforma em array
    return nomeComArray.length >= 2;
}

form.addEventListener('submit', function (e) {
    e.preventDefault();//evita que a apagina recarregue


    const numeroContaBeneficiario = document.getElementById('numero-conta');//captura elementos
    const valorDeposito = document.getElementById('valor-deposito');//captura elementos
    const msgSucesso = `Montante de <b>${valorDeposito.value}</b> deposito para cliente <b>${nomeBeneficiario.value}</b> - conta <b>${numeroContaBeneficiario.value}</b> `;

    formValido = validaNome(nomeBeneficiario.value);
    if (formValido) {
        const containerMensagemSucesso = document.querySelector('.success-message');
        containerMensagemSucesso.innerHTML = msgSucesso;
        containerMensagemSucesso.style.display = 'block';//esta alterando de (none) para (block) elementos css

        numeroContaBeneficiario.value = "";// limpa formulario
        valorDeposito.value = "";
        nomeBeneficiario.value = "";

    } else {
        nomeBeneficiario.style.border = '2px solid red';
        document.querySelector('.error-message').style.display = 'block';
    }
});

nomeBeneficiario.addEventListener('keyup', function (e) {
    console.log(e.target.value)//ver o evento acontecendo em tempo real noterminal
    formValido = validaNome(e.target.value);
    if (!formValido) {
        nomeBeneficiario.classList.add('error');
        document.querySelector('.error-message').style.display = 'block';
    } else {
        nomeBeneficiario.classList.remove('error');
        document.querySelector('.error-message').style.display = 'none';
    }
});