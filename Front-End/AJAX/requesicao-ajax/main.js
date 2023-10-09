/* Usando javascript puro

document.addEventListener('DOMContentLoaded', function(){
document.getElementById('btn-buscar-cep').addEventListener('click',function(){
    // AJAX - Asynchronous JavaSAcript and XML
    const xhttp = new XMLHttpRequest();
    const cep = document.getElementById('cep').value;
    const endpoint = `https://viacep.com.br/ws/${cep}/json`;

    xhttp.open('GET',endpoint);
    xhttp.send();
})
})
*/

// Usando o Jquery 
$(document).ready(function(){
//Usando o Jquery Mask
$('#cep').mask('00000-000');

    $('#btn-buscar-cep').click(function(){
        const cep = $('#cep').val();
        const endpoint = `https://viacep.com.br/ws/${cep}/json`;
        const butao = $(this);
        $(butao).find('i').addClass('d-none');
        $(butao).find('span').removeClass('d-none');


        $.ajax(endpoint).done(function(resposta){
            const logradoro = resposta.logradouro;
            const bairro = resposta.bairro;
            const cidade = resposta.localidade;
            const estado = resposta.uf;
            const endereco = `${logradoro}, ${bairro}, ${cidade}, ${estado}`
            $('#endereco').val(endereco)

            $(butao).find('i').removeClass('d-none');
            $(butao).find('span').addClass('d-none');
        })
    })
})

