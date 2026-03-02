<template>
    <div>
        <input type="text" placeholder="Search..." v-model="searchInput" @input="searchData" />
    </div>

    <div>
        <button @click="handleClick">Button Click</button>
    </div>
</template>
<script setup>
import { ref } from 'vue'

const searchInput = ref('')
let timer = null
let isThrottled = false

const searchData = () => {
    if (timer) {
        clearTimeout(timer)
    }
    timer = setTimeout(() => {
        console.log(searchInput.value, "api called")
    }, 2000);
}

const handleClick = () => {
    if (isThrottled) return

    isThrottled = true

    setTimeout(() => {
        isThrottled = false
        console.log('api called')
    }, 2000)
}

</script>