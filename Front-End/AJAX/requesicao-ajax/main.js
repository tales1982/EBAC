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

        //Requesicao usando o AJAX
/*
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
        
 */
        //---------Requisicao usando o fetch API é mais ULTILIZADO.--------
        fetch(endpoint)
        .then(function(resposta){
            return resposta.json();
        })
        .then(function(json){
            const logradoro = json.logradouro;
            const bairro = json.bairro;
            const cidade = json.localidade;
            const estado = json.uf;
            const endereco = `${logradoro}, ${bairro}, ${cidade}, ${estado}`
            $('#endereco').val(endereco)

    
        })
        //Trantando erros
        .catch(function(erro){
            alert('Ocorreu um erro ao busca o endereço tente novamente mais tarde.')
        })
        //Usando o finally vai executa oque tiver no bloque sempre
        .finally(function(){
            $(butao).find('i').removeClass('d-none');
            $(butao).find('span').addClass('d-none');
        })
    })

    //Criando erro se o formulario nao tiver completo
    //O erro vou executado no console.
    $('#formulario-pedido').submit(function(evento){
        evento.preventDefault();
        if($('#nome').val().length == 0){
            throw new Error('Digite o nome');
        }
    })
})

