<script setup>
// Pemisahan Data Partner Internasional
const internationalPartners = [
  { name: "WHO", logo: "@/assets/partners/who.png" },
  { name: "Sanofi Pasteur", logo: "@/assets/partners/sanofi.png" },
  { name: "CEPI", logo: "@/assets/partners/cepi.png" },
  { name: "SINOVAC", logo: "@/assets/partners/sinovac.png" },
  { name: "MCRI Australia", logo: "@/assets/partners/mcri.png" }
]

// Pemisahan Data Partner Nasional
const nationalPartners = [
  { name: "Bio Farma", logo: "@/assets/partners/biofarma.png" },
  { name: "C-ARI-SHERA", logo: "@/assets/partners/sherea.png" }
]
</script>

<template>
  <section id="partners" class="partners-section">
    <div class="container">

      <!-- Bagian Header Utama Halaman -->
      <div class="section-header">
        <span class="sub-title">Collaboration</span>
        <h2>Our Trusted <span class="highlight">Partners</span></h2>
        <div class="accent-line"></div>
      </div>

      <!-- KATEGORI 1: INTERNATIONAL PARTNERS -->
      <div class="category-block">
        <div class="category-title">
          <h3>International Partners</h3>
          <div class="title-line"></div>
        </div>
        
        <div class="partner-grid">
          <div
            class="partner-card"
            v-for="partner in internationalPartners"
            :key="partner.name"
          >
            <img :src="partner.logo" :alt="partner.name" class="partner-img" />
            <span class="partner-tooltip">{{ partner.name }}</span>
          </div>
        </div>
      </div>

      <!-- KATEGORI 2: NATIONAL PARTNERS -->
      <div class="category-block">
        <div class="category-title">
          <h3>National Partners</h3>
          <div class="title-line"></div>
        </div>

        <div class="partner-grid">
          <div
            class="partner-card"
            v-for="partner in nationalPartners"
            :key="partner.name"
          >
            <img :src="partner.logo" :alt="partner.name" class="partner-img" />
            <span class="partner-tooltip">{{ partner.name }}</span>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap');

.partners-section {
  background-color: #F8FAFC; 
  padding: 120px 0;
  font-family: 'Plus Jakarta Sans', sans-serif;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

/* --- Header Gaya Makro --- */
.section-header {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 70px;
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
  background-color: #0047A5;
  border-radius: 2px;
}

/* --- Pengaturan Sub-Blok Kategori --- */
.category-block {
  margin-bottom: 60px;
}

.category-block:last-child {
  margin-bottom: 0; /* Menghilangkan margin bawah pada kategori terakhir */
}

.category-title {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 28px;
}

.category-title h3 {
  font-size: 1.25rem;
  font-weight: 700;
  color: #002D6B;
  margin: 0;
  white-space: nowrap;
}

/* Garis horizontal penunjuk estetis di samping judul kategori */
.title-line {
  flex-grow: 1;
  height: 1px;
  background-color: rgba(0, 71, 165, 0.12);
}

/* --- Grid Susunan Logo --- */
.partner-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 24px;
}

/* --- Gaya Kartu Box Partner --- */
.partner-card {
  background: #FFFFFF;
  border: 1px solid rgba(0, 71, 165, 0.04);
  padding: 24px;
  border-radius: 12px;
  height: 100px; 
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  box-shadow: 0 4px 12px rgba(0, 45, 107, 0.02);
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.partner-img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  filter: grayscale(100%);
  opacity: 0.6;
  transition: all 0.3s ease;
}

/* --- Efek Interaktif Hover Kartu --- */
.partner-card:hover {
  transform: translateY(-4px);
  border-color: rgba(0, 71, 165, 0.12);
  box-shadow: 0 12px 24px rgba(0, 45, 107, 0.06);
}

.partner-card:hover .partner-img {
  filter: grayscale(0%);
  opacity: 1;
}

/* --- Sistem Tooltip --- */
.partner-tooltip {
  position: absolute;
  bottom: -35px;
  background-color: #002D6B;
  color: #FFFFFF;
  padding: 4px 10px;
  border-radius: 4px;
  font-size: 11px;
  font-weight: 600;
  white-space: nowrap;
  opacity: 0;
  visibility: hidden;
  transition: all 0.2s ease;
  z-index: 10;
}

.partner-card:hover .partner-tooltip {
  opacity: 1;
  visibility: visible;
  bottom: -28px; 
}

/* --- Penataan Responsif --- */
@media (max-width: 768px) {
  .partners-section {
    padding: 80px 0;
  }
  h2 {
    font-size: 2rem;
  }
  .partner-grid {
    grid-template-columns: repeat(2, 1fr); /* Tampilan 2 kolom yang rapi untuk layar HP */
    gap: 16px;
  }
  .partner-card {
    padding: 16px;
    height: 85px;
  }
}
</style>