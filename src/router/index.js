import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../components/Home.vue')
  },
  {
    path: '/tasks',
    name: 'Tasks',
    component: () => import('../components/Tasks.vue')
  },
  {
    path: '/deleted',
    name: 'DeletedTasks',
    component: () => import('../components/DeletedTasks.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
