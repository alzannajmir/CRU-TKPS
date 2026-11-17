import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import ResearchList from '../views/ResearchList.vue'
import ResearchDetail from '../views/ResearchDetail.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/research',
    name: 'research',
    component: ResearchList
  },
  {
    path: '/research/:id',
    name: 'research-detail',
    component: ResearchDetail
  },
  {
    path: '/research-activity/:id',
    name: 'research-activity',
    component: ResearchDetail,
  },

]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, _from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) return { el: to.hash, behavior: 'smooth', top: 80 }
    return { top: 0, behavior: 'smooth' }
  }
})

export default router