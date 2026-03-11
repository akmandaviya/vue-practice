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

        
        <div>
            <button @click="showUserData = true">
                User Data
            </button>
        </div>

        <!-- <Popup v-if="showPopup" @close="showPopup = false" /> -->
        <Suspense v-if="showPopup">
            <template #default>
                <Popup />
            </template>

            <template #fallback>
                <div>Loading Popup...</div>
            </template>
        </Suspense>

        <Suspense v-if="showUserData">
            <template #default>
                <UserProfile />
            </template>

            <template #fallback>
                <div>Loading user...</div>
            </template>
        </Suspense>

    </div>
</template>
<script setup>
import { ref, defineAsyncComponent } from 'vue'

const showPopup = ref(false)
const showUserData = ref(false)

const Popup = defineAsyncComponent(() =>
    import('../LazyLoaded/Modals/Popup.vue')
)

const UserProfile = defineAsyncComponent(() => import('../LazyLoaded/UserProfile.vue'))
</script>