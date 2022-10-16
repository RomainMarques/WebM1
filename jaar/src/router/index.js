import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "register" */ '../views/Sign.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Sign.vue')
  },
  {
    path: '/plan',
    name: 'Plan',
    component: () => import(/* webpackChunkName: "plan" */ '../views/Planify.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
