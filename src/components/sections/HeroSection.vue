<template>
  <section class="hero">
    <!-- Grid Overlay untuk Efek Pattern Modern -->
    <div class="grid-overlay"></div>

    <!-- CAROUSEL BACKGROUND SLIDER -->
    <div class="carousel-background">
      <div
        v-for="(slide, index) in slides"
        :key="index"
        class="slide-image-wrapper"
        :class="{ active: currentSlide === index }"
      >
        <div
          class="slide-image"
          :style="{ backgroundImage: `url(${slide.image})` }"
        ></div>
      </div>
      <!-- Dark Gradient Overlay agar teks judul tetap kontras dan terbaca jelas -->
      <div class="hero-dark-overlay"></div>
    </div>

    <!-- FLOATING DECORATION SHAPE -->
    <div class="floating-icons">
      <img
        src="../../assets/images/Shape.png"
        alt="Shape Latar Belakang"
        class="icon"
      />
    </div>

    <!-- KONTEN UTAMA -->
    <div class="content">
      <div class="badge-wrapper">
        <span class="sub-title">
          <span class="pulse-ring"></span>
          Clinical Excellence
        </span>
      </div>

      <!-- Wrapper Teks dengan Efek Transisi -->
      <transition name="fade-text" mode="out-in">
        <div :key="currentSlide" class="text-slide-content">
          <h1>
            <span class="highlight">{{ slides[currentSlide].title }}</span>
          </h1>
          <p class="description">
            {{ slides[currentSlide].description }}
          </p>
        </div>
      </transition>

      <div class="action-row">
        <button class="btn-primary" @click="scrollToResearch">
          <span>Explore Research</span>
          <div class="icon-circle">
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
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </div>
        </button>

        <!-- KONTROL SLIDER (PANAH KIRI/KANAN & INDICATORS) -->
        <div class="carousel-controls">
          <button class="nav-btn" @click="prevSlide" aria-label="Previous Slide">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
          </button>

          <div class="dots-wrapper">
            <span
              v-for="(slide, index) in slides"
              :key="index"
              class="dot"
              :class="{ active: currentSlide === index }"
              @click="setSlide(index)"
            ></span>
          </div>

          <button class="nav-btn" @click="nextSlide" aria-label="Next Slide">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

// Mengambil gambar background dinamis dari folder src/assets/images/
const getImageUrl = (filename) => {
  return new URL(`../../assets/images/${filename}`, import.meta.url).href;
};

// Data array untuk foto background carousel dan teks hero
const slides = ref([
  {
    image: getImageUrl("hero-bg-1.jpg"), // Ganti nama file sesuai foto di assets/images
    title: "Clinical Research Unit",
    description:
      "Department of Child Growth & Health, Faculty of Medicine Universitas Padjadjaran.",
  },
  {
    image: getImageUrl("hero-bg-2.jpg"),
    title: "Advancing Pediatric Care",
    description:
      "Leading multi-center clinical trials and health surveillance for long-term child development.",
  },
  {
    image: getImageUrl("hero-bg-3.jpg"),
    title: "Innovative Vaccine Trials",
    description:
      "Conducting world-class baseline studies to support evidence-based national healthcare policy.",
  },
]);

const currentSlide = ref(0);
let timer = null;

const startAutoplay = () => {
  timer = setInterval(() => {
    nextSlide();
  }, 6000); // Berganti otomatis setiap 6 detik
};

const stopAutoplay = () => {
  if (timer) clearInterval(timer);
};

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % slides.value.length;
};

const prevSlide = () => {
  currentSlide.value =
    (currentSlide.value - 1 + slides.value.length) % slides.value.length;
};

const setSlide = (index) => {
  currentSlide.value = index;
};

const scrollToResearch = () => {
  const el = document.getElementById("research");
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

onMounted(() => {
  startAutoplay();
});

onUnmounted(() => {
  stopAutoplay();
});
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap");

.hero {
  position: relative;
  height: 100vh;
  min-height: 700px;
  display: flex;
  align-items: center;
  color: #002d6b;
  font-family: "Plus Jakarta Sans", sans-serif;
  overflow: hidden;
  padding-top: 80px;
  background-color: #00122e;
}

/* --- CAROUSEL BACKGROUND --- */
.carousel-background {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.slide-image-wrapper {
  position: absolute;
  inset: 0;
  opacity: 0;
  transition: opacity 1.2s cubic-bezier(0.4, 0, 0.2, 1);
}

.slide-image-wrapper.active {
  opacity: 1;
}

.slide-image {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  transform: scale(1);
  transition: transform 6s ease;
}

/* Efek Zoom in Halus pada Background saat Aktif */
.slide-image-wrapper.active .slide-image {
  transform: scale(1.08);
}

.hero-dark-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.95) 0%,
    rgba(255, 255, 255, 0.88) 45%,
    rgba(255, 255, 255, 0.2) 100%
  );
  z-index: 1;
}

/* --- GRID OVERLAY & FLOATING DECORATION --- */
.grid-overlay {
  position: absolute;
  inset: 0;
  background-image: linear-gradient(rgba(0, 71, 165, 0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 71, 165, 0.04) 1px, transparent 1px);
  background-size: 50px 50px;
  z-index: 2;
  pointer-events: none;
}

.floating-icons {
  position: absolute;
  inset: 0;
  z-index: 2;
  pointer-events: none;
}

.floating-icons .icon {
  position: absolute;
  top: 25%;
  right: -5%;
  width: 650px;
  opacity: 0.15;
  animation: floatIcon 6s infinite ease-in-out;
}

/* --- KONTEN & TIPOGRAFI --- */
.content {
  max-width: 1200px;
  width: 100%;
  margin: auto;
  padding: 0 24px;
  position: relative;
  z-index: 3;
}

.badge-wrapper {
  margin-bottom: 24px;
}

.sub-title {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-size: 13px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  color: #0052cc;
  background: rgba(0, 82, 204, 0.08);
  border: 1px solid rgba(0, 82, 204, 0.15);
  padding: 8px 20px;
  border-radius: 50px;
  backdrop-filter: blur(4px);
}

.pulse-ring {
  width: 8px;
  height: 8px;
  background-color: #0052cc;
  border-radius: 50%;
  position: relative;
}

.pulse-ring::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background-color: #0052cc;
  animation: badge-pulse 2s infinite ease-out;
}

.text-slide-content {
  min-height: 220px;
}

h1 {
  font-size: 3.8rem;
  font-weight: 800;
  line-height: 1.15;
  max-width: 850px;
  margin: 0 0 20px 0;
  letter-spacing: -1.5px;
  color: #002d6b;
}

.highlight {
  color: #0047a5;
  position: relative;
}

.description {
  font-size: 1.2rem;
  line-height: 1.6;
  max-width: 600px;
  color: #334155;
  margin: 0 0 36px 0;
  font-weight: 500;
}

/* --- TOMBOL & CAROUSEL NAVIGASI --- */
.action-row {
  display: flex;
  align-items: center;
  gap: 40px;
  flex-wrap: wrap;
}

button.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 16px;
  background: #002d6b;
  color: #ffffff;
  border: none;
  padding: 12px 12px 12px 28px;
  border-radius: 100px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 10px 25px rgba(0, 45, 107, 0.15);
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.icon-circle {
  width: 42px;
  height: 42px;
  background-color: rgba(255, 255, 255, 0.15);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

button.btn-primary:hover {
  background: #0047a5;
  transform: translateY(-3px);
  box-shadow: 0 15px 30px rgba(0, 71, 165, 0.25);
}

button.btn-primary:hover .icon-circle {
  background-color: #ffffff;
  color: #002d6b;
  transform: rotate(-45deg);
}

/* Navigasi Control */
.carousel-controls {
  display: flex;
  align-items: center;
  gap: 16px;
  background: rgba(255, 255, 255, 0.8);
  padding: 8px 16px;
  border-radius: 50px;
  border: 1px solid rgba(0, 71, 165, 0.1);
  backdrop-filter: blur(8px);
}

.nav-btn {
  background: transparent;
  border: none;
  color: #002d6b;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
}

.nav-btn:hover {
  background: #0047a5;
  color: #ffffff;
}

.dots-wrapper {
  display: flex;
  align-items: center;
  gap: 8px;
}

.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #cbd5e1;
  cursor: pointer;
  transition: all 0.3s ease;
}

.dot.active {
  width: 24px;
  border-radius: 10px;
  background-color: #0047a5;
}

/* --- TRANSISI ANIMASI TEKS --- */
.fade-text-enter-active,
.fade-text-leave-active {
  transition: all 0.5s ease;
}

.fade-text-enter-from {
  opacity: 0;
  transform: translateY(15px);
}

.fade-text-leave-to {
  opacity: 0;
  transform: translateY(-15px);
}

/* --- KEYFRAMES --- */
@keyframes badge-pulse {
  0% { transform: scale(1); opacity: 1; }
  100% { transform: scale(3); opacity: 0; }
}

@keyframes floatIcon {
  0% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-15px) rotate(3deg); }
  100% { transform: translateY(0px) rotate(0deg); }
}

/* --- RESPONSIF --- */
@media (max-width: 992px) {
  h1 {
    font-size: 3rem;
  }
  .floating-icons .icon {
    width: 450px;
  }
  .hero-dark-overlay {
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.95) 0%,
      rgba(255, 255, 255, 0.85) 100%
    );
  }
}

@media (max-width: 768px) {
  .hero {
    height: auto;
    padding: 140px 0 80px 0;
  }
  h1 {
    font-size: 2.2rem;
  }
  .text-slide-content {
    min-height: auto;
  }
  .description {
    font-size: 1rem;
  }
  .action-row {
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
  }
  .floating-icons {
    display: none;
  }
}
</style>