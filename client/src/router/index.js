import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/ordemservico',
    name: 'ordemservico',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/OrdemServicoView.vue')
  },
  {
    path: '/cliente',
    name: 'cliente',
    component: () => import('../views/ClienteView.vue')
  },
  {
    path: '/aparelho',
    name: 'aparelho',
    component: () => import('../views/AparelhoView.vue')
  },
  {
    path: '/notas',
    name: 'notas',
    component: () => import('../views/NotasView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
