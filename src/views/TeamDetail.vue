<template>
    <Navbar />
  <section id="team" class="TeamDetail">
    <div class="bg-glow-container">
      <div class="blur-glow glow-1"></div>
      <div class="blur-glow glow-2"></div>
      <div class="blur-glow glow-3"></div>
    </div>
    <div class="grid-overlay"></div>
    <div class="animated-ring ring-1"></div>
    <div class="animated-ring ring-2"></div>

    <div class="container">
      <div class="section-header">
        <!--  <h2>Meet Our <span class="highlight">Core Team</span></h2> -->
        <!-- <p class="section-desc">
          A dedicated team of medical professionals committed to advancing clinical research and pediatric care.
        </p> -->
      </div>

      <div class="team-grid">
        <div
          class="team-card"
          v-for="(member, index) in coreTeam"
          :key="index"
          :style="{ '--delay': index * 0.08 + 's' }"
        >
          <div class="card-image-wrapper">
            <img
              :src="getImageUrl(member.imageName)"
              :alt="member.name"
              class="member-photo"
              @error="setDefaultImage"
            />
            <div class="image-overlay"></div>

            <div class="role-pill" v-if="member.role">
              {{ member.role }}
            </div>
          </div>

          <div class="card-body">
            <h3 class="member-name">{{ member.name }}</h3>
            <div class="card-bottom">
              <div class="member-department">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                  <path d="M6 12v5c3 3 9 3 12 0v-5"/>
                </svg>
                <span>CRU-TKPS UNPAD</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</section>
<Footer />
</template>

<script setup>
import Navbar from "../components/layout/Navbar.vue";
import Footer from "../components/layout/Footer.vue";
import { ref } from "vue";

const images = import.meta.glob("../assets/images/team/*", {
  eager: true,
  import: "default",
});

const coreTeam = ref([
  {
    name: "Siti Oktaviani Mawaddah",
    role: "Member of Clinical Research Unit",
    imageName: "bu_siti.png",
  },
  {
    name: "Novriyandi",
    role: "Member of Clinical Research Unit",
    imageName: "pa_novri.png",
  },
  {
    name: "Astri Nadia Hidayat, dr.",
    role: "Member of Clinical Research Unit",
    imageName: "dr.astri.png",
  },
  {
    name: "Khairunnisa Puspatriani",
    role: "Member of Clinical Research Unit",
    imageName: "tehninis.png",
  },
  {
    name: "Farizah Nuraini Wulandari, dr.",
    role: "Member of Clinical Research Unit",
    imageName: "dr.fariza.png",
  },
  {
    name: "Anisa Swediana Salamah, dr.",
    role: "Member of Clinical Research Unit",
    imageName: "dr.swedis.jpeg",
  },
  {
    name: "Keke krishna",
    role: "Member Clinical Research Unit",
    imageName: "tehkekeu.png",
  },
  {
    name: "Safira Atya Iskandar, dr.",
    role: "Member of Clinical Research Unit",
    imageName: "dr.safira.png",
  },
  {
    name: "Ichlas Afif, dr.",
    role: "Member of Clinical Research Unit",
    imageName: "dr.iclas.png",
  },
  {
    name: "Alzan Najmi Ramadhan",
    role: "Member of Clinical Research Unit",
    imageName: "alzan.png",
  },
]);

const getImageUrl = (fileName) => {
  return (
    images[`../assets/images/team/${fileName}`] ||
    images["../assets/images/team/default.png"]
  );
};

const setDefaultImage = (event) => {
  event.target.src = images["../assets/images/team/default.png"];
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap");

.TeamDetail {
  background: linear-gradient(135deg, #FAFBFF 0%, #F4F7FC 50%, #EFF3FA 100%);
  padding: 0 0 140px 0;
  font-family: "Plus Jakarta Sans", sans-serif;
  position: relative;
  overflow: hidden;
  min-height: 100vh;
}

.container {
  max-width: 1240px;
  margin: auto;
  padding: 0 24px;
  position: relative;
  z-index: 3;
}

.bg-glow-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  pointer-events: none;
}

.blur-glow {
  position: absolute;
  border-radius: 50%;
  filter: blur(120px);
  opacity: 0.45;
}

.glow-1 {
  top: -5%;
  right: -8%;
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(0, 82, 204, 0.08) 0%, rgba(0, 71, 165, 0.01) 70%);
}

.glow-2 {
  top: 50%;
  left: -10%;
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(255, 199, 0, 0.05) 0%, rgba(255, 199, 0, 0) 70%);
}

.glow-3 {
  bottom: -5%;
  right: 20%;
  width: 450px;
  height: 450px;
  background: radial-gradient(circle, rgba(16, 185, 129, 0.04) 0%, rgba(16, 185, 129, 0) 70%);
}

.grid-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image:
    linear-gradient(rgba(0, 71, 165, 0.012) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 71, 165, 0.012) 1px, transparent 1px);
  background-size: 60px 60px;
  z-index: 1;
  pointer-events: none;
}

.animated-ring {
  position: absolute;
  border: 2px dashed rgba(0, 71, 165, 0.04);
  border-radius: 50%;
  z-index: 1;
  pointer-events: none;
  animation: ring-spin 40s linear infinite;
}

.ring-1 {
  width: 320px;
  height: 320px;
  bottom: 8%;
  right: -120px;
}

.ring-2 {
  width: 200px;
  height: 200px;
  top: 15%;
  left: -60px;
  animation-direction: reverse;
  animation-duration: 30s;
}

@keyframes ring-spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.section-header {
  margin-top: 100px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 64px;
}

h2 {
  font-size: 3rem;
  color: #002D6B;
  margin: 0 0 16px 0;
  font-weight: 800;
  letter-spacing: -1px;
}

h2 .highlight {
  color: #0052CC;
  position: relative;
  z-index: 1;
  padding: 0 4px;
}

h2 .highlight::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 6px;
  width: 100%;
  height: 10px;
  background-color: rgba(255, 199, 0, 0.3);
  z-index: -1;
  border-radius: 3px;
}

.section-desc {
  font-size: 1.1rem;
  line-height: 1.6;
  color: #64748B;
  max-width: 560px;
  margin: 0;
  font-weight: 500;
}

/* ======================================
   TEAM GRID
   ====================================== */
.team-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}

.team-card {
  position: relative;
  display: flex;
  flex-direction: column;
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.8);
  border-radius: 20px;
  overflow: hidden;
  transition: all 0.45s cubic-bezier(0.16, 1, 0.3, 1);
  animation: card-enter 0.6s cubic-bezier(0.16, 1, 0.3, 1) var(--delay, 0s) both;
}

@keyframes card-enter {
  from {
    opacity: 0;
    transform: translateY(30px) scale(0.97);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.team-card:hover {
  transform: translateY(-8px);
  border-color: rgba(0, 82, 204, 0.15);
  box-shadow:
    0 20px 50px rgba(0, 45, 107, 0.1),
    0 1px 3px rgba(0, 45, 107, 0.04);
}

/* ======================================
   CARD IMAGE (PENYESUAIAN ZOOM FOTO)
   ====================================== */
.card-image-wrapper {
  position: relative;
  width: 100%;
  height: 320px;
  overflow: hidden;
  /* Memberikan padding dalam agar foto otomatis mengecil/menjauh */
  padding: 16px; 
  /* Menggunakan warna background yang bersih & profesional medis */
  background: linear-gradient(135deg, #F0F4FA 0%, #E2EAF4 100%);
  display: flex;
  align-items: center;
  justify-content: center;
}

.member-photo {
  width: 100%;
  height: 100%;
  /* Mengubah ke 'contain' agar seluruh proporsi foto masuk tanpa terpotong dekat wajah */
  object-fit: contain; 
  object-position: center bottom;
  border-radius: 12px; /* Memberikan sudut membulat manis pada foto di dalamnya */
  transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
  display: block;
}

.team-card:hover .member-photo {
  transform: scale(1.04); /* Zoom halus saat di-hover */
}

/* Gradient overlay on bottom of image */
.image-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 40%;
  background: linear-gradient(to top, rgba(0, 45, 107, 0.03) 0%, transparent 100%);
  pointer-events: none;
  transition: opacity 0.4s ease;
}

/* Role pill badge on image */
.role-pill {
  position: absolute;
  top: 24px;
  left: 24px;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  color: #0052CC;
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.8px;
  padding: 5px 14px;
  border-radius: 50px;
  border: 1px solid rgba(0, 82, 204, 0.08);
  z-index: 5;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.team-card:hover .role-pill {
  background: #0052CC;
  color: #FFFFFF;
  border-color: #0052CC;
}

/* ======================================
   CARD BODY / INFO
   ====================================== */
.card-body {
  padding: 20px 20px 22px 20px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: space-between;
  gap: 14px;
  background: #ffffff;
}

.member-name {
  font-size: 0.95rem;
  color: #002D6B;
  font-weight: 700;
  margin: 0;
  line-height: 1.45;
  letter-spacing: -0.2px;
}

.card-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.member-department {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 0.75rem;
  color: #94A3B8;
  font-weight: 500;
}

.member-department svg {
  color: #0052CC;
  flex-shrink: 0;
}

/* ======================================
   RESPONSIVE
   ====================================== */
@media (max-width: 1200px) {
  .team-grid {
    grid-template-columns: repeat(3, 1fr);
  }

  .card-image-wrapper {
    height: 280px;
  }
}

@media (max-width: 992px) {
  .team-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  h2 {
    font-size: 2.4rem;
  }

  .card-image-wrapper {
    height: 300px;
  }
}

@media (max-width: 768px) {
  .TeamDetail {
    padding-bottom: 100px;
  }

  .section-header {
    margin-bottom: 40px;
  }

  h2 {
    font-size: 2rem;
    letter-spacing: -0.5px;
  }

  .section-desc {
    font-size: 1rem;
  }
}

@media (max-width: 576px) {
  .team-grid {
    grid-template-columns: 1fr;
    gap: 20px;
    max-width: 400px;
    margin: 0 auto;
  }

  .card-image-wrapper {
    height: 340px;
  }
}
</style>