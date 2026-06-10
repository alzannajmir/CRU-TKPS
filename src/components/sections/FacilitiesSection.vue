<script setup>
const facilities = [
  {
    title: "Research Refrigerator",
    desc: "Temperature controlled vaccine storage."
  },
  {
    title: "WiFi Monitoring Thermometer",
    desc: "Real time monitoring and notification system."
  },
  {
    title: "Accredited Laboratory Support",
    desc: "RSHS, Bio Farma, Prodia and FK Unpad."
  }
]
</script>

<template>
  <section id="facilities" class="facilities-section">
    <div class="container">

      <!-- Bagian Header Judul -->
      <div class="section-header">
        <span class="sub-title">Infrastructure</span>
        <h2>Our <span class="highlight">Facilities</span></h2>
        <div class="accent-line"></div>
      </div>

      <!-- Grid Fasilitas -->
      <div class="grid">
        <div
          class="card"
          v-for="(item, index) in facilities"
          :key="item.title"
        >
          <!-- Angka Urut Transparan (01, 02, 03) sebagai elemen dekorasi sudut -->
          <div class="card-number">0{{ index + 1 }}</div>
          
          <div class="card-body">
            <h3>{{ item.title }}</h3>
            <p>{{ item.desc }}</p>
          </div>
          
          <!-- Garis indikator bawah yang menyala saat di-hover -->
          <div class="card-border-glow"></div>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap');

.facilities-section {
  background-color: #F8FAFC; /* Latar belakang soft penyeimbang seksi sebelumnya */
  padding: 120px 0;
  font-family: 'Plus Jakarta Sans', sans-serif;
}

.container {
  max-width: 1200px; /* Disamakan nilainya dengan seksi lain agar sejajar tegak lurus */
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
  color: #FFC700; /* Kuning emas khas logo */
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

/* --- Pengaturan Grid Otomatis --- */
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 28px;
}

/* --- Gaya Kartu Fasilitas Modern --- */
.card {
  background: #FFFFFF;
  border: 1px solid rgba(0, 71, 165, 0.05);
  padding: 40px 32px;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 45, 107, 0.02);
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

/* Dekorasi teks angka transparan di latar belakang */
.card-number {
  position: absolute;
  right: 16px;
  top: -10px;
  font-size: 5.5rem;
  font-weight: 800;
  color: rgba(0, 71, 165, 0.03); /* Sangat samar transparan */
  user-select: none;
  transition: color 0.3s ease, transform 0.4s ease;
}

.card-body {
  position: relative;
  z-index: 2;
}

.card h3 {
  margin: 0 0 12px 0;
  font-weight: 700;
  font-size: 1.2rem;
  color: #002D6B;
  line-height: 1.4;
}

.card p {
  margin: 0;
  font-size: 0.95rem;
  color: #64748B;
  line-height: 1.6;
}

/* Garis bawah dekoratif tersembunyi yang akan muncul saat di-hover */
.card-border-glow {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background-color: #0047A5;
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

/* --- Efek Interaktif Hover Kartu --- */
.card:hover {
  transform: translateY(-6px);
  box-shadow: 0 20px 35px rgba(0, 45, 107, 0.06);
  border-color: rgba(0, 71, 165, 0.1);
}

/* Saat kartu di-hover, angka berubah warna menjadi Kuning Medis logo dan bergeser sedikit */
.card:hover .card-number {
  color: rgba(255, 199, 0, 0.12);
  transform: translateY(5px);
}

.card:hover .card-border-glow {
  transform: scaleX(1);
}

/* --- Penataan Responsif --- */
@media (max-width: 768px) {
  .facilities-section {
    padding: 80px 0;
  }
  h2 {
    font-size: 2rem;
  }
  .card {
    padding: 32px 24px;
  }
}
</style>