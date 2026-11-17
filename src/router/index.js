import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import TeamDetail from '../views/TeamDetail.vue'
import ResearchList from '../views/ResearchList.vue'
import ResearchDetail from '../views/ResearchDetail.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/team',
    name: 'team',
    component: TeamDetail
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
  name: 'ResearchActivity',
  component: () => import('../views/ResearchActivity.vue'), // sesuaikan path file Anda
  props: true // mengizinkan parameter id dilewatkan sebagai props
}
  
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