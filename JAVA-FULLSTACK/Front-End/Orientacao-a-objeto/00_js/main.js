

//Classe PAI
function Pessoa(nome, cpf, tel){
    this.nome = nome;
    this.cpf = cpf;
    this.tel = tel;
        this.apresentacao = function(){
            console.log(`
Nome: ${this.nome}, CPF: ${this.cpf}, Telephone: ${this.tel}
`);
        }
}


//Classe Filho
function Cliente(nome, cpf, tel, adress, saldo){
    Pessoa.call(this,nome,cpf,tel);
    this.adress = adress;
    this.saldo = saldo;
        this.situacaoFinaceira = function(){
            if(this.saldo <= 0){
                console.log(`
Desculpe voce nao possuir saldo suficiente R$ ${this.saldo}. 
`)
            }else{
                console.log(`
Ola seu saldo e de R$${this.saldo} boas compras.
`)
            }
        }
}

//Classe Filho
function Funcionarios(nome,cpf,tel,adress,salario, ferias,foltas){
    Pessoa.call(this,nome,cpf,tel);
    this.adress = adress;
    this.salario = salario;
    this.ferias = ferias;
    this.foltas = foltas;
        this.saldoFerias = function(){
            if(this.ferias <= 0){
                console.log(`
Ola ${this.nome} voce ja utilizou todos os seus dias de ferias.
`)
            }else{
                console.log(`
Ola ${this.nome} ainda te resta ${this.ferias} dias de ferias
`)
            }
        }
        this.foltasAno = function(){
            if(this.foltas == 0){
                this.salario *= 1.1
                console.log(`
${this.nome} por ter sido um exelente fucionario, 
e nao ter foltado nenhun dia este ano voce teve um almento de 10%
no seu salario. O seu salario subiu para ${this.salario.toFixed(2)}.}
`)
            }
        }

}

const fucionario1 = new Funcionarios('Theo','000-000-000-00', 621789456,'Grevenmacher',3000,2,0);
console.log(fucionario1);
fucionario1.foltasAno()
fucionario1.saldoFerias();
console.log(fucionario1);

const fucionario2 = new Funcionarios('Thomas','000-000-000-00', 621222987,'Grevenmacher',3500,2,2);
console.log(fucionario2);
fucionario2.foltasAno()
fucionario2.saldoFerias();
console.log(fucionario2);



const cliente1 = new Cliente('Tales','000-000-000-00','661 12 40 40','Luxembourg',5000);
console.log(cliente1)
cliente1.apresentacao()
cliente1.situacaoFinaceira()

const cliente2 = new Cliente('Suleia','000-000-000-00','691 12 40 40','Luxembourg',-10);
console.log(cliente2)
cliente2.apresentacao()
cliente2.situacaoFinaceira()