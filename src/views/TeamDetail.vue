<template>
  <Navbar />

  <section id="team" class="TeamDetail">
    <div class="bg-glow-container" aria-hidden="true">
      <div class="blur-glow glow-1"></div>
      <div class="blur-glow glow-2"></div>
    </div>
    <div class="grid-overlay" aria-hidden="true"></div>

    <div class="container">
      <div class="back-nav">
        <router-link to="/#team" class="back-btn">
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
          <span>Back to Home</span>
        </router-link>
      </div>

      <div class="section-header">
        <span class="eyebrow-pill">Multidisciplinary Directory</span>
        <h1>Meet Our <span class="highlight">Clinical Research Team</span></h1>
        <p class="section-desc">
          A dedicated team of pediatricians, medical officers, and clinical
          research professionals committed to ICH-GCP excellence at Universitas
          Padjadjaran.
        </p>
      </div>

      <!-- PRINCIPAL INVESTIGATORS -->
      <div class="group-block">
        <div class="group-header">
          <h2>Principal Investigators &amp; Leadership</h2>
          <div class="group-line"></div>
        </div>

        <div class="leadership-grid">
          <article
            class="team-card leadership-card"
            v-for="(leader, idx) in leadershipTeam"
            :key="leader.name"
            :style="{ '--delay': idx * 0.08 + 's' }"
          >
            <div class="card-image-wrapper">
              <img
                :src="leader.image"
                :alt="leader.name"
                class="member-photo"
                loading="lazy"
              />
              <div class="role-pill pill-gold">{{ leader.role }}</div>
            </div>

            <div class="card-body">
              <h3 class="member-name">{{ leader.name }}</h3>
              <p class="member-sub">{{ leader.specialty }}</p>
              <div class="card-bottom">
                <div class="member-department">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                    <path d="M6 12v5c3 3 9 3 12 0v-5" />
                  </svg>
                  <span>Department of Child Health • FK UNPAD</span>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>

      <!-- CLINICAL OPERATIONS & MEDICAL TEAM -->
      <div class="group-block">
        <div class="group-header">
          <h2>Medical Officers &amp; Clinical Research Operations</h2>
          <div class="group-line"></div>
        </div>

        <div class="team-grid">
          <article
            class="team-card"
            v-for="(member, index) in coreTeam"
            :key="member.name"
            :style="{ '--delay': index * 0.06 + 's' }"
          >
            <div class="card-image-wrapper">
              <img
                :src="getImageUrl(member.imageName)"
                :alt="member.name"
                class="member-photo"
                loading="lazy"
                @error="setDefaultImage"
              />
              <div class="role-pill" v-if="member.role">
                {{ member.role }}
              </div>
            </div>

            <div class="card-body">
              <h3 class="member-name">{{ member.name }}</h3>
              <div class="card-bottom">
                <div class="member-department">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                    <path d="M6 12v5c3 3 9 3 12 0v-5" />
                  </svg>
                  <span>CRU-TKPS UNPAD</span>
                </div>
              </div>
            </div>
          </article>
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
import profKusImg from "../assets/images/ProfKus.png";
import drEddyImg from "../assets/images/DrEddy.png";
import drRodmanImg from "../assets/images/DrRodman.png";
import defaultAvatar from "../assets/team/default.png";

const images = import.meta.glob("../assets/images/team/*", {
  eager: true,
  import: "default",
});

const leadershipTeam = [
  {
    name: "Prof. Dr. Kusnandi Rusmil, dr., Sp.A(K)., MM",
    role: "Senior Advisor & Principal Investigator",
    specialty: "Growth & Development – Social Pediatrics Consultant",
    image: profKusImg,
  },
  {
    name: "Dr. Eddy Fadlyana, dr., Sp.A(K)., M.Kes",
    role: "Head of CRU & Principal Investigator",
    specialty: "Growth & Development – Social Pediatrics Consultant",
    image: drEddyImg,
  },
  {
    name: "Dr. Rodman Tarigan, dr., Sp.A(K)., M.Kes",
    role: "Co-Principal Investigator",
    specialty: "Growth & Development – Social Pediatrics Consultant",
    image: drRodmanImg,
  },
];

const coreTeam = ref([
  {
    name: "Astri Nadia Hidayat, dr.",
    role: "Medical Officer / Sub-Investigator",
    imageName: "dr.astri.png",
  },
  {
    name: "Farizah Nuraini Wulandari, dr.",
    role: "Medical Officer / Sub-Investigator",
    imageName: "dr.fariza.png",
  },
  {
    name: "Anisa Swediana Salamah, dr.",
    role: "Medical Officer / Sub-Investigator",
    imageName: "dr.swedis.jpeg",
  },
  {
    name: "Safira Atya Iskandar, dr.",
    role: "Medical Officer / Sub-Investigator",
    imageName: "dr.safira.png",
  },
  {
    name: "Ichlas Afif, dr.",
    role: "Medical Officer / Sub-Investigator",
    imageName: "dr.iclas.png",
  },
  {
    name: "Siti Oktaviani Mawaddah",
    role: "Clinical Research Coordinator & Operations",
    imageName: "bu_siti.png",
  },
  {
    name: "Novriyandi",
    role: "Clinical Research Operations",
    imageName: "pa_novri.png",
  },
  {
    name: "Khairunnisa Puspatriani",
    role: "Clinical Research Operations",
    imageName: "tehninis.png",
  },
  {
    name: "Keke Krishna",
    role: "Clinical Research Operations",
    imageName: "tehkekeu.png",
  },
  {
    name: "Alzan Najmi Ramadhan",
    role: "Data & Digital Systems Specialist",
    imageName: "alzan.png",
  },
]);

const getImageUrl = (fileName) => {
  return images[`../assets/images/team/${fileName}`] || defaultAvatar;
};

const setDefaultImage = (event) => {
  event.target.src = defaultAvatar;
};
</script>

<style scoped>
.TeamDetail {
  background: linear-gradient(135deg, #fafbff 0%, #f4f7fc 50%, #eff3fa 100%);
  padding: 120px 0 120px 0;
  position: relative;
  overflow: hidden;
  min-height: 100dvh;
}

.container {
  max-width: 1240px;
  margin: auto;
  padding: 0 24px;
  position: relative;
  z-index: 3;
}

.back-nav {
  margin-bottom: 24px;
}

.back-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 700;
  color: #0047a5;
  background: #ffffff;
  border: 1px solid rgba(0, 71, 165, 0.14);
  padding: 9px 18px;
  border-radius: 999px;
  transition: all 0.2s ease;
}

.back-btn:hover {
  background: #002d6b;
  color: #ffffff;
  border-color: #002d6b;
}

.bg-glow-container {
  position: absolute;
  inset: 0;
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
  background: radial-gradient(
    circle,
    rgba(0, 82, 204, 0.08) 0%,
    rgba(0, 71, 165, 0.01) 70%
  );
}

.glow-2 {
  top: 50%;
  left: -10%;
  width: 500px;
  height: 500px;
  background: radial-gradient(
    circle,
    rgba(255, 199, 0, 0.06) 0%,
    rgba(255, 199, 0, 0) 70%
  );
}

.grid-overlay {
  position: absolute;
  inset: 0;
  background-image: linear-gradient(
      rgba(0, 71, 165, 0.015) 1px,
      transparent 1px
    ),
    linear-gradient(90deg, rgba(0, 71, 165, 0.015) 1px, transparent 1px);
  background-size: 60px 60px;
  z-index: 1;
  pointer-events: none;
}

.section-header {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 56px;
}

.eyebrow-pill {
  font-size: 0.78rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #0047a5;
  background: rgba(0, 71, 165, 0.08);
  border: 1px solid rgba(0, 71, 165, 0.14);
  padding: 6px 16px;
  border-radius: 999px;
  margin-bottom: 14px;
}

h1 {
  font-size: clamp(2rem, 1.5rem + 1.8vw, 2.8rem);
  color: #002d6b;
  margin: 0 0 14px 0;
  font-weight: 800;
}

h1 .highlight {
  color: #0047a5;
}

.section-desc {
  font-size: 1.05rem;
  line-height: 1.65;
  color: #64748b;
  max-width: 620px;
  margin: 0;
}

.group-block {
  margin-bottom: 64px;
}

.group-block:last-child {
  margin-bottom: 0;
}

.group-header {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 28px;
}

.group-header h2 {
  font-size: 1.35rem;
  font-weight: 800;
  color: #002d6b;
  margin: 0;
  white-space: nowrap;
}

.group-line {
  flex: 1;
  height: 1px;
  background: linear-gradient(90deg, rgba(0, 71, 165, 0.16), transparent);
}

.leadership-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}

.team-card {
  position: relative;
  display: flex;
  flex-direction: column;
  background: #ffffff;
  border: 1px solid rgba(0, 71, 165, 0.08);
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 6px 24px rgba(0, 45, 107, 0.03);
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  animation: card-enter 0.55s cubic-bezier(0.16, 1, 0.3, 1) var(--delay, 0s)
    both;
}

@keyframes card-enter {
  from {
    opacity: 0;
    transform: translateY(24px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.team-card:hover {
  transform: translateY(-6px);
  border-color: rgba(0, 82, 204, 0.18);
  box-shadow: 0 20px 44px rgba(0, 45, 107, 0.09);
}

.card-image-wrapper {
  position: relative;
  width: 100%;
  aspect-ratio: 4 / 4.2;
  overflow: hidden;
  padding: 16px 16px 0;
  background: linear-gradient(135deg, #f0f4fa 0%, #e2eaf4 100%);
  display: flex;
  align-items: flex-end;
  justify-content: center;
}

.member-photo {
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center bottom;
  transition: transform 0.45s cubic-bezier(0.16, 1, 0.3, 1);
  display: block;
}

.team-card:hover .member-photo {
  transform: scale(1.04);
}

.role-pill {
  position: absolute;
  top: 16px;
  left: 16px;
  background: rgba(255, 255, 255, 0.94);
  backdrop-filter: blur(8px);
  color: #0047a5;
  font-size: 0.68rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  padding: 5px 12px;
  border-radius: 999px;
  border: 1px solid rgba(0, 82, 204, 0.1);
  z-index: 5;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.04);
}

.role-pill.pill-gold {
  background: #002d6b;
  color: #ffc700;
  border-color: #002d6b;
}

.card-body {
  padding: 20px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: space-between;
  gap: 10px;
  background: #ffffff;
}

.member-name {
  font-size: 1rem;
  color: #002d6b;
  font-weight: 700;
  margin: 0;
  line-height: 1.4;
}

.member-sub {
  font-size: 0.84rem;
  color: #475569;
  margin: 0;
  line-height: 1.45;
}

.card-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 8px;
  border-top: 1px solid #f1f5f9;
}

.member-department {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 0.75rem;
  color: #64748b;
  font-weight: 600;
}

.member-department svg {
  color: #0047a5;
  flex-shrink: 0;
}

@media (max-width: 1200px) {
  .team-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 992px) {
  .leadership-grid,
  .team-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
  .group-header h2 {
    white-space: normal;
  }
}

@media (max-width: 576px) {
  .leadership-grid,
  .team-grid {
    grid-template-columns: 1fr;
    max-width: 400px;
    margin: 0 auto;
  }
}
</style>
