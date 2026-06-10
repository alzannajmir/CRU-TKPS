<script setup>
const projects = [
  {
    title: "COVID-19 Vaccine Trial",
    description: "First COVID-19 vaccine study conducted in Indonesia."
  },
  {
    title: "Adult Vaccine Studies",
    description: "Clinical trial research on vaccine efficacy and safety."
  },
  {
    title: "Child Vaccine Studies",
    description: "Research supporting pediatric immunization programs."
  },
  {
    title: "Growth & Development Research",
    description: "More than 30 research projects since 1995."
  }
]
</script>

<template>
  <section id="research" class="research-section">
    <div class="container">

      <!-- Bagian Header Judul -->
      <div class="section-header">
        <span class="sub-title">Our Portfolio</span>
        <h2>Research <span class="highlight">Projects</span></h2>
        <div class="accent-line"></div>
      </div>

      <!-- Grid Riset Berulang Menggunakan v-for -->
      <div class="grid">
        <div
          class="card"
          v-for="project in projects"
          :key="project.title"
        >
          <!-- Elemen nomor indeks estetis di pojok kanan atas kartu -->
          <div class="card-decor"></div>
          
          <h3>{{ project.title }}</h3>
          <p>{{ project.description }}</p>
          
          <div class="card-footer">
            <span class="view-project">View Publications</span>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap');

.research-section {
  background-color: #FFFFFF; /* Putih kontras bersih untuk memisahkan dari section layanan */
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
  background-color: #FFC700;
  border-radius: 2px;
}

/* --- Pengaturan Grid 4 Kolom --- */
.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 4 Kolom sejajar agar padat dan informatif */
  gap: 24px;
}

/* --- Gaya Kartu Riset --- */
.card {
  background: #F8FAFC; /* Latar kartu abu-abu lembut agar pop-up di atas background putih */
  padding: 32px 24px;
  border-radius: 16px;
  border: 1px solid rgba(0, 71, 165, 0.03);
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
}

/* Dekorasi pojok lingkaran kecil yang akan membesar saat hover */
.card-decor {
  position: absolute;
  top: -20px;
  right: -20px;
  width: 50px;
  height: 50px;
  background-color: rgba(0, 71, 165, 0.04);
  border-radius: 50%;
  transition: all 0.4s ease;
}

.card h3 {
  font-size: 1.15rem;
  color: #002D6B;
  margin: 0 0 12px 0;
  font-weight: 700;
  line-height: 1.4;
  z-index: 2;
}

.card p {
  font-size: 0.9rem;
  color: #4A5568;
  line-height: 1.6;
  margin: 0 0 20px 0;
  flex-grow: 1; /* Mendorong footer kartu agar selalu rata bawah */
  z-index: 2;
}

.card-footer {
  border-top: 1px solid rgba(0, 71, 165, 0.06);
  padding-top: 14px;
  z-index: 2;
}

.view-project {
  font-size: 0.85rem;
  font-weight: 600;
  color: #0047A5;
  transition: color 0.2s ease;
}

/* --- Efek Interaktif Hover Kartu --- */
.card:hover {
  transform: translateY(-6px);
  background: #FFFFFF; /* Mengubah background menjadi putih bersih saat disorot */
  border-color: rgba(0, 71, 165, 0.12);
  box-shadow: 0 16px 32px rgba(0, 45, 107, 0.06);
}

/* Efek lingkaran dekorasi membesar dan berubah menjadi warna emas */
.card:hover .card-decor {
  width: 120px;
  height: 120px;
  background-color: rgba(255, 199, 0, 0.12);
}

.card:hover .view-project {
  color: #002D6B;
  text-decoration: underline;
}

/* --- Penataan Responsif (Tablet & Mobile) --- */
@media (max-width: 1024px) {
  .grid {
    grid-template-columns: repeat(2, 1fr); /* 2 Kolom pada layar tablet */
    gap: 20px;
  }
}

@media (max-width: 640px) {
  .grid {
    grid-template-columns: 1fr; /* 1 Kolom penuh pada layar ponsel */
  }
  .research-section {
    padding: 80px 0;
  }
  h2 {
    font-size: 2rem;
  }
}
</style>