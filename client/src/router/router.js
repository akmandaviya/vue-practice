import { createRouter, createWebHistory } from "vue-router"
import Home from "../pages/Home.vue"

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/about',
        component: () => import("../LazyLoaded/About.vue") // lazy loading
    },
    { 
        path: '/services',
        component: () => import("../LazyLoaded/Services.vue") // lazy loading
    }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router