import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/components/views/Login.vue'
import VerifyPage from '@/components/views/VerifyPage.vue'
import HomePage from '@/components/views/HomePage.vue'

const routes = [
  { path: '/', component: Login },
  { path: '/verify', component: VerifyPage },
  { path: '/home', component: HomePage },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
