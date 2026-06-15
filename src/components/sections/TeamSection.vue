<script setup>
// Fungsi pembantu otomatis mengarah ke folder src/assets/images/
const getImageUrl = (fileName) => {
  if (!fileName) return ''
  return new URL(`/src/assets/images/${fileName}`, import.meta.url).href
}

// Data Anggota Tim - Sekarang jauh lebih bersih, cukup tulis nama file gambarnya saja
const coreTeam = [
  { 
    name: "Dr. Eddy Fadlyana, dr., Sp.P(K)., M.Kes", 
    role: "Advisor", 
    imageName: "DrEddy.png"
  },
  { 
    name: "Prof. Dr. Kusnandi Rusmil, dr., Sp.A(K)., MM", 
    role: "Advisor", 
    imageName: "ProfKus.png" 
  },
  { 
    name: "Dr. Rodman Tarigan, dr., Sp.P(K)., M.Kes", 
    role: "Responsible/Chariman", 
    imageName: "DrRodman.png"
  }
]
</script>

<template>
  <section id="team" class="team-section">
    <div class="container">

      <div class="section-header">
        <span class="sub-title">Our Experts</span>
        <h2>Meet The <span class="highlight">Team</span></h2>
        <div class="accent-line"></div>
      </div>

      <div class="team-grid">
        <div
          class="team-card"
          v-for="member in coreTeam"
          :key="member.name"
        >
          <div class="avatar-wrapper">
            <div class="avatar-image-box">
              <img 
                v-if="member.imageName" 
                :src="getImageUrl(member.imageName)" 
                :alt="member.name" 
                class="member-img" 
              />
              <div v-else class="avatar-fallback">
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              </div>
            </div>
            <div class="avatar-orbit-ring"></div>
          </div>

          <div class="member-info">
            <h3>{{ member.name }}</h3>
            <div class="role-badge">{{ member.role }}</div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap');

.team-section {
  background-color: #FFFFFF; 
  padding: 120px 0;
  font-family: 'Plus Jakarta Sans', sans-serif;
}

.container {
  max-width: 1140px; 
  margin: auto;
  padding: 0 24px;
}

/* --- Header Gaya Makro --- */
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
  background-color: #FFC700; 
  border-radius: 2px;
}

/* --- STRUKTUR GRID 3 KOLOM SIMETRIS --- */
.team-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
}

/* --- Gaya Kartu Profil Premium --- */
.team-card {
  background: #F8FAFC; 
  border: 1px solid rgba(0, 71, 165, 0.04);
  padding: 50px 32px; 
  border-radius: 24px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 4px 20px rgba(0, 45, 107, 0.01);
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

/* --- Wadah Komponen Avatar Bulat --- */
.avatar-wrapper {
  position: relative;
  width: 130px; 
  height: 130px;
  margin-bottom: 28px;
}

.avatar-image-box {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 71, 165, 0.05);
  border-radius: 50%;
  overflow: hidden; 
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 2;
  border: 4px solid #FFFFFF; 
  box-shadow: 0 8px 16px rgba(0, 45, 107, 0.04);
  transition: all 0.3s ease;
}

.member-img {
  width: 100%;
  height: 100%;
  object-fit: cover; 
  transition: transform 0.3s ease;
}

.avatar-fallback {
  color: #0047A5;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Cincin Orbit Luar Jalur Putar */
.avatar-orbit-ring {
  position: absolute;
  top: -6px;
  left: -6px;
  right: -6px;
  bottom: -6px;
  border: 2px dashed rgba(0, 71, 165, 0.15);
  border-radius: 50%;
  z-index: 1;
  transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}

/* --- Teks Informasi --- */
.member-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
}

.member-info h3 {
  font-size: 1.25rem;
  color: #002D6B;
  margin: 0;
  font-weight: 700;
  line-height: 1.4;
}

/* Badge Peran (Role) Berbentuk Pill Mewah */
.role-badge {
  font-size: 0.78rem;
  color: #0047A5;
  background-color: rgba(0, 71, 165, 0.06);
  font-weight: 700;
  padding: 6px 16px;
  border-radius: 100px;
  text-transform: uppercase;
  letter-spacing: 0.8px;
  display: inline-block;
  transition: all 0.3s ease;
}

/* --- EFEK HOVER INTERAKTIF --- */
.team-card:hover {
  transform: translateY(-8px);
  background: #FFFFFF;
  border-color: rgba(0, 71, 165, 0.12);
  box-shadow: 0 24px 48px rgba(0, 45, 107, 0.08);
}

.team-card:hover .member-img {
  transform: scale(1.08);
}

.team-card:hover .avatar-image-box {
  border-color: #0047A5;
}

.team-card:hover .avatar-orbit-ring {
  border-color: #FFC700;
  border-style: solid; 
  transform: scale(1.04) rotate(90deg);
}

.team-card:hover .role-badge {
  background-color: #0047A5;
  color: #FFFFFF;
}

/* --- RESPONSIF SCREEN LAYOUT --- */
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
  h2 {
    font-size: 2rem;
  }
  .team-grid {
    grid-template-columns: 1fr; 
    gap: 20px;
  }
  .team-card {
    padding: 40px 24px;
  }
}
</style>