<template>
  <section class="hero">
    <!-- Elemen dekoratif latar belakang terinspirasi dari bagian bawah logo -->
    <div class="bg-pattern-top"></div>
    <div class="bg-pattern-bottom"></div>

    <div class="content">
      <span class="sub-title">Clinical Research Unit</span>

      <h1>
        Growth & Development <br />
        <span class="highlight">Social Pediatrics</span>
      </h1>

      <p class="description">
        Faculty of Medicine Universitas Padjadjaran <br />
        & Dr. Hasan Sadikin Hospital Bandung
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
  height: calc(100vh - 75px); /* Menyesuaikan tinggi navbar agar pas 1 layar penuh */
  min-height: 600px;
  display: flex;
  align-items: center;
  /* Gradasi biru dalam yang elegan sesuai tone warna logo */
  background: linear-gradient(135deg, #002D6B 0%, #0047A5 100%);
  color: #FFFFFF;
  font-family: 'Plus Jakarta Sans', sans-serif;
  overflow: hidden;
}

/* Pola abstrak dekoratif halus di latar belakang */
.bg-pattern-bottom {
  position: absolute;
  bottom: -10%;
  right: -5%;
  width: 500px;
  height: 500px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(163, 203, 255, 0.15) 0%, rgba(0,0,0,0) 70%);
  filter: blur(40px);
  pointer-events: none;
}

.bg-pattern-top {
  position: absolute;
  top: -10%;
  left: -5%;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(255, 199, 0, 0.08) 0%, rgba(0,0,0,0) 70%);
  filter: blur(50px);
  pointer-events: none;
}

.content {
  max-width: 1200px;
  width: 100%;
  margin: auto;
  padding: 0 24px;
  z-index: 2; /* Berada di atas elemen dekoratif background */
}

.sub-title {
  display: inline-block;
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: #FFC700; /* Warna kuning dari simbol logo */
  margin-bottom: 16px;
  background: rgba(255, 199, 0, 0.1);
  padding: 6px 16px;
  border-radius: 50px;
  border: 1px solid rgba(255, 199, 0, 0.2);
}

h1 {
  font-size: 3.5rem;
  font-weight: 700;
  line-height: 1.2;
  max-width: 800px;
  margin: 0 0 24px 0;
  letter-spacing: -1px;
}

/* Warna penegas untuk Social Pediatrics */
.highlight {
  color: #FFFFFF;
  background: linear-gradient(120deg, transparent 0%, transparent 40%, rgba(255, 199, 0, 0.15) 40%);
}

.description {
  font-size: 1.25rem;
  line-height: 1.6;
  max-width: 650px;
  color: rgba(255, 255, 255, 0.85);
  margin: 0 0 40px 0;
  font-weight: 400;
}

.btn-container {
  display: flex;
}

button.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  background: #FFC700; /* Warna kuning cerah dari logo */
  color: #002D6B; /* Teks biru gelap agar sangat kontras dan terbaca */
  border: none;
  padding: 16px 32px;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 4px 14px rgba(255, 199, 0, 0.3);
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

/* Gaya Hover untuk tombol */
button.btn-primary:hover {
  background: #E6B200; /* Kuning sedikit lebih gelap saat di-hover */
  transform: translateY(-3px); /* Tombol sedikit terangkat */
  box-shadow: 0 8px 24px rgba(255, 199, 0, 0.5);
}

/* Transisi ikon panah di dalam tombol saat hover */
button.btn-primary svg {
  transition: transform 0.3s ease;
}

button.btn-primary:hover svg {
  transform: translateX(4px);
}

/* Responsif untuk layar mobile/tablet */
@media (max-width: 768px) {
  h1 {
    font-size: 2.5rem;
  }
  .description {
    font-size: 1.1rem;
  }
}
</style>