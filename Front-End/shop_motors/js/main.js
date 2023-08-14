
$(document).ready(function () {
    $('#carousel-imagens').slick({
        autoplay:true/*fais com que minhas imagens fique passando */
    });
    $('.menu-hamburgue').click(function(){
        $('nav').slideToggle();/*Abre o menu carrosel que ocultei no css display none*/
    });
//aplicando mascara no campo do telefone.(lembrando que tenho que baixar o arquivo jQueryMask)
    $('#telefone').mask('(00) 00000-0000',{placeholder:'(00) 00000-0000'})

    /*validacao do formulario lembrando que o validador nao trabalha com id, ele trabalha com os nome dos campos*/
    $('form').validate({
        rules:{
            nome:{
                required:true
            },
            email:{
                required:true,
                email:true
            },
            telefone:{
                required:true
            },
            veiculoInterece:{
                required:false
            }
        },
        //Tambem posso personalizar minhas msg
        messages:{
            nome:'Por favor, insira seu nome. '
        },
        /*Tambem posso captura o vento de submit e manda uma msg caso o formulario esteja invalido*/
        submitHandler: function(form){
            console.log(form)
        },
        invalidHandler: function(evento, validador){
            let camposIncorretros = validador.numberOfInvalids();
            if(camposIncorretros){
                alert(`Existem ${camposIncorretros} campos incorretos.`)
            }
        }
    })


})
