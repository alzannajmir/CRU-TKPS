<template>
  <section id="vision-mission" class="vision-mission-section">
    <div class="container">

      <!-- Bagian Header Judul -->
      <div class="section-header">
        <span class="sub-title">Our Foundations</span>
        <h2>Vision & <span class="highlight">Mission</span></h2>
        <div class="accent-line"></div>
      </div>

      <!-- Grid Visi & Misi 2 Kolom -->
      <div class="grid">
        
        <!-- KARTU VISI -->
        <div class="card vision-card">
          <div class="card-icon-header">
            <!-- Ikon Visi / Target Target -->
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
            <h3>Vision</h3>
          </div>
          <p>
            Empowering a research team in their field of expertise
            and performing activities by standardized procedure
            (ICH-GCP) on clinical research to improve the nation's health.
          </p>
          <div class="card-bg-decor"></div>
        </div>

        <!-- KARTU MISI -->
        <div class="card mission-card">
          <div class="card-icon-header">
            <!-- Ikon Misi / Roket / Aksi -->
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 3.42-2 3.42s2.16-.5 3.42-2M15 9l-9 9M16 5l3 3M12 4l7 7-1.5 1.5M10.5 8.5l-4 4"/></svg>
            <h3>Mission</h3>
          </div>
          
          <ul class="custom-list">
            <li>
              <span class="list-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
              </span>
              <span class="list-text">Establish clinical trials in accordance with ICH-GCP.</span>
            </li>
            <li>
              <span class="list-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
              </span>
              <span class="list-text">Improve the quality of clinical research and human resources.</span>
            </li>
            <li>
              <span class="list-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
              </span>
              <span class="list-text">Build and strengthen collaboration with external partners.</span>
            </li>
          </ul>
          <div class="card-bg-decor"></div>
        </div>

      </div>

    </div>
  </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap');

.vision-mission-section {
  background-color: #F8FAFC; /* Abu-abu kontras ultra-light */
  padding: 120px 0;
  font-family: 'Plus Jakarta Sans', sans-serif;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
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
  color: #FFC700; /* Warna kuning dari logo */
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
  background-color: #0047A5;
  border-radius: 2px;
}

/* --- Pengaturan Grid 2 Kolom Sejajar --- */
.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
  align-items: stretch;
}

/* --- Gaya Kartu Visi Misi --- */
.card {
  background: #FFFFFF;
  border: 1px solid rgba(0, 71, 165, 0.04);
  border-radius: 24px;
  padding: 48px;
  box-shadow: 0 4px 24px rgba(0, 45, 107, 0.02);
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.card-icon-header {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 24px;
  color: #0047A5; /* Warna ikon biru utama */
  position: relative;
  z-index: 2;
}

h3 {
  font-size: 1.5rem;
  font-weight: 700;
  color: #002D6B;
  margin: 0;
}

p {
  font-size: 1.05rem;
  line-height: 1.7;
  color: #475569;
  margin: 0;
  position: relative;
  z-index: 2;
}

/* --- Kustomisasi List Misi --- */
.custom-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 18px;
  position: relative;
  z-index: 2;
}

.custom-list li {
  display: flex;
  align-items: flex-start;
  gap: 14px;
}

.list-icon {
  width: 24px;
  height: 24px;
  background-color: rgba(0, 71, 165, 0.06);
  color: #0047A5; /* Warna centang biru */
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  margin-top: 2px;
  transition: all 0.3s ease;
}

.list-text {
  font-size: 1.02rem;
  line-height: 1.5;
  color: #475569;
}

/* --- Elemen Dekorasi Latar Belakang Kartu --- */
.card-bg-decor {
  position: absolute;
  bottom: -40px;
  right: -40px;
  width: 140px;
  height: 140px;
  background: radial-gradient(circle, rgba(0, 71, 165, 0.03) 0%, transparent 70%);
  border-radius: 50%;
  transition: all 0.4s ease;
}

/* --- Efek Interaktif Hover Kartu --- */
.card:hover {
  transform: translateY(-6px);
  border-color: rgba(0, 71, 165, 0.1);
  box-shadow: 0 20px 35px rgba(0, 45, 107, 0.06);
}

.card:hover .card-bg-decor {
  transform: scale(1.3);
  background: radial-gradient(circle, rgba(255, 199, 0, 0.08) 0%, transparent 70%); /* Berubah gradasi kuning halus */
}

.card:hover .list-icon {
  background-color: #0047A5;
  color: #FFFFFF; /* Centang menyala putih saat kartu disorot */
}

/* --- Penataan Responsif (Tablet & Mobile) --- */
@media (max-width: 992px) {
  .grid {
    grid-template-columns: 1fr; /* Berubah menjadi tumpuk 1 kolom di tablet/HP */
    gap: 24px;
  }
  .card {
    padding: 36px;
  }
}

@media (max-width: 768px) {
  .vision-mission-section {
    padding: 80px 0;
  }
  h2 {
    font-size: 2rem;
  }
}
</style>