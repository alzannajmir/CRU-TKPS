<script setup>
const getImageUrl = (name) => {
  return new URL(`../../assets/partners/${name}`, import.meta.url).href;
};

const allPartners = [
  { name: "World Health Organization (WHO)", logo: getImageUrl("logoWho.png") },
  { name: "Bio Farma (Persero), Indonesia", logo: getImageUrl("logoBiofarma.png") },
  { name: "MCRI Murdoch Children's Research Institute", logo: getImageUrl("logoMcri.jpg") },
  { name: "Sanofi Pasteur", logo: getImageUrl("logoSanofi.png") },
  { name: "SINOVAC Biotech Ltd.", logo: getImageUrl("logoSinovac.png") },
  { name: "Anhui Zhifei Longcom Biopharmaceutical", logo: getImageUrl("logoZhifei.png") },
  { name: "Minhai Biotechnology Co., Ltd.", logo: getImageUrl("logoMinhai.jpg") },
  { name: "Laboratorium Klinik Prodia", logo: getImageUrl("logoProdia.png") },
  { name: "Equilab International", logo: getImageUrl("logoEquilab.png") },
];
</script>

<template>
  <section id="partners" class="partners-section">
    <div class="container">
      <div class="partners-header">
        <span class="trust-label">Trusted By Global &amp; National Health Leaders</span>
        <div class="trust-line"></div>
      </div>

      <div class="carousel-contained-wrapper">
        <div class="carousel-track scroll-left">
          <div
            class="partner-card"
            v-for="partner in allPartners"
            :key="'partner-' + partner.name"
          >
            <div class="img-container">
              <img
                :src="partner.logo"
                :alt="partner.name"
                class="partner-img"
                loading="lazy"
              />
            </div>
            <p class="partner-name">{{ partner.name }}</p>
          </div>

          <div
            class="partner-card"
            v-for="partner in allPartners"
            :key="'partner-dup-' + partner.name"
            aria-hidden="true"
          >
            <div class="img-container">
              <img
                :src="partner.logo"
                :alt="partner.name"
                class="partner-img"
                loading="lazy"
              />
            </div>
            <p class="partner-name">{{ partner.name }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.partners-section {
  background-color: #ffffff;
  padding: 56px 0;
  border-bottom: 1px solid rgba(0, 71, 165, 0.08);
}

.partners-header {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 28px;
}

.trust-label {
  font-size: 0.78rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: #64748b;
  white-space: nowrap;
}

.trust-line {
  flex: 1;
  height: 1px;
  background: linear-gradient(90deg, rgba(0, 71, 165, 0.12), transparent);
}

.carousel-contained-wrapper {
  position: relative;
  width: 100%;
  overflow: hidden;
  padding: 12px 0;
}

.carousel-contained-wrapper::before,
.carousel-contained-wrapper::after {
  content: "";
  height: 100%;
  position: absolute;
  top: 0;
  width: 90px;
  z-index: 2;
  pointer-events: none;
}

.carousel-contained-wrapper::before {
  left: 0;
  background: linear-gradient(to right, #ffffff 15%, transparent 100%);
}

.carousel-contained-wrapper::after {
  right: 0;
  background: linear-gradient(to left, #ffffff 15%, transparent 100%);
}

.carousel-track {
  display: flex;
  width: max-content;
  gap: 20px;
}

.scroll-left {
  animation: marqueeLeft 40s linear infinite;
}

.carousel-contained-wrapper:hover .carousel-track {
  animation-play-state: paused;
}

@keyframes marqueeLeft {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-50% - 10px));
  }
}

.partner-card {
  background: #f8fafc;
  border: 1px solid rgba(0, 71, 165, 0.08);
  padding: 20px 22px;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  width: 220px;
  flex-shrink: 0;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.img-container {
  height: 52px;
  width: 100%;
  aspect-ratio: 16 / 5;
  display: flex;
  align-items: center;
  justify-content: center;
}

.partner-img {
  max-width: 85%;
  max-height: 100%;
  object-fit: contain;
  transition: transform 0.3s ease;
}

.partner-name {
  font-size: 0.82rem;
  font-weight: 600;
  color: #334155;
  margin: 0;
  text-align: center;
  line-height: 1.35;
}

.partner-card:hover {
  transform: translateY(-4px);
  background: #ffffff;
  border-color: rgba(0, 71, 165, 0.2);
  box-shadow: 0 12px 24px rgba(0, 45, 107, 0.06);
}

.partner-card:hover .partner-img {
  transform: scale(1.05);
}

@media (max-width: 768px) {
  .partners-section {
    padding: 40px 0;
  }
  .trust-label {
    white-space: normal;
  }
  .carousel-contained-wrapper::before,
  .carousel-contained-wrapper::after {
    width: 36px;
  }
  .partner-card {
    width: 185px;
    padding: 16px 14px;
  }
}
</style>
