//Tipando uma funcao normal
function calcularArea(base:number,altura:number){
    return base* altura;
}

//Tipando uma Arrow function
const calcularArea2 = (base:number, altura:number) => base * altura;

//Operador Rest vem por padrao com a typagem Any, mais posso deixar esplicido qual tipagem quero exemplo:
//Lembrando que o Rest nao tem retorno e uma funcao que retorna nada VOID
function somar(...numeros: number[]):void {
    console.log(numeros)
}
somar(2,5,6)

//Funcao que retorna 2 tipos diferentes
function retornoDiferente():string | number {
    
    if(15 >= 18){
        return 'Voçe e de maior'
    }else{
        return 'Voçe e de menor'
    }
}

console.log(retornoDiferente())
