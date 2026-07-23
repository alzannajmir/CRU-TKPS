<template>
  <section id="services" class="services-section">
    <div class="container">

      <!-- Bagian Judul Utama -->
      <div class="section-header">
        <span class="sub-title">What We Do</span>
        <h2>Our Core <span class="highlight">Services</span></h2>
        <div class="accent-line"></div>
      </div>

      <!-- Grid Kartu Layanan -->
      <div class="grid">

        <!-- Kartu 1 -->
        <div class="card">
          <div class="icon-box">
            <!-- Ikon Stetoskop / Pertumbuhan Anak -->
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4.8 16.2A8 8 0 1 0 19.2 7.8"/><path d="M12.1 12H12"/><path d="M12 2v4"/><path d="M12 18v4"/><path d="M4.9 19.1l2.8-2.8"/><path d="M16.3 7.7l2.8-2.8"/></svg>
          </div>
          <h3>Research in Child Growth & Development</h3>
          <p>Comprehensive studies focusing on early detection, pediatric monitoring, and optimal developmental milestones.</p>
        </div>

        <!-- Kartu 2 -->
        <div class="card">
          <div class="icon-box">
            <!-- Ikon Komunitas / Masyarakat -->
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
          </div>
          <h3>Community-Based Research</h3>
          <p>Field-driven healthcare research integrated with social pediatrics to drive impactful public policies.</p>
        </div>

        <!-- Kartu 3 -->
        <div class="card">
          <div class="icon-box">
            <!-- Ikon Vaksin / Jarum Suntik Medis -->
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="2" x2="22" y2="6"/><line x1="7.5" y1="10.5" x2="13.5" y2="16.5"/><polyline points="15 11.5 19.5 16 14 21.5 9.5 17 5 21.5 2.5 19 7 14.5 2.5 10 8 4.5 12.5 9"/></svg>
          </div>
          <h3>Vaccine Clinical Trials</h3>
          <p>High-standard clinical assessment and product evaluations adhering strictly to rigorous ICH-GCP protocols.</p>
        </div>

      </div>

    </div>
  </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap');

.services-section {
  background-color: #F8FAFC; /* Latar belakang soft agar kontras dengan section journey yang putih */
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
  color: #FFC700; /* Kuning dari logo */
  margin-bottom: 8px;
}

h2 {
  font-size: 2.5rem;
  color: #002D6B; /* Biru gelap dari logo */
  margin: 0 0 16px 0;
  font-weight: 700;
}

h2 .highlight {
  color: #0047A5; /* Biru terang dari logo */
}

.accent-line {
  width: 50px;
  height: 4px;
  background-color: #0047A5;
  border-radius: 2px;
}

/* --- Pengaturan Grid & Kartu --- */
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px; /* Diperlebar agar jarak bernafas kartu lebih lega */
}

.card {
  background: #FFFFFF;
  padding: 40px 32px;
  border-radius: 20px;
  box-shadow: 0 4px 20px rgba(0, 45, 107, 0.03);
  border: 1px solid rgba(0, 71, 165, 0.04);
  display: flex;
  flex-direction: column;
  transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
  position: relative;
  overflow: hidden;
}

/* Elemen Dekoratif Lingkaran Ikon */
.icon-box {
  width: 56px;
  height: 56px;
  background-color: rgba(0, 71, 165, 0.06);
  color: #0047A5; /* Biru Utama */
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
  transition: all 0.3s ease;
}

.card h3 {
  font-size: 1.25rem;
  color: #002D6B;
  margin: 0 0 12px 0;
  font-weight: 700;
  line-height: 1.4;
}

.card p {
  font-size: 0.95rem;
  color: #64748B; /* Abu-abu sekunder yang ramah dibaca */
  line-height: 1.6;
  margin: 0 0 24px 0;
  flex-grow: 1; /* Memastikan posisi tombol link di bawah selalu sejajar */
}

/* Link Tautan Internal Kartu */
.learn-more {
  font-size: 0.9rem;
  font-weight: 600;
  color: #0047A5;
  display: inline-flex;
  align-items: center;
  gap: 6px;
}

.learn-more .arrow {
  transition: transform 0.2s ease;
}

/* --- Efek Interaktif Hover Kartu --- */
.card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 35px rgba(0, 45, 107, 0.08);
  border-color: rgba(0, 71, 165, 0.1);
}

/* Mengubah warna background ikon saat kartu di-hover */
.card:hover .icon-box {
  background-color: #0047A5;
  color: #FFFFFF;
}

/* Animasi anak panah bergeser sedikit ke kanan saat di-hover */
.card:hover .learn-more .arrow {
  transform: translateX(4px);
}

/* Garis atas dekoratif kecil penanda aktif yang muncul saat hover */
.card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background-color: #FFC700; /* Aksen Kuning */
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.card:hover::before {
  transform: scaleX(1);
}

/* --- Responsif Mobile & Tablet --- */
@media (max-width: 992px) {
  .grid {
    grid-template-columns: repeat(2, 1fr); /* Berubah jadi 2 kolom di tablet */
    gap: 24px;
  }
}

@media (max-width: 768px) {
  .grid {
    grid-template-columns: 1fr; /* Berubah jadi 1 kolom di ponsel */
  }
  .services-section {
    padding: 80px 0;
  }
  h2 {
    font-size: 2rem;
  }
}
</style>