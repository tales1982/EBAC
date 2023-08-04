$(document).ready(function(){
    $('form').on('submit',function(e){
e.preventDefault();
//capturando valor do imput
const valorDoImput = $('#input-tarefa').val();
//criandoo um novo elemento que vai receber o novo valor
const novoLi = $(` <li class="li"><img src="./img/icoTarefa.png" alt="Tarefa completa" class="img li-img"> ${valorDoImput}</li>`);
//adcionando o novo elemento ao Dom
$(novoLi).appendTo('ol');
$('#input-tarefa').val('')

})

$('ol').on('click','.li',function(){
    $(this).addClass('click-li');
    $(this).find(".img").removeClass("li-img");

})


})