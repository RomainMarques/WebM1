import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: () => import('../pages/WelcomePage.vue')
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('../pages/HomePage.vue')
  },
  {
    path: '/plan',
    name: 'Plan',
    component: () => import('../pages/PlanifyPage.vue')
  },
  {
    path:'/testapi',
    name:'ApiTest',
    component: () => import('../pages/ApiTest.vue')
  },
  {
    path:'/trip/:id',
    name:'Trip',
    props: {
      default: true
    },
    component: () => import('../components/Trip.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
