import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Guard from '../services/middleware.js'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    beforeEnter: Guard.auth,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/transferir',
    name: 'transferir',

    component: () => import(/* webpackChunkName: "about" */ '../views/TransferirView.vue'),
    beforeEnter: Guard.auth,
  },
  {
    path: '/deposito',
    name: 'deposito',

    component: () => import(/* webpackChunkName: "about" */ '../views/DepositarView.vue'),
    beforeEnter: Guard.auth,
  },
  {
    path: '/inicio',
    name: 'inicio',

    component: () => import(/* webpackChunkName: "about" */ '../views/InicioView.vue'),
  },
  {
    path: '/cadastro',
    name: 'cadastro',

    component: () => import(/* webpackChunkName: "about" */ '../views/CadastrarView.vue')
  },
  {
    path: '/login',
    name: 'login',

    component: () => import(/* webpackChunkName: "about" */ '../views/LoginView.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
