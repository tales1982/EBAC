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





</script>
//================================================================HTML==========================================
<template>
<h1>Ola {{nome}}</h1>

<h2>utilizando imagens</h2>
<!--Tenho 3 maneira de adcionar fotos-->
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
<br>
<input type="email" @keyup="capturandoResultado">
</template>





//===========================================STYLE======================================
<style scoped>
.img{
    max-width: 100px; 
    margin: 5px;
}
</style>
