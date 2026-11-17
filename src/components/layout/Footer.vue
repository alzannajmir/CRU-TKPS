<script setup>
import logoUnpad from "../../assets/images/LOGOUNPAD.png";
import logoCru from "../../assets/images/logoCRU.png";
</script>

<template>
  <footer class="main-footer">
    <div class="footer-top-bar"></div>

    <div class="container">
      <div class="footer-grid">
        <!-- Brand & Identity Column -->
        <div class="footer-brand-col">
          <div class="footer-logos">
            <img
              :src="logoUnpad"
              alt="Logo Universitas Padjadjaran"
              class="footer-logo"
              loading="lazy"
              width="44"
              height="44"
            />
            <div class="logo-divider"></div>
            <img
              :src="logoCru"
              alt="Logo CRU-TKPS"
              class="footer-logo"
              loading="lazy"
              width="44"
              height="44"
            />
            <div class="brand-titles">
              <span class="brand-main">CRU-TKPS UNPAD</span>
              <span class="brand-sub">Clinical Research Unit</span>
            </div>
          </div>

          <p class="footer-desc">
            Growth &amp; Development – Social Pediatrics (TKPS), Department of
            Child Health, Faculty of Medicine Universitas Padjadjaran. Advancing
            evidence-based pediatric &amp; vaccine research under ICH-GCP
            standards.
          </p>
        </div>

        <!-- Quick Navigation Column -->
        <div class="footer-links-col">
          <h4>Quick Navigation</h4>
          <ul>
            <li><a href="/#about">About &amp; Vision</a></li>
            <li><a href="/#services">Clinical Services</a></li>
            <li><a href="/#journey">Ongoing Trials</a></li>
            <li><a href="/#research">Research Portfolio</a></li>
            <li><a href="/#publications">Scientific Publications</a></li>
            <li><router-link to="/team">Our Research Team</router-link></li>
          </ul>
        </div>

        <!-- Contact Summary Column -->
        <div class="footer-contact-col">
          <h4>Coordination Office</h4>
          <p class="contact-line">
            <strong>Address:</strong><br />
            Jl. Prof. Eyckman No. 38, Pasteur,<br />
            Bandung 40161, West Java, Indonesia
          </p>
          <p class="contact-line">
            <strong>Email:</strong><br />
            <a href="mailto:cru.ika.tkpsrshs@gmail.com"
              >cru.ika.tkpsrshs@gmail.com</a
            >
          </p>
        </div>
      </div>

      <div class="footer-bottom">
        <p class="footer-copyright">
          &copy; {{ new Date().getFullYear() }} Clinical Research Unit Growth
          &amp; Development Social Pediatrics (TKPS) • Faculty of Medicine
          Universitas Padjadjaran. All Rights Reserved.
        </p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.main-footer {
  background-color: #00183d;
  color: #ffffff;
  position: relative;
}

.footer-top-bar {
  height: 4px;
  background: linear-gradient(90deg, #ffc700 0%, #0052cc 50%, #ffc700 100%);
  width: 100%;
}

.container {
  max-width: 1240px;
  margin: 0 auto;
  padding: 64px 24px 32px;
}

.footer-grid {
  display: grid;
  grid-template-columns: 1.5fr 0.8fr 1fr;
  gap: 48px;
  padding-bottom: 44px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.footer-logos {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 18px;
}

.footer-logo {
  width: 44px;
  height: 44px;
  aspect-ratio: 1 / 1;
  object-fit: contain;
}

.logo-divider {
  width: 1.5px;
  height: 32px;
  background: rgba(255, 255, 255, 0.22);
}

.brand-titles {
  display: flex;
  flex-direction: column;
}

.brand-main {
  font-size: 1.05rem;
  font-weight: 800;
  color: #ffffff;
  letter-spacing: 0.01em;
}

.brand-sub {
  font-size: 0.74rem;
  font-weight: 600;
  color: #ffc700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.footer-desc {
  font-size: 0.92rem;
  color: #cbd5e1;
  line-height: 1.65;
  max-width: 460px;
}

.footer-links-col h4,
.footer-contact-col h4 {
  font-size: 0.85rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #ffc700;
  margin: 0 0 18px 0;
}

.footer-links-col ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.footer-links-col a {
  color: #cbd5e1;
  text-decoration: none;
  font-size: 0.92rem;
  font-weight: 500;
  transition: color 0.2s ease;
}

.footer-links-col a:hover {
  color: #ffffff;
}

.contact-line {
  font-size: 0.92rem;
  color: #cbd5e1;
  line-height: 1.6;
  margin: 0 0 14px 0;
}

.contact-line strong {
  color: #ffffff;
}

.contact-line a {
  color: #93c5fd;
  text-decoration: none;
}

.contact-line a:hover {
  text-decoration: underline;
}

.footer-bottom {
  padding-top: 28px;
  text-align: center;
}

.footer-copyright {
  font-size: 0.84rem;
  color: #94a3b8;
  margin: 0;
}

@media (max-width: 992px) {
  .footer-grid {
    grid-template-columns: 1fr 1fr;
    gap: 36px;
  }
  .footer-brand-col {
    grid-column: 1 / -1;
  }
}

@media (max-width: 640px) {
  .container {
    padding: 48px 20px 28px;
  }
  .footer-grid {
    grid-template-columns: 1fr;
    gap: 28px;
  }
}
</style>
