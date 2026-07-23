<script setup>
const ongoingResearch = [
  {
    title: "HEXAVALENT Phase I",
    sponsor: "Bio Farma",
    participants: "75 newborns",
    duration: "Apr 2026 – Apr 2027",
    sites: ["RSUD Bandung Kiwari"],
    status: "Start-up (Preparing for site activation)"
  },
  {
    title: "Hep B Vaccine",
    sponsor: "Bio Farma",
    participants: "270 newborns",
    duration: "May 2026 – Mar 2027",
    sites: ["Puskesmas Batujajar", "Garuda", "Al Faiha Clinic", "PMB Sri Maemunah Cihampelas"],
    status: "Start-up"
  },
  {
    title: "HEXAVALENT Phase II",
    sponsor: "Bio Farma",
    participants: "405 newborns",
    duration: "Oct 2026 – Mar 2028",
    sites: ["Puskesmas Batujajar", "Garuda", "Al Faiha Clinic", "PMB Sri Maemunah Cihampelas", "RSUD Bandung Kiwari"],
    status: "Start-up"
  }
]
</script>

<template>
  <section id="journey" class="journey-section">
    <div class="container">
      
      <div class="section-header">
        <span class="sub-title">Clinical Trials</span>
        <h2> Research <span class="highlight">Activity</span></h2>
        <div class="accent-line"></div>
      </div>

      <div class="research-grid">
        <router-link 
          :to="`/research-activity/${project.id}`"
          class="research-card"
          v-for="(project, index) in ongoingResearch"
          :key="project.id"
        >
          <div class="card-header-meta">
            <span class="project-index">Project 0{{ index + 1 }}</span>
            <div class="status-badge">
              <span class="pulse-dot"></span>
              {{ project.status }}
            </div>
          </div>

          <div class="project-title-box">
            <h3>{{ project.title }}</h3>
            <div class="sponsor-tag">Sponsor: <strong>{{ project.sponsor }}</strong></div>
          </div>

          <div class="card-divider"></div>

          <div class="project-details">
            <div class="detail-item">
              <div class="detail-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              </div>
              <div class="detail-text">
                <label>Targeted Participants</label>
                <span>{{ project.participants }}</span>
              </div>
            </div>

            <div class="detail-item">
              <div class="detail-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
              </div>
              <div class="detail-text">
                <label>Project Duration</label>
                <span>{{ project.duration }}</span>
              </div>
            </div>

            <div class="detail-item">
              <div class="detail-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <div class="detail-text">
                <label>Participating Sites</label>
                <span class="sites-list">{{ project.sites.join(', ') }}</span>
              </div>
            </div>
          </div>

          <div class="glow-indicator"></div>
        </router-link>
      </div>
    </div>
  </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap');

.journey-section {
  background-color: #FFFFFF; 
  padding: 120px 0;
  font-family: 'Plus Jakarta Sans', sans-serif;
}

.container {
  max-width: 1200px; 
  margin: auto;
  padding: 0 24px;
}

/* --- Header Gaya Makro --- */
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
  color: #0052CC; 
  margin-bottom: 8px;
}

h2 {
  font-size: 2.5rem;
  color: #002D6B;
  margin: 0 0 16px 0;
  font-weight: 700;
}

h2 .highlight {
  color: #0047A5;
}

.accent-line {
  width: 50px;
  height: 4px;
  background-color: #FFC700;
  border-radius: 2px;
}

/* --- GRID DESAIN STRUKTUR PARALEL 3 KOLOM --- */
.research-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
}

/* --- Gaya Kartu Riset Premium --- */
.research-card {
  background: #F8FAFC;
  border: 1px solid rgba(0, 71, 165, 0.04);
  border-radius: 24px;
  padding: 36px 30px;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 4px 20px rgba(0, 45, 107, 0.01);
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  text-decoration: none; 
  cursor: pointer;
}

/* Kepala Kartu Informasi Status */
.card-header-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
}

.project-index {
  font-size: 0.85rem;
  font-weight: 700;
  color: #94A3B8;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

/* Badge Status Bertema Medis Klinis (Ongoing Pulse Effect) */
.status-badge {
  font-size: 0.75rem;
  font-weight: 700;
  color: #0047A5;
  background-color: rgba(0, 71, 165, 0.06);
  padding: 6px 12px;
  border-radius: 100px;
  display: flex;
  align-items: center;
  gap: 6px;
  text-transform: uppercase;
}

.pulse-dot {
  width: 6px;
  height: 6px;
  background-color: #0047A5;
  border-radius: 50%;
  display: inline-block;
  animation: pulse 2s infinite; 
}

/* Kotak Judul */
.project-title-box h3 {
  font-size: 1.35rem;
  color: #002D6B;
  margin: 0 0 6px 0;
  font-weight: 700;
  line-height: 1.3;
}

.sponsor-tag {
  font-size: 0.88rem;
  color: #64748B;
}

.sponsor-tag strong {
  color: #0047A5;
}

/* Garis Pemisah Pembatas Parameter */
.card-divider {
  height: 1px;
  background-color: rgba(0, 71, 165, 0.06);
  margin: 24px 0;
}

/* Parameter Grid Detail */
.project-details {
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex-grow: 1;
}

.detail-item {
  display: flex;
  align-items: flex-start;
  gap: 14px;
}

.detail-icon {
  width: 32px;
  height: 32px;
  background-color: #FFFFFF;
  color: #0047A5;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 10px rgba(0, 45, 107, 0.03);
  flex-shrink: 0;
}

.detail-text {
  display: flex;
  flex-direction: column;
  text-align: left; /* Biar teks tetep rata kiri */
}

.detail-text label {
  font-size: 0.75rem;
  font-weight: 700;
  color: #94A3B8;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 2px;
}

.detail-text span {
  font-size: 0.95rem;
  color: #334155;
  font-weight: 600;
  line-height: 1.4;
}

.detail-text .sites-list {
  font-size: 0.88rem;
  font-weight: 500;
  color: #4A5568;
}

/* Garis Glow Bawah */
.glow-indicator {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background-color: #FFC700; 
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

/* --- HOVER EFFECT INTERACTIVE --- */
.research-card:hover {
  transform: translateY(-8px);
  background: #FFFFFF;
  border-color: rgba(0, 71, 165, 0.12);
  box-shadow: 0 24px 48px rgba(0, 45, 107, 0.08);
}

.research-card:hover .glow-indicator {
  transform: scaleX(1);
}

.research-card:hover .status-badge {
  background-color: #FFC700;
  color: #002D6B;
}

.research-card:hover .pulse-dot {
  background-color: #002D6B;
}

@keyframes pulse {
  0% { transform: scale(0.95); opacity: 1; }
  50% { transform: scale(1.15); opacity: 0.5; }
  100% { transform: scale(0.95); opacity: 1; }
}

/* --- Responsif Layout --- */
@media (max-width: 992px) {
  .research-grid { grid-template-columns: repeat(2, 1fr); gap: 24px; }
}

@media (max-width: 768px) {
  .journey-section { padding: 80px 0; }
  h2 { font-size: 2rem; }
  .research-grid { grid-template-columns: 1fr; gap: 20px; }
  .research-card { padding: 32px 24px; }
}
</style>