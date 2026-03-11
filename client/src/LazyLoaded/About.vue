<template>
    <div>
        <h2>this is about section</h2>
        <router-link to="/">Home</router-link>
    </div>
</template>
<script setup>
import { onMounted } from 'vue';

    onMounted(() => {
        console.log('about loaded')
    })
</script>
