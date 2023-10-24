<script setup>
//meu codigo JS
const nome = 'Tales'
const inserirImagen ='https://clipartcraft.com/images/mario-transparent-9.png'
const meuOBJ = {
    nome:'Theo',
    idade: 2,
  }

  function dormi(nome){
    return `${nome} voce so tem ${meuOBJ.idade} anos, esta na hora de voce ir dormi.`
  }

  const saudacao = `O ${meuOBJ.nome} seja bem vindo, seu pai se chama ${nome}`
  
</script>

<template>
  <!--Meu codigo HTML-->
  <h1>{{saudacao}}</h1> 
 <h2>{{  dormi(meuOBJ.nome) }}</h2>
<img :src="inserirImagen" alt="Mario" class="img"><!--Insirendo imagen de 2 maneiras-->
<img v-bind:src="inserirImagen" alt="Mario"  class="img"><!--Insirendo imagen de 2 maneiras-->

</template>

<style scoped>
/* Meu cogigo CSS */
.img{
  height: 500px;
  width: auto;
  margin: 20px;
}

</style>
