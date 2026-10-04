<template>
  <section id="publications" class="publications-section">
    <div class="container">
      <!-- Section Header -->
      <div class="section-header">
        <span class="sub-title">Academic Works</span>
        <h2>Research <span class="highlight">Publications</span></h2>
        <p class="section-desc">
          Daftar lengkap studi dan publikasi ilmiah yang diselenggarakan oleh Clinical Research Unit (CRU).
        </p>
        <div class="accent-line"></div>
      </div>

      <!-- Filter & Search Bar -->
      <div class="table-controls">
        <div class="search-box">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <input 
            type="text" 
            v-model="searchQuery" 
            placeholder="Cari judul, investigator, atau sponsor..."
          />
        </div>

        <div class="filter-box">
          <label>Filter Tahun:</label>
          <select v-model="selectedYear">
            <option value="All">Semua Tahun</option>
            <option v-for="year in availableYears" :key="year" :value="year">
              {{ year }}
            </option>
          </select>
        </div>
      </div>

      <!-- Responsive Table Container -->
      <div class="table-responsive">
        <table class="journals-table">
          <thead>
            <tr>
              <th class="col-no">No</th>
              <th class="col-year">Year</th>
              <th class="col-title">Title</th>
              <th class="col-pi">Principal Investigator</th>
              <th class="col-sponsor">Sponsor</th>
              <th class="col-pub">Publication / Status</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in filteredPublications" :key="index">
              <td class="col-no">{{ index + 1 }}</td>
              <td class="col-year"><span class="year-badge">{{ item.year }}</span></td>
              <td class="col-title font-medium">{{ item.title }}</td>
              <td class="col-pi">{{ item.pi }}</td>
              <td class="col-sponsor">
                <span class="sponsor-tag">{{ item.sponsor }}</span>
              </td>
              <td class="col-pub">
                <!-- Jika masih berjalan / Ongoing -->
                <span v-if="item.isOngoing" class="status-badge ongoing">
                  <span class="dot"></span> Ongoing research
                </span>

                <!-- Jika sudah ada link publikasi -->
                <div v-else class="pub-link-wrapper">
                  <span class="journal-name">{{ item.journalName }}</span>
                  <a 
                    :href="item.link" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    class="journal-link"
                  >
                    <span>Read Journal</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </a>
                </div>
              </td>
            </tr>

            <!-- Tampilan Jika Data Tidak Ditemukan -->
            <tr v-if="filteredPublications.length === 0">
              <td colspan="6" class="no-data">
                Tidak ada data publikasi yang sesuai dengan pencarian.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from "vue";

const searchQuery = ref("");
const selectedYear = ref("All");

// Data Publikasi Sesuai Gambar
const publications = ref([
  {
    year: "2023",
    title: "Case Finding Study of Hand, Foot, and Mouth Disease in Children aged 6 to 71 months old in Bandung, Indonesia",
    pi: "Eddy Fadlyana",
    sponsor: "SINOVAC",
    isOngoing: true,
  },
  {
    year: "2023",
    title: "Immunogenicity and Safety of IndoVac® as a Heterologous Booster Dose Against COVID-19 in Children 12-17 Years of Age (Indovac Remaja)",
    pi: "Eddy Fadlyana",
    sponsor: "Biofarma",
    isOngoing: true,
  },
  {
    year: "2022",
    title: "Serosurvey Study of Hand, Foot, and Mouth Disease in Healthy Children aged 6 months to 71 Months old in Bandung City and West Bandung District, Indonesia",
    pi: "Rodman Tarigan",
    sponsor: "SINOVAC",
    isOngoing: true,
  },
  {
    year: "2022",
    title: "Immunogenicity and Safety of SARS-CoV-2 Protein Subunit Recombinant Vaccine (CoV2-Booster 0222) as a Booster Dose Against COVID-19 in Indonesian Adults (IndoVac Dewasa)",
    pi: "Kusnandi Rusmil",
    sponsor: "Biofarma",
    isOngoing: true,
  },
  {
    year: "2022",
    title: "An observational study, following a trial, to assess the immunogenicity and safety of standard dose versus fractional doses of COVID-19 vaccines (Pfizer-BioNTech or AstraZeneca) or standard dose CoronaVac given as an additional dose after priming with CoronaVac or AstraZeneca in healthy adults in Indonesia (BCOV22)",
    pi: "Eddy Fadlyana",
    sponsor: "MCRI Australia",
    isOngoing: true,
  },
  {
    year: "2021",
    title: "Immunogenicity and safety in healthy adults of full dose versus half doses of COVID-19 vaccine (ChAdOx1-S or BNT162b2) or full-dose CoronaVac administered as a booster dose after priming with CoronaVac: a randomised, observer-masked, controlled trial in Indonesia",
    pi: "Eddy Fadlyana",
    sponsor: "Kementrian Kesehatan RI",
    isOngoing: false,
    journalName: "Lancet: Infectious Diseases",
    link: "https://www.thelancet.com/journals/laninf/article/PIIS1473-3099(22)00800-3/fulltext",
  },
  {
    year: "2021",
    title: "Efficacy and Safety of the RBD-Dimer-Based Covid-19 Vaccine ZF2001 in Adults",
    pi: "Rodman Tarigan",
    sponsor: "Anhui Zifei",
    isOngoing: false,
    journalName: "NEJM",
    link: "https://www.nejm.org/doi/full/10.1056/NEJMoa2202261",
  },
  {
    year: "2020",
    title: "A phase III, observer-blind, randomized, placebo-controlled study of the efficacy, safety, and immunogenicity of SARS-CoV-2 inactivated vaccine in healthy adults aged 18–59 years: An interim analysis in Indonesia",
    pi: "Eddy Fadlyana",
    sponsor: "SINOVAC",
    isOngoing: false,
    journalName: "Elsevier: Vaccine",
    link: "https://www.sciencedirect.com/science/article/pii/S0264410X2101255X",
  },
  {
    year: "2020",
    title: "Immunogenicity and safety profile of a primary dose of bivalent oral polio vaccine given simultaneously with DTwP-Hb-Hib and...",
    pi: "Eddy Fadlyana",
    sponsor: "Bio Farma",
    isOngoing: false,
    journalName: "Elsevier: Vaccine",
    link: "https://www.sciencedirect.com/",
  },
]);

// Mendapatkan daftar tahun unik untuk dropdown filter
const availableYears = computed(() => {
  const years = publications.value.map((item) => item.year);
  return [...new Set(years)].sort((a, b) => b - a);
});

// Computed untuk memfilter data berdasarkan kata kunci pencarian dan tahun
const filteredPublications = computed(() => {
  return publications.value.filter((item) => {
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      item.pi.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      item.sponsor.toLowerCase().includes(searchQuery.value.toLowerCase());

    const matchesYear =
      selectedYear.value === "All" || item.year === selectedYear.value;

    return matchesSearch && matchesYear;
  });
});
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap");

.publications-section {
  background-color: #f8fafc;
  padding: 100px 0;
  font-family: "Plus Jakarta Sans", sans-serif;
  color: #1e293b;
}

.container {
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 24px;
}

/* --- SECTION HEADER --- */
.section-header {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 48px;
}

.sub-title {
  font-size: 13px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  color: #0052cc;
  margin-bottom: 8px;
}

h2 {
  font-size: 2.4rem;
  color: #002d6b;
  margin: 0 0 12px 0;
  font-weight: 700;
}

h2 .highlight {
  color: #0047a5;
}

.section-desc {
  font-size: 1.05rem;
  color: #64748b;
  max-width: 600px;
  margin: 0 0 16px 0;
}

.accent-line {
  width: 50px;
  height: 4px;
  background-color: #ffc700;
  border-radius: 2px;
}

/* --- CONTROLS (SEARCH & FILTER) --- */
.table-controls {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  margin-bottom: 24px;
  flex-wrap: wrap;
}

.search-box {
  display: flex;
  align-items: center;
  gap: 10px;
  background: #ffffff;
  border: 1px solid #e2e8f0;
  padding: 10px 16px;
  border-radius: 12px;
  flex: 1;
  max-width: 420px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.02);
}

.search-box svg {
  color: #94a3b8;
}

.search-box input {
  border: none;
  outline: none;
  width: 100%;
  font-size: 0.95rem;
  font-family: inherit;
  color: #1e293b;
}

.filter-box {
  display: flex;
  align-items: center;
  gap: 10px;
}

.filter-box label {
  font-size: 0.9rem;
  font-weight: 600;
  color: #475569;
}

.filter-box select {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  padding: 10px 16px;
  border-radius: 12px;
  font-size: 0.9rem;
  font-family: inherit;
  font-weight: 600;
  color: #002d6b;
  cursor: pointer;
  outline: none;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.02);
}

/* --- TABLE STYLING --- */
.table-responsive {
  width: 100%;
  overflow-x: auto;
  background: #ffffff;
  border-radius: 16px;
  border: 1px solid #e2e8f0;
  box-shadow: 0 10px 30px rgba(0, 45, 107, 0.03);
}

.journals-table {
  width: 100%;
  border-collapse: collapse;
  text-align: left;
  font-size: 0.93rem;
}

.journals-table th {
  background-color: #f1f5f9;
  color: #002d6b;
  font-weight: 700;
  padding: 16px 20px;
  border-bottom: 2px solid #e2e8f0;
  white-space: nowrap;
}

.journals-table td {
  padding: 18px 20px;
  border-bottom: 1px solid #f1f5f9;
  vertical-align: top;
  line-height: 1.6;
}

.journals-table tbody tr:hover {
  background-color: #f8fafc;
}

/* Column Width Adjustments */
.col-no { width: 50px; text-align: center; }
.col-year { width: 90px; }
.col-title { min-width: 320px; color: #0f172a; }
.col-pi { width: 160px; font-weight: 600; color: #334155; }
.col-sponsor { width: 140px; }
.col-pub { width: 220px; }

/* BADGES & ELEMENTS */
.year-badge {
  display: inline-block;
  background: rgba(0, 71, 165, 0.08);
  color: #0047a5;
  font-weight: 700;
  padding: 4px 10px;
  border-radius: 6px;
  font-size: 0.85rem;
}

.sponsor-tag {
  font-weight: 600;
  color: #475569;
  background: #f1f5f9;
  padding: 4px 10px;
  border-radius: 6px;
  font-size: 0.85rem;
}

.status-badge.ongoing {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: #fef3c7;
  color: #b45309;
  font-weight: 600;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 0.82rem;
}

.status-badge.ongoing .dot {
  width: 6px;
  height: 6px;
  background-color: #d97706;
  border-radius: 50%;
}

.pub-link-wrapper {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.journal-name {
  font-weight: 700;
  color: #002d6b;
  font-size: 0.88rem;
}

.journal-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: #0052cc;
  font-weight: 600;
  font-size: 0.85rem;
  text-decoration: none;
  transition: color 0.2s ease;
}

.journal-link:hover {
  color: #002d6b;
  text-decoration: underline;
}

.no-data {
  text-align: center;
  padding: 40px !important;
  color: #94a3b8;
  font-weight: 500;
}

/* RESPONSIVE DESIGN */
@media (max-width: 768px) {
  .publications-section {
    padding: 60px 0;
  }
  
  h2 {
    font-size: 1.8rem;
  }
  
  .table-controls {
    flex-direction: column;
    align-items: stretch;
  }
  
  .search-box {
    max-width: 100%;
  }
  
  .filter-box {
    justify-content: space-between;
  }
}
</style>