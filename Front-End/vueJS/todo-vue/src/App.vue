<script setup>
import { reactive } from 'vue'; 


const estado = reactive({
  filtro:'todas',
  recebeTarefas:'',
  tarefas:[
    {
      titulo: 'Estudar ES6',
      finalizado: true,
    },
    {
      titulo: 'Estudar linguagem C',
      finalizado: false,
    }
  ]
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
    titulo: estado.recebeTarefas,
    finalizado: false,
  }
  estado.tarefas.push(tarefasNova)
  estado.recebeTarefas = ''
}
</script>

<template>
  <div class="container">
    <header class="p-5 mb-4 mt-4 bg-light rounded-3">
      <h1>Minhas Tarefas</h1>
      <p>voçe possui {{ getTarefasPendentes().length }} tarefas pendentes</p>
    </header>
    <form @submit.prevent="cadastraTarefa">
      <div class="row">false
        <div class="col">
          <input :value="estado.recebeTarefas" @change="evento => estado.recebeTarefas = evento.target.value" 
            required
            type="text"
            placeholder="Digite aqui a descrisao da tarefa"
            class="form-control"
          />
        </div>
        <div class="col-md-1">
          <button class="btn btn-primary" type="submit">Cadastra</button>
        </div>
        <div class="col-md-2">
          <select @change="evento => estado.filtro = evento.target.value" class="form-control">
            <option value="todas">Todas tarefas</option>
            <option value="pendentes">Pendentes</option>
            <option value="finalizadas">Finalizadas</option>
          </select>
        </div>
      </div>
    </form>
    <ul class="list-group mt-4">
      <li class="list-group-item" v-for="tarefa in getTarefasFiltradas()">
        <input @change="evento => tarefa.finalizado = evento.target.checked" :checked="tarefa.finalizado" :id="tarefa.titulo" type="checkbox">
        <label :class="{done: tarefa.finalizado}" class="ms-2" :for="tarefa.titulo">{{ tarefa.titulo }}</label>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.done{
  text-decoration: line-through;
}

</style>
