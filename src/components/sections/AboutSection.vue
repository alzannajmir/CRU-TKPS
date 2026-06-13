<template>
  <section id="about" class="about-section">
    <div class="container">
      
      <!-- Kolom Kiri: Judul & Sub-judul -->
      <div class="title-column">
        <span class="sub-heading">Who We Are</span>
        <h2>About <span class="highlight">CRU</span></h2>
        <div class="accent-line"></div>
      </div>

      <!-- Kolom Kanan: Konten Deskripsi -->
      <div class="content-column">
        <div class="text-card">
          <p>
            A dedicated clinical trial team of the <strong>Department of Child Health at Hasan Sadikin Hospital</strong>, 
            established to conduct high-quality research and clinical trials meticulously based on 
            <span class="badge">ICH-GCP standards</span>. The team members are
pediatricians with several
subspecialists of disciplines who
care with research at community
and clinical trials. The expectation
is to be a professional team to
answer the challenge of sciences
in the future.

          </p>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap');

.about-section {
  /* Menggunakan latar belakang abu-abu super ultra-light agar terpisah dari navbar putih */
  background-color: #F8FAFC; 
  padding: 120px 0;
  font-family: 'Plus Jakarta Sans', sans-serif;
}

.container {
  max-width: 1200px;
  margin: auto;
  padding: 0 24px;
  /* Membagi tampilan menjadi 2 kolom seimbang */
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 60px;
  align-items: center;
}

/* --- Gaya Kolom Kiri (Judul) --- */
.title-column {
  display: flex;
  flex-direction: column;
}

.sub-heading {
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  color: #FFC700; /* Kuning aksen dari logo */
  margin-bottom: 8px;
}

h2 {
  font-size: 2.8rem;
  color: #002D6B; /* Biru gelap dari logo agar senada */
  margin: 0 0 20px 0;
  font-weight: 700;
  line-height: 1.2;
}

/* Mengubah warna kata "CRU" dengan Biru Utama */
h2 .highlight {
  color: #0047A5;
}

/* Garis aksen di bawah judul */
.accent-line {
  width: 60px;
  height: 4px;
  background-color: #0047A5;
  border-radius: 2px;
}

/* --- Gaya Kolom Kanan (Konten) --- */
.content-column {
  position: relative;
}

/* Kotak teks dengan efek border kiri tebal penanda instansi medis */
.text-card {
  background: #FFFFFF;
  padding: 40px;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 45, 107, 0.04);
  border-left: 5px solid #0047A5; /* Aksen garis vertikal biru */
  position: relative;
}

p {
  font-size: 1.15rem;
  color: #4A5568; /* Abu-abu gelap elegan */
  line-height: 1.8;
  margin: 0;
  font-weight: 400;
}

p strong {
  color: #002D6B; /* Penekanan teks nama instansi */
  font-weight: 600;
}

/* Label ICH-GCP dibuat highlight kotak modern */
.badge {
  display: inline-block;
  background-color: rgba(0, 71, 165, 0.08);
  color: #0047A5;
  padding: 2px 10px;
  border-radius: 6px;
  font-weight: 600;
  font-size: 0.95rem;
}

/* --- Pengaturan Responsif (Mobile Friendly) --- */
@media (max-width: 992px) {
  .container {
    grid-template-columns: 1fr; /* Berubah menjadi 1 kolom bertumpuk di tablet/hp */
    gap: 40px;
  }
  
  .about-section {
    padding: 80px 0;
  }

  h2 {
    font-size: 2.3rem;
  }
  
  .text-card {
    padding: 30px;
  }
}
</style>