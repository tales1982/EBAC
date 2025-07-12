// "BOOLEAN"
let estaChovendo: boolean = false;
estaChovendo = true;

// "Number"
let idade: number = 30;
let peso: number = 90;

// "String"
let nome:string = 'Tales';
let nomeCompleto:string = `Tales lima De Paula`;

// "Array" de String 2 maneira de declarar
//1° maneira
const filhos1:Array<string> = ['Camily','Gabriel','Alexandre','Adria','Theo','Thomas'];
//2° maneira
const filos2:string[] = ['Camily','Gabriel','Alexandre','Adria','Theo','Thomas']

//Tambem temos um array de apenas leitura "ReadonlyArray" nesse array nao posso adcionar novos items o push() nao exister nele, somente leitura
const notas: ReadonlyArray<number> = [7, 8,5,4,6,]//uma veis declaro nao tenho como adcionar mais elemento, somente leitura

// "Tuplas" serve para declara varias propriedades de tipos diferente.
const lista: [string,boolean,number] = ['Tales' ,true ,30];

// "Union type" eles são usados para representar um valor que pode ser de vários tipos diferentes. 
//Isso é útil quando você deseja lidar com valores que podem ter tipos variados
let idadeDaAna: number | string = 25;
idadeDaAna = '25 Anos'

// "Any" nao e aconselhado o usso somente no ultimo caso onde eu nao sei qual vai ser o retorno que vou ter. o Any aceitu qualque tipo por isso deve usar no ultimo caso.
let dadosDaApi: any;
dadosDaApi = true;
dadosDaApi = 25;
dadosDaApi ='teste'
dadosDaApi = [1,2,3]
dadosDaApi = {nome:'tales'};

