import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../pages/HomePage.vue')
  },
  {
    path: '/plan',
    name: 'Plan',
    component: () => import('../pages/PlanifyPage.vue')
  },
  {
    path: '/shoppingcart',
    name: 'ShoppingCart',
    component: () => import('../pages/ShoppingCartPage.vue')
  },
  {
    path:'/profil',
    name:'Profil',
    component: () => import('../pages/ProfilPage.vue')
  },

  //TODO: Remove all test routes
  {
    path:'/testapi',
    name:'ApiTest',
    component: () => import('../pages/ApiTest.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
