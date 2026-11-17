<template>
  <Navbar />

  <section class="research-activity">
    <div class="glow-shape shape-glow-blue" aria-hidden="true"></div>

    <div class="container">
      <div class="dashboard-header-nav">
        <router-link to="/#journey" class="back-btn">
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
          <span>Back to Ongoing Trials</span>
        </router-link>

        <!-- Study Switcher Pills -->
        <div class="study-tabs">
          <router-link
            v-for="study in studiesList"
            :key="study.id"
            :to="`/research-activity/${study.id}`"
            class="study-tab"
            :class="{ active: currentStudy.id === study.id }"
          >
            {{ study.shortName }}
          </router-link>
        </div>
      </div>

      <div class="main-header">
        <div class="header-badges">
          <span class="sub-title">Clinical Trial Recruitment Dashboard</span>
          <span class="sponsor-pill">Sponsor: {{ currentStudy.sponsor }}</span>
          <span class="target-pill">Target: {{ currentStudy.target }}</span>
        </div>
        <h1>{{ currentStudy.title }}</h1>
        <div class="accent-line"></div>
      </div>

      <div class="dashboard-layout">
        <div class="metrics-block">
          <div class="block-header-row">
            <h2 class="block-title">Subject Recruitment Progress</h2>

            <div class="date-badge">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
              <span
                >Last Updated: <strong>{{ currentStudy.updatedAt }}</strong></span
              >
            </div>
          </div>

          <div class="metrics-grid">
            <!-- Va Card -->
            <div class="metric-card highlight-blue">
              <div class="card-icon">Va</div>
              <div class="card-info">
                <span class="label">Pre-IC Screening Stage</span>
                <h3 class="value">
                  {{ currentStudy.preIC.total }}
                  <span class="unit">Subjects</span>
                </h3>
                <p class="note-text location-detail">
                  *{{ currentStudy.preIC.detail }}
                </p>
              </div>
            </div>

            <!-- V0 Card -->
            <div class="metric-card">
              <div class="card-icon">V0</div>
              <div class="card-info">
                <span class="label">Blood Sample Collected</span>
                <h3 class="value">
                  {{ currentStudy.bloodDrawn.total }}
                  <span class="unit">Subjects</span>
                </h3>
                <p class="note-text text-danger">
                  *{{ currentStudy.bloodDrawn.note }}
                </p>
              </div>
            </div>

            <!-- Prodia Card -->
            <div class="metric-card">
              <div class="card-icon">Lab</div>
              <div class="card-info">
                <span class="label">Dispatched to Central Lab</span>
                <h3 class="value">
                  {{ currentStudy.labSent.total }}
                  <span class="unit">Samples</span>
                </h3>
                <p class="note-text">
                  *{{ currentStudy.labSent.note }}<br />
                  <strong>*{{ currentStudy.labSent.followUpNote }}</strong>
                </p>
              </div>
            </div>

            <!-- V1 Card -->
            <div class="metric-card success-light">
              <div class="card-icon">V1</div>
              <div class="card-info">
                <span class="label">Enrolled (Inclusion Criteria)</span>
                <h3 class="value text-success">
                  {{ currentStudy.included.total }}
                  <span class="unit">Subjects</span>
                </h3>
                <p class="note-text location-detail text-success">
                  *{{ currentStudy.included.detail }}
                </p>
              </div>
            </div>
          </div>

          <!-- Banners Area (V1b & V2) -->
          <div class="banners-container">
            <div class="target-card-banner">
              <div class="banner-content">
                <h4>Visit V1b Completion</h4>
                <p>
                  Enrolled subjects who have completed all scheduled Visit V1b
                  clinical procedures.
                </p>
              </div>
              <div class="banner-value">
                <span class="big-number">{{ currentStudy.completedV1b }}</span>
                <span class="sub-number"
                  >/ {{ currentStudy.included.total }} Enrolled</span
                >
              </div>
            </div>

            <div class="target-card-banner highlight-gold">
              <div class="banner-content">
                <h4>Visit V2 Completion</h4>
                <p>
                  Enrolled subjects who have progressed to and completed Visit
                  V2 follow-up evaluations.
                </p>
              </div>
              <div class="banner-value">
                <span class="big-number">{{ currentStudy.completedV2 }}</span>
                <span class="sub-number"
                  >/ {{ currentStudy.included.total }} Enrolled</span
                >
              </div>
            </div>
          </div>
        </div>

        <div class="visualization-block">
          <div class="chart-card">
            <h3>Recruitment Breakdown</h3>

            <div class="chart-wrapper">
              <div class="progress-ring-container">
                <svg class="progress-ring" width="160" height="160">
                  <circle class="ring-bg" cx="80" cy="80" r="70" />

                  <circle
                    class="ring-fill fill-va"
                    cx="80"
                    cy="80"
                    r="70"
                    stroke-dasharray="440"
                    :stroke-dashoffset="inclusionOffset"
                  />

                  <circle
                    class="ring-fill fill-v1"
                    cx="80"
                    cy="80"
                    r="70"
                    stroke-dasharray="440"
                    :stroke-dashoffset="v1bOffset"
                  />
                </svg>

                <div class="ring-center-text">
                  <span class="percentage">{{ inclusionRate }}%</span>
                  <span class="text-label">Inclusion Rate</span>
                </div>
              </div>
            </div>

            <div class="legend-list">
              <div class="legend-item">
                <span class="dot dot-preic"></span>
                <span class="name">Total Pre-IC Screened (Va)</span>
                <span class="stat">{{ currentStudy.preIC.total }}</span>
              </div>
              <div class="legend-item">
                <span class="dot dot-va"></span>
                <span class="name">Enrolled Inclusion (V1)</span>
                <span class="stat">{{ currentStudy.included.total }}</span>
              </div>
              <div class="legend-item">
                <span class="dot dot-v1b"></span>
                <span class="name">Completed Visit V1b</span>
                <span class="stat">{{ currentStudy.completedV1b }}</span>
              </div>
              <div class="legend-item">
                <span class="dot dot-v2"></span>
                <span class="name">Completed Visit V2</span>
                <span class="stat">{{ currentStudy.completedV2 }}</span>
              </div>
            </div>

            <div class="sites-summary">
              <span class="sites-label">Participating Clinical Sites</span>
              <p class="sites-text">{{ currentStudy.sites }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <Footer />
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import Navbar from "../components/layout/Navbar.vue";
import Footer from "../components/layout/Footer.vue";

const route = useRoute();

const studiesData = {
  "hexavalent-phase-1": {
    id: "hexavalent-phase-1",
    shortName: "HEXAVALENT Phase I",
    title: "Subject Recruitment Summary – HEXAVALENT Phase I (Hexa 0125)",
    sponsor: "Bio Farma",
    target: "75 Newborns (Apr 2026 – Apr 2027)",
    updatedAt: "20 July 2026",
    sites: "RSUD Bandung Kiwari, PMB Cintia, PMB Dewi",
    preIC: {
      total: 89,
      detail: "81 RSUD Bandung Kiwari, 6 PMB Cintia, 2 PMB Dewi",
    },
    bloodDrawn: {
      total: 86,
      note: "1 insufficient blood draw, 2 screening failures",
    },
    labSent: {
      total: 77,
      note: "19 excluded: 8 samples dispatched, 11 retained",
      followUpNote: "Visit V1b Lab Samples: 40 dispatched to Prodia",
    },
    included: {
      total: 70,
      detail: "64 RSUD Bandung Kiwari, 4 PMB Cintia, 2 PMB Dewi",
    },
    completedV1b: 40,
    completedV2: 9,
  },
  "hep-b-vaccine": {
    id: "hep-b-vaccine",
    shortName: "Hep B Vaccine",
    title: "Subject Recruitment Summary – Pediatric Hepatitis B Vaccine Trial",
    sponsor: "Bio Farma",
    target: "270 Newborns (May 2026 – Mar 2027)",
    updatedAt: "20 July 2026",
    sites:
      "Puskesmas Batujajar, Puskesmas Garuda, Al Faiha Clinic, PMB Sri Maemunah Cihampelas",
    preIC: {
      total: 142,
      detail: "54 Batujajar, 42 Garuda, 26 Al Faiha, 20 PMB Sri Maemunah",
    },
    bloodDrawn: {
      total: 136,
      note: "6 pre-screening deferrals prior to baseline venipuncture",
    },
    labSent: {
      total: 130,
      note: "Baseline serology dispatched to central reference laboratory",
      followUpNote: "Visit V1b Lab Samples: 68 dispatched",
    },
    included: {
      total: 128,
      detail: "50 Batujajar, 38 Garuda, 22 Al Faiha, 18 PMB Sri Maemunah",
    },
    completedV1b: 68,
    completedV2: 24,
  },
  "hexavalent-phase-2": {
    id: "hexavalent-phase-2",
    shortName: "HEXAVALENT Phase II",
    title: "Site Readiness & Recruitment – HEXAVALENT Phase II Multi-Center",
    sponsor: "Bio Farma",
    target: "405 Newborns (Oct 2026 – Mar 2028)",
    updatedAt: "20 July 2026",
    sites:
      "RSUD Bandung Kiwari, Puskesmas Batujajar, Puskesmas Garuda, Al Faiha Clinic, PMB Sri Maemunah Cihampelas",
    preIC: {
      total: 45,
      detail: "Initial cohort pre-registration across 5 activated sites",
    },
    bloodDrawn: {
      total: 42,
      note: "3 subjects scheduled for baseline visit window",
    },
    labSent: {
      total: 40,
      note: "2 baseline samples pending batch courier dispatch",
      followUpNote: "Visit V1b Lab Samples: 18 dispatched",
    },
    included: {
      total: 40,
      detail: "Active multi-center cohort enrollment underway",
    },
    completedV1b: 18,
    completedV2: 0,
  },
};

const studiesList = Object.values(studiesData);

const currentStudy = computed(() => {
  const id = route.params.id;
  return studiesData[id] || studiesData["hexavalent-phase-1"];
});

const inclusionRate = computed(() => {
  const total = currentStudy.value.preIC.total || 1;
  return Math.round((currentStudy.value.included.total / total) * 100);
});

const inclusionOffset = computed(() => {
  const total = currentStudy.value.preIC.total || 1;
  return 440 - 440 * (currentStudy.value.included.total / total);
});

const v1bOffset = computed(() => {
  const total = currentStudy.value.preIC.total || 1;
  return 440 - 440 * (currentStudy.value.completedV1b / total);
});
</script>

<style scoped>
.research-activity {
  background-color: #f8fafc;
  padding: 120px 0 100px 0;
  position: relative;
  overflow-x: hidden;
  min-height: 85dvh;
  width: 100%;
}

.container {
  max-width: 1200px;
  width: 100%;
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
  width: 100%;
  max-width: 500px;
  height: 500px;
  background: radial-gradient(
    circle,
    rgba(0, 71, 165, 0.05) 0%,
    rgba(0, 71, 165, 0) 70%
  );
  top: -100px;
  right: -100px;
  filter: blur(50px);
}

.dashboard-header-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;
  margin-bottom: 32px;
}

.back-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 700;
  color: #0047a5;
  background: #ffffff;
  border: 1px solid rgba(0, 71, 165, 0.14);
  padding: 9px 18px;
  border-radius: 999px;
  transition: all 0.2s ease;
}

.back-btn:hover {
  background: #002d6b;
  color: #ffffff;
  border-color: #002d6b;
}

.study-tabs {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.study-tab {
  text-decoration: none;
  font-size: 0.82rem;
  font-weight: 700;
  color: #475569;
  background: #ffffff;
  border: 1px solid #e2e8f0;
  padding: 8px 16px;
  border-radius: 999px;
  transition: all 0.2s ease;
}

.study-tab:hover {
  border-color: #0047a5;
  color: #0047a5;
}

.study-tab.active {
  background: #002d6b;
  color: #ffc700;
  border-color: #002d6b;
}

.main-header {
  display: flex;
  flex-direction: column;
  margin-bottom: 36px;
}

.header-badges {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
  margin-bottom: 12px;
}

.sub-title {
  font-size: 0.76rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #0047a5;
  background: rgba(0, 71, 165, 0.08);
  padding: 5px 14px;
  border-radius: 999px;
}

.sponsor-pill,
.target-pill {
  font-size: 0.78rem;
  font-weight: 600;
  color: #334155;
  background: #ffffff;
  border: 1px solid #e2e8f0;
  padding: 5px 12px;
  border-radius: 999px;
}

h1 {
  font-size: clamp(1.6rem, 1.2rem + 1.2vw, 2.2rem);
  color: #002d6b;
  margin: 0 0 14px 0;
  font-weight: 800;
}

.accent-line {
  width: 48px;
  height: 4px;
  background-color: #ffc700;
  border-radius: 2px;
}

.dashboard-layout {
  display: grid;
  grid-template-columns: 1.35fr 1fr;
  gap: 28px;
  align-items: start;
  width: 100%;
}

.block-header-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 20px;
}

.block-title {
  font-size: 1.15rem;
  color: #1e293b;
  font-weight: 700;
  margin: 0;
}

.date-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 7px 14px;
  border-radius: 30px;
  font-size: 0.82rem;
  color: #475569;
  background: #ffffff;
  border: 1px solid #e2e8f0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.03);
}

.date-badge svg {
  color: #0047a5;
  flex-shrink: 0;
}

.metrics-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  margin-bottom: 24px;
}

.metric-card {
  background-color: #ffffff;
  border-radius: 16px;
  padding: 18px;
  border: 1px solid #e2e8f0;
  display: flex;
  gap: 14px;
  align-items: flex-start;
  box-shadow: 0 4px 12px rgba(0, 45, 107, 0.02);
  min-width: 0;
}

.metric-card.highlight-blue {
  border-left: 4px solid #0047a5;
}
.metric-card.success-light {
  border-left: 4px solid #10b981;
}

.card-icon {
  width: 42px;
  height: 42px;
  border-radius: 10px;
  background-color: #f1f5f9;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.85rem;
  font-weight: 700;
  color: #0047a5;
  flex-shrink: 0;
}

.metric-card.highlight-blue .card-icon {
  background-color: rgba(0, 71, 165, 0.08);
}
.metric-card.success-light .card-icon {
  background-color: rgba(16, 185, 129, 0.1);
  color: #059669;
}

.card-info {
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 0;
}

.card-info .label {
  font-size: 0.76rem;
  font-weight: 700;
  color: #64748b;
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

.card-info .value {
  font-size: 1.45rem;
  color: #002d6b;
  font-weight: 800;
  margin: 4px 0;
}

.card-info .unit {
  font-size: 0.85rem;
  font-weight: 600;
  color: #64748b;
}

.note-text {
  font-size: 0.78rem;
  color: #475569;
  margin: 4px 0 0 0;
  line-height: 1.45;
  font-weight: 500;
}

.location-detail {
  color: #475569;
}

.text-danger {
  color: #dc2626;
}

.text-success {
  color: #047857;
}

.banners-container {
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
}

.target-card-banner {
  background: linear-gradient(135deg, #0047a5 0%, #002d6b 100%);
  border-radius: 16px;
  padding: 20px 24px;
  color: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 10px 25px rgba(0, 71, 165, 0.15);
  width: 100%;
}

.target-card-banner.highlight-gold {
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
  border-left: 5px solid #ffc700;
}

.banner-content h4 {
  font-size: 1.08rem;
  font-weight: 700;
  color: #ffffff;
  margin: 0 0 4px 0;
}

.banner-content p {
  font-size: 0.85rem;
  color: #cbd5e1;
  margin: 0;
  max-width: 400px;
  line-height: 1.45;
}

.banner-value {
  text-align: right;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
}

.banner-value .big-number {
  font-size: 2.2rem;
  font-weight: 800;
  line-height: 1;
  color: #ffc700;
}

.banner-value .sub-number {
  font-size: 0.78rem;
  color: #e2e8f0;
  font-weight: 600;
  margin-top: 4px;
}

.chart-card {
  background-color: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 20px;
  padding: 26px;
  box-shadow: 0 4px 16px rgba(0, 45, 107, 0.03);
  width: 100%;
}

.chart-card h3 {
  font-size: 1.1rem;
  color: #002d6b;
  margin: 0 0 24px 0;
  font-weight: 700;
}

.chart-wrapper {
  display: flex;
  justify-content: center;
  margin-bottom: 28px;
}

.progress-ring-container {
  position: relative;
  width: 160px;
  height: 160px;
}

.progress-ring {
  transform: rotate(-90deg);
}

.ring-bg {
  fill: transparent;
  stroke: #f1f5f9;
  stroke-width: 14;
}

.ring-fill {
  fill: transparent;
  stroke-width: 14;
  stroke-linecap: round;
  transition: stroke-dashoffset 0.5s ease;
}

.fill-va {
  stroke: rgba(0, 71, 165, 0.2);
}

.fill-v1 {
  stroke: #0047a5;
}

.ring-center-text {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.ring-center-text .percentage {
  font-size: 1.65rem;
  font-weight: 800;
  color: #002d6b;
  line-height: 1.1;
}

.ring-center-text .text-label {
  font-size: 0.72rem;
  color: #64748b;
  font-weight: 700;
  text-transform: uppercase;
}

.legend-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
  border-top: 1px solid #f1f5f9;
  padding-top: 20px;
}

.legend-item {
  display: flex;
  align-items: center;
  font-size: 0.9rem;
  color: #475569;
  font-weight: 500;
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-right: 12px;
  flex-shrink: 0;
}

.dot-preic {
  background-color: #cbd5e1;
}
.dot-va {
  background-color: rgba(0, 71, 165, 0.4);
}
.dot-v1b {
  background-color: #0047a5;
}
.dot-v2 {
  background-color: #ffc700;
}

.legend-item .name {
  flex-grow: 1;
}

.legend-item .stat {
  font-weight: 700;
  color: #0f172a;
}

.sites-summary {
  margin-top: 20px;
  padding-top: 16px;
  border-top: 1px solid #f1f5f9;
}

.sites-label {
  display: block;
  font-size: 0.74rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: #64748b;
  margin-bottom: 4px;
}

.sites-text {
  font-size: 0.86rem;
  color: #334155;
  line-height: 1.5;
  margin: 0;
}

@media (max-width: 1150px) {
  .dashboard-layout {
    grid-template-columns: 1fr;
    gap: 28px;
  }
}

@media (max-width: 576px) {
  .container {
    padding: 0 16px;
  }
  .metrics-grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }
  .target-card-banner {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }
  .banner-value {
    text-align: left;
  }
}
</style>
