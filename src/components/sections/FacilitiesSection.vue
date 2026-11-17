<script setup>
import facilityImg1 from "../../assets/images/Kulkas1.jpeg";
import facilityImg2 from "../../assets/images/Kulkas2.jpeg";
import facilityImg3 from "../../assets/images/Termometer.jpeg";
import facilityImg4 from "../../assets/images/ruangan.jpeg";
import facilityImg5 from "../../assets/images/lemari-penyimpanan-dokumen.jpeg";

const facilityImages = {
  "Kulkas1.jpeg": facilityImg1,
  "Kulkas2.jpeg": facilityImg2,
  "Termometer.jpeg": facilityImg3,
  "ruangan.jpeg": facilityImg4,
  "lemari-penyimpanan-dokumen.jpeg": facilityImg5,
};

const getFacilityImg = (fileName) => {
  if (!fileName) return "";
  return facilityImages[fileName];
};

const facilities = [
  {
    title: "Medical Research Refrigerator",
    badge: "Cold-Chain Storage",
    desc: "Precision temperature-controlled biological & vaccine storage engineered for clinical trial stability.",
    imageName: "Kulkas1.jpeg",
    specs: [
      "Primary Sanyo Biomedical Unit",
      "Storage Capacity: 602 Liters",
      "Dimensions (H/W/D): 2160 × 700 × 830 mm",
      "Calibrated Range: 2°C to 16°C",
    ],
  },
  {
    title: "High-Capacity Cold Storage & Logger",
    badge: "24/7 Telemetry",
    desc: "Redundant cold-chain system integrated with continuous thermal sensors and automated cloud logging.",
    imageName: "Kulkas2.jpeg",
    specs: [
      "Extended Capacity: 684 Liters",
      "High-Precision Thermal Probes",
      "Automated Cloud Data Logging",
      "Instant Deviation Alarm System",
    ],
  },
  {
    title: "Wi-Fi Smart Monitoring Thermometer",
    badge: "Real-Time Alerting",
    desc: "Internet-connected digital telemetry providing remote smartphone supervision and instant SMS/email alerts.",
    imageName: "Termometer.jpeg",
    specs: [
      "24/7 Real-Time Remote Access",
      "Continuous Wi-Fi Cloud Audit Trail",
      "Automated Multi-Channel Alerts (SMS/Email)",
      "ICH-GCP Cold-Chain Compliance",
    ],
  },
  {
    title: "Clinical Examination & Consultation Room",
    badge: "Participant Area",
    desc: "Dedicated, private room for participant screening, informed consent counseling, and study procedures.",
    imageName: "ruangan.jpeg",
    specs: [
      "Private Consultation & Examination Space",
      "Comfortable Seating for Participants & Guardians",
      "Hand Hygiene & Sanitizer Stations",
      "Air-Conditioned, Well-Lit Environment",
    ],
  },
  {
    title: "Secure CRF & Document Archive",
    badge: "ICH-GCP Archive",
    desc: "Access-controlled filing cabinets for Case Report Forms, source documents, and Trial Master Files.",
    imageName: "lemari-penyimpanan-dokumen.jpeg",
    specs: [
      "Lockable, Dedicated Document Cabinets",
      "Organized CRF & Source Document Filing",
      "Restricted, Access-Controlled Storage",
      "Supports ICH-GCP Record Retention",
    ],
  },
];
</script>

<template>
  <section id="facilities" class="facilities-section">
    <div class="container">
      <div class="section-header">
        <span class="eyebrow-pill">Clinical Infrastructure</span>
        <h2>Cold-Chain &amp; <span class="highlight">Facilities</span></h2>
        <p class="section-subtitle">
          Dedicated ICH-GCP compliant vaccine storage and 24/7 automated thermal
          monitoring systems.
        </p>
        <div class="accent-line"></div>
      </div>

      <div class="facilities-grid">
        <article
          v-for="(item, index) in facilities"
          :key="index"
          class="facility-card"
        >
          <div class="facility-image-wrapper">
            <span class="facility-badge">{{ item.badge }}</span>
            <img
              :src="getFacilityImg(item.imageName)"
              :alt="item.title"
              class="facility-img"
              loading="lazy"
            />
          </div>

          <div class="card-body">
            <div class="card-number">0{{ index + 1 }}</div>
            <h3>{{ item.title }}</h3>
            <p class="main-desc">{{ item.desc }}</p>

            <div class="specs-box">
              <div
                v-for="(spec, specIdx) in item.specs"
                :key="specIdx"
                class="spec-item"
              >
                <span class="spec-dot"></span>
                <span class="spec-text">{{ spec }}</span>
              </div>
            </div>
          </div>

          <div class="card-border-glow"></div>
        </article>
      </div>

      <!-- Clinical Site Readiness Banner -->
      <div class="clinical-suites-bar">
        <div class="suite-item">
          <div class="suite-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
          </div>
          <div>
            <h4>Dedicated Informed Consent Suite</h4>
            <p>Private counseling rooms for participant screening &amp; guardian consultation.</p>
          </div>
        </div>

        <div class="suite-item">
          <div class="suite-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
          </div>
          <div>
            <h4>Clinical Procedure &amp; AEFI Observation</h4>
            <p>Equipped for pediatric immunization, phlebotomy, and post-vaccination monitoring.</p>
          </div>
        </div>

        <div class="suite-item">
          <div class="suite-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
          </div>
          <div>
            <h4>Restricted CRF &amp; Document Archive</h4>
            <p>Access-controlled storage for Case Report Forms and Trial Master Files (ICH-GCP).</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.facilities-section {
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

.facilities-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
}

.facility-card {
  background: #f8fafc;
  border: 1px solid rgba(0, 71, 165, 0.08);
  border-radius: 24px;
  box-shadow: 0 6px 24px rgba(0, 45, 107, 0.03);
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
}

.facility-image-wrapper {
  width: 100%;
  aspect-ratio: 16 / 10;
  overflow: hidden;
  background-color: #e2e8f0;
  position: relative;
}

.facility-badge {
  position: absolute;
  top: 16px;
  left: 16px;
  z-index: 2;
  background: rgba(0, 24, 61, 0.85);
  backdrop-filter: blur(6px);
  color: #ffc700;
  font-size: 0.72rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  padding: 5px 12px;
  border-radius: 999px;
}

.facility-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
  display: block;
}

.card-body {
  padding: 30px 28px;
  position: relative;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.card-number {
  position: absolute;
  right: 22px;
  top: 16px;
  font-size: 3.5rem;
  font-weight: 800;
  color: rgba(0, 71, 165, 0.05);
  line-height: 1;
  pointer-events: none;
  user-select: none;
}

.facility-card h3 {
  margin: 0 0 10px 0;
  font-weight: 700;
  font-size: 1.25rem;
  color: #002d6b;
  line-height: 1.35;
}

.main-desc {
  margin: 0 0 20px 0;
  font-size: 0.94rem;
  color: #475569;
  line-height: 1.6;
}

.specs-box {
  border-top: 1px dashed rgba(0, 71, 165, 0.12);
  padding-top: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: auto;
}

.spec-item {
  display: flex;
  align-items: flex-start;
  gap: 10px;
}

.spec-dot {
  width: 6px;
  height: 6px;
  background-color: #ffc700;
  border-radius: 50%;
  margin-top: 6px;
  flex-shrink: 0;
}

.spec-text {
  font-size: 0.88rem;
  color: #334155;
  line-height: 1.4;
  font-weight: 500;
}

.card-border-glow {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background-color: #0047a5;
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.facility-card:hover {
  transform: translateY(-6px);
  background: #ffffff;
  box-shadow: 0 22px 44px rgba(0, 45, 107, 0.08);
  border-color: rgba(0, 71, 165, 0.16);
}

.facility-card:hover .facility-img {
  transform: scale(1.05);
}

.facility-card:hover .card-border-glow {
  transform: scaleX(1);
}

.clinical-suites-bar {
  margin-top: 32px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  background: linear-gradient(135deg, #002d6b 0%, #00183d 100%);
  border-radius: 24px;
  padding: 32px;
  color: #ffffff;
}

.suite-item {
  display: flex;
  align-items: flex-start;
  gap: 14px;
}

.suite-icon {
  width: 42px;
  height: 42px;
  border-radius: 12px;
  background: rgba(255, 199, 0, 0.14);
  color: #ffc700;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.suite-item h4 {
  color: #ffffff;
  font-size: 1rem;
  font-weight: 700;
  margin: 0 0 4px 0;
}

.suite-item p {
  color: #cbd5e1;
  font-size: 0.86rem;
  line-height: 1.5;
  margin: 0;
}

@media (max-width: 992px) {
  .facilities-grid,
  .clinical-suites-bar {
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }
}

@media (max-width: 768px) {
  .facilities-section {
    padding: 80px 0;
  }
  .facilities-grid,
  .clinical-suites-bar {
    grid-template-columns: 1fr;
  }
}
</style>
