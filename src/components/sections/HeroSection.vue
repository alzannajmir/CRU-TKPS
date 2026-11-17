<template>
  <section class="hero">
    <div class="grid-overlay"></div>

    <!-- CAROUSEL BACKGROUND SLIDER -->
    <div class="carousel-background">
      <div
        v-for="(slide, index) in slides"
        :key="index"
        class="slide-image-wrapper"
        :class="{ active: currentSlide === index }"
      >
        <img
          :src="slide.image"
          :alt="slide.title"
          class="slide-image"
          :fetchpriority="index === 0 ? 'high' : 'low'"
          :loading="index === 0 ? undefined : 'lazy'"
        />
      </div>
      <div class="hero-dark-overlay"></div>
    </div>

    <!-- FLOATING DECORATION SHAPE -->
    <div class="floating-icons" aria-hidden="true">
      <img
        src="../../assets/images/Shape.png"
        alt=""
        class="icon"
        loading="lazy"
      />
    </div>

    <!-- KONTEN UTAMA -->
    <div class="container hero-container">
      <div class="hero-main">
        <div class="badge-wrapper">
          <span class="sub-title">
            <span class="pulse-ring"></span>
            ICH-GCP Certified Clinical Research Unit
          </span>
        </div>

        <transition name="fade-text" mode="out-in">
          <div :key="currentSlide" class="text-slide-content">
            <p class="eyebrow-tag">{{ slides[currentSlide].tag }}</p>
            <h1>
              {{ slides[currentSlide].titlePrefix }}
              <span class="highlight">{{
                slides[currentSlide].titleHighlight
              }}</span>
            </h1>
            <p class="description">
              {{ slides[currentSlide].description }}
            </p>
          </div>
        </transition>

        <div class="action-row">
          <div class="cta-group">
            <button class="btn-primary" @click="scrollToSection('research')">
              <span>Explore Research</span>
              <span class="icon-circle">
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
              </span>
            </button>

            <button
              class="btn-secondary"
              @click="scrollToSection('publications')"
            >
              <span>Scientific Publications</span>
            </button>
          </div>

          <div class="carousel-controls">
            <button
              class="nav-btn"
              @click="prevSlide"
              aria-label="Previous Slide"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>

            <div class="dots-wrapper">
              <button
                v-for="(slide, index) in slides"
                :key="index"
                type="button"
                class="dot"
                :class="{ active: currentSlide === index }"
                :aria-label="`Go to slide ${index + 1}`"
                @click="setSlide(index)"
              ></button>
            </div>

            <button class="nav-btn" @click="nextSlide" aria-label="Next Slide">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <!-- KEY IMPACT METRICS BAR -->
      <!-- <div class="stats-bar">
        <div
          v-for="(metric, idx) in metrics"
          :key="idx"
          class="stat-item"
        >
          <span class="stat-value">{{ metric.value }}</span>
          <span class="stat-label">{{ metric.label }}</span>
          <span class="stat-sub">{{ metric.sub }}</span>
        </div>
      </div> -->
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import heroImg1 from "../../assets/images/hero.jpeg";
import heroImg2 from "../../assets/images/hero-bg.jpeg";
import heroImg3 from "../../assets/images/ruangan.jpeg";

const slides = ref([
  {
    image: heroImg1,
    tag: "Growth & Development Social Pediatrics (TKPS)",
    titlePrefix: "Clinical Research",
    titleHighlight: "Unit UNPAD",
    title: "Clinical Research Unit UNPAD",
    description:
      "Department of Child Health, Faculty of Medicine Universitas Padjadjaran — conducting world-class pediatric & adult clinical trials with rigorous international standards.",
  },
  {
    image: heroImg2,
    tag: "Multi-Center Clinical Surveillance",
    titlePrefix: "Advancing Pediatric",
    titleHighlight: "& Public Health",
    title: "Advancing Pediatric & Public Health",
    description:
      "Leading longitudinal cohorts, community-based surveillance, and interventional trials across primary healthcare networks in West Java since 1995.",
  },
  {
    image: heroImg3,
    tag: "Evidence-Based National Policy",
    titlePrefix: "Innovative Vaccine",
    titleHighlight: "Clinical Trials",
    title: "Innovative Vaccine Clinical Trials",
    description:
      "Trusted partner of WHO, Bio Farma, MCRI Australia, and global biotechnology leaders in delivering landmark Phase I–III immunization studies.",
  },
]);

const metrics = [
  {
    value: "Since 1995",
    label: "30+ Years of Excellence",
    sub: "Longitudinal & vaccine trial heritage",
  },
  {
    value: "2,500+",
    label: "Enrolled Participants",
    sub: "Across pediatric, infant & adult cohorts",
  },
  {
    value: "Top-Tier",
    label: "Global Publications",
    sub: "Published in The Lancet, NEJM & Vaccine",
  },
  {
    value: "ICH-GCP",
    label: "Standardized Protocol",
    sub: "Multi-site hospital & primary health center network",
  },
];

const currentSlide = ref(0);
let timer = null;

const startAutoplay = () => {
  timer = setInterval(() => {
    nextSlide();
  }, 6500);
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

const scrollToSection = (id) => {
  const el = document.getElementById(id);
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
.hero {
  position: relative;
  min-height: 100dvh;
  display: flex;
  align-items: center;
  color: #ffffff;
  overflow: hidden;
  padding: 130px 0 64px;
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
  object-fit: cover;
  object-position: center;
  transform: scale(1);
  transition: transform 6.5s ease;
  display: block;
}

.slide-image-wrapper.active .slide-image {
  transform: scale(1.07);
}

.hero-dark-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    105deg,
    rgba(0, 18, 46, 0.95) 0%,
    rgba(0, 35, 85, 0.88) 52%,
    rgba(0, 45, 107, 0.58) 100%
  );
  z-index: 1;
}

/* --- GRID OVERLAY & FLOATING DECORATION --- */
.grid-overlay {
  position: absolute;
  inset: 0;
  background-image: linear-gradient(
      rgba(255, 255, 255, 0.04) 1px,
      transparent 1px
    ),
    linear-gradient(90deg, rgba(255, 255, 255, 0.04) 1px, transparent 1px);
  background-size: 56px 56px;
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
  top: 16%;
  right: -4%;
  width: 560px;
  opacity: 0.12;
  animation: floatIcon 7s infinite ease-in-out;
}

/* --- KONTEN & TIPOGRAFI --- */
.hero-container {
  position: relative;
  z-index: 3;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 56px;
}

.hero-main {
  max-width: 820px;
}

.badge-wrapper {
  margin-bottom: 20px;
}

.sub-title {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-size: 0.78rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #ffc700;
  background: rgba(255, 199, 0, 0.12);
  border: 1px solid rgba(255, 199, 0, 0.3);
  padding: 8px 18px;
  border-radius: 999px;
  backdrop-filter: blur(8px);
}

.pulse-ring {
  width: 8px;
  height: 8px;
  background-color: #ffc700;
  border-radius: 50%;
  position: relative;
}

.pulse-ring::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background-color: #ffc700;
  animation: badge-pulse 2s infinite ease-out;
}

.text-slide-content {
  min-height: 230px;
}

.eyebrow-tag {
  font-size: 0.95rem;
  font-weight: 600;
  color: #93c5fd;
  margin-bottom: 10px;
  letter-spacing: 0.02em;
}

h1 {
  font-size: clamp(2.35rem, 1.6rem + 3vw, 3.85rem);
  font-weight: 800;
  line-height: 1.12;
  margin: 0 0 20px 0;
  letter-spacing: -0.03em;
  color: #ffffff;
}

.highlight {
  color: #ffc700;
}

.description {
  font-size: clamp(1.02rem, 0.95rem + 0.35vw, 1.2rem);
  line-height: 1.65;
  max-width: 650px;
  color: rgba(241, 245, 249, 0.88);
  margin: 0 0 36px 0;
  font-weight: 400;
}

/* --- TOMBOL & CAROUSEL NAVIGASI --- */
.action-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  flex-wrap: wrap;
}

.cta-group {
  display: flex;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
}

button.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 14px;
  background: #ffc700;
  color: #00183d;
  border: none;
  padding: 10px 12px 10px 26px;
  border-radius: 999px;
  font-size: 0.96rem;
  font-weight: 700;
  font-family: inherit;
  cursor: pointer;
  box-shadow: 0 12px 28px rgba(255, 199, 0, 0.22);
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.icon-circle {
  width: 38px;
  height: 38px;
  background-color: rgba(0, 24, 61, 0.12);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

button.btn-primary:hover {
  background: #ffd43b;
  transform: translateY(-2px);
  box-shadow: 0 16px 32px rgba(255, 199, 0, 0.32);
}

button.btn-primary:hover .icon-circle {
  background-color: #00183d;
  color: #ffc700;
  transform: rotate(-45deg);
}

button.btn-secondary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.08);
  color: #ffffff;
  border: 1px solid rgba(255, 255, 255, 0.24);
  padding: 15px 26px;
  border-radius: 999px;
  font-size: 0.95rem;
  font-weight: 600;
  font-family: inherit;
  cursor: pointer;
  backdrop-filter: blur(8px);
  transition: all 0.25s ease;
}

button.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.16);
  border-color: rgba(255, 255, 255, 0.45);
  transform: translateY(-2px);
}

/* Navigasi Control */
.carousel-controls {
  display: flex;
  align-items: center;
  gap: 14px;
  background: rgba(255, 255, 255, 0.08);
  padding: 8px 14px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.16);
  backdrop-filter: blur(10px);
}

.nav-btn {
  background: transparent;
  border: none;
  color: #ffffff;
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
  background: rgba(255, 255, 255, 0.18);
  color: #ffc700;
}

.dots-wrapper {
  display: flex;
  align-items: center;
  gap: 8px;
}

.dot {
  width: 8px;
  height: 8px;
  border: none;
  padding: 0;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.35);
  cursor: pointer;
  transition: all 0.3s ease;
}

.dot.active {
  width: 24px;
  border-radius: 10px;
  background-color: #ffc700;
}

/* --- STATS BAR --- */
.stats-bar {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  background: rgba(255, 255, 255, 0.07);
  border: 1px solid rgba(255, 255, 255, 0.14);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-radius: 20px;
  padding: 24px 28px;
}

.stat-item {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding-right: 16px;
  border-right: 1px solid rgba(255, 255, 255, 0.12);
}

.stat-item:last-child {
  border-right: none;
  padding-right: 0;
}

.stat-value {
  font-size: 1.55rem;
  font-weight: 800;
  color: #ffc700;
  letter-spacing: -0.02em;
  line-height: 1.2;
}

.stat-label {
  font-size: 0.92rem;
  font-weight: 700;
  color: #ffffff;
}

.stat-sub {
  font-size: 0.8rem;
  color: rgba(226, 232, 240, 0.75);
  line-height: 1.35;
}

/* --- TRANSISI ANIMASI TEKS --- */
.fade-text-enter-active,
.fade-text-leave-active {
  transition: all 0.45s ease;
}

.fade-text-enter-from {
  opacity: 0;
  transform: translateY(12px);
}

.fade-text-leave-to {
  opacity: 0;
  transform: translateY(-12px);
}

@keyframes badge-pulse {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(3);
    opacity: 0;
  }
}

@keyframes floatIcon {
  0% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-14px) rotate(3deg);
  }
  100% {
    transform: translateY(0px) rotate(0deg);
  }
}

/* --- RESPONSIF --- */
@media (max-width: 992px) {
  .stats-bar {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
  .stat-item:nth-child(2) {
    border-right: none;
  }
  .floating-icons .icon {
    width: 420px;
  }
}

@media (max-width: 768px) {
  .hero {
    min-height: auto;
    padding: 120px 0 56px;
  }
  .text-slide-content {
    min-height: auto;
  }
  .action-row {
    flex-direction: column;
    align-items: flex-start;
  }
  .stats-bar {
    grid-template-columns: 1fr;
    padding: 20px;
  }
  .stat-item {
    border-right: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.12);
    padding-right: 0;
    padding-bottom: 14px;
  }
  .stat-item:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }
  .floating-icons {
    display: none;
  }
}
</style>
