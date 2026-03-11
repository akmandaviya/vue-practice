<template>
    <div>
        <h2>Home Page</h2>
        <div style="display: flex; justify-content: space-evenly;">
            <router-link to="/about">About</router-link>
            <router-link to="/services">Services</router-link>
        </div>

        <div>
            <button @click="showPopup = true">
                Open Popup
            </button>
        </div>

        <Popup v-if="showPopup" @close="showPopup = false" />

    </div>
</template>
<script setup>
import { ref, defineAsyncComponent } from 'vue'

const showPopup = ref(false)

const Popup = defineAsyncComponent(() =>
    import('../LazyLoaded/Modals/Popup.vue')
)
</script>