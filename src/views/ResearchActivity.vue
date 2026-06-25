<template>
  <navbar />
  
  <section class="research-activity">
    <div class="glow-shape shape-glow-blue"></div>
    
    <div class="container">
      
      <div class="dashboard-header-nav">
        <div class="back-nav">
          <a href="/" class="btn-back">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
            <span>Back to Home</span>
          </a>
        </div>
        <div class="date-badge">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
          <span>Data per: <strong>{{ dashboardData.tanggal }}</strong></span>
        </div>
      </div>

      <div class="main-header">
        <span class="sub-title">Research Activity Dashboard</span>
        <h2>{{ dashboardData.judul }}</h2>
        <div class="accent-line"></div>
      </div>

      <div class="dashboard-layout">
        
        <div class="metrics-block">
          <h3 class="block-title">Subject Recruitment Funnel</h3>
          
          <div class="metrics-grid">
            <div class="metric-card highlight-blue">
              <div class="card-icon">Va</div>
              <div class="card-info">
                <span class="label">Pre-IC Stage</span>
                <h4 class="value">{{ dashboardData.preIC }} <span class="unit">Subjek</span></h4>
              </div>
            </div>

            <div class="metric-card">
              <div class="card-icon">V0</div>
              <div class="card-info">
                <span class="label">Darah Diambil</span>
                <h4 class="value">{{ dashboardData.ambilDarah.total }} <span class="unit">Subjek</span></h4>
                <p class="note-text text-danger">*{{ dashboardData.ambilDarah.catatan }}</p>
              </div>
            </div>

            <div class="metric-card">
              <div class="card-icon">Lab</div>
              <div class="card-info">
                <span class="label">Dikirim ke Prodia</span>
                <h4 class="value">{{ dashboardData.kirimProdia.total }} <span class="unit">Sampel</span></h4>
                <p class="note-text">*{{ dashboardData.kirimProdia.catatan }}</p>
              </div>
            </div>

            <div class="metric-card success-light">
              <div class="card-icon">V1</div>
              <div class="card-info">
                <span class="label">Kriteria Inklusi</span>
                <h4 class="value text-success">{{ dashboardData.inklusi }} <span class="unit">Subjek</span></h4>
              </div>
            </div>
          </div>

          <div class="target-card-banner">
            <div class="banner-content">
              <h5>Visit V1b Completion</h5>
              <p>Subjek yang telah berhasil menyelesaikan seluruh rangkaian visit V1b.</p>
            </div>
            <div class="banner-value">
              <span class="big-number">{{ dashboardData.selesaiV1b }}</span>
              <span class="sub-number">/{{ dashboardData.inklusi }} Subjek Inklusi</span>
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
                  <circle class="ring-fill fill-va" cx="80" cy="80" r="70" stroke-dasharray="440" :stroke-dashoffset="440 - (440 * 100) / 100" />
                  <circle class="ring-fill fill-v1" cx="80" cy="80" r="70" stroke-dasharray="440" :stroke-dashoffset="440 - (440 * (dashboardData.inklusi / dashboardData.preIC) * 100) / 100" />
                </svg>
                <div class="ring-center-text">
                  <span class="percentage">{{ Math.round((dashboardData.selesaiV1b / dashboardData.inklusi) * 100) }}%</span>
                  <span class="text-label">V1b Rate</span>
                </div>
              </div>
            </div>

            <div class="legend-list">
              <div class="legend-item">
                <span class="dot dot-va"></span>
                <span class="name">Total Pre-IC (Va)</span>
                <span class="stat">{{ dashboardData.preIC }}</span>
              </div>
              <div class="legend-item">
                <span class="dot dot-v0"></span>
                <span class="name">Inklusi Masuk (V1)</span>
                <span class="stat">{{ dashboardData.inklusi }}</span>
              </div>
              <div class="legend-item">
                <span class="dot dot-v1b"></span>
                <span class="name">Selesai Visit V1b</span>
                <span class="stat">{{ dashboardData.selesaiV1b }}</span>
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
import { ref } from 'vue'
import navbar from '../components/layout/Navbar.vue'
import Footer from '../components/layout/Footer.vue'

// Data rekap tersentralisasi agar mudah diubah sewaktu-waktu
const dashboardData = ref({
  judul: "Rekap Rekrut Subjek Hexa 0125",
  tanggal: "24/JUNI/2026",
  preIC: 59,
  ambilDarah: {
    total: 58,
    catatan: "1 subjek tidak keluar darah"
  },
  kirimProdia: {
    total: 51,
    catatan: "13 eksklusi: 4 sampel dikirim, 9 tidak"
  },
  inklusi: 44,
  selesaiV1b: 15
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap');

.research-activity-section {
  background-color: #F8FAFC; 
  padding: 40px 0 100px 0;
  font-family: 'Plus Jakarta Sans', sans-serif;
  position: relative;
  overflow: hidden;
  min-height: 80vh;
}

.container {
  max-width: 1200px;
  margin: auto;
  padding: 0 24px;
  position: relative;
  z-index: 3;
}

/* Glow Background effect */
.glow-shape { position: absolute; pointer-events: none; border-radius: 50%; z-index: 1; }
.shape-glow-blue { width: 500px; height: 500px; background: radial-gradient(circle, rgba(0, 71, 165, 0.04) 0%, rgba(0, 71, 165, 0) 70%); top: -100px; right: -100px; filter: blur(50px); }

/* Header Top Navigation */
.dashboard-header-nav { display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px; }
.btn-back { display: inline-flex; align-items: center; gap: 8px; color: #0047A5; text-decoration: none; font-weight: 700; transition: color 0.2s, transform 0.2s; }
.btn-back:hover { color: #002D6B; transform: translateX(-4px); }

.date-badge { display: flex; align-items: center; gap: 8px; background-color: #FFFFFF; padding: 8px 16px; border-radius: 30px; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04); font-size: 0.85rem; color: #64748B; border: 1px solid #E2E8F0; }
.date-badge svg { color: #0047A5; }

/* Section Title */
.main-header { display: flex; flex-direction: column; margin-bottom: 40px; }
.sub-title { font-size: 13px; font-weight: 700; text-transform: uppercase; letter-spacing: 1.2px; color: #0047A5; margin-bottom: 4px; }
h2 { font-size: 2rem; color: #002D6B; margin: 0 0 12px 0; font-weight: 700; }
.accent-line { width: 40px; height: 4px; background-color: #FFC700; border-radius: 2px; }

/* Dashboard Layout Grid */
.dashboard-layout { display: grid; grid-template-columns: 1.5fr 1fr; gap: 32px; align-items: start; }

/* Metrics Block Styles */
.block-title { font-size: 1.15rem; color: #1E293B; font-weight: 700; margin: 0 0 20px 0; }
.metrics-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; margin-bottom: 24px; }

.metric-card { background-color: #FFFFFF; border-radius: 16px; padding: 20px; border: 1px solid #E2E8F0; display: flex; gap: 16px; align-items: flex-start; box-shadow: 0 4px 12px rgba(0, 45, 107, 0.02); }
.metric-card.highlight-blue { border-left: 4px solid #0047A5; }
.metric-card.success-light { border-left: 4px solid #10B981; }

.card-icon { width: 42px; height: 42px; border-radius: 10px; background-color: #F1F5F9; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; font-weight: 700; color: #0047A5; flex-shrink: 0; }
.metric-card.highlight-blue .card-icon { background-color: rgba(0, 71, 165, 0.06); }
.metric-card.success-light .card-icon { background-color: rgba(16, 185, 129, 0.08); color: #10B981; }

.card-info { display: flex; flex-direction: column; width: 100%; }
.card-info .label { font-size: 0.8rem; font-weight: 600; color: #94A3B8; text-transform: uppercase; letter-spacing: 0.5px; }
.card-info .value { font-size: 1.5rem; color: #002D6B; font-weight: 700; margin: 4px 0; }
.card-info .unit { font-size: 0.9rem; font-weight: 500; color: #64748B; }
.note-text { font-size: 0.75rem; color: #64748B; margin: 4px 0 0 0; line-height: 1.3; font-weight: 500; }
.text-danger { color: #EF4444; }

/* Banner Target Utama */
.target-card-banner { background: linear-gradient(135deg, #0047A5 0%, #002D6B 100%); border-radius: 16px; padding: 24px; color: #FFFFFF; display: flex; justify-content: space-between; align-items: center; box-shadow: 0 10px 25px rgba(0, 71, 165, 0.15); }
.banner-content h5 { font-size: 1.1rem; font-weight: 700; margin: 0 0 6px 0; }
.banner-content p { font-size: 0.88rem; color: #E2E8F0; margin: 0; max-width: 340px; line-height: 1.4; }
.banner-value { text-align: right; display: flex; flex-direction: column; }
.banner-value .big-number { font-size: 2.5rem; font-weight: 700; line-height: 1; color: #FFC700; }
.banner-value .sub-number { font-size: 0.78rem; color: #E2E8F0; font-weight: 600; margin-top: 4px; }

/* Visualization Card Style */
.chart-card { background-color: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 20px; padding: 28px; box-shadow: 0 4px 16px rgba(0, 45, 107, 0.02); }
.chart-card h3 { font-size: 1.1rem; color: #002D6B; margin: 0 0 24px 0; font-weight: 700; }

.chart-wrapper { display: flex; justify-content: center; margin-bottom: 28px; }
.progress-ring-container { position: relative; width: 160px; height: 160px; }
.progress-ring { transform: rotate(-90deg); }
.ring-bg { fill: transparent; stroke: #F1F5F9; stroke-width: 14; }
.ring-fill { fill: transparent; stroke-width: 14; stroke-linecap: round; transition: stroke-dashoffset 0.5s ease; }
.fill-va { stroke: rgba(0, 71, 165, 0.1); }
.fill-v1 { stroke: #0047A5; }

.ring-center-text { position: absolute; top: 0; left: 0; width: 100%; height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; }
.ring-center-text .percentage { font-size: 1.6rem; font-weight: 700; color: #002D6B; line-height: 1.1; }
.ring-center-text .text-label { font-size: 0.75rem; color: #94A3B8; font-weight: 600; text-transform: uppercase; }

/* Legend Styles */
.legend-list { display: flex; flex-direction: column; gap: 12px; border-top: 1px solid #F1F5F9; padding-top: 20px; }
.legend-item { display: flex; align-items: center; font-size: 0.9rem; color: #4A5568; font-weight: 500; }
.dot { width: 10px; height: 10px; border-radius: 50%; margin-right: 12px; flex-shrink: 0; }
.dot-va { background-color: rgba(0, 71, 165, 0.3); }
.dot-v0 { background-color: #64748B; }
.dot-v1b { background-color: #0047A5; }
.legend-item .name { flex-grow: 1; }
.legend-item .stat { font-weight: 700; color: #1E293B; }

/* Responsive Media Queries */
@media (max-width: 992px) {
  .dashboard-layout { grid-template-columns: 1fr; gap: 28px; }
}
@media (max-width: 576px) {
  .metrics-grid { grid-template-columns: 1fr; gap: 16px; }
  .target-card-banner { flex-direction: column; align-items: flex-start; gap: 16px; }
  .banner-value { text-align: left; }
  h2 { font-size: 1.6rem; }
}
</style>