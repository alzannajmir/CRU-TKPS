<template>
  <section class="hero">
    <div class="bg-glow"></div>

    <!-- <div class="hero-shape shape-top-left">
      <img src="/src/assets/images/Shape.png" alt="Dekorasi Latar Belakang" />
    </div>
    
    <div class="hero-shape shape-bottom-right">
      <img src="/src/assets/images/Shape.png" alt="Dekorasi Latar Belakang" />
    </div> -->

    <div class="content">
      <span class="sub-title">Clinical Research Unit</span>

      <h1>
        Growth & Development <br />
        <span class="highlight">Social Pediatrics</span>
      </h1>

      <p class="description">
        Faculty of Medicine Universitas Padjadjaran <br />
      </p>

      <div class="btn-container">
        <button class="btn-primary">
          Explore Research
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap');

.hero {
  position: relative;
  height: 100vh; 
  min-height: 650px;
  display: flex;
  align-items: center;
  color: #002D6B; 
  font-family: 'Plus Jakarta Sans', sans-serif;
  overflow: hidden;
  padding-top: 80px; 

  /* --- PENGATURAN BACKGROUND BARU --- */
  /* Silakan ganti path URL di bawah dengan gambar bertema medis/fasilitas lab Anda */
  background-image: 
    linear-gradient(to right, #FFFFFF 35%, rgba(255, 255, 255, 0.85) 60%, rgba(255, 255, 255, 0.4) 100%),
    url('/src/assets/images/hero-bg.jpeg'); 
  background-size: cover;
  background-position: center right;
  background-repeat: no-repeat;
}

/* Pendaran warna radial latar belakang (dibuat sedikit lebih kontras agar tetap terlihat) */
.bg-glow {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 900px;
  height: 900px;
  background: radial-gradient(circle, rgba(0, 71, 165, 0.04) 0%, rgba(255, 199, 0, 0.02) 60%, transparent 100%);
  z-index: 1;
  pointer-events: none;
}

/* --- PENGATURAN STRUKTUR SHAPE --- */
.hero-shape {
  position: absolute;
  pointer-events: none;
  z-index: 1;
  user-select: none;
}

.hero-shape img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  opacity: 0.12; 
  filter: blur(1px); 
}

.shape-top-left {
  top: -120px;
  left: -120px;
  width: 450px;
  height: 450px;
  transform: rotate(-15deg); 
}

.shape-bottom-right {
  bottom: -150px;
  right: -150px;
  width: 550px;
  height: 550px;
  transform: rotate(25deg);
}

/* --- Konten dan Tipografi --- */
.content {
  max-width: 1200px;
  width: 100%;
  margin: auto;
  padding: 0 24px;
  position: relative;
  z-index: 2; 
}

.sub-title {
  display: inline-block;
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  color: #0052CC; 
  margin-bottom: 20px;
  background: rgba(0, 82, 204, 0.08); /* Sedikit ditingkatkan agar lebih terbaca di atas background */
  padding: 8px 20px;
  border-radius: 50px;
}

h1 {
  font-size: 3.8rem;
  font-weight: 800;
  line-height: 1.15;
  max-width: 850px;
  margin: 0 0 24px 0;
  letter-spacing: -1.5px;
  color: #002D6B; 
}

.highlight {
  color: #0052CC;
  background: linear-gradient(120deg, rgba(255, 199, 0, 0.3) 0%, rgba(255, 199, 0, 0.3) 100%);
  padding: 0 8px;
  border-radius: 4px;
}

.description {
  font-size: 1.3rem;
  line-height: 1.6;
  max-width: 650px;
  color: #2D3748; /* Dibuat sedikit lebih gelap dari #4A5568 agar ekstra kontras */
  margin: 0 0 44px 0;
  font-weight: 600; /* Ditingkatkan ke 600 agar tipografi kokoh di atas gambar */
}

.btn-container {
  display: flex;
}

button.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  background: #002D6B; 
  color: #FFFFFF; 
  border: none;
  padding: 18px 36px;
  border-radius: 14px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 6px 20px rgba(0, 45, 107, 0.15);
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

button.btn-primary:hover {
  background: #0047A5;
  transform: translateY(-3px);
  box-shadow: 0 12px 28px rgba(0, 45, 107, 0.25);
}

button.btn-primary svg {
  transition: transform 0.3s ease;
}

button.btn-primary:hover svg {
  transform: translateX(4px);
}

/* --- Penataan Responsif --- */
@media (max-width: 992px) {
  .hero {
    /* Mengubah arah gradien menjadi vertikal saat di tablet/HP agar teks di atas aman */
    background-image: 
      linear-gradient(to bottom, #FFFFFF 45%, rgba(255, 255, 255, 0.9) 70%, rgba(255, 255, 255, 0.6) 100%),
      url('/src/assets/images/hero-bg.jpeg');
  }
  h1 {
    font-size: 3rem;
  }
  .shape-top-left {
    width: 350px;
    height: 350px;
  }
  .shape-bottom-right {
    width: 400px;
    height: 400px;
  }
}

@media (max-width: 768px) {
  .hero {
    height: auto;
    padding: 140px 0 100px 0;
  }
  h1 {
    font-size: 2.3rem;
    letter-spacing: -0.5px;
  }
  .description {
    font-size: 1.1rem;
  }
  .hero-shape img {
    opacity: 0.04;
  }
}
</style>