<template>
  <nav class="navbar">
    <div class="container">

      <!-- Pembungkus Dua Logo -->
      <div class="logo-wrapper">
        <!-- Logo 1 (Contoh: File gambar logo TKPS) -->
        <img src="/src/assets/images/LogUnpad.png" alt="Logo Institusi" class="nav-logo" />
        
        <!-- Garis pembatas vertikal (disesuaikan menjadi abu-abu halus) -->
        <div class="logo-divider"></div>
        
        <!-- Logo 2 (Contoh: Logo FK UNPAD / RSUP Dr. Hasan Sadikin) -->
        <img src="/src/assets/images/LogCRU.png" alt="Logo CRU TKPS" class="nav-logo" />
        
        <!-- Teks Nama Unit dengan penyesuaian warna gelap -->
        <div class="logo-text">
          CRU <span class="highlight">TKPS</span>
        </div>
      </div>

      <!-- Menu Navigasi -->
      <ul>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#research">Research</a></li>
        <li><a href="#team">Team</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

    </div>
  </nav>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap');

.navbar {
  position: sticky;
  top: 0;
  /* Mengubah background menjadi Putih Bersih */
  background: #FFFFFF; 
  z-index: 1000;
  /* Mengubah shadow agar lebih lembut di latar belakang putih */
  box-shadow: 0 4px 20px rgba(0, 45, 107, 0.08);
  font-family: 'Plus Jakarta Sans', sans-serif;
  border-bottom: 1px solid rgba(0, 71, 165, 0.05);
}

.container {
  max-width: 1200px;
  margin: auto;
  height: 80px; 
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;
}

.logo-wrapper {
  display: flex;
  align-items: center;
  gap: 14px; 
}

.nav-logo {
  height: 48px; 
  width: auto;
  object-fit: contain;
}

/* Mengubah warna pembatas menjadi abu-abu kebiruan halus */
.logo-divider {
  width: 1.5px;
  height: 32px;
  background-color: rgba(0, 71, 165, 0.15);
}

/* Mengubah warna teks utama menjadi Biru Gelap logo agar kontras di latar putih */
.logo-text {
  font-size: 20px;
  font-weight: 700;
  color: #002D6B; 
  letter-spacing: 0.5px;
  margin-left: 4px;
}

/* Tetap mempertahankan warna kuning logo untuk highlight */
.logo-text .highlight {
  color: #FFC700; 
  /* Memberikan text-shadow tipis agar warna kuning lebih tegas di background putih */
  text-shadow: 0.5px 0.5px 0px rgba(0, 0, 0, 0.1);
}

ul {
  display: flex;
  gap: 36px;
  list-style: none;
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
  /* Mengubah warna teks menu menjadi abu-abu gelap kebiruan yang teduh */
  color: #4A5568; 
  font-weight: 600; /* Sedikit ditebalkan agar lebih terbaca */
  font-size: 15px;
  transition: all 0.25s ease-in-out;
  position: relative;
  padding: 6px 0;
}

/* Hover effect: teks berubah menjadi warna Biru Utama logo saat didekati */
a:hover {
  color: #0047A5;
  transform: translateY(-1px);
}

/* Animasi underline menggunakan warna Biru Utama logo agar serasi */
a::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 3px;
  background: #0047A5; 
  border-radius: 2px;
  transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

a:hover::after {
  width: 100%;
}

@media (max-width: 768px) {
  .container {
    height: auto;
    padding: 15px 20px;
    flex-direction: column;
    gap: 15px;
  }
  .logo-wrapper {
    justify-content: center;
  }
  .nav-logo {
    height: 40px; 
  }
}
</style>