<template>
  <Navbar />

  <section v-if="project" class="research-detail-section">
    <div class="container">
      <div class="back-nav">
        <router-link to="/#research" class="back-btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          <span>Back to Research Portfolio</span>
        </router-link>
      </div>

      <div class="detail-layout">
        <div class="main-content-block">
          <span class="project-badge">{{ project.badge }}</span>
          <h1>{{ project.title }}</h1>
          <p class="long-desc">{{ project.longDescription }}</p>

          <div
            class="progress-container"
            v-if="project.progress && project.progress.length"
          >
            <h2 class="block-title">Research Timeline &amp; Milestones</h2>
            <div class="timeline-wrapper">
              <div
                v-for="(step, index) in project.progress"
                :key="index"
                class="timeline-item"
                :class="{
                  'status-completed': step.status === 'done',
                  'status-active': step.status === 'active',
                }"
              >
                <div class="timeline-dot-wrapper">
                  <div class="timeline-dot"></div>
                  <div class="timeline-line"></div>
                </div>
                <div class="timeline-content">
                  <div class="timeline-date">{{ step.date }}</div>
                  <h3>{{ step.title }}</h3>
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
              <div
                class="spec-list-item"
                v-for="(val, key) in project.details"
                :key="key"
              >
                <span class="label">{{ key }}</span>
                <span class="value">{{ val }}</span>
              </div>
            </div>

            <div
              v-if="project.publications && project.publications.length"
              class="publications-card"
            >
              <h3>Publications &amp; Reports</h3>
              <ul class="pub-list">
                <li v-for="(pub, idx) in project.publications" :key="idx">
                  <a
                    v-if="pub.link && pub.link !== '#'"
                    :href="pub.link"
                    :download="pub.title + '.pdf'"
                    class="pub-link"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path
                        d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
                      ></path>
                      <polyline points="14 2 14 8 20 8"></polyline>
                      <line x1="16" y1="13" x2="8" y2="13"></line>
                      <line x1="16" y1="17" x2="8" y2="17"></line>
                    </svg>
                    <span>Download PDF: {{ pub.title }}</span>
                  </a>

                  <div v-else class="pub-item-static">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path
                        d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
                      ></path>
                      <polyline points="14 2 14 8 20 8"></polyline>
                    </svg>
                    <div>
                      <span>{{ pub.title }}</span>
                      <small class="archive-note"
                        >Archived in CRU-TKPS Institutional Repository</small
                      >
                    </div>
                  </div>
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
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#94A3B8"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="12" y1="8" x2="12" y2="12"></line>
        <line x1="12" y1="16" x2="12.01" y2="16"></line>
      </svg>
      <p>Project data was not found.</p>
      <router-link to="/" class="btn-home">Return Home</router-link>
    </div>
  </div>
  <Footer />
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import { projectsData } from "../data/ProjectData.js";
import Navbar from "../components/layout/Navbar.vue";
import Footer from "../components/layout/Footer.vue";

const route = useRoute();

const project = computed(() => {
  const projectId = route.params.id || route.query.id;
  return projectsData.find((p) => p.id === projectId) || null;
});
</script>

<style scoped>
.research-detail-section {
  background-color: #ffffff;
  padding: 120px 0 110px 0;
  min-height: 80dvh;
}

.container {
  max-width: 1200px;
  margin: auto;
  padding: 0 24px;
}

.back-nav {
  margin-bottom: 28px;
}

.back-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 700;
  color: #0047a5;
  background: #f8fafc;
  border: 1px solid rgba(0, 71, 165, 0.12);
  padding: 9px 18px;
  border-radius: 999px;
  transition: all 0.2s ease;
}

.back-btn:hover {
  background: #002d6b;
  color: #ffffff;
  border-color: #002d6b;
}

.detail-layout {
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  gap: 48px;
  align-items: start;
}

.project-badge {
  display: inline-block;
  font-size: 0.74rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: #0047a5;
  background: rgba(0, 71, 165, 0.08);
  padding: 6px 14px;
  border-radius: 30px;
  margin-bottom: 16px;
}

h1 {
  font-size: clamp(1.85rem, 1.4rem + 1.5vw, 2.5rem);
  color: #002d6b;
  font-weight: 800;
  margin: 0 0 20px 0;
  line-height: 1.25;
}

.long-desc {
  font-size: 1.08rem;
  color: #475569;
  line-height: 1.8;
  margin-bottom: 48px;
}

.block-title {
  font-size: 1.35rem;
  color: #002d6b;
  font-weight: 700;
  margin-bottom: 28px;
}

.timeline-wrapper {
  display: flex;
  flex-direction: column;
}

.timeline-item {
  display: flex;
  gap: 24px;
  position: relative;
  padding-bottom: 32px;
}

.timeline-item:last-child {
  padding-bottom: 0;
}

.timeline-dot-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.timeline-dot {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: #cbd5e1;
  border: 3px solid #ffffff;
  box-shadow: 0 0 0 2px #cbd5e1;
  z-index: 2;
}

.timeline-line {
  width: 2px;
  background: #e2e8f0;
  position: absolute;
  top: 14px;
  bottom: 0;
  left: 6px;
  z-index: 1;
}

.timeline-item:last-child .timeline-line {
  display: none;
}

.timeline-content .timeline-date {
  font-size: 0.8rem;
  font-weight: 700;
  color: #64748b;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 4px;
}

.timeline-content h3 {
  font-size: 1.08rem;
  color: #0f172a;
  margin: 0 0 6px 0;
  font-weight: 700;
}

.timeline-content p {
  font-size: 0.95rem;
  color: #475569;
  margin: 0;
  line-height: 1.55;
}

.status-completed .timeline-dot {
  background: #0047a5;
  box-shadow: 0 0 0 2px #0047a5;
}

.status-completed .timeline-line {
  background: #0047a5;
}

.status-active .timeline-dot {
  background: #ffc700;
  box-shadow: 0 0 0 4px rgba(255, 199, 0, 0.25);
}

.sticky-sidebar {
  display: flex;
  flex-direction: column;
  gap: 24px;
  position: sticky;
  top: 100px;
}

.detail-spec-card,
.publications-card {
  background: #f8fafc;
  border: 1px solid rgba(0, 71, 165, 0.08);
  border-radius: 20px;
  padding: 28px;
}

.detail-spec-card h3,
.publications-card h3 {
  font-size: 1.18rem;
  color: #002d6b;
  margin: 0 0 18px 0;
  font-weight: 700;
}

.spec-list-item {
  display: flex;
  flex-direction: column;
  padding: 10px 0;
  border-bottom: 1px solid #e2e8f0;
}

.spec-list-item:last-child {
  border-bottom: none;
}

.spec-list-item .label {
  font-size: 0.76rem;
  font-weight: 700;
  color: #64748b;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.spec-list-item .value {
  font-size: 0.96rem;
  color: #0f172a;
  font-weight: 600;
  margin-top: 2px;
}

.pub-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.pub-link {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  color: #0047a5;
  text-decoration: none;
  font-size: 0.94rem;
  font-weight: 600;
  transition: color 0.2s;
}

.pub-link svg {
  color: #0047a5;
  flex-shrink: 0;
  margin-top: 3px;
}

.pub-link:hover {
  color: #002d6b;
  text-decoration: underline;
}

.pub-item-static {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  color: #334155;
  font-size: 0.94rem;
  font-weight: 600;
}

.pub-item-static svg {
  color: #64748b;
  flex-shrink: 0;
  margin-top: 3px;
}

.archive-note {
  display: block;
  font-size: 0.78rem;
  font-weight: 500;
  color: #64748b;
  margin-top: 2px;
}

.not-found-container {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 70dvh;
  padding-top: 100px;
}

.not-found-card {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
}

.not-found-card p {
  color: #64748b;
  font-size: 1.1rem;
  font-weight: 500;
  margin: 0;
}

.btn-home {
  background-color: #002d6b;
  color: #ffffff;
  text-decoration: none;
  padding: 10px 24px;
  border-radius: 999px;
  font-weight: 600;
  font-size: 0.95rem;
  margin-top: 8px;
  transition: background-color 0.2s;
}

.btn-home:hover {
  background-color: #0047a5;
}

@media (max-width: 992px) {
  .detail-layout {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  .sticky-sidebar {
    position: static;
  }
}
</style>
