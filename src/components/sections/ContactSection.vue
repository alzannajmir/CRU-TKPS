<template>
  <section id="contact" class="contact-section">
    <div class="container">

      <div class="section-header">
        <span class="sub-title">Get In Touch</span>
        <h2>Contact <span class="highlight">Us</span></h2>
        <div class="accent-line"></div>
      </div>

      <div class="contact-grid">
        
        <div class="info-column">
          <div class="main-contact-card">
            <h3>Clinical Research Unit</h3>
            <p class="subtitle">Growth & Development Social Pediatrics</p>
            
            <div class="divider"></div>

            <div class="contact-item">
              <div class="icon-box">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <div class="item-text">
                <h4>Address</h4>
                <p>JI. Eijkman No. 38 Bandung 40161</p>
              </div>
            </div>

            <div class="contact-item">
              <div class="icon-box">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              </div>
              <div class="item-text">
                <h4>Phone</h4>
                <p><a href="tel:+62222034471" class="contact-link">+62 22 2034471</a></p>
              </div>
            </div>

            <div class="contact-item">
              <div class="icon-box">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              </div>
              <div class="item-text">
                <h4>Email</h4>
                <p><a href="mailto:cru.ika.tkpsrshs@gmail.com" class="contact-link">cru.ika.tkpsrshs@gmail.com</a></p>
              </div>
            </div>

          </div>
        </div>

        <div class="map-column">
          <div class="map-card">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.992661555546!2d107.59836377484673!3d-6.891436193107572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e65870020a51%3A0xa94f9996dfec0aa8!2sJl.%20Prof.%20Eyckman%20No.38%2C%20Pasteur%2C%20Kec.%20Sukajadi%2C%20Kota%20Bandung%2C%20Jawa%20Barat%2040161!5e0!3m2!1sid!2sid!4v1718000000000!5m2!1sid!2sid"
              width="100%" 
              height="100%" 
              style="border:0;"  
              loading="lazy" 
              referrerpolicy="no-referrer-when-downgrade"
              class="google-maps-frame"
            ></iframe>
          </div>
        </div>

      </div>

    </div>
  </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap');

.contact-section {
  background-color: #FFFFFF; 
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
  color: #0052CC; 
  margin-bottom: 8px;
}

h2 {
  font-size: 2.5rem;
  color: #002D6B; 
  margin: 0 0 16px 0;
  font-weight: 700;
}

h2 .highlight {
  color: #0047A5; 
}

.accent-line {
  width: 50px;
  height: 4px;
  background-color: #FFC700;
  border-radius: 2px;
}

/* --- Struktur Grid 2 Kolom --- */
.contact-grid {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 40px;
  align-items: stretch;
}

/* --- Kartu Informasi Utama (Kiri) --- */
.main-contact-card {
  background-color: #F8FAFC;
  padding: 48px;
  border-radius: 24px;
  border: 1px solid rgba(0, 71, 165, 0.03);
  height: 100%;
  box-sizing: border-box;
}

.main-contact-card h3 {
  font-size: 1.5rem;
  color: #002D6B;
  margin: 0 0 6px 0;
  font-weight: 700;
}

.main-contact-card .subtitle {
  font-size: 1rem;
  color: #64748B;
  margin: 0 0 28px 0;
  font-weight: 500;
}

.divider {
  height: 1px;
  background-color: rgba(0, 71, 165, 0.08);
  margin-bottom: 32px;
}

/* --- Baris Item Kontak --- */
.contact-item {
  display: flex;
  gap: 20px;
  margin-bottom: 28px;
}

.contact-item:last-child {
  margin-bottom: 0;
}

.icon-box {
  width: 44px;
  height: 44px;
  background-color: #FFFFFF;
  color: #0047A5;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(0, 45, 107, 0.04);
  flex-shrink: 0;
}

.item-text h4 {
  margin: 0 0 4px 0;
  font-size: 0.9rem;
  color: #94A3B8;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.item-text p {
  margin: 0;
  font-size: 1.05rem;
  color: #334155;
  font-weight: 600;
  line-height: 1.4;
}

.contact-link {
  color: #334155;
  text-decoration: none;
  transition: color 0.2s ease;
}

.contact-link:hover {
  color: #0047A5;
  text-decoration: underline;
}

/* ======================================================= */
/* --- PERBAIKAN MAPS: KARTU PETA INTERAKTIF ASLI -------- */
/* ======================================================= */

.map-card {
  height: 100%;
  min-height: 420px; /* Dipertinggi sedikit agar peninjauan jalanan lebih luas & proporsional */
  border-radius: 24px;
  overflow: hidden; /* Memotong sudut tajam iframe agar mengikuti kebulatan kartu */
  box-shadow: 0 12px 32px rgba(0, 45, 107, 0.06);
  border: 1px solid rgba(0, 71, 165, 0.06);
  box-sizing: border-box;
  background-color: #E5E7EB; /* Latar belakang dasar saat peta sedang dimuat */
}

.google-maps-frame {
  width: 100%;
  height: 100%;
  display: block;
}

/* --- Pengaturan Responsif --- */
@media (max-width: 992px) {
  .contact-grid {
    grid-template-columns: 1fr; 
    gap: 32px;
  }
  .main-contact-card {
    padding: 32px;
  }
  .map-card {
    min-height: 380px; /* Menyesuaikan tinggi peta pada tablet */
  }
}

@media (max-width: 768px) {
  .contact-section {
    padding: 80px 0;
  }
  h2 {
    font-size: 2rem;
  }
  .map-card {
    min-height: 300px; /* Menyesuaikan tinggi peta pada handphone */
  }
}
</style>