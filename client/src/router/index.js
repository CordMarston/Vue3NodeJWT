import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {path: '/login', name: 'login', component: () => import(/* webpackChunkName: "authentication" */ '../components/auth/Login.vue')},
  {path: '/register', name: 'register', component: () => import(/* webpackChunkName: "authentication" */ '../components/auth/Register.vue')},
  {path: '/logout', name: 'logout', component: () => import(/* webpackChunkName: "authentication" */ '../components/auth/Logout.vue')},
  {path: '/dashboard', name: 'dashboard', component: () => import(/* webpackChunkName: "dashboard" */ '../components/Home.vue')}

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
