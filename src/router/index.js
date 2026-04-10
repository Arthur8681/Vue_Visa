import { createRouter, createWebHistory } from 'vue-router'

// Import your components (pages)
import main from '../pages/main.vue'

const routes = [
  {
    path: '/',
    name: 'Main',
    component: main
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router