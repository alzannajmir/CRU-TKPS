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
  routes
})

export default router