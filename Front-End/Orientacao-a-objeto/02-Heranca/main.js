// Trabalando com Heranças 

function Pessoa(nome){
    this.nome = nome;
    this.dizOi = function(){
        console.log(`${this.nome} diz oi`)
    }
    
}

const pessoa1 = new Pessoa('Tales')


function Fucionario(nome, cargo, salario){
    
    this.cargo = cargo;
    this.salario = salario;
    //Usando a herança da ckasse Pessoa
    Pessoa.call(this,nome);
}

const fucionario1 = new Fucionario('tales' , 'dev-full-stack', 3000);


fucionario1.dizOi();
