<template>
  <section id="journey" class="journey-section">
    <div class="container">
      
      <!-- Bagian Judul -->
      <div class="section-header">
        <span class="sub-title">Milestones</span>
        <h2>Our <span class="highlight">Journey</span></h2>
        <div class="accent-line"></div>
      </div>

      <!-- Alur Kronologis (Timeline) -->
      <div class="timeline">
        
        <!-- Item 1 -->
        <div class="timeline-item">
          <div class="timeline-dot"></div>
          <div class="timeline-badge">1995</div>
          <div class="timeline-content">
            <h3>Establishment</h3>
            <p>
              CRU was initiated by <strong>Dr. Eddy Fadlyana</strong> and established under 
              the Growth & Development – Social Pediatrics division.
            </p>
          </div>
        </div>

        <!-- Item 2 -->
        <div class="timeline-item">
          <div class="timeline-dot"></div>
          <div class="timeline-badge">Expansion</div>
          <div class="timeline-content">
            <h3>Global Collaboration</h3>
            <p>
              Successfully collaborated with prestigious national and international organizations including 
              <strong>WHO, Bio Farma, Sanofi Pasteur, CEPI, SINOVAC</strong>, and many others.
            </p>
          </div>
        </div>

        <!-- Item 3 -->
        <div class="timeline-item">
          <div class="timeline-dot"></div>
          <div class="timeline-badge focus">Today</div>
          <div class="timeline-content highlight-card">
            <h3>Leading Research</h3>
            <p>
              Actively conducting high-impact national and international clinical trials, contributing 
              to global healthcare through continuous advancements and scientific publications.
            </p>
          </div>
        </div>

      </div>

    </div>
  </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap');

.journey-section {
  background-color: #FFFFFF; /* Putih bersih kontras dengan seksi sebelumnya */
  padding: 120px 0;
  font-family: 'Plus Jakarta Sans', sans-serif;
}

.container {
  max-width: 1000px; /* Diperkecil sedikit dari 1200px agar timeline lebih fokus di tengah */
  margin: auto;
  padding: 0 24px;
}

/* --- Header Gaya Makro --- */
.section-header {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 60px;
}

.sub-title {
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  color: #FFC700; /* Kuning aksen logo */
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

/* --- Desain Konstruksi Timeline --- */
.timeline {
  position: relative;
  padding-left: 40px; /* Ruang untuk garis vertikal di sisi kiri */
  margin-top: 40px;
}

/* Garis vertikal utama penghubung waktu */
.timeline::before {
  content: '';
  position: absolute;
  top: 0;
  left: 6px;
  width: 3px;
  height: 100%;
  background: linear-gradient(to bottom, #0047A5 0%, rgba(0, 71, 165, 0.1) 100%);
  border-radius: 2px;
}

.timeline-item {
  position: relative;
  margin-bottom: 45px;
}

.timeline-item:last-child {
  margin-bottom: 0;
}

/* Titik simpul bulat pada garis vertikal */
.timeline-dot {
  position: absolute;
  left: -40px;
  top: 10px;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background: #0047A5;
  border: 3px solid #FFFFFF;
  box-shadow: 0 0 0 3px rgba(0, 71, 165, 0.2);
  z-index: 2;
}

/* Label penanda tahun / era */
.timeline-badge {
  display: inline-block;
  padding: 4px 14px;
  background-color: rgba(0, 71, 165, 0.08);
  color: #0047A5;
  font-weight: 700;
  font-size: 0.85rem;
  border-radius: 20px;
  margin-bottom: 12px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

/* Khusus penanda "Today" agar lebih mencolok */
.timeline-badge.focus {
  background-color: #FFC700;
  color: #002D6B;
  box-shadow: 0 2px 8px rgba(255, 199, 0, 0.3);
}

/* Kotak konten penjelasan */
.timeline-content {
  background: #F8FAFC;
  padding: 24px 30px;
  border-radius: 12px;
  border: 1px solid rgba(0, 71, 165, 0.05);
  transition: all 0.3s ease;
}

/* Card khusus "Today" dengan sentuhan gradasi halus */
.highlight-card {
  background: linear-gradient(180deg, #F8FAFC 0%, rgba(255, 199, 0, 0.03) 100%);
  border-left: 4px solid #FFC700;
}

.timeline-content h3 {
  margin: 0 0 8px 0;
  color: #002D6B;
  font-size: 1.3rem;
  font-weight: 600;
}

.timeline-content p {
  margin: 0;
  color: #4A5568;
  font-size: 1rem;
  line-height: 1.6;
}

.timeline-content p strong {
  color: #002D6B;
}

/* Efek interaktif hover: Kotak sedikit bergeser ke kanan */
.timeline-content:hover {
  transform: translateX(6px);
  box-shadow: 0 10px 25px rgba(0, 45, 107, 0.05);
  background: #FFFFFF;
}

/* --- Responsif Mobile --- */
@media (max-width: 768px) {
  .timeline {
    padding-left: 30px;
  }
  .timeline::before {
    left: 4px;
  }
  .timeline-dot {
    left: -32px;
    width: 12px;
    height: 12px;
  }
  h2 {
    font-size: 2rem;
  }
}
</style>