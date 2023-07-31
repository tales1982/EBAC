const form = document.querySelector('.form-list');

form.addEventListener('submit',function(e){
    e.preventDefault();
    const campoA = document.querySelector('#first-number');
    const campoB = document.querySelector('#second-number');
    const result = document.querySelector('.result');

    if(campoB.value > campoA.value){
        result.innerHTML = `Parabens o ${campoB.value} e maior que o ${campoA.value}`;
        result.style.color = "green"
        clearInput()
    }else if(campoB.value < campoA.value){
        result.innerHTML = `Desculpe o ${campoB.value} nao e maior ${campoA.value}`;
        result.style.color = "red"
        clearInput()
    }else if(campoA.value == campoB.value){
        result.innerHTML = `Por favor digite dois 2 diverente um do outro.`
        result.style.color = "rgb(219, 56, 8)"
        clearInput()
    }

function clearInput(){
    campoA.value = "";
    campoB.value = "";
    
};
})     
