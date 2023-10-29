<script setup>
import { reactive } from 'vue';

const nome = 'Tales Lima';
const imagenDoMario = "https://s2-techtudo.glbimg.com/JsE244mucjKWLYtNgeiDyfVYlJQ=/0x129:1024x952/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2023/7/i/ME2AxRRoygUyFPCDe0jQ/3.png";
const mario3 = "https://cultura.uol.com.br/upload/tvcultura/entretenimento/20221210171352_super-mario.jpg"
const luigi = "https://www.rbsdirect.com.br/imagesrc/15691310.jpg?w=700"
const mario = true // Oculta o a imagem true mostra a imagem
const gostaDoLuigi = true// mostra a imagen do luigi
const gostaDoMario = false

//para usar o contador tenho que usar o reactive() inporta automaticamente
//Tods os eventosfican aqui dentro
const estado = reactive({
    contador:  0,
    email: '',
    saldo: 5000,
    transferindo: 0,
    nomesFilhos:['Theo','Thomas','Adria','Alex','Gabriel','Camily'],
    nomeAdcionado:'',
    nomesRecebidos:[],
})


function capturandoResultado(evento){
    estado.email = evento.target.value
 
}


function incrementar(){
    estado.contador++
}

function decrementar(){
    estado.contador--
}

//usando a desestruturacao do objeto
function mostraSaldoFuturo(){
    const {saldo, transferindo} = estado;
    return saldo - transferindo;
}

function validarTranferencia(){
    const {saldo, transferindo} = estado;
    return saldo >= transferindo;
}

//Funcao que cadastra os nomes dinamicamente butao cadastra
function btnCadastraNomes(){

    if(estado.nomeAdcionado.length >= 3){
        estado.nomesRecebidos.push(estado.nomeAdcionado) 
    console.log(estado.nomesRecebidos)
    }else{
        alert('Insira mais caracteres, o nome e muito curto')
    }
    
}


//ARRAYS tradicional 
const nomesFamilhia = ['Tales','Theo','Thomas','Alex']



</script>
//================================================================HTML==========================================
<template>
<h1>Ola {{nome}}</h1>

<h2>utilizando imagens</h2>estado.
<!-- 1° utilizando o : antes do src imagem importqdo do javascript -->
<img class="img" :src="imagenDoMario" alt="Mario">

<!--2° maneira <img v-bind-src=“nomeDaVariavel” /> -->
<img class="img" v-bind:src="imagenDoMario" alt="Mario"/>

<!--ou importando diretamento pelo HTML -->
<img class="img" src="https://s2-techtudo.glbimg.com/JsE244mucjKWLYtNgeiDyfVYlJQ=/0x129:1024x952/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2023/7/i/ME2AxRRoygUyFPCDe0jQ/3.png" alt="Mario">

<h2>utilizando atributos condicional if (v-if "nome da condicional") diretamente no html</h2>
<!--Se minha condicao (v-if) for verdadeira exibe a imagem senao oculta-->
<img class="img" v-if="mario" :src="mario3" alt="Mario">

<h2>utilizando if else </h2>
<img class="img" v-if="gostaDoMario" :src="mario" alt="Mario">
<img class="img" v-else-if="gostaDoLuigi" :src="luigi" alt="Mario">
<h2 v-else>Nao gosta de nenhum dos 2</h2>
<br>
<hr>
<!--EVENTOS DO DON -->
<h2>Utilize eventos para manipular dados</h2>
{{estado.contador}}

<button @click="incrementar" :type="button">+</button>
<button @click="decrementar" type="-">-</button>

<br>
<hr>
<h2>Capturando valores do input</h2>
<!--Capturando valores do imput-->
{{ estado.email }}<!--Recebe o resultado do meu input-->
<input type="email" @keyup="capturandoResultado">
<br>
<hr>
<h2>Aplique estilos de forma condicional</h2>

<p>Saldo:</p> {{ estado.saldo }}
<p>Transferindo:</p>{{ estado.transferindo }}
<p>Saldo depois da transferencia:</p>{{ mostraSaldoFuturo() }}
<!--Se meu saldo transferido for maior que o saldo meu  input ficar vermelho APLICANDO A CLASS INVALIDO-->
<input :class="{invalido: !validarTranferencia()}" @keyup="evento => estado.transferindo = evento.target.value" type="number" placeholder="quantidade pra transferencia">
<button v-if="validarTranferencia()">Transferir</button>
<span v-else>Valor maior que o saldo</span>

<br>
<hr>
<h2>Rederizando ARRAYS utilizando o v-for</h2>
<ul>
    <h2>array tradicional</h2>
    <li v-for="nomeDoArray in nomesFamilhia">
    {{ nomeDoArray}}
    </li>
</ul>

<ul>
    <h2>Array utilizando o reactive()</h2>
    <li v-for="qualquerNome in estado.nomesFilhos">{{ qualquerNome }}</li>
</ul>
<br>
<hr>


<h2>Declarando array de pessoas dinamicamente</h2>
<p v-for="nome in estado.nomesRecebidos">{{ nome }}</p><!--Posso adcionar em qualquer tags-->
<input @keyup="evento => estado.nomeAdcionado = evento.target.value" type="text" placeholder="Adcione umapessoa">
<button @click="btnCadastraNomes" type="button">Cadastra nomes</button>


</template>





//===========================================STYLE======================================
<style scoped>
.img{
    max-width: 100px; 
    margin: 5px;
}

.invalido{
    outline-color: red;
    border-color: red;
}
</style>
Recebidos