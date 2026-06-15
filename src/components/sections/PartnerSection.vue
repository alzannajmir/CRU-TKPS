<script setup>
// Fungsi pembantu untuk mendapatkan URL gambar secara dinamis
const getImageUrl = (name) => {
  return new URL(`/src/assets/partners/${name}`, import.meta.url).href
}

// Penggabungan semua data partner menjadi satu kesatuan
const allPartners = [
  { name: "WHO", logo: getImageUrl("logoWho.png") },
  { name: "SINOVAC Biotech Ltd.", logo: getImageUrl("logoSinovac.png") },
  { name: "MCRI", logo: getImageUrl("logoMcri.jpg") },
  { name: "Minahai", logo: getImageUrl("logoMinhai.jpg") },
  { name: "Anhui Zifei", logo: getImageUrl("logoZhifei.png") },
  { name: "Sanofi Pasteur", logo: getImageUrl("logoSanofi.png") },
  { name: "Bio Farma", logo: getImageUrl("logoBiofarma.png") },
  { name: "Prodia", logo: getImageUrl("logoProdia.png") }
]
</script>

<template>
  <section id="partners" class="partners-section">
    <div class="container">

      <div class="section-header">
        <span class="sub-title">Collaboration</span>
        <h2>Our Trusted <span class="highlight">Partners</span></h2>
        <div class="accent-line"></div>
      </div>

      <div class="category-block">
        <div class="carousel-contained-wrapper">
          <div class="carousel-track scroll-left">
            
            <div class="partner-card" v-for="partner in allPartners" :key="'partner-'+partner.name">
              <div class="img-container">
                <img :src="partner.logo" :alt="partner.name" class="partner-img" />
              </div>
              <p class="partner-name">{{ partner.name }}</p>
            </div>

            <div class="partner-card" v-for="partner in allPartners" :key="'partner-dup-'+partner.name" aria-hidden="true">
              <div class="img-container">
                <img :src="partner.logo" :alt="partner.name" class="partner-img" />
              </div>
              <p class="partner-name">{{ partner.name }}</p>
            </div>

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
  padding: 100px 0;
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
  margin-bottom: 50px; /* Jarak disesuaikan agar lebih padat ke carousel */
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
  background-color: #0047A5;
  border-radius: 2px;
}

.category-block {
  margin-bottom: 0;
}

/* ======================================================= */
/* --- BINGKAI LINTASAN TENGAH YANG PROPORSIAL ------------ */
/* ======================================================= */

.carousel-contained-wrapper {
  position: relative;
  width: 100%;
  overflow: hidden;
  padding: 20px 0;
  
  /* Menjaga agar ujung area gerak tetap berada di dalam batasan tengah halaman */
  padding-left: 60px;
  padding-right: 60px;
  border-radius: 16px;
}

/* Efek samaran gradasi halus saat logo bergeser masuk/keluar di area tengah */
.carousel-contained-wrapper::before,
.carousel-contained-wrapper::after {
  content: "";
  height: 100%;
  position: absolute;
  top: 0;
  width: 100px;
  z-index: 2;
  pointer-events: none;
}

.carousel-contained-wrapper::before {
  left: 0;
  background: linear-gradient(to right, #F8FAFC 15%, transparent 100%);
}

.carousel-contained-wrapper::after {
  right: 0;
  background: linear-gradient(to left, #F8FAFC 15%, transparent 100%);
}

/* Jalur penampung internal */
.carousel-track {
  display: flex;
  width: max-content;
  gap: 24px;
}

/* Animasi Putar Kiri */
.scroll-left {
  animation: marqueeLeft 35s linear infinite; /* Kecepatan stabil untuk isi 8 logo */
}

.carousel-contained-wrapper:hover .carousel-track {
  animation-play-state: paused;
}

@keyframes marqueeLeft {
  0% { transform: translateX(0); }
  100% { transform: translateX(calc(-50% - 12px)); }
}

/* ======================================================= */
/* --- GAYA KARTU BOX PARTNER KONSISTEN ------------------- */
/* ======================================================= */

.partner-card {
  background: #FFFFFF;
  border: 1px solid rgba(0, 71, 165, 0.08);
  padding: 30px 24px;
  border-radius: 16px;
  display: flex;
  flex-direction: column; 
  align-items: center;
  justify-content: center;
  gap: 16px;
  width: 240px; 
  flex-shrink: 0;
  box-shadow: 0 4px 18px rgba(0, 45, 107, 0.01);
  transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
}

.img-container {
  height: 60px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.partner-img {
  max-width: 85%;
  max-height: 100%;
  object-fit: contain;
  opacity: 0.95;
  transition: transform 0.3s ease;
}

.partner-name {
  font-size: 0.95rem;
  font-weight: 700;
  color: #002D6B; 
  margin: 0;
  text-align: center;
  line-height: 1.4;
  letter-spacing: 0.2px;
}

/* Efek Hover */
.partner-card:hover {
  transform: translateY(-5px);
  border-color: rgba(0, 71, 165, 0.16);
  box-shadow: 0 12px 24px rgba(0, 45, 107, 0.06);
}

.partner-card:hover .partner-img {
  transform: scale(1.05);
}

/* --- Responsif Mobile --- */
@media (max-width: 992px) {
  .carousel-contained-wrapper {
    padding-left: 20px;
    padding-right: 20px;
  }
}

@media (max-width: 768px) {
  .partners-section {
    padding: 80px 0;
  }
  h2 {
    font-size: 2rem;
  }
  .carousel-contained-wrapper {
    padding-left: 0;
    padding-right: 0;
  }
  .carousel-contained-wrapper::before,
  .carousel-contained-wrapper::after {
    width: 40px;
  }
  .partner-card {
    width: 200px;
    padding: 24px 16px;
  }
  .img-container {
    height: 50px;
  }
}
</style>