<script setup>
  const props = defineProps(['cadastraTarefa','tarefaTemp','trocarFiltro','editaTarefaTemp'])
</script>

<template>
  <form @submit.prevent="props.cadastraTarefa">
    <div class="row">
      <div class="col">
        <input
          :value="props.tarefaTemp"
          @change="props.editaTarefaTemp"
          required
          type="text"
          placeholder="Entrez la description de la tâche ici"
          class="form-control"
        />
      </div>
      <div class="col-md-1">
        <button class="btn btn-primary" type="submit">Registre</button>
      </div>
      <div class="col-md-2">
        <select
          @change="props.trocarFiltro"
          class="form-control"
        >
          <option value="todas">Toutes les tâches</option>
          <option value="pendentes">En attente</option>
          <option value="finalizadas">Fini</option>
        </select>
      </div>
    </div>
  </form>
</template>
