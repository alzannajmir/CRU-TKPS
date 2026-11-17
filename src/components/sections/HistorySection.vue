<script setup>
const ongoingResearch = [
  {
    id: "hexavalent-phase-1",
    title: "HEXAVALENT Phase I",
    sponsor: "Bio Farma",
    participants: "75 newborns",
    duration: "Apr 2026 – Apr 2027",
    sites: ["Bandung Kiwari Regional Hospital"],
  },
  {
    id: "hep-b-vaccine",
    title: "Hep B Vaccine",
    sponsor: "Bio Farma",
    participants: "270 newborns",
    duration: "May 2026 – Mar 2027",
    sites: [
      "Batujajar Primary Health Center",
      "Garuda",
      "Cipamokolan",
      "Al Faiha Clinic",
      "Sri Maemunah Independent Midwife Practice",
      "Yuyun Independent Midwife Practice",
      "Iyam Independent Midwife Practice"
    ],
  }
];
</script>

<template>
  <section id="journey" class="journey-section">
    <div class="container">
      <div class="section-header">
        <span class="eyebrow-pill">Active Clinical Trials</span>
        <h2>Ongoing Research <span class="highlight">Activity</span></h2>
        <p class="section-subtitle">
          Real-time multi-center pediatric vaccine studies and cohort
          recruitment dashboards.
        </p>
        <div class="accent-line"></div>
      </div>

      <div class="research-grid">
        <router-link
          :to="`/research-activity/${project.id}`"
          class="research-card"
          v-for="(project, index) in ongoingResearch"
          :key="project.id"
        >
          <div>
            <div class="card-header-meta">
              <span class="project-index">Study 0{{ index + 1 }}</span>
            </div>

            <div class="project-title-box">
              <h3>{{ project.title }}</h3>
              <div class="sponsor-tag">
                Sponsor: <strong>{{ project.sponsor }}</strong>
              </div>
            </div>

            <div class="card-divider"></div>

            <div class="project-details">
              <div class="detail-item">
                <div class="detail-icon">
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
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <div class="detail-text">
                  <span class="detail-label">Targeted Participants</span>
                  <span class="detail-val">{{ project.participants }}</span>
                </div>
              </div>

              <div class="detail-item">
                <div class="detail-icon">
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
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                </div>
                <div class="detail-text">
                  <span class="detail-label">Study Duration</span>
                  <span class="detail-val">{{ project.duration }}</span>
                </div>
              </div>

              <div class="detail-item">
                <div class="detail-icon">
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
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div class="detail-text">
                  <span class="detail-label">Participating Sites ({{ project.sites.length }})</span>
                  <span class="detail-val sites-list">{{
                    project.sites.join(", ")
                  }}</span>
                </div>
              </div>
            </div>
          </div>

          <div class="card-cta-footer">
            <span>View Recruitment Dashboard</span>
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
          </div>

          <div class="glow-indicator"></div>
        </router-link>
      </div>
    </div>
  </section>
</template>

<style scoped>
.journey-section {
  background-color: #f8fafc;
  padding: 110px 0;
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
  max-width: 600px;
  margin: 0 0 18px 0;
}

.accent-line {
  width: 52px;
  height: 4px;
  background-color: #ffc700;
  border-radius: 2px;
}

.research-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
}

.research-card {
  background: #ffffff;
  border: 1px solid rgba(0, 71, 165, 0.07);
  border-radius: 24px;
  padding: 34px 30px;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 6px 24px rgba(0, 45, 107, 0.03);
  transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
  text-decoration: none;
  cursor: pointer;
}

.card-header-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
}

.project-index {
  font-size: 0.78rem;
  font-weight: 700;
  color: #94a3b8;
  text-transform: uppercase;
  letter-spacing: 0.06em;
}

.status-badge {
  font-size: 0.72rem;
  font-weight: 700;
  color: #0047a5;
  background-color: rgba(0, 71, 165, 0.07);
  padding: 5px 12px;
  border-radius: 999px;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  text-transform: uppercase;
  letter-spacing: 0.03em;
  transition: all 0.25s ease;
}

.pulse-dot {
  width: 6px;
  height: 6px;
  background-color: #0047a5;
  border-radius: 50%;
  display: inline-block;
  animation: pulse 2s infinite;
}

.project-title-box h3 {
  font-size: 1.35rem;
  color: #002d6b;
  margin: 0 0 6px 0;
  font-weight: 700;
  line-height: 1.3;
}

.sponsor-tag {
  font-size: 0.88rem;
  color: #64748b;
}

.sponsor-tag strong {
  color: #0047a5;
}

.card-divider {
  height: 1px;
  background-color: rgba(0, 71, 165, 0.08);
  margin: 22px 0;
}

.project-details {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.detail-item {
  display: flex;
  align-items: flex-start;
  gap: 14px;
}

.detail-icon {
  width: 34px;
  height: 34px;
  background-color: #f8fafc;
  color: #0047a5;
  border: 1px solid rgba(0, 71, 165, 0.08);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.detail-text {
  display: flex;
  flex-direction: column;
  text-align: left;
}

.detail-label {
  font-size: 0.72rem;
  font-weight: 700;
  color: #94a3b8;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 2px;
}

.detail-val {
  font-size: 0.94rem;
  color: #1e293b;
  font-weight: 600;
  line-height: 1.4;
}

.detail-val.sites-list {
  font-size: 0.86rem;
  font-weight: 500;
  color: #475569;
}

.card-cta-footer {
  margin-top: 26px;
  padding-top: 18px;
  border-top: 1px solid rgba(0, 71, 165, 0.08);
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.88rem;
  font-weight: 700;
  color: #0047a5;
  transition: color 0.2s ease;
}

.card-cta-footer svg {
  transition: transform 0.25s ease;
}

.glow-indicator {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background-color: #ffc700;
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.research-card:hover {
  transform: translateY(-6px);
  border-color: rgba(0, 71, 165, 0.18);
  box-shadow: 0 22px 44px rgba(0, 45, 107, 0.08);
}

.research-card:hover .glow-indicator {
  transform: scaleX(1);
}

.research-card:hover .status-badge {
  background-color: #ffc700;
  color: #00183d;
}

.research-card:hover .pulse-dot {
  background-color: #00183d;
}

.research-card:hover .card-cta-footer {
  color: #002d6b;
}

.research-card:hover .card-cta-footer svg {
  transform: translateX(4px);
}

@keyframes pulse {
  0% {
    transform: scale(0.95);
    opacity: 1;
  }
  50% {
    transform: scale(1.2);
    opacity: 0.5;
  }
  100% {
    transform: scale(0.95);
    opacity: 1;
  }
}

@media (max-width: 992px) {
  .research-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }
}

@media (max-width: 768px) {
  .journey-section {
    padding: 80px 0;
  }
  .research-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  .research-card {
    padding: 28px 24px;
  }
}
</style>
