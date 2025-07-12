<script setup>
    const props = defineProps(['tarefasPendentes']);
</script>

<template>
  <header class="p-5 mb-4 mt-4 bg-black text-danger rounded-3">
    <h1 class="text-center">Parc Materiel</h1>
    <h2>Mes tâches</h2>
    <p>Tu as {{ props.tarefasPendentes }} tâches en attente</p>
  </header>
</template>
