<script setup>
// Fungsi pembantu untuk mendapatkan URL gambar secara dinamis
const getImageUrl = (name) => {
  return new URL(`/src/assets/partners/${name}`, import.meta.url).href
}

// Data Partner Internasional
const internationalPartners = [
  { name: "WHO", logo: getImageUrl("logoWho.png") },
  { name: "SINOVAC Biotech Ltd.", logo: getImageUrl("logoSinovac.png") },
  { name: "MCRI", logo: getImageUrl("logoMcri.jpg") },
  { name: "Minahai", logo: getImageUrl("logoMinhai.jpg") },
  { name: "Anhui Zifei", logo: getImageUrl("logoZhifei.png") }
]

// Data Partner Nasional
const nationalPartners = [
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
        <div class="category-title">
          <div class="icon-indicator">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
          </div>
          <h3>International Collaborations</h3>
          <div class="title-line"></div>
        </div>
        
        <div class="carousel-contained-wrapper">
          <div class="carousel-track scroll-left">
            <div class="partner-card" v-for="partner in internationalPartners" :key="'int-'+partner.name">
              <div class="img-container">
                <img :src="partner.logo" :alt="partner.name" class="partner-img" />
              </div>
              <p class="partner-name">{{ partner.name }}</p>
            </div>
            <div class="partner-card" v-for="partner in internationalPartners" :key="'int-dup-'+partner.name" aria-hidden="true">
              <div class="img-container">
                <img :src="partner.logo" :alt="partner.name" class="partner-img" />
              </div>
              <p class="partner-name">{{ partner.name }}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="category-block">
        <div class="category-title">
          <div class="icon-indicator">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
          </div>
          <h3>National Collaborations</h3>
          <div class="title-line"></div>
        </div>

        <div class="carousel-contained-wrapper">
          <div class="carousel-track scroll-right">
            <div class="partner-card" v-for="partner in nationalPartners" :key="'nat-'+partner.name">
              <div class="img-container">
                <img :src="partner.logo" :alt="partner.name" class="partner-img" />
              </div>
              <p class="partner-name">{{ partner.name }}</p>
            </div>
            <div class="partner-card" v-for="partner in nationalPartners" :key="'nat-dup-'+partner.name" aria-hidden="true">
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

/* --- Header --- */
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

/* --- Kategori --- */
.category-block {
  margin-bottom: 60px;
}

.category-block:last-child {
  margin-bottom: 0;
}

.category-title {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 24px;
}

.icon-indicator {
  color: #0047A5;
  display: flex;
  align-items: center;
  justify-content: center;
}

.category-title h3 {
  font-size: 1.3rem;
  font-weight: 700;
  color: #002D6B;
  margin: 0;
  white-space: nowrap;
}

.title-line {
  flex-grow: 1;
  height: 1px;
  background-color: rgba(0, 71, 165, 0.12);
}

/* ======================================================= */
/* --- PERBAIKAN UTAMA: MEMBATASI JALUR CAROUSEL AGAR DI TENGAH --- */
/* ======================================================= */

.carousel-contained-wrapper {
  position: relative;
  width: 100%;
  overflow: hidden;
  padding: 20px 0;
  
  /* KUNCI BARU: Memberikan batas ruang kosong (margin dalam) di kiri & kanan 
     agar lintasan jalan logo bergeser menciut ke area tengah halaman */
  padding-left: 100px;
  padding-right: 100px;
  
  /* Membuat ujung area potong lintasan menjadi rapi */
  border-radius: 16px;
}

/* Jalur gerak internal */
.carousel-track {
  display: flex;
  width: max-content;
  gap: 24px;
}

/* Jalur Animasi Gerak */
.scroll-left {
  animation: marqueeLeft 30s linear infinite;
}

.scroll-right {
  animation: marqueeRight 25s linear infinite;
}

.carousel-contained-wrapper:hover .carousel-track {
  animation-play-state: paused;
}

/* Sinkronisasi perhitungan jarak keyframe */
@keyframes marqueeLeft {
  0% { transform: translateX(0); }
  100% { transform: translateX(calc(-50% - 12px)); }
}

@keyframes marqueeRight {
  0% { transform: translateX(calc(-50% - 12px)); }
  100% { transform: translateX(0); }
}

/* ======================================================= */
/* --- GAYA KARTU BOX PARTNER KEMBALI KE UKURAN ASLI ----- */
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
  width: 240px; /* Ukuran lebar dikembalikan ke ukuran semula (tidak diperkecil) */
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
    /* Mengurangi jarak tengah pada tablet agar muat banyak */
    padding-left: 40px;
    padding-right: 40px;
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
    /* Pada layar HP, kembalikan ke mepet ujung agar hemat ruang */
    padding-left: 0;
    padding-right: 0;
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