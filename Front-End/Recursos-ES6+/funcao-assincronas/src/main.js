//Funcoes Promise
console.log('inicio')

const funcaoMuitoPesadaPromise = new Promise((resolve,reject)=>{
    try{
        let execucoes = 0;
        for (let i =0;i < 1000000000; i++ ){
            execucoes++;
        }
        resolve(execucoes);
    }catch(e){
        reject('Erro na interaçao dos numeros')
    }
})

funcaoMuitoPesadaPromise.then(resultado => console.log(resultado)).catch(erro => console.log(erro))

console.log('Fim')

//O bloco try...catch não é adequado para pegar erros dentro do loop, já que a exceção ocorrerá em caso de erro.
// Nesse caso, você pode simplesmente remover o bloco try...catch.
console.log('Início')

const funcaoMuitoPesadaPromise2 = new Promise((resolve) => {
    let execucoes = 0;

    for (let i = 0; i < 999999; i++) {
        execucoes++;
    }

    resolve(execucoes);
});

funcaoMuitoPesadaPromise2.then(resultado => {
    console.log('Resultado:', resultado);
    console.log('Fim');
});


