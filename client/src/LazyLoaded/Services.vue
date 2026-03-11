<template>
    <div>
        <h2>this is services section</h2>
        <router-link to="/">Home</router-link>
    </div>
</template>
<script setup>
import { onMounted } from 'vue';

    onMounted(() => {
        console.log('services loaded')
    })
</script>
