<template>
  <section id="about" class="about-section">
    <div class="shape shape-1"></div>
    <div class="shape shape-2"></div>
    <div class="shape shape-3"></div>

    <div class="hero-shape shape-top-left">
      <img src="/src/assets/images/Shape.png" alt="Dekorasi Latar Belakang" />
    </div>

    <div class="container">
      <div class="title-column">
        <!-- Logo dipindahkan ke dalam wrapper ini -->
        <div class="title-content-wrapper">
          <span class="sub-heading">Who We Are</span>
          <h2>About <span class="highlight">CRU</span></h2>
          <div class="accent-line"></div>

          <!-- Wrapper Logo Latar Belakang -->
          <div class="title-logo-bg">
            <img
              src="../../assets/images/LOGOCRU.png"
              alt="Logo CRU Background"
              class="logo-watermark"
            />
          </div>
        </div>
      </div>

      <div class="content-column">
        <div class="text-card">
          <p>
            A dedicated clinical trial team of the
            <strong>Department of Child Health Faculty of Medicine Universitas Padjadjaran </strong>, established to conduct
            high-quality research and clinical trials meticulously based on
            <span class="badge">ICH-GCP standards</span>. The team members are
            pediatricians with several subspecialists of disciplines who care
            with research at community and clinical trials. The expectation is
            to be a professional team to answer the challenge of sciences in the
            future.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap");

.about-section {
  background-color: #f8fafc;
  padding: 120px 0;
  font-family: "Plus Jakarta Sans", sans-serif;
  position: relative;
  overflow: hidden;
}

.container {
  max-width: 1200px;
  margin: auto;
  padding: 0 24px; 
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 40px;
  align-items: center;
  position: relative;
  z-index: 2;
}

/* ======================================================= */
/* --- GAYA KONTEN & STRUKTUR JUDUL ---------------------- */
/* ======================================================= */

.title-column {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.title-content-wrapper {
  max-width: 320px;
  width: 100%;
  position: relative; /* Menjadi jangkar untuk posisi logo di belakangnya */
}

.sub-heading {
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  color: #ffc700;
  margin-bottom: 8px;
  display: block;
}

h2 {
  font-size: 2.8rem;
  color: #002d6b;
  margin: 0 0 20px 0;
  font-weight: 700;
  line-height: 1.2;
  position: relative;
  z-index: 2; /* Memastikan teks berada di atas logo */
}

h2 .highlight {
  color: #0047a5;
}

.accent-line {
  width: 60px;
  height: 4px;
  background-color: #0047a5;
  border-radius: 2px;
  position: relative;
  z-index: 2;
}

/* --- LOGO DI BELAKANG TEKS --- */
.title-logo-bg {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 250px; /* Ukuran logo di balik teks, silakan sesuaikan */
  opacity: 0.08; /* Dibuat sangat tipis agar teks tetap mudah dibaca */
  z-index: 1; /* Di bawah teks (h2 menggunakan z-index: 2) */
  pointer-events: none;
  animation: floatIcon 6s ease-in-out infinite;
}

.logo-watermark {
  width: 100%;
  height: auto;
  display: block;
}

/* ======================================================= */
/* --- KONTEN CARD & BADGE ------------------------------- */
/* ======================================================= */

.content-column {
  position: relative;
}

.text-card {
  background: #ffffff;
  padding: 40px;
  border-radius: 16px;
  box-shadow: 0 20px 40px rgba(0, 45, 107, 0.05);
  border-left: 5px solid #0047a5;
  position: relative;
  z-index: 3;
}

p {
  font-size: 1.15rem;
  color: #4a5568;
  line-height: 1.8;
  margin: 0;
  font-weight: 400;
}

p strong {
  color: #002d6b;
  font-weight: 600;
}

.badge {
  display: inline-block;
  background-color: rgba(0, 71, 165, 0.08);
  color: #0047a5;
  padding: 2px 10px;
  border-radius: 6px;
  font-weight: 600;
  font-size: 0.95rem;
}

/* --- BACKGROUND SHAPES DEKORATIF ----------------------- */

.shape {
  position: absolute;
  pointer-events: none;
  border-radius: 50%;
  z-index: 1;
}

.shape-1 {
  width: 350px;
  height: 350px;
  background: radial-gradient(
    circle,
    rgba(255, 199, 0, 0.08) 0%,
    rgba(255, 199, 0, 0) 70%
  );
  bottom: -50px;
  left: -100px;
  filter: blur(40px);
}

.shape-2 {
  width: 500px;
  height: 500px;
  background: radial-gradient(
    circle,
    rgba(0, 71, 165, 0.05) 0%,
    rgba(0, 71, 165, 0) 70%
  );
  top: -200px;
  right: -150px;
  filter: blur(50px);
}

.shape-3 {
  width: 180px;
  height: 180px;
  border: 2px dashed rgba(0, 71, 165, 0.06);
  top: 10%;
  left: 5%;
  animation: rotateShape 40s linear infinite;
}

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
  opacity: 0.15;
  filter: blur(1px);
}

.shape-top-left {
  top: -200px;
  left: -120px;
  width: 450px;
  height: 450px;
  transform: rotate(-15deg);
}

/* --- ANIMASI --- */
@keyframes rotateShape {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes floatIcon {
  0% {
    transform: translate(-50%, -50%) translateY(0px);
  }
  50% {
    transform: translate(-50%, -50%) translateY(-10px);
  }
  100% {
    transform: translate(-50%, -50%) translateY(0px);
  }
}

/* --- Pengaturan Responsif (Mobile Friendly) --- */
@media (max-width: 992px) {
  .container {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .title-column {
    align-items: flex-start; /* Rata kiri otomatis di HP */
  }

  .title-content-wrapper {
    max-width: 100%;
  }

  /* Menyesuaikan posisi logo di hp agar tetap pas di tengah teks */
  .title-logo-bg {
    left: 150px; /* Menyesuaikan dengan perkiraan posisi teks di sebelah kiri */
    transform: translateY(-50%);
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

  .shape-1 {
    width: 200px;
    height: 200px;
  }
  .shape-2 {
    width: 300px;
    height: 300px;
  }
  .shape-3 {
    display: none;
  }
}
</style>
