import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {path: '/', name:'home', component: () => import('../views/HomeView.vue')},
    {path: '/projects', name:'projects', component: () => import('../views/ProjectsView.vue')},
    {path: '/about', name:'about', component: () => import('../views/AboutView.vue')},
    {path: '/contact', name:'contact', component: () => import('../views/ContactView.vue')},
    {path: '/:catchAll(.*)', name:'notFound', component: () => import('../views/Errors/NotFoundView.vue')},
]

const router = createRouter(
    {
        history: createWebHistory(),
        routes,
    }
)

export default router