<template>
  <navbar />

  <section id="team" class="TeamDetail">
    <!-- Decorative background elements -->
    <div class="bg-glow-container">
      <div class="blur-glow glow-1"></div>
      <div class="blur-glow glow-2"></div>
      <div class="blur-glow glow-3"></div>
    </div>
    <div class="grid-overlay"></div>
    <div class="animated-ring ring-1"></div>
    <div class="animated-ring ring-2"></div>

    <div class="container">
      <!-- Back navigation -->
      <div class="back-nav">
        <router-link to="/" class="btn-back">
          <div class="btn-back-icon">
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
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
          </div>
          <span>Back to Home</span>
        </router-link>
      </div>

      <!-- Section header -->
      <div class="section-header">
        <span class="sub-title">
          <span class="pulse-dot"></span>
          Our Experts
        </span>
        <h2>Meet Our <span class="highlight">Core Team</span></h2>
        <p class="section-desc">
          A dedicated team of medical professionals committed to advancing clinical research and pediatric care.
        </p>
      </div>

      <!-- Team grid -->
      <div class="team-grid">
        <div
          class="team-card"
          v-for="(member, index) in coreTeam"
          :key="index"
          :style="{ '--delay': index * 0.08 + 's' }"
        >
          <!-- Photo area -->
          <div class="card-image-wrapper">
            <img
              :src="getImageUrl(member.imageName)"
              :alt="member.name"
              class="member-photo"
              @error="setDefaultImage"
            />
            <div class="image-overlay"></div>

            <!-- Role badge on image -->
            <div class="role-pill" v-if="member.role">
              {{ member.role }}
            </div>
          </div>

          <!-- Info area -->
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
import { ref } from "vue";
import navbar from "../components/layout/Navbar.vue";
import Footer from "../components/layout/Footer.vue";

const images = import.meta.glob("../assets/images/team/*", {
  eager: true,
  import: "default",
});

const coreTeam = ref([
  {
    name: "Dr. Eddy Fadlyana, dr., Sp.P(K)., M.Kes",
    role: "Advisor",
    imageName: "DrEddy.png",
  },
  {
    name: "Prof. Dr. Kusnandi Rusmil, dr., Sp.A(K)., MM",
    role: "Advisor",
    imageName: "ProfKus.png",
  },
  {
    name: "Dr. Rodman Tarigan, dr., Sp.P(K)., M.Kes",
    role: "Responsible / Chairman",
    imageName: "dr.rodman.jpeg",
  },
  {
    name: "dr. Astri",
    role: "Co-Chairman",
    imageName: "dr.astri.jpeg",
  },
  {
    name: "dr. Fariza",
    role: "Researcher",
    imageName: "dr.fariza.jpeg",
  },
  {
    name: "dr. Iclas",
    role: "Researcher",
    imageName: "dr.iclas.jpeg",
  },
  {
    name: "dr. Safira",
    role: "Researcher",
    imageName: "dr.safira.jpeg",
  },
  {
    name: "Teh Kekeu",
    role: "Administration",
    imageName: "tehkekeu.jpeg",
  },
  {
    name: "Teh Ninis",
    role: "",
    imageName: "tehninis.jpeg",
  },
  {
    name: "Alzan",
    role: "",
    imageName: "alzan.jpeg",
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

/* ======================================
   PAGE LAYOUT
   ====================================== */
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

/* ======================================
   BACKGROUND DECORATIONS
   ====================================== */
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

/* ======================================
   BACK NAVIGATION
   ====================================== */
.back-nav {
  display: flex;
  align-items: center;
  padding-top: 110px;
  margin-bottom: 48px;
}

.btn-back {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  color: #0052CC;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.9rem;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.btn-back-icon {
  width: 36px;
  height: 36px;
  background: rgba(0, 82, 204, 0.06);
  border: 1px solid rgba(0, 82, 204, 0.08);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.btn-back:hover {
  color: #002D6B;
}

.btn-back:hover .btn-back-icon {
  background: #0052CC;
  border-color: #0052CC;
  color: #FFFFFF;
  transform: translateX(-4px);
}

/* ======================================
   SECTION HEADER
   ====================================== */
.section-header {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 64px;
}

.sub-title {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-size: 13px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  color: #0052CC;
  background: rgba(0, 82, 204, 0.06);
  border: 1px solid rgba(0, 82, 204, 0.08);
  padding: 8px 20px;
  border-radius: 50px;
  margin-bottom: 20px;
}

.pulse-dot {
  width: 6px;
  height: 6px;
  background-color: #0052CC;
  border-radius: 50%;
  position: relative;
}

.pulse-dot::after {
  content: '';
  position: absolute;
  top: 0; left: 0; width: 100%; height: 100%;
  border-radius: 50%;
  background-color: #0052CC;
  animation: dot-pulse 2s infinite ease-out;
}

@keyframes dot-pulse {
  0% { transform: scale(1); opacity: 1; }
  100% { transform: scale(3); opacity: 0; }
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

/* ======================================
   TEAM CARD — Premium Glassmorphism
   ====================================== */
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
   CARD IMAGE
   ====================================== */
.card-image-wrapper {
  position: relative;
  width: 100%;
  height: 320px;
  overflow: hidden;
  background: linear-gradient(135deg, #E8EEF6 0%, #D6DEE9 100%);
}

.member-photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
  transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
  display: block;
}

.team-card:hover .member-photo {
  transform: scale(1.06);
}

/* Gradient overlay on bottom of image */
.image-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50%;
  background: linear-gradient(to top, rgba(0, 30, 70, 0.4) 0%, transparent 100%);
  pointer-events: none;
  transition: opacity 0.4s ease;
}

.team-card:hover .image-overlay {
  opacity: 0.7;
}

/* Role pill badge on image */
.role-pill {
  position: absolute;
  top: 16px;
  left: 16px;
  background: rgba(255, 255, 255, 0.9);
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
  color: #CBD5E1;
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

  .back-nav {
    padding-top: 90px;
    margin-bottom: 36px;
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

  .sub-title {
    font-size: 11px;
  }
}
</style>
