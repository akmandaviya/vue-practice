<script setup>
import Concepts from './components/concepts.vue';
import DataDisplay from './components/DataDisplay.vue';
import TodoList from './components/TodoList.vue';

</script>

<template>
  <div>
    <!-- <TodoList/> -->
    <!-- <DataDisplay/> -->
    <Concepts/>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
