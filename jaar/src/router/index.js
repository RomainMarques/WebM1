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
    path: '/member',
    name: 'Member',
    component: () => import('../pages/MemberPage.vue')
  },
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
