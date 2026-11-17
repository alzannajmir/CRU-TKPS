<template>
  <section id="services" class="services-section">
    <div class="container">
      <div class="section-header">
        <span class="eyebrow-pill">Core Competencies</span>
        <h2>Our Clinical <span class="highlight">Services</span></h2>
        <p class="section-subtitle">
          End-to-end clinical trial management, epidemiological surveillance,
          and pediatric growth assessment.
        </p>
        <div class="accent-line"></div>
      </div>

      <div class="grid">
        <article class="card">
          <div class="card-top">
            <div class="icon-box">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M4.8 16.2A8 8 0 1 0 19.2 7.8" />
                <path d="M12.1 12H12" />
                <path d="M12 2v4" />
                <path d="M12 18v4" />
                <path d="M4.9 19.1l2.8-2.8" />
                <path d="M16.3 7.7l2.8-2.8" />
              </svg>
            </div>
            <span class="step-num">01</span>
          </div>
          <h3>Child Growth &amp; Development Research</h3>
          <p>
            Comprehensive longitudinal studies focusing on early detection,
            nutritional &amp; immunological monitoring, and optimal pediatric
            developmental milestones.
          </p>
          <div class="service-tags">
            <span>Longitudinal Cohorts</span>
            <span>Milestone Screening</span>
          </div>
        </article>

        <article class="card">
          <div class="card-top">
            <div class="icon-box">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
            <span class="step-num">02</span>
          </div>
          <h3>Community-Based Surveillance</h3>
          <p>
            Field-driven epidemiological research integrated with social
            pediatrics across regional primary healthcare centers (Puskesmas) to
            inform public health policy.
          </p>
          <div class="service-tags">
            <span>Serosurvey &amp; Case Finding</span>
            <span>Primary Care Network</span>
          </div>
        </article>

        <article class="card">
          <div class="card-top">
            <div class="icon-box">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <line x1="18" y1="2" x2="22" y2="6" />
                <line x1="7.5" y1="10.5" x2="13.5" y2="16.5" />
                <polyline
                  points="15 11.5 19.5 16 14 21.5 9.5 17 5 21.5 2.5 19 7 14.5 2.5 10 8 4.5 12.5 9"
                />
              </svg>
            </div>
            <span class="step-num">03</span>
          </div>
          <h3>Phase I–III Vaccine Clinical Trials</h3>
          <p>
            High-standard clinical assessment, safety monitoring, and
            immunogenicity evaluations adhering strictly to international
            ICH-GCP protocols.
          </p>
          <div class="service-tags">
            <span>ICH-GCP Compliant</span>
            <span>Immunogenicity &amp; Safety</span>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.services-section {
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
  background-color: #0047a5;
  border-radius: 2px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
}

.card {
  background: #f8fafc;
  padding: 36px 32px;
  border-radius: 24px;
  border: 1px solid rgba(0, 71, 165, 0.07);
  display: flex;
  flex-direction: column;
  transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
  position: relative;
  overflow: hidden;
}

.card-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
}

.icon-box {
  width: 54px;
  height: 54px;
  background-color: #ffffff;
  color: #0047a5;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 14px rgba(0, 45, 107, 0.06);
  transition: all 0.3s ease;
}

.step-num {
  font-size: 1.5rem;
  font-weight: 800;
  color: rgba(0, 45, 107, 0.12);
  letter-spacing: -0.03em;
}

.card h3 {
  font-size: 1.28rem;
  color: #002d6b;
  margin: 0 0 12px 0;
  font-weight: 700;
  line-height: 1.35;
}

.card p {
  font-size: 0.96rem;
  color: #475569;
  line-height: 1.68;
  margin: 0 0 24px 0;
  flex-grow: 1;
}

.service-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding-top: 18px;
  border-top: 1px solid rgba(0, 71, 165, 0.08);
}

.service-tags span {
  font-size: 0.76rem;
  font-weight: 600;
  color: #0047a5;
  background: rgba(0, 71, 165, 0.06);
  padding: 4px 12px;
  border-radius: 999px;
}

.card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background-color: #ffc700;
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.card:hover {
  transform: translateY(-6px);
  background: #ffffff;
  box-shadow: 0 20px 40px rgba(0, 45, 107, 0.08);
  border-color: rgba(0, 71, 165, 0.16);
}

.card:hover .icon-box {
  background-color: #0047a5;
  color: #ffffff;
}

.card:hover::before {
  transform: scaleX(1);
}

@media (max-width: 992px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }
}

@media (max-width: 768px) {
  .grid {
    grid-template-columns: 1fr;
  }
  .services-section {
    padding: 80px 0;
  }
}
</style>
