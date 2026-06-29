<template>
  <navbar />

  <section id="team" class="TeamDetail">
    <div class="glow-shape shape-glow-blue"></div>
    <div class="animated-ring-shape"></div>

    <div class="container">
      <div class="back-nav">
        <a href="/" class="btn-back">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          <span>Back to Home</span>
        </a>
      </div>

      <div class="section-header">
        <span class="sub-title">Our Experts</span>
        <h2>Meet Our <span class="highlight">Core Team</span></h2>
        <div class="accent-line"></div>
      </div>

      <div class="team-grid">
        <div class="team-card" v-for="(member, index) in coreTeam" :key="index">
          <div class="member-image-container">
            <img
              :src="getImageUrl(member.imageName)"
              :alt="member.name"
              class="member-photo"
              @error="setDefaultImage"
            />

            <button class="share-btn" aria-label="Share profile">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <circle cx="18" cy="5" r="3"></circle>
                <circle cx="6" cy="12" r="3"></circle>
                <circle cx="18" cy="19" r="3"></circle>
                <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
              </svg>
            </button>
          </div>

          <div class="member-info-box">
            <h3 class="member-name">{{ member.name }}</h3>
            <p class="member-role">{{ member.role }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <Footer />
</template>

<script setup>
import { ref } from "vue";
import navbar from "../components/layout/Navbar.vue";
import Footer from "../components/layout/Footer.vue";

const images = import.meta.glob("../assets/images/team/*", {
  eager: true,
  import: "default",
});

const coreTeam = ref([
  {
    name: "Dr. Eddy Fadlyana, dr., Sp.P(K)., M.Kes",
    role: "Advisor",
    imageName: "DrEddy.png",
  },
  {
    name: "Prof. Dr. Kusnandi Rusmil, dr., Sp.A(K)., MM",
    role: "Advisor",
    imageName: "ProfKus.png",
  },
  {
    name: "Dr. Rodman Tarigan, dr., Sp.P(K)., M.Kes",
    role: "Responsible / Chairman",
    imageName: "dr.rodman.jpeg",
  },
  {
    name: "dr. Astri",
    role: "Co-Chairman",
    imageName: "dr.astri.jpeg",
  },
  {
    name: "dr. Fariza",
    role: "Researcher",
    imageName: "dr.fariza.jpeg",
  },
  {
    name: "dr. Iclas",
    role: "Researcher",
    imageName: "dr.iclas.jpeg",
  },
  {
    name: "dr. Safira",
    role: "Researcher",
    imageName: "dr.safira.jpeg",
  },
  {
    name: "Teh Kekeu",
    role: "Administration",
    imageName: "tehkekeu.jpeg",
  },
  {
    name: "Teh Ninis",
    role: "",
    imageName: "tehninis.jpeg",
  },
  {
    name: "Alzan",
    role: "",
    imageName: "alzan.jpeg",
  },
]);

const getImageUrl = (fileName) => {
  return (
    images[`../assets/images/team/${fileName}`] ||
    images["../assets/images/team/default.png"]
  );
};

const setDefaultImage = (event) => {
  event.target.src = images["../assets/images/team/default.png"];
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap");

.TeamDetail {
  background-color: #ffffff;
  padding: 60px 0 120px 0;
  font-family: "Plus Jakarta Sans", sans-serif;
  position: relative;
  overflow: hidden;
}

.container {
  max-width: 1200px;
  margin: auto;
  padding: 0 24px;
  position: relative;
  z-index: 3;
}

/* Layout Flexbox untuk menyejajarkan kedua tombol */
.back-nav {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 32px;
  margin-top: 50px;
}

/* Garis pembatas vertikal tipis antara kedua tombol */
.nav-separator {
  color: #cbd5e1;
  font-weight: 300;
}

.btn-back {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: #0047a5;
  text-decoration: none;
  font-weight: 700;
  transition:
    color 0.2s,
    transform 0.2s;
}

.btn-back:hover {
  color: #002d6b;
  transform: translateX(-4px);
}

/* Latar Belakang Dekoratif */
.glow-shape {
  position: absolute;
  pointer-events: none;
  border-radius: 50%;
  z-index: 1;
}
.shape-glow-blue {
  width: 600px;
  height: 600px;
  background: radial-gradient(
    circle,
    rgba(0, 71, 165, 0.03) 0%,
    rgba(0, 71, 165, 0) 70%
  );
  top: 10%;
  left: -200px;
  filter: blur(60px);
}
.animated-ring-shape {
  position: absolute;
  width: 260px;
  height: 260px;
  border: 2px dashed rgba(0, 71, 165, 0.04);
  border-radius: 50%;
  bottom: 5%;
  right: -100px;
  z-index: 1;
  pointer-events: none;
}

/* Header Section */
.section-header {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 80px;
}
.sub-title {
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  color: #0047a5;
  margin-bottom: 8px;
}
h2 {
  font-size: 2.5rem;
  color: #002d6b;
  margin: 0 0 16px 0;
  font-weight: 700;
}
h2 .highlight {
  color: #0047a5;
}
.accent-line {
  width: 50px;
  height: 4px;
  background-color: #ffc700;
  border-radius: 2px;
}

/* Grid System Sesuai Gambar: 4 Kolom di Desktop */
/* Grid System */
.team-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px 24px;
}

/* Wrapper Kartu */
.team-card {
  position: relative;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  height: 100%;
  transition: transform 0.3s ease;
}

.team-card:hover {
  transform: translateY(-6px);
}

/* Kontainer Foto */
.member-image-container {
  position: relative;
  width: 100%;
  height: 450px; /* tinggi semua foto dibuat sama */
  background-color: #f2f4f7;
  overflow: hidden;
  border-radius: 10px 10px 0 0;
}

/* Foto */
.member-photo {
  width: 100%;
  height: 100%;
  object-fit: cover; /* otomatis crop sesuai ukuran */
  object-position: center top; /* fokus ke wajah */
  transition: transform 0.4s ease;
  display: block;
}

/* Hover foto */
.team-card:hover .member-photo {
  transform: scale(1.05);
}

/* Tombol Share */
.share-btn {
  position: absolute;
  bottom: -16px;
  right: 20px;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #c19a82;
  color: #ffffff;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 5;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  transition:
    transform 0.3s ease,
    background-color 0.3s ease;
}

.share-btn:hover {
  transform: scale(1.1);
  background-color: #a37f68;
}

/* Box informasi */
.member-info-box {
  background-color: #ffffff;
  padding: 20px 16px;
  margin-top: -25px;
  margin-left: 12px;
  margin-right: 12px;
  position: relative;
  z-index: 4;
  box-shadow: 0 10px 30px rgba(0, 45, 107, 0.08);
  border-radius: 8px;
  border-left: 3px solid #0047a5;
  flex-grow: 1;
  min-height: 120px; /* tinggi box sama */
  transition: box-shadow 0.3s ease;
}

.team-card:hover .member-info-box {
  box-shadow: 0 15px 35px rgba(0, 45, 107, 0.15);
}

/* Nama */
.member-name {
  font-size: 1rem;
  color: #002d6b;
  font-weight: 700;
  margin: 0 0 8px 0;
  line-height: 1.4;
}

/* Jabatan */
.member-role {
  font-size: 0.85rem;
  color: #64748b;
  font-weight: 500;
  margin: 0;
  text-transform: capitalize;
}

/* Responsive */
@media (max-width: 1200px) {
  .team-grid {
    grid-template-columns: repeat(3, 1fr);
  }

  .member-image-container {
    height: 300px;
  }
}

@media (max-width: 992px) {
  .team-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .member-image-container {
    height: 280px;
  }
}

@media (max-width: 576px) {
  .team-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .member-image-container {
    height: 350px;
  }

  .member-info-box {
    margin-left: 20px;
    margin-right: 20px;
  }
}
</style>
