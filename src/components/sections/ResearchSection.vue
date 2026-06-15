<template>
  <section id="research" class="research-section">
    <!-- Background Shapes Konsisten (Sama dengan About & Visi Misi) -->
    <div class="glow-shape shape-glow-blue"></div>
    <div class="animated-ring-shape"></div>

    <div class="container">

      <!-- Bagian Header Judul -->
      <div class="section-header">
        <span class="sub-title">Our Portfolio</span>
        <h2>Research <span class="highlight">Projects</span></h2>
        <div class="accent-line"></div>
      </div>

      <!-- List Project Berulang Menggunakan v-for -->
      <div class="projects-list">
        <div
          class="project-row-card"
          v-for="project in projects"
          :key="project.title"
        >
          <!-- Dekorasi Pojok Atas Khas -->
          <div class="card-decor"></div>
          
          <!-- Grid Internal Kartu: Kiri (Main Info) & Kanan (Spesifikasi Data) -->
          <div class="card-internal-grid">
            
            <!-- KOLOM KIRI: MAIN TEXT & IMPACT -->
            <div class="main-info-col">
              <span v-if="project.badge" class="project-badge">{{ project.badge }}</span>
              <h3>{{ project.title }}</h3>
              <p class="project-desc">{{ project.description }}</p>
              
              <!-- Impact Box (v-if jika ada data impact) -->
              <div v-if="project.impact" class="impact-box">
                <div class="impact-title">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                  <span>Impact</span>
                </div>
                <p class="impact-text">{{ project.impact }}</p>
              </div>
            </div>

            <!-- KOLOM KANAN: SPESIFIKASI CLINICAL TRIAL (Hanya muncul jika tipe trial) -->
            <div v-if="project.details" class="details-spec-col">
              <div class="spec-table">
                <div class="spec-item">
                  <div class="spec-label">Sponsor</div>
                  <div class="spec-value">{{ project.details.sponsor }}</div>
                </div>
                <div class="spec-item">
                  <div class="spec-label">Recruited Participants</div>
                  <div class="spec-value highlight-value">{{ project.details.participants }}</div>
                </div>
                <div class="spec-item">
                  <div class="spec-label">Project Duration</div>
                  <div class="spec-value">{{ project.details.duration }}</div>
                </div>
                <div class="spec-item">
                  <div class="spec-label">Participating Sites</div>
                  <div class="spec-value sites-list">{{ project.details.sites }}</div>
                </div>
              </div>
            </div>

          </div>

          <!-- FOOTER KARTU -->
          <div class="card-footer">
            <span class="view-project">
              View Publications
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </span>
          </div>

        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const projects = ref([
  {
    badge: "Clinical Trial Experiences",
    title: "Sinovac COVID-19 Vaccine Trial",
    description: "In 2020, during the pandemic, our team conducted Indonesia’s first study on an inactivated COVID‑19 vaccine. The President of the Republic of Indonesia, along with several ministers, visited our site during the kick off of the trial.",
    impact: "The results of this study serves as the core evidence for nationwide rollout of COVID-19 vaccination in Indonesia.",
    details: {
      sponsor: "Bio Farma (Persero)",
      participants: "1620 healthy adults",
      duration: "Aug 2020 to May 2021 (10 months)",
      sites: "6 sites (FK-UNPAD, Puskesmas Garuda, Dago, Ciumbuleuit, Sukapakir, Klinik Kesehatan UNPAD)"
    }
  },
  {
    badge: "Clinical Trial Experiences",
    title: "Adult Vaccine Studies",
    description: "Clinical trial research on vaccine efficacy, safety, and immunogenicity profiles across diverse adult demographics to support national immunization policies.",
    impact: "Contributed data for national booster program guidelines.",
    details: {
      sponsor: "National & International Sponsors",
      participants: "Multi-center cohorts",
      duration: "Ongoing / Periodic",
      sites: "Hasan Sadikin Hospital & Partnering Facilites"
    }
  },
  {
    badge: "Pediatric Research",
    title: "Child Vaccine & Growth Studies",
    description: "Comprehensive research supporting pediatric immunization programs and long-term surveillance of child growth and development milestones in West Java since 1995.",
    impact: "Helped optimize local primary health care (Puskesmas) monitoring systems.",
    details: {
      sponsor: "Faculty of Medicine UNPAD / Dr. Hasan Sadikin Hospital",
      participants: "Infants and pediatric groups",
      duration: "Long-term Surveillance",
      sites: "6 Primary Health Centers (Puskesmas) & CRU Hub"
    }
  }
])
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap');

.research-section {
  background-color: #FFFFFF; 
  padding: 120px 0;
  font-family: 'Plus Jakarta Sans', sans-serif;
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

/* --- BACKGROUND DECORATION CONFORMITY --- */
.glow-shape {
  position: absolute;
  pointer-events: none;
  border-radius: 50%;
  z-index: 1;
}
.shape-glow-blue {
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(0, 71, 165, 0.03) 0%, rgba(0, 71, 165, 0) 70%);
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

/* --- Header Style --- */
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
  color: #FFC700; 
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

/* --- STRUKTUR BARU: LIST ROW CARD (SPLIT LAYOUT) --- */
.projects-list {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.project-row-card {
  background: #F8FAFC; 
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

/* Grid internal membagi info umum (kiri) dan tabel spesifikasi (kanan) */
.card-internal-grid {
  display: grid;
  grid-template-columns: 1.3fr 1fr;
  gap: 48px;
  align-items: start;
}

/* --- KOLOM KIRI STYLING --- */
.project-badge {
  display: inline-block;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #0047A5;
  background: rgba(0, 71, 165, 0.06);
  padding: 6px 14px;
  border-radius: 30px;
  margin-bottom: 16px;
}

.main-info-col h3 {
  font-size: 1.6rem;
  color: #002D6B;
  margin: 0 0 16px 0;
  font-weight: 700;
  line-height: 1.3;
}

.project-desc {
  font-size: 1.05rem;
  color: #4A5568;
  line-height: 1.7;
  margin: 0 0 28px 0;
}

/* Kotak Impact Khusus */
.impact-box {
  background: #FFFFFF;
  border-left: 4px solid #FFC700;
  padding: 18px 22px;
  border-radius: 0 12px 12px 0;
  box-shadow: 0 4px 15px rgba(0, 45, 107, 0.01);
}

.impact-title {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #002D6B;
  font-weight: 700;
  font-size: 0.95rem;
  margin-bottom: 6px;
}

.impact-title svg {
  color: #FFC700;
}

.impact-text {
  font-size: 0.95rem;
  color: #475569;
  line-height: 1.5;
  margin: 0;
}

/* --- KOLOM KANAN STYLING (DATA SPEC) --- */
.spec-table {
  background: #FFFFFF;
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 10px 25px rgba(0, 45, 107, 0.02);
  border: 1px solid rgba(0, 71, 165, 0.02);
}

.spec-item {
  padding: 12px 0;
  border-bottom: 1px solid #F1F5F9;
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
  color: #94A3B8;
  letter-spacing: 0.5px;
  margin-bottom: 4px;
}

.spec-value {
  font-size: 0.98rem;
  color: #1E293B;
  font-weight: 600;
  line-height: 1.4;
}

.highlight-value {
  color: #0047A5;
  font-weight: 700;
}

.sites-list {
  font-size: 0.9rem;
  color: #475569;
  font-weight: 500;
}

/* --- FOOTER KARTU --- */
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
  color: #0047A5;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.view-project svg {
  transition: transform 0.2s ease;
}

/* --- Efek Hover --- */
.project-row-card:hover {
  transform: translateY(-4px);
  background: #FFFFFF;
  border-color: rgba(0, 71, 165, 0.1);
  box-shadow: 0 20px 40px rgba(0, 45, 107, 0.05);
}

.project-row-card:hover .card-decor {
  width: 140px;
  height: 140px;
  background-color: rgba(255, 199, 0, 0.08);
}

.project-row-card:hover .view-project {
  color: #002D6B;
}

.project-row-card:hover .view-project svg {
  transform: translateX(3px);
}

/* --- Penataan Responsif --- */
@media (max-width: 992px) {
  .card-internal-grid {
    grid-template-columns: 1fr; /* Tumpuk vertikal di tablet */
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