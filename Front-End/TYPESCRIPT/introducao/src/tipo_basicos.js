// "BOOLEAN"
var estaChovendo = false;
estaChovendo = true;
// "Number"
var idade = 30;
var peso = 90;
// "String"
var nome = 'Tales';
var nomeCompleto = "Tales lima De Paula";
// "Array" de String 2 maneira de declarar
//1° maneira
var filhos1 = ['Camily', 'Gabriel', 'Alexandre', 'Adria', 'Theo', 'Thomas'];
//2° maneira
var filos2 = ['Camily', 'Gabriel', 'Alexandre', 'Adria', 'Theo', 'Thomas'];
//Tambem temos um array de apenas leitura "ReadonlyArray" nesse array nao posso adcionar novos items o push() nao exister nele, somente leitura
var notas = [7, 8, 5, 4, 6,]; //uma veis declaro nao tenho como adcionar mais elemento, somente leitura
// "Tuplas" serve para declara varias propriedades de tipos diferente.
var lista = ['Tales', true, 30];
// "Union type" eles são usados para representar um valor que pode ser de vários tipos diferentes. 
//Isso é útil quando você deseja lidar com valores que podem ter tipos variados
var idadeDaAna = 25;
idadeDaAna = '25 Anos';
// "Any" nao e aconselhado o usso somente no ultimo caso onde eu nao sei qual vai ser o retorno que vou ter. o Any aceitu qualque tipo por isso deve usar no ultimo caso.
var dadosDaApi;
dadosDaApi = true;
dadosDaApi = 25;
dadosDaApi = 'teste';
dadosDaApi = [1, 2, 3];
dadosDaApi = { nome: 'tales' };
