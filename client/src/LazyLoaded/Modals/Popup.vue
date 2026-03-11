<template>
  <div class="popup">
    <h3>This is Popup</h3>
    <button @click="$emit('close')">Close</button>
  </div>
</template>
<script setup>
    console.log('this is popup')
</script>