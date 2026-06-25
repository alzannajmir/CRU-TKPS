<template>
  <navbar />
  
  <section id="team" class="TeamDetail">
    <div class="glow-shape shape-glow-blue"></div>
    <div class="animated-ring-shape"></div>

    <div class="container">
      
      <div class="back-nav">
        <a href="/" class="btn-back">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
          <span>Back to Home</span>
        </a>
      </div>

      <div class="section-header">
        <span class="sub-title">Our Experts</span>
        <h2>Meet Our <span class="highlight">Core Team</span></h2>
        <div class="accent-line"></div>
      </div>

      <div class="team-grid">
        <div 
          class="team-card" 
          v-for="(member, index) in coreTeam" 
          :key="index"
        >
          <div class="member-image-container">
            <img 
              :src="getImageUrl(member.imageName)" 
              :alt="member.name"
              class="member-photo"
              @error="setDefaultImage"
            />
            
            <button class="share-btn" aria-label="Share profile">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg>
            </button>
          </div>

          <div class="member-info-box">
            <h3 class="member-name">{{ member.name }}</h3>
            <p class="member-role">{{ member.role }}</p>
          </div>
        </div>
      </div>

    </div>
  </section>
  
  <Footer />
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import navbar from '../components/layout/Navbar.vue'
import Footer from '../components/layout/Footer.vue'

const coreTeam = ref([
  { name: "Dr. Eddy Fadlyana, dr., Sp.P(K)., M.Kes", role: "Advisor", imageName: "DrEddy.png" },
  { name: "Prof. Dr. Kusnandi Rusmil, dr., Sp.A(K)., MM", role: "Advisor", imageName: "ProfKus.png" },
  { name: "Dr. Rodman Tarigan, dr., Sp.P(K)., M.Kes", role: "Responsible/Chairman", imageName: "DrRodman.png" },
  { name: "Dr. Nama Anggota Baru 1, dr., Sp.A", role: "Co-Chairman", imageName: "default.png" },
  { name: "Nama Anggota Baru 2, S.Kom", role: "Technical Lead", imageName: "default.png" },
  { name: "Nama Anggota Baru 3, MBA", role: "Treasurer", imageName: "default.png" },
])

const getImageUrl = (name) => {
  return new URL(`/src/assets/team/${name}`, import.meta.url).href
}

const setDefaultImage = (event) => {
  event.target.src = new URL('/src/assets/team/default.png', import.meta.url).href
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap');

.TeamDetail { 
  background-color: #FFFFFF; 
  padding: 60px 0 120px 0; 
  font-family: 'Plus Jakarta Sans', sans-serif; 
  position: relative; 
  overflow: hidden; 
}

.container { 
  max-width: 1200px; 
  margin: auto; 
  padding: 0 24px; 
  position: relative; 
  z-index: 3; 
}

/* Layout Flexbox untuk menyejajarkan kedua tombol */
.back-nav { 
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 32px;
  margin-top: 50px; 
}

/* Garis pembatas vertikal tipis antara kedua tombol */
.nav-separator {
  color: #CBD5E1;
  font-weight: 300;
}

.btn-back { 
  display: inline-flex; 
  align-items: center; 
  gap: 8px; 
  color: #0047A5; 
  text-decoration: none; 
  font-weight: 700; 
  transition: color 0.2s, transform 0.2s; 
}

.btn-back:hover { 
  color: #002D6B;
  transform: translateX(-4px); 
}

/* Latar Belakang Dekoratif */
.glow-shape { position: absolute; pointer-events: none; border-radius: 50%; z-index: 1; }
.shape-glow-blue { width: 600px; height: 600px; background: radial-gradient(circle, rgba(0, 71, 165, 0.03) 0%, rgba(0, 71, 165, 0) 70%); top: 10%; left: -200px; filter: blur(60px); }
.animated-ring-shape { position: absolute; width: 260px; height: 260px; border: 2px dashed rgba(0, 71, 165, 0.04); border-radius: 50%; bottom: 5%; right: -100px; z-index: 1; pointer-events: none; }

/* Header Section */
.section-header { text-align: center; display: flex; flex-direction: column; align-items: center; margin-bottom: 80px; }
.sub-title { font-size: 14px; font-weight: 700; text-transform: uppercase; letter-spacing: 1.5px; color: #0047A5; margin-bottom: 8px; }
h2 { font-size: 2.5rem; color: #002D6B; margin: 0 0 16px 0; font-weight: 700; }
h2 .highlight { color: #0047A5; }
.accent-line { width: 50px; height: 4px; background-color: #FFC700; border-radius: 2px; }

/* Grid System Sesuai Gambar: 4 Kolom di Desktop */
.team-grid { 
  display: grid; 
  grid-template-columns: repeat(4, 1fr); 
  gap: 40px 24px; 
}

/* Wrapper Kartu */
.team-card {
  position: relative;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}

/* Kontainer Gambar */
.member-image-container {
  position: relative;
  width: 100%;
  aspect-ratio: 1 / 1.15; 
  background-color: #ECEFF1;
  overflow: visible; 
}

.member-photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: grayscale(100%); 
  transition: all 0.4s ease;
}

/* Tombol Share */
.share-btn {
  position: absolute;
  bottom: -16px;
  right: 20px;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #C19A82; 
  color: #FFFFFF;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 5;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease, background-color 0.3s ease;
}

.share-btn:hover {
  transform: scale(1.1);
  background-color: #A37F68;
}

/* Kotak Info Putih */
.member-info-box {
  background-color: #FFFFFF;
  padding: 20px 16px;
  margin-top: -30px; 
  margin-left: 12px;
  margin-right: 12px;
  position: relative;
  z-index: 4;
  box-shadow: 0 10px 30px rgba(0, 45, 107, 0.06);
  border-radius: 4px; 
  border-left: 3px solid #0047A5; 
  flex-grow: 1;
}

.member-name {
  font-size: 0.98rem;
  color: #002D6B;
  font-weight: 700;
  margin: 0 0 6px 0;
  line-height: 1.4;
}

.member-role {
  font-size: 0.8rem;
  color: #64748B;
  font-weight: 500;
  margin: 0;
  text-transform: capitalize;
}

/* Efek Hover Lembut */
.team-card:hover .member-photo {
  filter: grayscale(0%); 
  transform: scale(1.02);
}

.team-card:hover .member-info-box {
  box-shadow: 0 15px 35px rgba(0, 45, 107, 0.12);
}

/* Breakpoints Responsive */
@media (max-width: 1200px) {
  .team-grid { grid-template-columns: repeat(3, 1fr); gap: 32px 20px; }
}

@media (max-width: 992px) {
  .team-grid { grid-template-columns: repeat(2, 1fr); gap: 32px 20px; }
}

@media (max-width: 576px) {
  .TeamDetail { padding: 40px 0 80px 0; }
  h2 { font-size: 2rem; }
  .team-grid { grid-template-columns: 1fr; gap: 40px; }
  .member-info-box { margin-left: 20px; margin-right: 20px; }
}
</style>