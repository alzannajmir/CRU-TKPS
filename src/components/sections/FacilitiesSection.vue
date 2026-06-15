<script setup>
import { register } from 'swiper/element/bundle'

// Mengaktifkan elemen kustom Swiper (Swiper Custom Elements)
register()

// Data Asli diulangi (diduplikasi) agar menjadi 6 item sesuai permintaan
const facilities = [
  {
    title: "Research Refrigerator",
    desc: "Temperature controlled vaccine storage.",
    imageName: "Kulkas1.png",
    specs: [
      "1st refrigerator (Sanyo)",
      "Capacity: 602 L",
      "Product dimensions (H/W/D): 2160 x 700 x 830 mm",
      "Temperature range: 2°C to 16°C"
    ]
  },
  {
    title: "WiFi Monitoring Thermometer",
    desc: "Real time monitoring and notification system.",
    imageName: "Kulkas2.png",
    specs: [
      "Capacity : 684 L",
      "Instant Alarm Notifications",
      "High-Precision Thermal Sensors",
      "Automated Cloud Data Logging"
    ]
  },
  {
    title: "Thermometer",
    desc: "Internet‑connected thermometer with Wi‑Fi logging: real‑time monitoring, smartphone access, and automatic alerts.",
    imageName: "Termomter.jpg",
    specs: [
      "Real-time Remote Access",
      "Wi-Fi Cloud Logging",
      "Automatic SMS/Email Alerts"
    ]
  },
  // Duplikasi Data ke-4
  {
    title: "Research Refrigerator (Backup Unit)",
    desc: "Temperature controlled vaccine storage.",
    imageName: "Kulkas1.png",
    specs: [
      "2nd refrigerator (Sanyo)",
      "Capacity: 602 L",
      "Product dimensions (H/W/D): 2160 x 700 x 830 mm",
      "Temperature range: 2°C to 16°C"
    ]
  },
  // Duplikasi Data ke-5
  {
    title: "WiFi Monitoring System B",
    desc: "Real time monitoring and notification system.",
    imageName: "Kulkas2.png",
    specs: [
      "Capacity : 684 L",
      "Instant Alarm Notifications",
      "High-Precision Thermal Sensors",
      "Automated Cloud Data Logging"
    ]
  },
  // Duplikasi Data ke-6
  {
    title: "Secondary Thermometer",
    desc: "Internet‑connected thermometer with Wi‑Fi logging: real‑time monitoring, smartphone access, and automatic alerts.",
    imageName: "Termomter.jpg",
    specs: [
      "Real-time Remote Access",
      "Wi-Fi Cloud Logging",
      "Automatic SMS/Email Alerts"
    ]
  }
]

// Fungsi pembantu lokal (Ini yang dipakai di template)
const getFacilityImg = (fileName) => {
  if (!fileName) return ''
  return new URL(`/src/assets/images/${fileName}`, import.meta.url).href
}
</script>

<template>
  <section id="facilities" class="facilities-section">
    <div class="container">

      <div class="section-header">
        <span class="sub-title">Infrastructure</span>
        <h2>Our <span class="highlight">Facilities</span></h2>
        <div class="accent-line"></div>
      </div>

      <div class="carousel-wrapper">
        <swiper-container
          slides-per-view="3"
          space-between="32"
          loop="true"
          :navigation="{
            prevEl: '.custom-nav-prev',
            nextEl: '.custom-nav-next'
          }"
          :pagination="{
            el: '.custom-swiper-pagination',
            clickable: true
          }"
          :breakpoints="{
            '0': {
              slidesPerView: 1,
              spaceBetween: 20
            },
            '768': {
              slidesPerView: 2,
              spaceBetween: 24
            },
            '1024': {
              slidesPerView: 3,
              spaceBetween: 32
            }
          }"
          class="facilities-swiper"
        >
          <swiper-slide 
            v-for="(item, index) in facilities" 
            :key="index"
            class="swiper-slide-card"
          >
            <div class="facility-card">
              <div class="card-number">0{{ (index % 3) + 1 }}</div>
              
              <div class="facility-image-wrapper">
                <img 
                  v-if="item.imageName" 
                  :src="getFacilityImg(item.imageName)" 
                  :alt="item.title" 
                  class="facility-img" 
                />
                <div v-else class="image-placeholder">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                </div>
              </div>
              
              <div class="card-body">
                <h3>{{ item.title }}</h3>
                <p class="main-desc">{{ item.desc }}</p>
                
                <div class="specs-box">
                  <div v-for="(spec, specIdx) in item.specs" :key="specIdx" class="spec-item">
                    <span class="spec-dot"></span>
                    <span class="spec-text">{{ spec }}</span>
                  </div>
                </div>
              </div>
              
              <div class="card-border-glow"></div>
            </div>
          </swiper-slide>
        </swiper-container>

        <button class="custom-nav-btn custom-nav-prev" aria-label="Previous slide">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
        </button>
        <button class="custom-nav-btn custom-nav-next" aria-label="Next slide">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
        </button>

        <div class="custom-swiper-pagination"></div>
      </div>

    </div>
  </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap');

.facilities-section {
  background-color: #F8FAFC; 
  padding: 120px 0;
  font-family: 'Plus Jakarta Sans', sans-serif;
}

.container {
  max-width: 1240px; 
  margin: 0 auto;
  padding: 0 24px;
}

/* --- Header --- */
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
  background-color: #0047A5;
  border-radius: 2px;
}

/* ======================================================= */
/* --- AREA GRID CAROUSEL & KARTU ------------------------ */
/* ======================================================= */

.carousel-wrapper {
  position: relative;
  /* Memberikan ruang kosong di kanan-kiri untuk tempat tombol navigasi */
  padding: 0 64px; 
}

.facilities-swiper {
  /* Padding bottom dibersihkan karena pagination dipindah ke luar */
  padding-bottom: 20px !important; 
  position: relative;
}

.swiper-slide-card {
  height: auto; 
  display: flex;
  padding-bottom: 16px; 
}

.facility-card {
  background: #FFFFFF;
  border: 1px solid rgba(0, 71, 165, 0.05);
  border-radius: 24px;
  box-shadow: 0 10px 30px rgba(0, 45, 107, 0.03);
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%; 
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.facility-image-wrapper {
  width: 100%;
  height: 200px; 
  overflow: hidden;
  background-color: #EDF2F7;
  position: relative;
  z-index: 2; 
}

.facility-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.image-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #A0AEC0;
}

.card-number {
  position: absolute;
  right: 20px;
  top: 170px; 
  font-size: 5rem;
  font-weight: 800;
  color: rgba(0, 71, 165, 0.04); 
  line-height: 1;
  z-index: 3; 
  pointer-events: none;
  user-select: none;
  transition: all 0.4s ease;
}

.card-body {
  padding: 32px 28px;
  position: relative;
  z-index: 4; 
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.facility-card h3 {
  margin: 0 0 10px 0;
  font-weight: 700;
  font-size: 1.25rem;
  color: #002D6B;
  line-height: 1.4;
}

.main-desc {
  margin: 0 0 20px 0;
  font-size: 0.95rem;
  color: #4A5568;
  line-height: 1.5;
}

.specs-box {
  border-top: 1px dashed rgba(0, 71, 165, 0.08);
  padding-top: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: auto; 
}

.spec-item {
  display: flex;
  align-items: flex-start;
  gap: 10px;
}

.spec-dot {
  width: 6px;
  height: 6px;
  background-color: #FFC700; 
  border-radius: 50%;
  margin-top: 6px;
  flex-shrink: 0;
}

.spec-text {
  font-size: 0.88rem;
  color: #64748B;
  line-height: 1.4;
  font-weight: 500;
}

.card-border-glow {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background-color: #0047A5;
  transform: scaleX(0);
  transition: transform 0.3s ease;
  z-index: 5;
}

/* --- Hover Effects --- */
.facility-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 24px 48px rgba(0, 45, 107, 0.07);
  border-color: rgba(0, 71, 165, 0.12);
}

.facility-card:hover .facility-img {
  transform: scale(1.06);
}

.facility-card:hover .card-number {
  color: rgba(255, 199, 0, 0.15);
  transform: translateY(-10px);
}

.facility-card:hover .card-border-glow {
  transform: scaleX(1);
}

/* ======================================================= */
/* --- DESIGN TOMBOL NAVIGASI KUSTOM (SANGAT AMAN) ------- */
/* ======================================================= */

.custom-nav-btn {
  position: absolute;
  top: 45%; 
  transform: translateY(-50%);
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: #FFFFFF;
  border: none;
  color: #0047A5;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 14px rgba(0, 45, 107, 0.12);
  cursor: pointer;
  z-index: 10;
  transition: all 0.3s ease;
}

.custom-nav-prev {
  left: 0px;
}

.custom-nav-next {
  right: 0px;
}

.custom-nav-btn:hover {
  background-color: #0047A5;
  color: #FFFFFF;
}

/* ======================================================= */
/* --- DESAIN PAGINATION DI LUAR (TURUN MAKSIMAL & AMAN) - */
/* ======================================================= */

.custom-swiper-pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  width: 100%;
  margin-top: 40px; /* Menentukan jarak turunnya titik dari batas bawah kartu */
}

/* Mengatur style bulatan DOM asli yang digenerate Swiper di luar */
:deep(.custom-swiper-pagination .swiper-pagination-bullet) {
  background-color: #94A3B8 !important;
  opacity: 0.4 !important;
  width: 8px !important;
  height: 8px !important;
  border-radius: 50% !important;
  display: inline-block;
  cursor: pointer;
  margin: 0 !important;
  transition: all 0.3s ease !important;
}

/* Mengatur style kapsul aktif di luar shadow DOM */
:deep(.custom-swiper-pagination .swiper-pagination-bullet-active) {
  background-color: #0047A5 !important;
  width: 24px !important;
  border-radius: 6px !important;
  opacity: 1 !important;
}

/* ======================================================= */
/* --- RESPONSIVE MOBILE & TABLET ------------------------ */
/* ======================================================= */

@media (max-width: 992px) {
  .carousel-wrapper {
    padding: 0 32px; 
  }
  .custom-nav-btn {
    width: 40px;
    height: 40px;
  }
  .custom-swiper-pagination {
    margin-top: 32px;
  }
}

@media (max-width: 768px) {
  .facilities-section {
    padding: 80px 0;
  }
  h2 {
    font-size: 2rem;
  }
  .carousel-wrapper {
    padding: 0 8px; 
  }
  /* Sembunyikan navigasi klik di HP, fokus swipe pakai layar */
  .custom-nav-btn {
    display: none; 
  }
  .custom-swiper-pagination {
    margin-top: 24px;
    gap: 8px;
  }
}
</style>