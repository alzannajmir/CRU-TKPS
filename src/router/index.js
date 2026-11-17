import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import ResearchList from '../views/ResearchList.vue'
import ResearchDetail from '../views/ResearchDetail.vue'
import { projectsData } from '../data/ProjectData.js'

const defaultTitle = 'CRU-TKPS | Clinical Research Unit – Universitas Padjadjaran'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: { title: defaultTitle }
  },
  {
    path: '/research',
    name: 'research',
    component: ResearchList,
    meta: { title: 'Research Projects | CRU-TKPS' }
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

router.afterEach((to) => {
  const project = to.params.id
    ? projectsData.find((p) => p.id === to.params.id)
    : null
  document.title = project
    ? `${project.title} | CRU-TKPS`
    : to.meta.title || defaultTitle
})

export default router