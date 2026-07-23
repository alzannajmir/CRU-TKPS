<template>
  <section id="research" class="research-section">
    <div class="glow-shape shape-glow-blue"></div>
    <div class="animated-ring-shape"></div>

    <div class="container">
      <div class="section-header">
        <span class="sub-title">Our Portfolio</span>
        <h2>Research <span class="highlight">Projects</span></h2>
        <div class="accent-line"></div>
      </div>

      <div class="projects-list">
        <div
          class="project-row-card clickable-card"
          v-for="project in projects"
          :key="project.id"
          @click="goToDetail(project.id)"
        >
          <div class="card-decor"></div>

          <div class="card-internal-grid">
            <div class="main-info-col">
              <span v-if="project.badge" class="project-badge">{{
                project.badge
              }}</span>
              <h3>{{ project.title }}</h3>
              <p class="project-desc">{{ project.description }}</p>

              <!-- Blok Unduh Publikasi per Project -->
              <div v-if="project.publications && project.publications.length" class="publications-inline-box" @click.stop>
                <div class="pub-box-title">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                  </svg>
                  <span>Available Publications</span>
                </div>
                <div class="pub-links-grid">
                  <a 
                    v-for="(pub, idx) in project.publications" 
                    :key="idx"
                    :href="getPdfUrl(pub.link)"
                    :download="pub.title + '.pdf'"
                    class="pub-download-btn"
                  >
                    <span>Download {{ pub.title }}</span>
                  </a>
                </div>
              </div>

              <div v-if="project.impact" class="impact-box">
                <div class="impact-title">
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
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                  <span>Impact</span>
                </div>
                <p class="impact-text">{{ project.impact }}</p>
              </div>
            </div>

            <div v-if="project.details" class="details-spec-col" @click.stop>
              <div class="spec-table">
                <div class="spec-item">
                  <div class="spec-label">Sponsor</div>
                  <div class="spec-value">{{ project.details.sponsor }}</div>
                </div>
                <div class="spec-item">
                  <div class="spec-label">Recruited Participants</div>
                  <div class="spec-value highlight-value">
                    {{ project.details.participants }}
                  </div>
                </div>
                <div class="spec-item">
                  <div class="spec-label">Project Duration</div>
                  <div class="spec-value">{{ project.details.duration }}</div>
                </div>
                <div class="spec-item">
                  <div class="spec-label">Participating Sites</div>
                  <div class="spec-value sites-list">
                    {{ project.details.sites }}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="card-footer">
            <span class="view-project">
              View Full Progress & Publications
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
// Mengambil data terpusat (3 Project: sinovac-trial, adult-vaccine, pediatric-research)
import { projectsData } from "../../data/ProjectData.js";

const projects = ref(projectsData);

const goToDetail = (id) => {
  window.location.href = `/research/${id}`;
};

/**
 * Resolver URL dinamis untuk asset lokal di Vite
 * Membaca target dari direktori 'src/assets/pdf/'
 */
const getPdfUrl = (linkProperty) => {
  if (!linkProperty || linkProperty === "#") return "#";
  // Menyelesaikan path file string dinamis secara aman
  return new URL(`../../assets/pdf/${linkProperty}`, import.meta.url).href;
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap");

.research-section {
  background-color: #ffffff;
  padding: 120px 0;
  font-family: "Plus Jakarta Sans", sans-serif;
  position: relative;
  overflow: hidden;
}
.container {
  max-width: 1200px;
  margin: auto;
  padding: 0 24px;
  position: relative;
  z-index: 3;
}
.glow-shape {
  position: absolute;
  pointer-events: none;
  border-radius: 50%;
  z-index: 1;
}
.shape-glow-blue {
  width: 600px;
  height: 600px;
  background: radial-gradient(
    circle,
    rgba(0, 71, 165, 0.03) 0%,
    rgba(0, 71, 165, 0) 70%
  );
  top: 20%;
  right: -200px;
  filter: blur(60px);
}
.animated-ring-shape {
  position: absolute;
  width: 260px;
  height: 260px;
  border: 2px dashed rgba(0, 71, 165, 0.04);
  border-radius: 50%;
  top: 10%;
  left: -100px;
  z-index: 1;
  pointer-events: none;
}
.section-header {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 64px;
}
.sub-title {
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  color: #ffc700;
  margin-bottom: 8px;
}
h2 {
  font-size: 2.5rem;
  color: #002d6b;
  margin: 0 0 16px 0;
  font-weight: 700;
}
h2 .highlight {
  color: #0047a5;
}
.accent-line {
  width: 50px;
  height: 4px;
  background-color: #ffc700;
  border-radius: 2px;
}
.projects-list {
  display: flex;
  flex-direction: column;
  gap: 32px;
}
.project-row-card {
  background: #f8fafc;
  padding: 44px;
  border-radius: 24px;
  border: 1px solid rgba(0, 71, 165, 0.04);
  position: relative;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}
.card-decor {
  position: absolute;
  top: -30px;
  right: -30px;
  width: 70px;
  height: 70px;
  background-color: rgba(0, 71, 165, 0.03);
  border-radius: 50%;
  transition: all 0.4s ease;
}
.card-internal-grid {
  display: grid;
  grid-template-columns: 1.3fr 1fr;
  gap: 48px;
  align-items: start;
}
.project-badge {
  display: inline-block;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #0047a5;
  background: rgba(0, 71, 165, 0.06);
  padding: 6px 14px;
  border-radius: 30px;
  margin-bottom: 16px;
}
.main-info-col h3 {
  font-size: 1.6rem;
  color: #002d6b;
  margin: 0 0 16px 0;
  font-weight: 700;
  line-height: 1.3;
}
.project-desc {
  font-size: 1.05rem;
  color: #4a5568;
  line-height: 1.7;
  margin: 0 0 28px 0;
}

/* Style Box Publikasi */
.publications-inline-box {
  background: #ffffff;
  padding: 16px 20px;
  border-radius: 12px;
  margin-bottom: 24px;
  border: 1px solid #e2e8f0;
}
.pub-box-title {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #002d6b;
  font-weight: 700;
  font-size: 0.9rem;
  margin-bottom: 12px;
}
.pub-box-title svg {
  color: #0047a5;
}
.pub-links-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
.pub-download-btn {
  display: inline-flex;
  align-items: center;
  background: rgba(0, 71, 165, 0.05);
  color: #0047a5;
  padding: 8px 14px;
  border-radius: 8px;
  font-size: 0.85rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.2s ease;
}
.pub-download-btn:hover {
  background: #0047a5;
  color: #ffffff;
}

.impact-box {
  background: #ffffff;
  border-left: 4px solid #ffc700;
  padding: 18px 22px;
  border-radius: 0 12px 12px 0;
  box-shadow: 0 4px 15px rgba(0, 45, 107, 0.01);
}
.impact-title {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #002d6b;
  font-weight: 700;
  font-size: 0.95rem;
  margin-bottom: 6px;
}
.impact-title svg {
  color: #ffc700;
}
.impact-text {
  font-size: 0.95rem;
  color: #475569;
  line-height: 1.5;
  margin: 0;
}
.spec-table {
  background: #ffffff;
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 10px 25px rgba(0, 45, 107, 0.02);
  border: 1px solid rgba(0, 71, 165, 0.02);
}
.spec-item {
  padding: 12px 0;
  border-bottom: 1px solid #f1f5f9;
}
.spec-item:last-child {
  border-bottom: none;
  padding-bottom: 0;
}
.spec-item:first-child {
  padding-top: 0;
}
.spec-label {
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  color: #94a3b8;
  letter-spacing: 0.5px;
  margin-bottom: 4px;
}
.spec-value {
  font-size: 0.98rem;
  color: #1e293b;
  font-weight: 600;
  line-height: 1.4;
}
.highlight-value {
  color: #0047a5;
  font-weight: 700;
}
.sites-list {
  font-size: 0.9rem;
  color: #475569;
  font-weight: 500;
}
.card-footer {
  margin-top: 32px;
  border-top: 1px solid rgba(0, 71, 165, 0.06);
  padding-top: 20px;
  display: flex;
  justify-content: flex-start;
}
.view-project {
  font-size: 0.9rem;
  font-weight: 700;
  color: #0047a5;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  transition: all 0.2s ease;
}
.view-project svg {
  transition: transform 0.2s ease;
}
.project-row-card:hover {
  transform: translateY(-4px);
  background: #ffffff;
  border-color: rgba(0, 71, 165, 0.1);
  box-shadow: 0 20px 40px rgba(0, 45, 107, 0.05);
}
.project-row-card:hover .card-decor {
  width: 140px;
  height: 140px;
  background-color: rgba(255, 199, 0, 0.08);
}
.project-row-card:hover .view-project {
  color: #002d6b;
}
.project-row-card:hover .view-project svg {
  transform: translateX(3px);
}
.clickable-card {
  cursor: pointer;
}

@media (max-width: 992px) {
  .card-internal-grid {
    grid-template-columns: 1fr;
    gap: 32px;
  }
  .project-row-card {
    padding: 32px;
  }
}
@media (max-width: 640px) {
  .research-section {
    padding: 80px 0;
  }
  h2 {
    font-size: 2rem;
  }
  .main-info-col h3 {
    font-size: 1.35rem;
  }
  .spec-table {
    padding: 16px;
  }
}
</style>