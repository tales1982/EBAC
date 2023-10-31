<script setup>
import { reactive } from 'vue';
import cabecalho from './components/Cabecalho.vue';

const estado = reactive({
  valorSelecionado: 'sum',
  valorInput1: 0,
  valorInput2: 0,
});

const calcularResultado = () => {
  if (estado.valorSelecionado === 'sum') {
    return estado.valorInput1 + estado.valorInput2;
  } else if (estado.valorSelecionado === 'min') {
    return estado.valorInput1 - estado.valorInput2;
  } else if (estado.valorSelecionado === 'div') {
    return estado.valorInput1 / estado.valorInput2;
  } else if (estado.valorSelecionado === 'mult') {
    return estado.valorInput1 * estado.valorInput2;
  }
};

</script>



<template>
    <div class="container">
        <cabecalho />
        <form  class="form-control formulario">
            <input v-model="estado.valorInput1" type="number" placeholder="Digite o 1° numero" class="form-control text-center">


            <select v-model="estado.valorSelecionado" name="calculo" id="calc" class="form-control text-center">
            <option value="sum">+</option>
            <option value="min">-</option>
            <option value="div">/</option>
            <option value="mult">*</option>
        </select>

        <input v-model="estado.valorInput2" type="number" placeholder="Digite o 2° numero" class="form-control text-center">
        <p class=" m-2"> = </p>

        <span class="form-control text-center ms-1">{{ calcularResultado() }}</span>

    </form>
    
    </div>
</template>



<style scoped>
.formulario{
    display:flex ;
    align-items: center;
    justify-content: center;
}

input{
    max-width: 200px;
}

select{
    max-width: 50px;
    margin: 0 5px;
}

span{
    max-width: 200px;
}

</style>