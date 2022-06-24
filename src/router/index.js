import { createRouter, createWebHistory } from 'vue-router'
import Create from '../views/Create.vue'
import List from  '../views/List'

const routes = [
  {
    path: '/',
    name: 'create',
    component: Create
  },
  {
    path: '/list',
    name: 'list',
    component:
      List
  },
  {
    path: '/task/:id',
    name: 'task',
    component: () => import('../views/Task.vue')
    }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
