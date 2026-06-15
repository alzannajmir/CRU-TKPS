<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

// 1. Fungsi kontrol menu
const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
  
  // Otomatis tutup menu jika pengguna melakukan scroll halaman
  if (isMobileMenuOpen.value) {
    closeMobileMenu()
  }
}

const toggleMobileMenu = (event) => {
  // stopPropagation agar klik pada tombol ini tidak dianggap sebagai "klik di luar menu"
  event.stopPropagation()
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

// 2. Fungsi deteksi klik di luar area navbar/menu
const handleOutsideClick = (event) => {
  // Jika menu sedang terbuka, dan yang diklik BUKAN bagian dari elemen navbar
  if (isMobileMenuOpen.value) {
    const navbarElement = document.querySelector('.navbar')
    if (navbarElement && !navbarElement.contains(event.target)) {
      closeMobileMenu()
    }
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  window.addEventListener('click', handleOutsideClick) // Tangkap semua klik di halaman
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('click', handleOutsideClick)
})
</script>

<template>
  <div 
    class="menu-overlay" 
    :class="{ 'active': isMobileMenuOpen }" 
    @click="closeMobileMenu"
  ></div>

  <nav class="navbar" :class="{ 'scrolled': isScrolled, 'mobile-open': isMobileMenuOpen }">
    <div class="container">

      <div class="logo-wrapper">
        <img src="/src/assets/images/LOGOUNPAD.png" alt="Logo Unpad" class="nav-logo" />
        <div class="logo-divider"></div>
        <img src="/src/assets/images/LOGOCRU.png" alt="Logo CRU" class="nav-logo" />
        
        <div class="brand-text-block">
          <div class="main-brand-text">Clinical Research Unit</div>
          <div class="sub-brand-text">RS HASAN SADIKIN / FK UNPAD</div>
        </div>
      </div>

      <button class="hamburger" @click="toggleMobileMenu" :class="{ 'is-active': isMobileMenuOpen }" aria-label="Menu">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </button>

      <ul class="nav-menu" :class="{ 'active': isMobileMenuOpen }">
        <li><a href="#services" @click="closeMobileMenu">Services</a></li>
        <li><a href="#research" @click="closeMobileMenu">Research</a></li>
        <li><a href="#team" @click="closeMobileMenu">Team</a></li>
        <li><a href="#partners" @click="closeMobileMenu">Partners</a></li>
        <li><a href="#contact" @click="closeMobileMenu">Contact</a></li>
      </ul>

    </div>
  </nav>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap');

/* --- Tambahan Kode CSS untuk Lapisan Backdrop Overlay --- */
.menu-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4); /* Efek menggelapkan latar belakang web */
  backdrop-filter: blur(4px); /* Membuat konten di belakang menu menjadi sedikit blur */
  z-index: 999; /* Berada tepat di bawah .navbar (1000) dan .nav-menu */
  opacity: 0;
  visibility: hidden;
  transition: all 0.4s ease;
}

/* Muncul saat menu mobile terbuka */
.menu-overlay.active {
  opacity: 1;
  visibility: visible;
}

/* --- Sisa CSS Navbar Anda Sebelumnya (Pertahankan) --- */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: linear-gradient(180deg, rgba(0, 45, 107, 0.95) 0%, rgba(0, 71, 165, 0.85) 100%);
  backdrop-filter: blur(8px);
  z-index: 1000;
  font-family: 'Plus Jakarta Sans', sans-serif;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.navbar .main-brand-text { color: #FFFFFF; }
.navbar .sub-brand-text { color: rgba(255, 255, 255, 0.75); }
.navbar .logo-divider { background-color: rgba(255, 255, 255, 0.2); }
.navbar a { color: rgba(255, 255, 255, 0.85); }
.navbar .bar { background-color: #FFFFFF; }

.navbar.scrolled {
  background: linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%);
  box-shadow: 0 4px 30px rgba(0, 45, 107, 0.1);
  border-bottom: 1px solid rgba(0, 71, 165, 0.05);
}

.navbar.scrolled .main-brand-text { color: #002D6B; }
.navbar.scrolled .sub-brand-text { color: #4A5568; }
.navbar.scrolled .logo-divider { background-color: rgba(0, 71, 165, 0.15); }
.navbar.scrolled a { color: #4A5568; }
.navbar.scrolled .bar { background-color: #002D6B; }

.container {
  max-width: 1200px;
  margin: auto;
  height: 88px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;
  transition: height 0.3s ease;
}

.navbar.scrolled .container {
  height: 80px;
}

.logo-wrapper {
  display: flex;
  align-items: center;
  gap: 14px; 
}

.nav-logo {
  height: 44px;
  width: 44px;
  object-fit: contain;
}

.logo-divider {
  width: 1.5px;
  height: 34px;
  transition: background-color 0.3s ease;
}

.brand-text-block {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2px;
  margin-left: 4px;
}

.main-brand-text {
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 0.3px;
  line-height: 1.2;
  transition: color 0.3s ease;
}

.sub-brand-text {
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.8px;
  text-transform: uppercase;
  line-height: 1.2;
  transition: color 0.3s ease;
}

.nav-menu {
  display: flex;
  gap: 32px;
  list-style: none;
  margin: 0;
  padding: 0;
  transition: all 0.3s ease;
}

a {
  text-decoration: none;
  font-weight: 600; 
  font-size: 15px;
  transition: color 0.25s ease, transform 0.25s ease;
  position: relative;
  padding: 8px 0;
}

.navbar:not(.scrolled) a:hover { color: #FFC700; }
.navbar.scrolled a:hover { color: #0047A5; }

a::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 3px;
  background: #FFC700; 
  border-radius: 2px;
  transition: width 0.3s ease;
}
.navbar.scrolled a::after { background: #0047A5; }
a:hover::after { width: 100%; }

.hamburger {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 24px;
  height: 18px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 1001;
}

.bar {
  width: 100%;
  height: 2.5px;
  border-radius: 2px;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

@media (max-width: 992px) {
  .hamburger {
    display: flex;
  }

  .hamburger.is-active .bar:nth-child(1) { transform: translateY(8px) rotate(45deg); }
  .hamburger.is-active .bar:nth-child(2) { opacity: 0; }
  .hamburger.is-active .bar:nth-child(3) { transform: translateY(-8px) rotate(-45deg); }

  .nav-menu {
    position: fixed;
    top: 0;
    right: -100%;
    background: #002D6B;
    width: 280px;
    height: 100vh;
    flex-direction: column;
    padding: 100px 40px;
    gap: 24px;
    box-shadow: -10px 0 30px rgba(0, 0, 0, 0.15);
    transition: right 0.4s cubic-bezier(0.16, 1, 0.3, 1);
    z-index: 1000; /* Pastikan berada di atas overlay */
  }

  .nav-menu.active {
    right: 0;
  }

  .nav-menu a {
    color: #FFFFFF !important;
    font-size: 18px;
    display: block;
  }
  
  .nav-menu a::after {
    display: none;
  }

  .mobile-open .bar {
    background-color: #FFFFFF !important;
  }
}

@media (max-width: 480px) {
  .container { padding: 0 16px; }
  .main-brand-text { font-size: 14px; }
  .sub-brand-text { font-size: 9px; letter-spacing: 0.5px; }
  .nav-logo { height: 36px; width: 36px; }
  .logo-divider { height: 26px; }
  .logo-wrapper { gap: 8px; }
}
</style>