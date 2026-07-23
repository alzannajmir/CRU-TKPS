<template>
  <footer class="main-footer">
    <!-- Garis aksen emas tipis di paling atas footer sebagai pembatas estetik -->
    <div class="footer-top-bar"></div>
    
    <div class="container">
      <div class="footer-content">
        
        <!-- Baris Kelembagaan -->
        <p class="footer-institution">
          Clinical Research Unit Growth & Development Social Pediatrics (TKPS)
          <span class="bullet-separator">•</span> 
          Faculty of Medicine Universitas Padjadjaran
        </p>
        
        <!-- Baris Hak Cipta -->
        <p class="footer-copyright">
          &copy; 2026 All Rights Reserved.
        </p>

      </div>
    </div>
  </footer>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600&display=swap');

.main-footer {
  background-color: #002D6B; /* Warna biru gelap dari elemen utama logo */
  color: #FFFFFF;
  position: relative;
  font-family: 'Plus Jakarta Sans', sans-serif;
}

/* Garis aksen emas di atas footer */
.footer-top-bar {
  height: 4px;
  background-color: #FFC700; /* Warna kuning emas dari logo */
  width: 100%;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 24px; /* Padding yang lebih lega dan proporsional */
}

.footer-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 12px; /* Jarak antar baris teks */
}

/* Teks nama instansi */
.footer-institution {
  font-size: 0.95rem;
  font-weight: 500;
  color: #F8FAFC;
  line-height: 1.6;
  margin: 0;
  letter-spacing: 0.2px;
}

/* Titik pemisah tengah */
.bullet-separator {
  color: #FFC700;
  margin: 0 8px;
  font-size: 1.1rem;
}

/* Teks hak cipta */
.footer-copyright {
  font-size: 0.85rem;
  font-weight: 400;
  color: #94A3B8; /* Warna abu-abu redup agar hierarki teks seimbang */
  margin: 0;
  letter-spacing: 0.5px;
}

/* --- Penataan Responsif --- */
@media (max-width: 768px) {
  .container {
    padding: 32px 24px;
  }
  
  .footer-institution {
    font-size: 0.85rem;
  }
  
  /* Menghilangkan titik pemisah di layar HP dan mengubahnya menjadi baris baru */
  .bullet-separator {
    display: none;
  }
  
  .footer-institution span {
    display: block;
    margin-top: 4px;
  }

  .footer-copyright {
    font-size: 0.78rem;
    margin-top: 4px;
  }
}
</style>