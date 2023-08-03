$(document).ready(function(){

    $('header button').click(function(){
        $('form').slideDown();
    });


    $('#botao-cancelar').click(function(){
        $('form').slideUp();
    })


    $('form').on('submit',function(e){
        e.preventDefault();
        const enderecoDaNovaImagem = $('#indereco-imagem-nova').val();
        
        const novoInten = $('<li style="display: none"></li>');
        
        $(`<img src="${enderecoDaNovaImagem}" />`).appendTo(novoInten);
        
        $(`<div class="overlay-imagen-link">  
        <a href="${enderecoDaNovaImagem}" target="_blank" title="Ver imagen no tamanho real">Ver imagem no tamanho real</a>
        <div/>`).appendTo(novoInten);
        
        $(novoInten).appendTo('ul');
        $(novoInten).fadeIn(3000);/*TRANSIÇAO Funcao que fais surgi minha imagen as pouco com o efeito de aparece aos pouco na tela posso definir o tempo que a imagem vai aparecer em milegundos*/
        $('#indereco-imagem-nova').val('')

    });

})