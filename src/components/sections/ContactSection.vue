<template>
  <section id="contact" class="contact-section">
    <div class="container">
      <div class="section-header">
        <span class="eyebrow-pill">Collaboration &amp; Inquiries</span>
        <h2>Connect With <span class="highlight">CRU-TKPS</span></h2>
        <p class="section-subtitle">
          Reach out to our clinical research coordination office for trial
          partnerships, site feasibility, or academic inquiries.
        </p>
        <div class="accent-line"></div>
      </div>

      <div class="contact-grid">
        <div class="info-column">
          <div class="main-contact-card">
            <span class="unit-tag">Research Coordination Office</span>
            <h3>Clinical Research Unit (CRU-TKPS)</h3>
            <p class="subtitle">
              Growth &amp; Development – Social Pediatrics Division, Department
              of Child Health, Faculty of Medicine Universitas Padjadjaran
            </p>

            <div class="divider"></div>

            <div class="contact-item">
              <div class="icon-box">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div class="item-text">
                <h4>Office Address</h4>
                <p>Jl. Prof. Eyckman No. 38, Pasteur, Bandung 40161</p>
                <span class="sub-detail"
                  >West Java, Indonesia (FK UNPAD Campus)</span
                >
              </div>
            </div>

            <div class="contact-item">
              <div class="icon-box">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path
                    d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                  />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <div class="item-text">
                <h4>Official Email</h4>
                <p>
                  <a
                    href="mailto:cru.ika.tkpsrshs@gmail.com"
                    class="contact-link"
                    >cru.ika.tkpsrshs@gmail.com</a
                  >
                </p>
                <span class="sub-detail"
                  >For sponsor inquiries, protocol review &amp;
                  collaborations</span
                >
              </div>
            </div>

            <div class="contact-item">
              <div class="icon-box">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <div class="item-text">
                <h4>Operational Hours</h4>
                <p>Monday – Friday, 08:00 – 16:00 WIB</p>
                <span class="sub-detail"
                  >24/7 Cold-Chain &amp; Adverse Event Monitoring Active</span
                >
              </div>
            </div>

            <div class="cta-box">
              <a href="mailto:cru.ika.tkpsrshs@gmail.com" class="email-cta-btn">
                <span>Send Partnership Inquiry</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div class="map-column">
          <div class="map-card">
            <iframe
              title="CRU-TKPS Faculty of Medicine Universitas Padjadjaran Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.992661555546!2d107.59836377484673!3d-6.891436193107572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e65870020a51%3A0xa94f9996dfec0aa8!2sJl.%20Prof.%20Eyckman%20No.38%2C%20Pasteur%2C%20Kec.%20Sukajadi%2C%20Kota%20Bandung%2C%20Jawa%20Barat%2040161!5e0!3m2!1sid!2sid!4v1718000000000!5m2!1sid!2sid"
              width="100%"
              height="100%"
              style="border: 0"
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
.contact-section {
  background-color: #ffffff;
  padding: 110px 0;
}

.section-header {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 56px;
}

.eyebrow-pill {
  font-size: 0.78rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #0047a5;
  background: rgba(0, 71, 165, 0.08);
  border: 1px solid rgba(0, 71, 165, 0.14);
  padding: 6px 16px;
  border-radius: 999px;
  margin-bottom: 14px;
}

h2 {
  font-size: clamp(1.9rem, 1.4rem + 1.5vw, 2.6rem);
  color: #002d6b;
  margin: 0 0 12px 0;
  font-weight: 800;
}

h2 .highlight {
  color: #0047a5;
}

.section-subtitle {
  font-size: 1.05rem;
  color: #64748b;
  max-width: 600px;
  margin: 0 0 18px 0;
}

.accent-line {
  width: 52px;
  height: 4px;
  background-color: #ffc700;
  border-radius: 2px;
}

.contact-grid {
  display: grid;
  grid-template-columns: 1.15fr 1fr;
  gap: 36px;
  align-items: stretch;
}

.main-contact-card {
  background-color: #f8fafc;
  padding: 44px;
  border-radius: 24px;
  border: 1px solid rgba(0, 71, 165, 0.08);
  height: 100%;
  display: flex;
  flex-direction: column;
}

.unit-tag {
  align-self: flex-start;
  font-size: 0.72rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #0047a5;
  background: rgba(0, 71, 165, 0.08);
  padding: 5px 12px;
  border-radius: 999px;
  margin-bottom: 14px;
}

.main-contact-card h3 {
  font-size: 1.5rem;
  color: #002d6b;
  margin: 0 0 8px 0;
  font-weight: 700;
}

.main-contact-card .subtitle {
  font-size: 0.96rem;
  color: #475569;
  margin: 0 0 24px 0;
  line-height: 1.6;
}

.divider {
  height: 1px;
  background-color: rgba(0, 71, 165, 0.08);
  margin-bottom: 28px;
}

.contact-item {
  display: flex;
  gap: 18px;
  margin-bottom: 24px;
}

.icon-box {
  width: 44px;
  height: 44px;
  background-color: #ffffff;
  color: #0047a5;
  border: 1px solid rgba(0, 71, 165, 0.08);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(0, 45, 107, 0.04);
  flex-shrink: 0;
}

.item-text h4 {
  margin: 0 0 2px 0;
  font-size: 0.76rem;
  color: #64748b;
  text-transform: uppercase;
  letter-spacing: 0.06em;
}

.item-text p {
  margin: 0;
  font-size: 1rem;
  color: #0f172a;
  font-weight: 700;
  line-height: 1.4;
}

.sub-detail {
  display: block;
  font-size: 0.84rem;
  color: #64748b;
  margin-top: 2px;
}

.contact-link {
  color: #0047a5;
  text-decoration: none;
  transition: color 0.2s ease;
}

.contact-link:hover {
  color: #002d6b;
  text-decoration: underline;
}

.cta-box {
  margin-top: auto;
  padding-top: 12px;
}

.email-cta-btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: #002d6b;
  color: #ffffff;
  text-decoration: none;
  font-size: 0.92rem;
  font-weight: 700;
  padding: 13px 24px;
  border-radius: 999px;
  transition: all 0.25s ease;
  box-shadow: 0 8px 20px rgba(0, 45, 107, 0.14);
}

.email-cta-btn:hover {
  background: #0047a5;
  transform: translateY(-2px);
}

.map-card {
  height: 100%;
  min-height: 460px;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 12px 32px rgba(0, 45, 107, 0.06);
  border: 1px solid rgba(0, 71, 165, 0.08);
  background-color: #e2e8f0;
}

.google-maps-frame {
  width: 100%;
  height: 100%;
  display: block;
}

@media (max-width: 992px) {
  .contact-grid {
    grid-template-columns: 1fr;
    gap: 28px;
  }
  .main-contact-card {
    padding: 32px;
  }
  .map-card {
    min-height: 380px;
  }
}

@media (max-width: 768px) {
  .contact-section {
    padding: 80px 0;
  }
  .map-card {
    min-height: 300px;
  }
}
</style>
