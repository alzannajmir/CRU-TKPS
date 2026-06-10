<script setup>
import team from '../../data/team'
</script>

<template>
  <section id="team" class="team-section">
    <div class="container">

      <!-- Bagian Header Judul -->
      <div class="section-header">
        <span class="sub-title">Our Experts</span>
        <h2>Meet The <span class="highlight">Team</span></h2>
        <div class="accent-line"></div>
      </div>

      <!-- Grid Anggota Tim -->
      <div class="grid">
        <div
          class="card"
          v-for="member in team"
          :key="member.name"
        >
          <!-- Lingkaran Foto Profil / Avatar Placeholder -->
          <div class="avatar-container">
            <div class="avatar-placeholder">
              <!-- Ikon User Medis Abstrak jika foto belum dimuat -->
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            </div>
            <!-- Cincin dekoratif luar yang berputar/menyala saat di-hover -->
            <div class="avatar-ring"></div>
          </div>

          <!-- Informasi Anggota -->
          <div class="member-info">
            <h3>{{ member.name }}</h3>
            <p>{{ member.role }}</p>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap');

.team-section {
  background-color: #FFFFFF; /* Putih kontras bersih untuk memisahkan dari seksi fasilitas */
  padding: 120px 0;
  font-family: 'Plus Jakarta Sans', sans-serif;
}

.container {
  max-width: 1200px;
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
  color: #FFC700; /* Warna kuning emas dari logo */
  margin-bottom: 8px;
}

h2 {
  font-size: 2.5rem;
  color: #002D6B; /* Biru gelap dari logo */
  margin: 0 0 16px 0;
  font-weight: 700;
}

h2 .highlight {
  color: #0047A5; /* Biru utama dari lingkaran luar logo */
}

.accent-line {
  width: 50px;
  height: 4px;
  background-color: #FFC700;
  border-radius: 2px;
}

/* --- Pengaturan Grid Tim --- */
.grid {
  display: grid;
  /* Menggunakan auto-fit agar layout fleksibel baik tim berisi 3, 4, atau lebih anggota */
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 32px;
}

/* --- Gaya Kartu Profil Modern --- */
.card {
  background: #F8FAFC; /* Abu-abu ultra-soft agar kartu terlihat pop-up */
  border: 1px solid rgba(0, 71, 165, 0.03);
  padding: 40px 24px;
  border-radius: 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

/* --- Wadah Komponen Avatar --- */
.avatar-container {
  position: relative;
  width: 100px;
  height: 100px;
  margin-bottom: 24px;
}

.avatar-placeholder {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 71, 165, 0.06);
  color: #0047A5;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 2;
  transition: all 0.3s ease;
}

/* Cincin dekoratif luar */
.avatar-ring {
  position: absolute;
  top: -4px;
  left: -4px;
  right: -4px;
  bottom: -4px;
  border: 2px dashed rgba(0, 71, 165, 0.2);
  border-radius: 50%;
  transition: all 0.4s ease;
}

/* --- Teks Informasi --- */
.member-info h3 {
  font-size: 1.2rem;
  color: #002D6B;
  margin: 0 0 8px 0;
  font-weight: 700;
  line-height: 1.4;
}

.member-info p {
  font-size: 0.9rem;
  color: #64748B; /* Abu-abu sekunder */
  font-weight: 500;
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

/* --- Efek Interaktif Hover Kartu --- */
.card:hover {
  transform: translateY(-8px);
  background: #FFFFFF;
  border-color: rgba(0, 71, 165, 0.1);
  box-shadow: 0 20px 35px rgba(0, 45, 107, 0.06);
}

/* Saat di-hover, avatar placeholder berubah warna menjadi biru solid */
.card:hover .avatar-placeholder {
  background-color: #0047A5;
  color: #FFFFFF;
}

/* Cincin luar berubah warna menjadi kuning emas logo dan sedikit membesar */
.card:hover .avatar-ring {
  border-color: #FFC700;
  transform: scale(1.05) rotate(45deg);
}
</style>