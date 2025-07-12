const form = document.getElementById('form-atividade');
let linhas = '';
const imgAprovado = ' <img src="./images/aprovado.png" alt="emoji celebrando">';
const imgReprovado = '<img src="images/reprovado.png" alt="emoji decepicionado">';
const atividades = [];
const notas = [];
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>';
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>';
const notaMinima = Number(prompt('Digite a nota Minima.'))

form.addEventListener('submit', function (e) {
    e.preventDefault();

    adicionaLinha()
    atualizaTabela()
    atualizarMediaFinal()
});

function adicionaLinha() {//Funcao para Adcionar uma nova linha na minha tabela
    const inputNome = document.getElementById('inputNome');
    const inputNota = document.getElementById('inputNota');

    if(atividades.includes(inputNome.value)){//O include ferefica se exister outro elemento iagual ao que estou enserindo
        alert(`A atividade: ${inputNome.value} ja foi ensirida`);
    }else{
        atividades.push(inputNome.value);
    notas.push(parseFloat(inputNota.value));


    let linha = '<tr>';
    linha += `<td>${inputNome.value}</td>`;
    linha += `<td>${inputNota.value}</td>`;
    linha += `<td>${inputNota.value >= notaMinima ? imgAprovado : imgReprovado}</td>`;//Validaçao ternaria
    linha += '</tr>';

    linhas += linha
    }

    

    inputNome.value = '';
    inputNota.value = '';

}

function atualizaTabela() {

    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function atualizarMediaFinal() {
    const mediaFinal = calculaMediaFinal()

    document.getElementById('media-final-valor').innerHTML = mediaFinal.toFixed(2);
    document.getElementById('media-final-resultado').innerHTML = mediaFinal >= notaMinima ? spanAprovado:spanReprovado;
}

function calculaMediaFinal() {
    let somasDasNotas = 0;
    for (let i = 0; i < notas.length; i++) {
        somasDasNotas += notas[i];
    }

    return somasDasNotas / notas.length;
}