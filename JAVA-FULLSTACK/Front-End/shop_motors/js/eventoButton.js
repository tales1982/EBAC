$('.lista-veiculos button').click(function(){
    const destino = $('#contato');
    const nomeVeiculo = $(this).parent().find('h3').text();

    $('#veiculo-interece').val(nomeVeiculo);
    
    $('html').animate({
        scrollTop: destino.offset().top
    },1000)
})
