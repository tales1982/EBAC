function toggleVisibility(elementSelector, isVisible) {
    const elements = document.querySelectorAll(elementSelector);

    elements.forEach(function(element) {
        element.style.opacity = isVisible ? 1 : 0;
    });

    return !isVisible;
}

let liVisible = true;
let liVisibleLoguin = true;

const itensLista = document.querySelector('.icone-tel');
itensLista.addEventListener('click', function() {
    liVisible = toggleVisibility('.li-tel', liVisible);
});

const itensListaLoguin = document.querySelector('.icon-loguin');
itensListaLoguin.addEventListener('click', function() {
    liVisibleLoguin = toggleVisibility('.li-loguin', liVisibleLoguin);
});

