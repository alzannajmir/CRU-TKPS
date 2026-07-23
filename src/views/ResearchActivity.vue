<template>
  <navbar />

  <section class="research-activity">
    <div class="glow-shape shape-glow-blue"></div>

    <div class="container">
      <div class="dashboard-header-nav"></div>

      <div class="main-header">
        <span class="sub-title">Research Activity Dashboard</span>
        <h2>{{ dashboardData.judul }}</h2>
        <div class="accent-line"></div>
      </div>

      <div class="dashboard-layout">
        <div class="metrics-block">
          <h3 class="block-title">Subject Recruitment</h3>

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
            <span>Data per: <strong>{{ dashboardData.tanggal }}</strong></span>
          </div>
          
          <div class="metrics-grid">
            <!-- Va Card -->
            <div class="metric-card highlight-blue">
              <div class="card-icon">Va</div>
              <div class="card-info">
                <span class="label">Pre-IC Stage</span>
                <h4 class="value">
                  {{ dashboardData.preIC.total }} <span class="unit">Subjek</span>
                </h4>
                <p class="note-text location-detail">
                  *{{ dashboardData.preIC.detail }}
                </p>
              </div>
            </div>

            <!-- V0 Card -->
            <div class="metric-card">
              <div class="card-icon">V0</div>
              <div class="card-info">
                <span class="label">Darah Diambil</span>
                <h4 class="value">
                  {{ dashboardData.ambilDarah.total }}
                  <span class="unit">Subjek</span>
                </h4>
                <p class="note-text text-danger">
                  *{{ dashboardData.ambilDarah.catatan }}
                </p>
              </div>
            </div>

            <!-- Prodia Card -->
            <div class="metric-card">
              <div class="card-icon">Lab</div>
              <div class="card-info">
                <span class="label">Dikirim ke Prodia</span>
                <h4 class="value">
                  {{ dashboardData.kirimProdia.total }}
                  <span class="unit">Sampel</span>
                </h4>
                <p class="note-text">
                  *{{ dashboardData.kirimProdia.catatan }}<br/>
                  <strong>*{{ dashboardData.kirimProdia.catatanV1b }}</strong>
                </p>
              </div>
            </div>

            <!-- V1 Card -->
            <div class="metric-card success-light">
              <div class="card-icon">V1</div>
              <div class="card-info">
                <span class="label">Kriteria Inklusi</span>
                <h4 class="value text-success">
                  {{ dashboardData.inklusi.total }} <span class="unit">Subjek</span>
                </h4>
                <p class="note-text location-detail text-success">
                  *{{ dashboardData.inklusi.detail }}
                </p>
              </div>
            </div>
          </div>

          <!-- Banners Area (V1b & V2) -->
          <div class="banners-container">
            <!-- Visit V1b Banner -->
            <div class="target-card-banner">
              <div class="banner-content">
                <h5>Visit V1b Completion</h5>
                <p>
                  Subjek yang telah berhasil menyelesaikan seluruh rangkaian visit V1b.
                </p>
              </div>
              <div class="banner-value">
                <span class="big-number">{{ dashboardData.selesaiV1b }}</span>
                <span class="sub-number">/{{ dashboardData.inklusi.total }} Inklusi</span>
              </div>
            </div>

            <!-- Visit V2 Banner (Baru) -->
            <div class="target-card-banner highlight-gold">
              <div class="banner-content">
                <h5>Visit V2 Completion</h5>
                <p>
                  Subjek yang telah berhasil mencapai dan menyelesaikan visit tahap V2.
                </p>
              </div>
              <div class="banner-value">
                <span class="big-number">{{ dashboardData.selesaiV2 }}</span>
                <span class="sub-number">/{{ dashboardData.inklusi.total }} Inklusi</span>
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

                  <!-- Lingkaran Inklusi -->
                  <circle
                    class="ring-fill fill-va"
                    cx="80"
                    cy="80"
                    r="70"
                    stroke-dasharray="440"
                    :stroke-dashoffset="440 - 440 * (dashboardData.inklusi.total / dashboardData.preIC.total)"
                  />

                  <!-- Lingkaran Selesai V1b -->
                  <circle
                    class="ring-fill fill-v1"
                    cx="80"
                    cy="80"
                    r="70"
                    stroke-dasharray="440"
                    :stroke-dashoffset="
                      440 - 440 * (dashboardData.selesaiV1b / dashboardData.preIC.total)
                    "
                  />
                </svg>

                <div class="ring-center-text">
                  <span class="percentage">
                    {{ Math.round((dashboardData.inklusi.total / dashboardData.preIC.total) * 100) }}%
                  </span>
                  <span class="text-label">Inclusion Rate</span>
                </div>
              </div>
            </div>

            <div class="legend-list">
              <div class="legend-item">
                <span class="dot dot-preic"></span>
                <span class="name">Total Pre-IC (Va)</span>
                <span class="stat">{{ dashboardData.preIC.total }}</span>
              </div>
              <div class="legend-item">
                <span class="dot dot-va"></span>
                <span class="name">Inklusi Masuk (V1)</span>
                <span class="stat">{{ dashboardData.inklusi.total }}</span>
              </div>
              <div class="legend-item">
                <span class="dot dot-v1b"></span>
                <span class="name">Selesai Visit V1b</span>
                <span class="stat">{{ dashboardData.selesaiV1b }}</span>
              </div>
              <div class="legend-item">
                <span class="dot dot-v2"></span>
                <span class="name">Selesai Visit V2</span>
                <span class="stat">{{ dashboardData.selesaiV2 }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <Footer />
</template>

<script setup>
import { ref } from "vue";
import navbar from "../components/layout/Navbar.vue";
import Footer from "../components/layout/Footer.vue";

// Data rekap tersentralisasi terupdate per 20 Juli 2026
const dashboardData = ref({
  judul: "Rekap Rekrut Subjek Hexa 0125",
  tanggal: "20/JULI/2026",
  preIC: {
    total: 89,
    detail: "81 Kiwari, 6 PMB Cintia, 2 PMB Dewi",
  },
  ambilDarah: {
    total: 86,
    catatan: "1 subjek tidak keluar darah, 2 gagal skrining",
  },
  kirimProdia: {
    total: 77,
    catatan: "19 eksklusi: 8 sampel dikirim, 11 tidak",
    catatanV1b: "Visit V1b: 40 sampel",
  },
  inklusi: {
    total: 70,
    detail: "64 Kiwari, 4 PMB Cintia, 2 PMB Dewi",
  },
  selesaiV1b: 40,
  selesaiV2: 9,
});
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap");

.research-activity,
.research-activity * {
  box-sizing: border-box;
}

.research-activity {
  background-color: #f8fafc;
  padding: 40px 0 100px 0;
  font-family: "Plus Jakarta Sans", sans-serif;
  position: relative;
  overflow-x: hidden;
  min-height: 80vh;
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
    rgba(0, 71, 165, 0.04) 0%,
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
  margin-bottom: 24px;
}

.date-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  border-radius: 30px;
  font: 0.85rem sans-serif;
  color: #64748b;
  background: #fff;
  border: 1px solid #e2e8f0;
  box-shadow: 0 2px 8px #0000000a;
  margin-bottom: 25px;
}
.date-badge svg {
  color: #0047a5;
  flex-shrink: 0;
}

.main-header {
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
}
.sub-title {
  margin-top: 50px;
  font-size: 13px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1.2px;
  color: #0047a5;
  margin-bottom: 4px;
}
h2 {
  font-size: 2rem;
  color: #002d6b;
  margin: 0 0 12px 0;
  font-weight: 700;
}
.accent-line {
  width: 40px;
  height: 4px;
  background-color: #ffc700;
  border-radius: 2px;
}

.dashboard-layout {
  display: grid;
  grid-template-columns: 1.3fr 1fr;
  gap: 24px;
  align-items: start;
  width: 100%;
}

.block-title {
  font-size: 1.15rem;
  color: #1e293b;
  font-weight: 700;
  margin: 0 0 20px 0;
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
  padding: 16px;
  border: 1px solid #e2e8f0;
  display: flex;
  gap: 12px;
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
  background-color: rgba(0, 71, 165, 0.06);
}
.metric-card.success-light .card-icon {
  background-color: rgba(16, 185, 129, 0.08);
  color: #10b981;
}

.card-info {
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 0;
}
.card-info .label {
  font-size: 0.8rem;
  font-weight: 600;
  color: #94a3b8;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.card-info .value {
  font-size: 1.4rem;
  color: #002d6b;
  font-weight: 700;
  margin: 4px 0;
}
.card-info .unit {
  font-size: 0.85rem;
  font-weight: 500;
  color: #64748b;
}
.note-text {
  font-size: 0.75rem;
  color: #64748b;
  margin: 4px 0 0 0;
  line-height: 1.4;
  font-weight: 500;
  word-break: break-word;
}
.location-detail {
  color: #475569;
  font-style: italic;
}
.text-danger {
  color: #ef4444;
}

/* Banners Container & Layout */
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

/* Banner Variasi Warna Khusus V2 */
.target-card-banner.highlight-gold {
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
  border-left: 5px solid #ffc700;
}

.banner-content {
  min-width: 0;
}
.banner-content h5 {
  font-size: 1.1rem;
  font-weight: 700;
  margin: 0 0 4px 0;
}
.banner-content p {
  font-size: 0.85rem;
  color: #cbd5e1;
  margin: 0;
  max-width: 380px;
  line-height: 1.4;
}
.banner-value {
  text-align: right;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
}
.banner-value .big-number {
  font-size: 2.3rem;
  font-weight: 700;
  line-height: 1;
  color: #ffc700;
}
.banner-value .sub-number {
  font-size: 0.78rem;
  color: #e2e8f0;
  font-weight: 600;
  margin-top: 4px;
}

/* Chart Block */
.chart-card {
  background-color: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 20px;
  padding: 24px;
  box-shadow: 0 4px 16px rgba(0, 45, 107, 0.02);
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
  stroke: rgba(0, 71, 165, 0.15);
}
.fill-v1 {
  stroke: #0047a5;
}

.ring-center-text {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.ring-center-text .percentage {
  font-size: 1.6rem;
  font-weight: 700;
  color: #002d6b;
  line-height: 1.1;
}
.ring-center-text .text-label {
  font-size: 0.72rem;
  color: #94a3b8;
  font-weight: 600;
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
  color: #4a5568;
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
  color: #1e293b;
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
  h2 {
    font-size: 1.6rem;
  }
  .chart-card {
    padding: 20px;
  }
}
</style>