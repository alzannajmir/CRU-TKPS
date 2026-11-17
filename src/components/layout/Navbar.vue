<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import logoUnpad from "../../assets/images/LOGOUNPAD.png";
import logoCru from "../../assets/images/logoCRU.png";

const isScrolled = ref(false);
const isMobileMenuOpen = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 24;
  if (isMobileMenuOpen.value) {
    closeMobileMenu();
  }
};

const toggleMobileMenu = (event) => {
  event.stopPropagation();
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false;
};

const handleOutsideClick = (event) => {
  if (isMobileMenuOpen.value) {
    const navbarElement = document.querySelector(".navbar");
    if (navbarElement && !navbarElement.contains(event.target)) {
      closeMobileMenu();
    }
  }
};

onMounted(() => {
  handleScroll();
  window.addEventListener("scroll", handleScroll, { passive: true });
  window.addEventListener("click", handleOutsideClick);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
  window.removeEventListener("click", handleOutsideClick);
});
</script>

<template>
  <div
    class="menu-overlay"
    :class="{ active: isMobileMenuOpen }"
    @click="closeMobileMenu"
  ></div>

  <nav
    class="navbar"
    :class="{ scrolled: isScrolled, 'mobile-open': isMobileMenuOpen }"
  >
    <div class="container">
      <router-link to="/" class="logo-wrapper" @click="closeMobileMenu">
        <img
          :src="logoUnpad"
          alt="Logo Universitas Padjadjaran"
          class="nav-logo"
          width="42"
          height="42"
        />
        <div class="logo-divider"></div>
        <img
          :src="logoCru"
          alt="Logo Clinical Research Unit"
          class="nav-logo"
          width="42"
          height="42"
        />

        <div class="brand-text-block">
          <div class="main-brand-text">Clinical Research Unit</div>
          <div class="sub-brand-text">
            Faculty of Medicine Universitas Padjadjaran
          </div>
        </div>
      </router-link>

      <button
        class="hamburger"
        @click="toggleMobileMenu"
        :class="{ 'is-active': isMobileMenuOpen }"
        aria-label="Toggle navigation menu"
        :aria-expanded="isMobileMenuOpen"
      >
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </button>

      <ul class="nav-menu" :class="{ active: isMobileMenuOpen }">
        <li><a href="/#about" @click="closeMobileMenu">About</a></li>
        <li><a href="/#services" @click="closeMobileMenu">Services</a></li>
        <li><a href="/#research" @click="closeMobileMenu">Research</a></li>
        <li>
          <a href="/#publications" @click="closeMobileMenu">Publications</a>
        </li>
        <li><a href="/#team" @click="closeMobileMenu">Team</a></li>
        <li class="nav-cta-item">
          <a href="/#contact" class="nav-cta-btn" @click="closeMobileMenu">
            Contact Us
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
.menu-overlay {
  position: fixed;
  inset: 0;
  width: 100dvw;
  height: 100dvh;
  background-color: rgba(0, 18, 46, 0.55);
  backdrop-filter: blur(4px);
  z-index: 999;
  opacity: 0;
  visibility: hidden;
  transition: all 0.35s ease;
}

.menu-overlay.active {
  opacity: 1;
  visibility: visible;
}

.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(0, 24, 61, 0.78);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  z-index: 1000;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
}

.navbar .main-brand-text {
  color: #ffffff;
}
.navbar .sub-brand-text {
  color: rgba(255, 255, 255, 0.75);
}
.navbar .logo-divider {
  background-color: rgba(255, 255, 255, 0.22);
}
.navbar .nav-menu > li > a:not(.nav-cta-btn) {
  color: rgba(255, 255, 255, 0.88);
}
.navbar .bar {
  background-color: #ffffff;
}

.navbar.scrolled {
  background: rgba(255, 255, 255, 0.94);
  box-shadow: 0 8px 30px rgba(0, 45, 107, 0.08);
  border-bottom: 1px solid rgba(0, 71, 165, 0.08);
}

.navbar.scrolled .main-brand-text {
  color: #002d6b;
}
.navbar.scrolled .sub-brand-text {
  color: #475569;
}
.navbar.scrolled .logo-divider {
  background-color: rgba(0, 71, 165, 0.18);
}
.navbar.scrolled .nav-menu > li > a:not(.nav-cta-btn) {
  color: #334155;
}
.navbar.scrolled .bar {
  background-color: #002d6b;
}

.container {
  max-width: 1240px;
  margin: auto;
  height: 84px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;
  transition: height 0.3s ease;
}

.navbar.scrolled .container {
  height: 74px;
}

.logo-wrapper {
  display: flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
}

.nav-logo {
  height: 42px;
  width: 42px;
  aspect-ratio: 1 / 1;
  object-fit: contain;
}

.logo-divider {
  width: 1.5px;
  height: 32px;
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
  font-size: 1.05rem;
  font-weight: 700;
  letter-spacing: -0.01em;
  line-height: 1.2;
  transition: color 0.3s ease;
}

.sub-brand-text {
  font-size: 0.68rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  line-height: 1.2;
  transition: color 0.3s ease;
}

.nav-menu {
  display: flex;
  align-items: center;
  gap: 28px;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-menu > li > a:not(.nav-cta-btn) {
  text-decoration: none;
  font-weight: 600;
  font-size: 0.92rem;
  transition: color 0.25s ease;
  position: relative;
  padding: 6px 0;
}

.navbar:not(.scrolled) .nav-menu > li > a:not(.nav-cta-btn):hover {
  color: #ffc700;
}
.navbar.scrolled .nav-menu > li > a:not(.nav-cta-btn):hover {
  color: #0047a5;
}

.nav-menu > li > a:not(.nav-cta-btn)::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 2.5px;
  background: #ffc700;
  border-radius: 2px;
  transition: width 0.25s ease;
}

.navbar.scrolled .nav-menu > li > a:not(.nav-cta-btn)::after {
  background: #0047a5;
}

.nav-menu > li > a:not(.nav-cta-btn):hover::after {
  width: 100%;
}

.nav-cta-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  border-radius: 999px;
  font-size: 0.88rem;
  font-weight: 700;
  text-decoration: none;
  background: #ffc700;
  color: #00183d;
  transition: all 0.25s ease;
  box-shadow: 0 4px 14px rgba(255, 199, 0, 0.25);
}

.nav-cta-btn:hover {
  background: #ffd43b;
  transform: translateY(-1px);
}

.navbar.scrolled .nav-cta-btn {
  background: #002d6b;
  color: #ffffff;
  box-shadow: 0 6px 18px rgba(0, 45, 107, 0.18);
}

.navbar.scrolled .nav-cta-btn:hover {
  background: #0047a5;
}

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

  .hamburger.is-active .bar:nth-child(1) {
    transform: translateY(7.5px) rotate(45deg);
  }
  .hamburger.is-active .bar:nth-child(2) {
    opacity: 0;
  }
  .hamburger.is-active .bar:nth-child(3) {
    transform: translateY(-7.5px) rotate(-45deg);
  }

  .nav-menu {
    position: fixed;
    top: 0;
    right: -100%;
    background: #00183d;
    width: min(300px, 82dvw);
    height: 100dvh;
    flex-direction: column;
    align-items: flex-start;
    padding: 100px 32px 40px;
    gap: 20px;
    box-shadow: -10px 0 30px rgba(0, 0, 0, 0.25);
    transition: right 0.35s cubic-bezier(0.16, 1, 0.3, 1);
    z-index: 1000;
  }

  .nav-menu.active {
    right: 0;
  }

  .nav-menu > li {
    width: 100%;
  }

  .nav-menu > li > a:not(.nav-cta-btn) {
    color: #ffffff !important;
    font-size: 1.08rem;
    display: block;
    padding: 8px 0;
  }

  .nav-menu > li > a:not(.nav-cta-btn)::after {
    display: none;
  }

  .nav-cta-item {
    margin-top: 12px;
  }

  .nav-cta-btn {
    width: 100%;
    padding: 12px 20px;
    background: #ffc700 !important;
    color: #00183d !important;
  }

  .mobile-open .bar {
    background-color: #ffffff !important;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 0 16px;
  }
  .main-brand-text {
    font-size: 0.9rem;
  }
  .sub-brand-text {
    font-size: 0.6rem;
    letter-spacing: 0.03em;
  }
  .nav-logo {
    height: 34px;
    width: 34px;
  }
  .logo-divider {
    height: 24px;
  }
  .logo-wrapper {
    gap: 8px;
  }
}
</style>
