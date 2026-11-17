<template>
  <section id="research" class="research-section">
    <div class="glow-shape shape-glow-blue" aria-hidden="true"></div>

    <div class="container">
      <div class="section-header">
        <span class="eyebrow-pill">Track Record &amp; Portfolio</span>
        <h2>Featured Research <span class="highlight">Projects</span></h2>
        <p class="section-subtitle">
          Landmark clinical trials and long-term pediatric surveillance programs
          shaping national immunization policy.
        </p>
        <div class="accent-line"></div>
      </div>

      <div class="projects-list">
        <article
          class="project-row-card clickable-card"
          v-for="project in projects"
          :key="project.id"
          @click="goToDetail(project.id)"
        >
          <div class="card-decor" aria-hidden="true"></div>

          <div class="card-internal-grid">
            <div class="main-info-col">
              <div class="badge-row">
                <span v-if="project.badge" class="project-badge">{{
                  project.badge
                }}</span>
                <span
                  v-if="project.details && project.details.status"
                  class="status-pill"
                >
                  {{ project.details.status }}
                </span>
              </div>

              <h3>{{ project.title }}</h3>
              <p class="project-desc">{{ project.description }}</p>

              <!-- Blok Unduh Publikasi per Project -->
              <div
                v-if="
                  project.publications &&
                  project.publications.some((p) => p.link && p.link !== '#')
                "
                class="publications-inline-box"
                @click.stop
              >
                <div class="pub-box-title">
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
                  <span>Featured Publication Document</span>
                </div>
                <div class="pub-links-grid">
                  <template
                    v-for="(pub, idx) in project.publications"
                    :key="idx"
                  >
                    <a
                      v-if="pub.link && pub.link !== '#'"
                      :href="pub.link"
                      :download="pub.title + '.pdf'"
                      class="pub-download-btn"
                    >
                      <span>Download PDF: {{ pub.title }}</span>
                    </a>
                  </template>
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
                  <span>National &amp; Clinical Impact</span>
                </div>
                <p class="impact-text">{{ project.impact }}</p>
              </div>
            </div>

            <div v-if="project.details" class="details-spec-col" @click.stop>
              <div class="spec-table">
                <div class="spec-item">
                  <div class="spec-label">Sponsor / Partner</div>
                  <div class="spec-value">{{ project.details.sponsor }}</div>
                </div>
                <div class="spec-item">
                  <div class="spec-label">Recruited Cohort</div>
                  <div class="spec-value highlight-value">
                    {{ project.details.participants }}
                  </div>
                </div>
                <div class="spec-item">
                  <div class="spec-label">Timeline</div>
                  <div class="spec-value">{{ project.details.duration }}</div>
                </div>
                <div class="spec-item">
                  <div class="spec-label">Clinical Trial Sites</div>
                  <div class="spec-value sites-list">
                    {{ project.details.sites }}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="card-footer">
            <span class="view-project">
              Explore Study Timeline &amp; Full Brief
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
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
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { projectsData } from "../../data/ProjectData.js";

const router = useRouter();
const projects = ref(projectsData);

const goToDetail = (id) => {
  router.push(`/research/${id}`);
};
</script>

<style scoped>
.research-section {
  background-color: #ffffff;
  padding: 110px 0;
  position: relative;
  overflow: hidden;
}

.container {
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
    rgba(0, 71, 165, 0.04) 0%,
    rgba(0, 71, 165, 0) 70%
  );
  top: 20%;
  right: -200px;
  filter: blur(60px);
}

.section-header {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 56px;
}

.eyebrow-pill {
  font-size: 0.78rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #0047a5;
  background: rgba(0, 71, 165, 0.08);
  border: 1px solid rgba(0, 71, 165, 0.14);
  padding: 6px 16px;
  border-radius: 999px;
  margin-bottom: 14px;
}

h2 {
  font-size: clamp(1.9rem, 1.4rem + 1.5vw, 2.6rem);
  color: #002d6b;
  margin: 0 0 12px 0;
  font-weight: 800;
}

h2 .highlight {
  color: #0047a5;
}

.section-subtitle {
  font-size: 1.05rem;
  color: #64748b;
  max-width: 620px;
  margin: 0 0 18px 0;
}

.accent-line {
  width: 52px;
  height: 4px;
  background-color: #ffc700;
  border-radius: 2px;
}

.projects-list {
  display: flex;
  flex-direction: column;
  gap: 28px;
}

.project-row-card {
  background: #f8fafc;
  padding: 40px;
  border-radius: 24px;
  border: 1px solid rgba(0, 71, 165, 0.07);
  position: relative;
  overflow: hidden;
  transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
}

.card-decor {
  position: absolute;
  top: -30px;
  right: -30px;
  width: 80px;
  height: 80px;
  background-color: rgba(0, 71, 165, 0.03);
  border-radius: 50%;
  transition: all 0.4s ease;
}

.card-internal-grid {
  display: grid;
  grid-template-columns: 1.35fr 1fr;
  gap: 40px;
  align-items: start;
}

.badge-row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
  margin-bottom: 14px;
}

.project-badge {
  display: inline-block;
  font-size: 0.72rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #0047a5;
  background: rgba(0, 71, 165, 0.08);
  padding: 5px 14px;
  border-radius: 999px;
}

.status-pill {
  display: inline-block;
  font-size: 0.72rem;
  font-weight: 700;
  color: #0f766e;
  background: #ccfbf1;
  padding: 5px 12px;
  border-radius: 999px;
}

.main-info-col h3 {
  font-size: 1.55rem;
  color: #002d6b;
  margin: 0 0 14px 0;
  font-weight: 700;
  line-height: 1.3;
}

.project-desc {
  font-size: 1.02rem;
  color: #475569;
  line-height: 1.7;
  margin: 0 0 24px 0;
}

.publications-inline-box {
  background: #ffffff;
  padding: 16px 20px;
  border-radius: 14px;
  margin-bottom: 20px;
  border: 1px solid #e2e8f0;
}

.pub-box-title {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #002d6b;
  font-weight: 700;
  font-size: 0.86rem;
  margin-bottom: 10px;
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
  background: rgba(0, 71, 165, 0.06);
  color: #0047a5;
  padding: 8px 14px;
  border-radius: 8px;
  font-size: 0.84rem;
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
  padding: 16px 20px;
  border-radius: 0 12px 12px 0;
  box-shadow: 0 4px 15px rgba(0, 45, 107, 0.02);
}

.impact-title {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #002d6b;
  font-weight: 700;
  font-size: 0.9rem;
  margin-bottom: 4px;
}

.impact-title svg {
  color: #d97706;
}

.impact-text {
  font-size: 0.94rem;
  color: #475569;
  line-height: 1.55;
  margin: 0;
}

.spec-table {
  background: #ffffff;
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 10px 25px rgba(0, 45, 107, 0.03);
  border: 1px solid rgba(0, 71, 165, 0.06);
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
  font-size: 0.74rem;
  font-weight: 700;
  text-transform: uppercase;
  color: #94a3b8;
  letter-spacing: 0.05em;
  margin-bottom: 4px;
}

.spec-value {
  font-size: 0.95rem;
  color: #1e293b;
  font-weight: 600;
  line-height: 1.4;
}

.highlight-value {
  color: #0047a5;
  font-weight: 700;
}

.sites-list {
  font-size: 0.88rem;
  color: #475569;
  font-weight: 500;
}

.card-footer {
  margin-top: 28px;
  border-top: 1px solid rgba(0, 71, 165, 0.08);
  padding-top: 18px;
  display: flex;
  justify-content: flex-start;
}

.view-project {
  font-size: 0.9rem;
  font-weight: 700;
  color: #0047a5;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  transition: all 0.2s ease;
}

.view-project svg {
  transition: transform 0.2s ease;
}

.project-row-card:hover {
  transform: translateY(-4px);
  background: #ffffff;
  border-color: rgba(0, 71, 165, 0.16);
  box-shadow: 0 20px 40px rgba(0, 45, 107, 0.06);
}

.project-row-card:hover .card-decor {
  width: 140px;
  height: 140px;
  background-color: rgba(255, 199, 0, 0.1);
}

.project-row-card:hover .view-project {
  color: #002d6b;
}

.project-row-card:hover .view-project svg {
  transform: translateX(4px);
}

.clickable-card {
  cursor: pointer;
}

@media (max-width: 992px) {
  .card-internal-grid {
    grid-template-columns: 1fr;
    gap: 28px;
  }
  .project-row-card {
    padding: 28px;
  }
}

@media (max-width: 640px) {
  .research-section {
    padding: 80px 0;
  }
  .main-info-col h3 {
    font-size: 1.3rem;
  }
  .spec-table {
    padding: 18px;
  }
}
</style>
