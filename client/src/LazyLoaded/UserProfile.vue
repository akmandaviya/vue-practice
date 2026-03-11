<script setup>
const data = await fetch('https://jsonplaceholder.typicode.com/users/1')
const user = await data.json()
</script>

<template>
  <div>
    <h2>{{ user.name }}</h2>
    <p>{{ user.email }}</p>
  </div>
</template> 