<script setup>
import profCissy from "../../assets/images/profCissy.png";
import profKusImg from "../../assets/images/profKus.jpeg";
import drEddyImg from "../../assets/images/DrEddy.jpeg";
import drRodmanImg from "../../assets/images/DrRodman.jpeg";

const featuredTeam = [
  {
    name:"Prof. Cissy B. Kartasasmita, dr., Sp.A(K).,MSc.,PhD.",
    specialty: "Growth & Development – Social Pediatrics Consultant",
    image: profCissy,
  },
  {
    name: "Prof. Dr. Kusnandi Rusmil, dr., Sp.A(K)., MM",
    specialty: "Growth & Development – Social Pediatrics Consultant",
    image: profKusImg,
  },
  {
    name: "Dr. Eddy Fadlyana, dr., Sp.A(K)., M.Kes",
    specialty: "Growth & Development – Social Pediatrics Consultant",
    image: drEddyImg,
  },
  {
    name: "Dr. Rodman Tarigan, dr., Sp.A(K)., M.Kes",
    specialty: "Growth & Development – Social Pediatrics Consultant",
    image: drRodmanImg,
  },
];
</script>

<template>
  <section id="team" class="team-section">
    <div class="container">
      <div class="section-header">
        <span class="eyebrow-pill">Clinical Leadership</span>
        <h2>Principal <span class="highlight">Investigators</span></h2>
        <p class="section-subtitle">
          Led by senior pediatric subspecialists and certified clinical trial
          investigators at Faculty of Medicine Universitas Padjadjaran.
        </p>
        <div class="accent-line"></div>
      </div>

      <div class="team-grid">
        <article
          class="team-card"
          v-for="member in featuredTeam"
          :key="member.name"
        >
          <div class="avatar-wrapper">
            <div class="avatar-image-box">
              <img
                :src="member.image"
                :alt="member.name"
                class="member-img"
                loading="lazy"
              />
            </div>
            <div class="avatar-orbit-ring" aria-hidden="true"></div>
          </div>

          <div class="member-info">
            <h3>{{ member.name }}</h3>
            <p class="member-specialty">{{ member.specialty }}</p>
          </div>
        </article>
      </div>

      <!-- <div class="view-more-container">
        <router-link to="/team" class="btn-view-team">
          <span>Meet All CRU-TKPS Team Members</span>
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
        </router-link>
      </div> -->
    </div>
  </section>
</template>

<style scoped>
.team-section {
  background-color: #f8fafc;
  padding: 110px 0;
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

h2 {
  font-size: clamp(1.9rem, 1.4rem + 1.5vw, 2.6rem);
  color: #002d6b;
  margin: 0 0 12px 0;
  font-weight: 800;
}

h2 .highlight {
  color: #0047a5;
}

.section-subtitle {
  font-size: 1.05rem;
  color: #64748b;
  max-width: 620px;
  margin: 0 0 18px 0;
}

.accent-line {
  width: 52px;
  height: 4px;
  background-color: #ffc700;
  border-radius: 2px;
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
}

.team-card {
  background: #ffffff;
  border: 1px solid rgba(0, 71, 165, 0.08);
  padding: 44px 28px;
  border-radius: 24px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 6px 24px rgba(0, 45, 107, 0.03);
  transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
}

.avatar-wrapper {
  position: relative;
  width: 148px;
  height: 148px;
  aspect-ratio: 1 / 1;
  margin-bottom: 24px;
}

.avatar-image-box {
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%);
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 2;
  border: 4px solid #ffffff;
  box-shadow: 0 10px 24px rgba(0, 45, 107, 0.08);
  transition: all 0.3s ease;
}

.member-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top center;
  transition: transform 0.35s ease;
}

.avatar-orbit-ring {
  position: absolute;
  inset: -6px;
  border: 2px dashed rgba(0, 71, 165, 0.2);
  border-radius: 50%;
  z-index: 1;
  transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}

.member-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.member-info h3 {
  font-size: 1.18rem;
  color: #002d6b;
  margin: 0;
  font-weight: 700;
  line-height: 1.4;
}

.member-specialty {
  font-size: 0.88rem;
  color: #64748b;
  margin: 0;
  line-height: 1.5;
}

.team-card:hover {
  transform: translateY(-6px);
  border-color: rgba(0, 71, 165, 0.18);
  box-shadow: 0 22px 44px rgba(0, 45, 107, 0.08);
}

.team-card:hover .member-img {
  transform: scale(1.06);
}

.team-card:hover .avatar-image-box {
  border-color: #0047a5;
}

.team-card:hover .avatar-orbit-ring {
  border-color: #ffc700;
  border-style: solid;
  transform: scale(1.03);
}

.team-card:hover .role-badge {
  background-color: #002d6b;
  color: #ffc700;
}

.view-more-container {
  text-align: center;
  margin-top: 48px;
}

.btn-view-team {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background-color: #002d6b;
  color: #ffffff;
  padding: 14px 30px;
  border-radius: 999px;
  font-size: 0.94rem;
  font-weight: 700;
  text-decoration: none;
  box-shadow: 0 10px 24px rgba(0, 45, 107, 0.16);
  transition: all 0.3s ease;
}

.btn-view-team svg {
  transition: transform 0.3s ease;
}

.btn-view-team:hover {
  background-color: #0047a5;
  box-shadow: 0 14px 28px rgba(0, 71, 165, 0.24);
  transform: translateY(-2px);
}

.btn-view-team:hover svg {
  transform: translateX(4px);
}

@media (max-width: 992px) {
  .team-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }
}

@media (max-width: 768px) {
  .team-section {
    padding: 80px 0;
  }
  .team-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  .team-card {
    padding: 36px 24px;
  }
}
</style>
