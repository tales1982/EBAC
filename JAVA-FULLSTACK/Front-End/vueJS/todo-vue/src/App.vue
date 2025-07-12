<script setup>
import { reactive } from 'vue'; 
import Cabecalho from './components/Cabecalho.vue';
import Formulario from './components/Formulario.vue';
import ListaDeTarefas from './components/ListaDeTarefas.vue';


const estado = reactive({
  filtro:'todas',
  tarefaTemp:'',
  tarefas:[]
})
//Tarefas pendentes
const getTarefasPendentes = () => {
  return estado.tarefas.filter(tarefa => !tarefa.finalizado)
  //Outra maneira de escrever o mesmo codigo
  //estado.tarefas.filter(tarefa.finalizado === false)
}

//Tarefas finalizadas
const getTarefasFinalizadas = () => {
  return estado.tarefas.filter(tarefa => tarefa.finalizado)
}

//Flitar as tarefas
const getTarefasFiltradas = () => {
  const {filtro} = estado;

  switch (filtro) {
    case 'pendentes':
      return getTarefasPendentes();
    case 'finalizadas':
      return getTarefasFinalizadas();
    default:
      return estado.tarefas;
  }
}
//casdastra tarefa
const cadastraTarefa = () => {
  const tarefasNova = {
    titulo: estado.tarefaTemp,
    finalizado: false,
  }
  estado.tarefas.push(tarefasNova)
  estado.tarefaTemp = ''
}
</script>

<template>
  <div class="container">
    <Cabecalho :tarefas-pendentes="getTarefasPendentes().length"/>
    <Formulario :trocar-filtro="evento => estado.filtro = evento.target.value" :tarefa-temp="estado.tarefaTemp" :edita-tarefa-temp="evento => estado.tarefaTemp = evento.target.value" :cadastra-tarefa="cadastraTarefa"/>
   <ListaDeTarefas :tarefas="getTarefasFiltradas()"/>

    <footer>
        <div class=" mb-4 mt-1 bg-black text-danger rounded-3 text-center fixed-bottom">
            <p>
                2023 © Tales Lima - Todos os direitos reservados
            </p>
        </div>
    </footer>
  </div>
</template>

