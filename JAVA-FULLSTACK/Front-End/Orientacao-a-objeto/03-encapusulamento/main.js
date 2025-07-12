// Trabalando com emcapsulamento
// toda vareavel do encapsulamento declaramos sempre com _ antes, é uma conversao global
// Getters e setters
function Fucionario(nome, cargo, salario){
   //Ecapsulando 
   let _nome = nome;
   let _cargo = cargo;
   let _salario = salario;

   //Para poder acessar as propriedades fora da classe tenho que criar uma funcao
   //exister uma conversao que toda funcao que retorna comesa com get
   this.getRetornaSalario = function(){
    //aqui dentro vem oque eu quero retorna
    return _salario
   }

   //Para redeclara uma atributo tenho que criar uma funcao, passo valor como  parametro da minha funcao
     //exister uma conversao que toda funcao que atribuir comesa com set
   this.setAtribuirSalario = function(valor){
    //tambem posso fazer ulgumas validacoes aqui dentro exemplo
    if(typeof valor === "number"){
        return _salario = valor;
    }else{
        console.log('Digite um valor numerico')
    }
    
   }
}

const fucionario1 = new Fucionario('tales' , 'dev-full-stack', 7000);

console.log(fucionario1.getRetornaSalario());

fucionario1.setAtribuirSalario(10000);

console.log(fucionario1.getRetornaSalario());