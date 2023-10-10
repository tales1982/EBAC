function Animal(tipoDeAnimal, sexo, idade){
this.tipoDeAnimal = tipoDeAnimal;
this.sexo = sexo;
this.idade = idade

}


function Veterinario(proprietario,animal,sexo,idade){
    this.proprietario = proprietario;
    Animal.call(this, animal,sexo,idade,);

}

function Diagnostico(nomeDoAnimal, tipoDeAnimal, diagnostico, proprietario){

    this.nomeDoAnimal = nomeDoAnimal;
    this.diagnostico = diagnostico;
    Veterinario.call(this,proprietario);
    Animal.call(this,tipoDeAnimal);
}


const dog = new Animal('cachorro','macho', 5);
const cliente1 = new Veterinario('Tales','cachorro','macho',7);
const cachorroDoente = new Diagnostico('Toto','cachorro','Perna Quebrada','Tales')


//console.log(cat)
console.log(cachorroDoente)