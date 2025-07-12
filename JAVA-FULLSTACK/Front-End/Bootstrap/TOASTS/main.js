const ativadoToast = document.querySelector('#btn-checar-email');
const mensagem = document.querySelector('#mensagem-alerta');

if(ativadoToast){
    ativadoToast.addEventListener('click',function(){
        const toast = new bootstrap.Toast(mensagem);
        toast.show()
    })
}