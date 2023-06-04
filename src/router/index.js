import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/sidebar-vue/',
            component: Home
        },
        {
            path: '/sidebar-vue/about',
            component: () => import('../views/About.vue')
        }
    ]
})

export default router