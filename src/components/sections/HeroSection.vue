<template>
  <section class="hero">
    <div class="glow-bg-container">
      <div class="blur-glow glow-1"></div>
      <div class="blur-glow glow-2"></div>
      <div class="blur-glow glow-3"></div>
    </div>

    <div class="grid-overlay"></div>

    <div class="content">
      <div class="badge-wrapper">
        <span class="sub-title">
          <span class="pulse-ring"></span>
          Clinical Research Unit
        </span>
      </div>

      <h1>
        Growth & Development <br />
        <span class="highlight">Social Pediatrics</span>
      </h1>

      <p class="description">
        Faculty of Medicine Universitas Padjadjaran
      </p>

      <div class="btn-container">
        <button class="btn-primary">
          <span>Explore Research</span>
          <div class="icon-circle">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </div>
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

.hero {
  position: relative;
  height: 100vh; 
  min-height: 700px;
  display: flex;
  align-items: center;
  color: #002D6B; 
  font-family: 'Plus Jakarta Sans', sans-serif;
  overflow: hidden;
  padding-top: 80px; 
  /* Gradasi dasar super bersih menyeimbangkan pendaran warna */
  background: linear-gradient(135deg, #FFFFFF 0%, #F8FAFC 50%, #F1F5F9 100%);
}

/* --- GLOWING BACKGROUND EFFECT --- */
.glow-bg-container {
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
  filter: blur(100px);
  opacity: 0.5;
}

/* Pendaran Biru Utama di Sisi Kanan Atas */
.glow-1 {
  top: -10%;
  right: -5%;
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(0, 82, 204, 0.12) 0%, rgba(0, 71, 165, 0.02) 70%);
}

/* Pendaran Kuning Emas Lembut di Bagian Tengah */
.glow-2 {
  top: 40%;
  right: 15%;
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(255, 199, 0, 0.06) 0%, rgba(255, 199, 0, 0) 70%);
}

/* Pendaran Teal/Cyan untuk Kesan Labs/Medis di Kanan Bawah */
.glow-3 {
  bottom: -10%;
  right: -10%;
  width: 550px;
  height: 550px;
  background: radial-gradient(circle, rgba(16, 185, 129, 0.05) 0%, rgba(16, 185, 129, 0) 70%);
}

/* --- GRID OVERLAY (Efek Pola Garis Riset Modern) --- */
.grid-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    linear-gradient(rgba(0, 71, 165, 0.015) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 71, 165, 0.015) 1px, transparent 1px);
  background-size: 50px 50px;
  z-index: 1;
  pointer-events: none;
}

/* --- KONTEN & TIPOGRAFI --- */
.content {
  max-width: 1200px;
  width: 100%;
  margin: auto;
  padding: 0 24px;
  position: relative;
  z-index: 2; 
}

.badge-wrapper {
  margin-bottom: 28px;
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
}

/* Efek lingkaran berkedip/live pada badge */
.pulse-ring {
  width: 6px;
  height: 6px;
  background-color: #0052CC;
  border-radius: 50%;
  position: relative;
}
.pulse-ring::after {
  content: '';
  position: absolute;
  top: 0; left: 0; width: 100%; height: 100%;
  border-radius: 50%;
  background-color: #0052CC;
  animation: badge-pulse 2s infinite ease-out;
}

h1 {
  font-size: 4rem;
  font-weight: 800;
  line-height: 1.15;
  max-width: 850px;
  margin: 0 0 24px 0;
  letter-spacing: -1.5px;
  color: #002D6B; 
}

.highlight {
  color: #0052CC;
  position: relative;
  z-index: 1;
  padding: 0 4px;
}

/* Underline bergaya marker mewah di bawah teks highlight */
.highlight::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 8px;
  width: 100%;
  height: 12px;
  background-color: rgba(255, 199, 0, 0.35);
  z-index: -1;
  border-radius: 4px;
}

.description {
  font-size: 1.25rem;
  line-height: 1.6;
  max-width: 650px;
  color: #4A5568;
  margin: 0 0 48px 0;
  font-weight: 500;
}

/* --- BUTTON DENGAN EFEK ELEGAN --- */
button.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 16px;
  background: #002D6B; 
  color: #FFFFFF; 
  border: none;
  padding: 14px 14px 14px 32px; /* Padding kiri lebih besar untuk teks */
  border-radius: 100px; /* Fully Rounded Pill */
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 10px 25px rgba(0, 45, 107, 0.12);
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.icon-circle {
  width: 44px;
  height: 44px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

button.btn-primary:hover {
  background: #0052CC;
  transform: translateY(-4px);
  box-shadow: 0 20px 35px rgba(0, 82, 204, 0.2);
}

button.btn-primary:hover .icon-circle {
  background-color: #FFFFFF;
  color: #002D6B;
  transform: rotate(-45deg); /* Rotasi panah estetis saat di-hover */
}

/* --- ANIMASI KEYFRAMES --- */
@keyframes badge-pulse {
  0% { transform: scale(1); opacity: 1; }
  100% { transform: scale(3); opacity: 0; }
}

/* --- PENATAAN RESPONSIF --- */
@media (max-width: 992px) {
  h1 { font-size: 3.2rem; letter-spacing: -1px; }
  .blur-glow { width: 400px; height: 400px; }
}

@media (max-width: 768px) {
  .hero { height: auto; padding: 160px 0 120px 0; }
  h1 { font-size: 2.5rem; letter-spacing: -0.5px; }
  .description { font-size: 1.1rem; margin-bottom: 36px; }
  button.btn-primary { padding: 12px 12px 12px 28px; font-size: 15px; }
  .icon-circle { width: 38px; height: 38px; }
}
</style> 