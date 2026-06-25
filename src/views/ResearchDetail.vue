<template>
  <section v-if="project" class="research-detail-section">
    <div class="container">
      <Navbar />
      <div class="back-nav">
        <a href="/" class="btn-back">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
          <span>Back to Research</span>
        </a>
      </div>

      <div class="detail-layout">
        
        <div class="main-content-block">
          <span class="project-badge">{{ project.badge }}</span>
          <h1>{{ project.title }}</h1>
          <p class="long-desc">{{ project.longDescription }}</p>

          <div class="progress-container" v-if="project.progress && project.progress.length">
            <h3 class="block-title">Research Timeline & Progress</h3>
            <div class="timeline-wrapper">
              <div 
                v-for="(step, index) in project.progress" 
                :key="index"
                class="timeline-item"
                :class="{ 'status-completed': step.status === 'done', 'status-active': step.status === 'active' }"
              >
                <div class="timeline-dot-wrapper">
                  <div class="timeline-dot"></div>
                  <div class="timeline-line"></div>
                </div>
                <div class="timeline-content">
                  <div class="timeline-date">{{ step.date }}</div>
                  <h4>{{ step.title }}</h4>
                  <p>{{ step.desc }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="sidebar-block">
          <div class="sticky-sidebar">
            
            <div class="detail-spec-card" v-if="project.details">
              <h3>Project Brief</h3>
              <div class="spec-list-item" v-for="(val, key) in project.details" :key="key">
                <span class="label">{{ key }}</span>
                <span class="value">{{ val }}</span>
              </div>
            </div>

            <div v-if="project.publications && project.publications.length" class="publications-card">
              <h3>Publications</h3>
              <ul class="pub-list">
                <li v-for="(pub, idx) in project.publications" :key="idx">
                  <a :href="pub.link" target="_blank" class="pub-link">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line></svg>
                    <span>{{ pub.title }}</span>
                  </a>
                </li>
              </ul>
            </div>

          </div>
        </div>

      </div>
    </div>
  </section>

  <div v-else class="not-found-container">
    <div class="not-found-card">
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#94A3B8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
      <p>Project data is not found or loading...</p>
      <a href="/" class="btn-home">Return Home</a>
    </div>
  </div>
    <Footer/>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { projectsData } from '../data/ProjectData.js'
import Navbar from '../components/layout/Navbar.vue'
import Footer from '../components/layout/Footer.vue'

const project = ref(null)

onMounted(() => {
  let projectId = ''

  // 1. Coba deteksi menggunakan parameter query URL (?id=nama-project)
  const urlParams = new URLSearchParams(window.location.search)
  projectId = urlParams.get('id')

  // 2. Fallback: Jika tidak ada query, coba baca segment path terakhir (/research/nama-project)
  if (!projectId) {
    const pathSegments = window.location.pathname.split('/').filter(p => p)
    projectId = pathSegments[pathSegments.length - 1]
  }

  // Cari data project berdasarkan ID yang berhasil diekstrak
  if (projectId) {
    project.value = projectsData.find(p => p.id === projectId)
  }
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap');

.research-detail-section { background-color: #FFFFFF; padding: 60px 0 120px 0; font-family: 'Plus Jakarta Sans', sans-serif; }
.container { max-width: 1200px; margin: auto; padding: 0 24px; }
.back-nav { margin-bottom: 32px; margin-top: 50px;}
.btn-back { display: inline-flex; align-items: center; gap: 8px; color: #0047A5; text-decoration: none; font-weight: 700; transition: color 0.2s; }
.btn-back:hover { color: #002D6B; }

.detail-layout { display: grid; grid-template-columns: 1.4fr 1fr; gap: 48px; align-items: start; }
.project-badge { display: inline-block; font-size: 11px; font-weight: 700; text-transform: uppercase; color: #0047A5; background: rgba(0, 71, 165, 0.06); padding: 6px 14px; border-radius: 30px; margin-bottom: 16px; }
h1 { font-size: 2.5rem; color: #002D6B; font-weight: 700; margin: 0 0 24px 0; line-height: 1.3; }
.long-desc { font-size: 1.1rem; color: #4A5568; line-height: 1.8; margin-bottom: 48px; }
.block-title { font-size: 1.4rem; color: #002D6B; font-weight: 700; margin-bottom: 28px; }

/* Timeline UI */
.timeline-wrapper { display: flex; flex-direction: column; }
.timeline-item { display: flex; gap: 24px; position: relative; padding-bottom: 32px; }
.timeline-item:last-child { padding-bottom: 0; }
.timeline-dot-wrapper { display: flex; flex-direction: column; align-items: center; }
.timeline-dot { width: 14px; height: 14px; border-radius: 50%; background: #CBD5E1; border: 3px solid #FFFFFF; box-shadow: 0 0 0 2px #CBD5E1; z-index: 2; }
.timeline-line { width: 2px; background: #E2E8F0; position: absolute; top: 14px; bottom: 0; left: 6px; z-index: 1; }
.timeline-item:last-child .timeline-line { display: none; }
.timeline-content .timeline-date { font-size: 0.85rem; font-weight: 700; color: #94A3B8; text-transform: uppercase; margin-bottom: 4px; }
.timeline-content h4 { font-size: 1.1rem; color: #1E293B; margin: 0 0 6px 0; font-weight: 700; }
.timeline-content p { font-size: 0.95rem; color: #64748B; margin: 0; line-height: 1.5; }

.status-completed .timeline-dot { background: #0047A5; box-shadow: 0 0 0 2px #0047A5; }
.status-completed .timeline-line { background: #0047A5; }
.status-active .timeline-dot { background: #FFC700; box-shadow: 0 0 0 4px rgba(255, 199, 0, 0.2); }

/* Sidebar UI */
.sticky-sidebar { display: flex; flex-direction: column; gap: 28px; position: sticky; top: 40px; }
.detail-spec-card, .publications-card { background: #F8FAFC; border: 1px solid rgba(0, 71, 165, 0.04); border-radius: 20px; padding: 28px; }
.detail-spec-card h3, .publications-card h3 { font-size: 1.2rem; color: #002D6B; margin: 0 0 20px 0; font-weight: 700; }
.spec-list-item { display: flex; flex-direction: column; padding: 10px 0; border-bottom: 1px solid #E2E8F0; }
.spec-list-item:last-child { border-bottom: none; }
.spec-list-item .label { font-size: 0.8rem; font-weight: 700; color: #94A3B8; text-transform: uppercase; }
.spec-list-item .value { font-size: 0.98rem; color: #1E293B; font-weight: 600; margin-top: 2px; }

.pub-list { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 14px; }
.pub-link { display: flex; align-items: start; gap: 10px; color: #4A5568; text-decoration: none; font-size: 0.95rem; font-weight: 500; transition: color 0.2s; }
.pub-link svg { color: #0047A5; flex-shrink: 0; margin-top: 2px; }
.pub-link:hover { color: #0047A5; }

/* Not Found Container */
.not-found-container { display: flex; align-items: center; justify-content: center; min-height: 60vh; font-family: 'Plus Jakarta Sans', sans-serif; }
.not-found-card { text-align: center; display: flex; flex-direction: column; align-items: center; gap: 16px; }
.not-found-card p { color: #64748B; font-size: 1.1rem; font-weight: 500; margin: 0; }
.btn-home { background-color: #0047A5; color: #FFFFFF; text-decoration: none; padding: 10px 24px; border-radius: 8px; font-weight: 600; font-size: 0.95rem; margin-top: 8px; transition: background-color 0.2s; }
.btn-home:hover { background-color: #002D6B; }

@media (max-width: 992px) { .detail-layout { grid-template-columns: 1fr; gap: 40px; } .sticky-sidebar { position: static; } }
</style>