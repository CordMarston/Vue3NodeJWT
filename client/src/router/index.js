import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {path: '/', name: 'lhome', component: () => import(/* webpackChunkName: "authentication" */ '../components/auth/Home.vue')},
  {path: '/login', name: 'login', component: () => import(/* webpackChunkName: "authentication" */ '../components/auth/Login.vue')},
  {path: '/register', name: 'register', component: () => import(/* webpackChunkName: "authentication" */ '../components/auth/Register.vue')},
  {path: '/logout', name: 'logout', component: () => import(/* webpackChunkName: "authentication" */ '../components/auth/Logout.vue')},
  {path: '/dashboard', name: 'dashboard', component: () => import(/* webpackChunkName: "dashboard" */ '../components/Home.vue')},
  {path: '/sites', name: 'sites', component: () => import(/* webpackChunkName: "dashboard" */ '../components/sites/Sites.vue')},

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
