// Div Share Start
const btnShare = document.querySelector('#Btn-share');
const closeShareX = document.querySelector('#closeShare');
let divShare = document.querySelector('.hero__share'); // Seleciona a div Share

// Inicialmente, esconda a div Share definindo a max-height como 0
divShare.style.maxHeight = '0px';

btnShare.addEventListener('click', function () {
    // Quando o botão for clicado, verifique se a div Share está visível
    if (divShare.style.maxHeight === '0px') {
        // Se estiver invisível, mostre-a definindo a max-height como um valor maior
        divShare.style.maxHeight = '100px';
    } else {
        // Caso contrário, esconda-a definindo a max-height como 0 novamente
        divShare.style.maxHeight = '0px';
    }
});

closeShareX.addEventListener('click', function () {
    // Quando o botão X for clicado, esconda a div Share definindo a max-height como 0
    divShare.style.maxHeight = '0px';
});
// Div Share End

//=== Div Hamburguer start ===
const btn_hamburg = document.querySelector("#btn-hamburg");
let divHamburg = document.querySelector(".btnHamburguerVisivel");
const closeDivHamburg = document.querySelector('#closeDivHamburg');
divHamburg.style.maxWidth = '0px'


btn_hamburg.addEventListener('click',function(){
    
if(divHamburg.style.maxWidth == '0px'){
    divHamburg.style.maxWidth = '300px'
    

}else{

    divHamburg.style.maxWidth = '0px';
    
}

})


closeDivHamburg .addEventListener('click', function () {

    divHamburg.style.maxWidth = '0px';
});
