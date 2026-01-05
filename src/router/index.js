import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Rooms from '../views/Rooms.vue'
import RoomSingle from '../views/RoomSingle.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/rooms', component: Rooms },
    { path: '/rooms/:slug', component: RoomSingle },
    { path: '/about', component: About },
    { path: '/contact', component: Contact }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        return { top: 0 }
    }
})

export default router