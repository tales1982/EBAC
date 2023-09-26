// Div Share Start
const btnShare = document.querySelector('#Btn-share');
const closeShareX = document.querySelector('#closeShare');
const divShare = document.querySelector('.hero__share'); // Seleciona a div Share

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