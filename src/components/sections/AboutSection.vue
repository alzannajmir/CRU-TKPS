<template>
  <section id="about" class="about-bento-section">
    <div class="glow-shape shape-glow-yellow" aria-hidden="true"></div>
    <div class="glow-shape shape-glow-blue" aria-hidden="true"></div>

    <div class="container">
      <div class="section-header">
        <span class="eyebrow-pill">Institutional Profile</span>
        <h2>
          About <span class="highlight">CRU-TKPS</span> &amp; Our Foundations
        </h2>
        <p class="section-subtitle">
          A dedicated pediatric and clinical trial research unit under the
          Faculty of Medicine, Universitas Padjadjaran.
        </p>
        <div class="accent-line"></div>
      </div>

      <!-- BENTO GRID: ABOUT + VISION + MISSION -->
      <div id="vision-mission" class="bento-grid">
        <!-- Main Profile Card (Spans 2 columns on desktop) -->
        <article class="bento-card profile-card">
          <div class="profile-content">
            <div class="card-badge-row">
              <span class="standard-badge">ICH-GCP Standardized</span>
              <span class="dept-badge"
                >Department of Child Health • FK UNPAD</span
              >
            </div>

            <h3>
              Answering Future Scientific Challenges Through Rigorous Clinical
              Trials
            </h3>

            <p>
              The <strong>Clinical Research Unit – Growth &amp; Development Social Pediatrics (CRU-TKPS)</strong>
              is a specialized clinical trial team established by the
              <strong>Department of Child Health, Faculty of Medicine Universitas Padjadjaran</strong>.
              We conduct high-impact epidemiological surveillance, community
              pediatrics studies, and Phase I–III vaccine trials meticulously
              governed by <span class="inline-highlight">ICH-GCP standards</span>.
            </p>

            <div class="pillars-row">
              <div class="pillar-chip">
                <span class="pillar-dot"></span>
                Multi-Subspecialist Pediatricians
              </div>
              <div class="pillar-chip">
                <span class="pillar-dot"></span>
                Hospital &amp; Primary Care Network
              </div>
              <div class="pillar-chip">
                <span class="pillar-dot"></span>
                Evidence-Based Health Policy
              </div>
            </div>
          </div>

          <div class="watermark-wrapper" aria-hidden="true">
            <img
              src="../../assets/images/logoCRU.png"
              alt=""
              class="logo-watermark"
              loading="lazy"
            />
          </div>
        </article>

        <!-- Vision Card -->
        <article class="bento-card vision-card">
          <div class="card-icon-header">
            <div class="icon-circle-gold">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <circle cx="12" cy="12" r="6" />
                <circle cx="12" cy="12" r="2" />
              </svg>
            </div>
            <div>
              <span class="card-kicker">Our Direction</span>
              <h3>Vision</h3>
            </div>
          </div>
          <p class="vision-quote">
            “Empowering a multidisciplinary research team in their field of
            expertise and performing clinical research activities by
            standardized procedures (ICH-GCP) to improve the nation’s health.”
          </p>
        </article>

        <!-- Mission Card -->
        <article class="bento-card mission-card">
          <div class="card-icon-header">
            <div class="icon-circle-blue">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
            <div>
              <span class="card-kicker">Strategic Commitments</span>
              <h3>Mission</h3>
            </div>
          </div>

          <ul class="mission-list">
            <li>
              <span class="check-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </span>
              <span>
                <strong>Gold-Standard Execution:</strong> Establish and manage
                clinical trials strictly in accordance with international
                ICH-GCP guidelines.
              </span>
            </li>
            <li>
              <span class="check-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </span>
              <span>
                <strong>Capacity Building:</strong> Continuously elevate the
                quality of clinical research methodologies and medical human
                resources.
              </span>
            </li>
            <li>
              <span class="check-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </span>
              <span>
                <strong>Global Synergy:</strong> Build and strengthen strategic
                collaborations with national and international research
                partners.
              </span>
            </li>
          </ul>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-bento-section {
  background-color: #f8fafc;
  padding: 110px 0;
  position: relative;
  overflow: hidden;
}

.glow-shape {
  position: absolute;
  pointer-events: none;
  border-radius: 50%;
  z-index: 1;
}

.shape-glow-yellow {
  width: 420px;
  height: 420px;
  background: radial-gradient(
    circle,
    rgba(255, 199, 0, 0.08) 0%,
    rgba(255, 199, 0, 0) 70%
  );
  top: -80px;
  left: -80px;
  filter: blur(45px);
}

.shape-glow-blue {
  width: 520px;
  height: 520px;
  background: radial-gradient(
    circle,
    rgba(0, 71, 165, 0.05) 0%,
    rgba(0, 71, 165, 0) 70%
  );
  bottom: -120px;
  right: -120px;
  filter: blur(55px);
}

.container {
  position: relative;
  z-index: 2;
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
  max-width: 620px;
  margin: 0 0 18px 0;
}

.accent-line {
  width: 52px;
  height: 4px;
  background-color: #ffc700;
  border-radius: 2px;
}

/* --- BENTO GRID --- */
.bento-grid {
  display: grid;
  grid-template-columns: 1fr 1.15fr;
  gap: 28px;
}

.bento-card {
  background: #ffffff;
  border-radius: 24px;
  padding: 40px;
  border: 1px solid rgba(0, 71, 165, 0.07);
  box-shadow: 0 8px 30px rgba(0, 45, 107, 0.03);
  position: relative;
  overflow: hidden;
  transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
}

.bento-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 40px rgba(0, 45, 107, 0.07);
  border-color: rgba(0, 71, 165, 0.15);
}

.profile-card {
  grid-column: 1 / -1;
  display: grid;
  grid-template-columns: 1.5fr 0.5fr;
  align-items: center;
  gap: 32px;
  background: linear-gradient(135deg, #ffffff 0%, #f8fbff 100%);
  border-left: 5px solid #0047a5;
}

.card-badge-row {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 18px;
}

.standard-badge {
  font-size: 0.76rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  background: #002d6b;
  color: #ffc700;
  padding: 5px 14px;
  border-radius: 999px;
}

.dept-badge {
  font-size: 0.78rem;
  font-weight: 600;
  color: #0047a5;
  background: rgba(0, 71, 165, 0.08);
  padding: 5px 14px;
  border-radius: 999px;
}

.profile-content h3 {
  font-size: clamp(1.35rem, 1.1rem + 0.8vw, 1.75rem);
  color: #002d6b;
  margin-bottom: 14px;
  font-weight: 700;
}

.profile-content p {
  font-size: 1.05rem;
  color: #475569;
  line-height: 1.75;
  margin-bottom: 24px;
}

.profile-content strong {
  color: #002d6b;
  font-weight: 700;
}

.inline-highlight {
  background: rgba(255, 199, 0, 0.2);
  color: #002d6b;
  font-weight: 700;
  padding: 2px 8px;
  border-radius: 6px;
}

.pillars-row {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.pillar-chip {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 0.86rem;
  font-weight: 600;
  color: #1e293b;
  background: #ffffff;
  border: 1px solid #e2e8f0;
  padding: 8px 14px;
  border-radius: 10px;
}

.pillar-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #ffc700;
}

.watermark-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.logo-watermark {
  width: 190px;
  height: auto;
  opacity: 0.14;
  user-select: none;
}

/* Vision Card */
.vision-card {
  background: linear-gradient(145deg, #002d6b 0%, #00183d 100%);
  color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.vision-card h3 {
  color: #ffffff;
  font-size: 1.45rem;
  margin: 0;
}

.vision-card .card-kicker {
  color: #ffc700;
}

.vision-quote {
  font-size: 1.12rem;
  line-height: 1.75;
  color: rgba(248, 250, 252, 0.92);
  font-weight: 500;
  margin: 0;
}

.card-icon-header {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 24px;
}

.card-kicker {
  display: block;
  font-size: 0.72rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #64748b;
  margin-bottom: 2px;
}

.icon-circle-gold {
  width: 48px;
  height: 48px;
  border-radius: 14px;
  background: rgba(255, 199, 0, 0.15);
  color: #ffc700;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.icon-circle-blue {
  width: 48px;
  height: 48px;
  border-radius: 14px;
  background: rgba(0, 71, 165, 0.08);
  color: #0047a5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.mission-card h3 {
  font-size: 1.45rem;
  color: #002d6b;
  margin: 0;
}

.mission-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.mission-list li {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  font-size: 0.98rem;
  color: #475569;
  line-height: 1.6;
}

.mission-list strong {
  color: #0f172a;
}

.check-icon {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: rgba(0, 71, 165, 0.08);
  color: #0047a5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  margin-top: 2px;
}

@media (max-width: 992px) {
  .bento-grid {
    grid-template-columns: 1fr;
  }
  .profile-card {
    grid-template-columns: 1fr;
  }
  .watermark-wrapper {
    display: none;
  }
}

@media (max-width: 768px) {
  .about-bento-section {
    padding: 80px 0;
  }
  .bento-card {
    padding: 28px 24px;
  }
}
</style>
