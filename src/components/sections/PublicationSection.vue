<template>
  <section id="publications" class="publications-section">
    <div class="container">
      <!-- Section Header -->
      <div class="section-header">
        <span class="eyebrow-pill">Academic Works &amp; Evidence</span>
        <h2>Scientific <span class="highlight">Publications</span></h2>
        <p class="section-desc">
          Peer-reviewed studies in leading international journals and active
          clinical research registries conducted by CRU-TKPS.
        </p>
        <div class="accent-line"></div>
      </div>

      <!-- Filter & Search Bar -->
      <div class="table-controls">
        <div class="search-box">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <input
            type="search"
            v-model="searchQuery"
            aria-label="Search publications by title, principal investigator, or sponsor"
            placeholder="Search by study title, investigator, or sponsor..."
          />
        </div>

        <div class="filter-box">
          <label for="pub-year-select">Filter by Year:</label>
          <select id="pub-year-select" v-model="selectedYear">
            <option value="All">All Years</option>
            <option v-for="year in availableYears" :key="year" :value="year">
              {{ year }}
            </option>
          </select>
        </div>
      </div>

      <!-- Responsive Table Container (modern-web-guidance: responsive-table) -->
      <div
        tabindex="0"
        role="region"
        aria-labelledby="publications-table-caption"
        class="table-responsive"
      >
        <table class="journals-table">
          <caption id="publications-table-caption" class="sr-only">
            Clinical Research Unit Publications and Study Registry
          </caption>
          <thead>
            <tr>
              <th scope="col" class="col-no">No</th>
              <th scope="col" class="col-year">Year</th>
              <th scope="col" class="col-title">Study / Publication Title</th>
              <th scope="col" class="col-pi">Principal Investigator</th>
              <th scope="col" class="col-sponsor">Sponsor</th>
              <th scope="col" class="col-pub">Publication / Status</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in filteredPublications" :key="index">
              <td class="col-no">{{ index + 1 }}</td>
              <td class="col-year">
                <span class="year-badge">{{ item.year }}</span>
              </td>
              <th scope="row" class="col-title">{{ item.title }}</th>
              <td class="col-pi">{{ item.pi }}</td>
              <td class="col-sponsor">
                <span class="sponsor-tag">{{ item.sponsor }}</span>
              </td>
              <td class="col-pub">
                <span v-if="item.isOngoing" class="status-badge ongoing">
                  <span class="dot"></span> Ongoing Study
                </span>

                <div v-else class="pub-link-wrapper">
                  <span class="journal-badge">{{ item.journalName }}</span>
                  <a
                    :href="item.link"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="journal-link"
                  >
                    <span>Read Journal Article</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path
                        d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
                      ></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </a>
                </div>
              </td>
            </tr>

            <tr v-if="filteredPublications.length === 0">
              <td colspan="6" class="no-data">
                No publications found matching your search criteria.
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

const publications = ref([
  {
    year: "2023",
    title:
      "Case Finding Study of Hand, Foot, and Mouth Disease in Children aged 6 to 71 months old in Bandung, Indonesia",
    pi: "Dr. Eddy Fadlyana, dr., Sp.A(K)",
    sponsor: "SINOVAC",
    isOngoing: true,
  },
  {
    year: "2023",
    title:
      "Immunogenicity and Safety of IndoVac® as a Heterologous Booster Dose Against COVID-19 in Children 12-17 Years of Age (Indovac Remaja)",
    pi: "Dr. Eddy Fadlyana, dr., Sp.A(K)",
    sponsor: "Bio Farma",
    isOngoing: true,
  },
  {
    year: "2022",
    title:
      "Serosurvey Study of Hand, Foot, and Mouth Disease in Healthy Children aged 6 months to 71 Months old in Bandung City and West Bandung District, Indonesia",
    pi: "Dr. Rodman Tarigan, dr., Sp.A(K)",
    sponsor: "SINOVAC",
    isOngoing: true,
  },
  {
    year: "2022",
    title:
      "Immunogenicity and Safety of SARS-CoV-2 Protein Subunit Recombinant Vaccine (CoV2-Booster 0222) as a Booster Dose Against COVID-19 in Indonesian Adults (IndoVac Dewasa)",
    pi: "Prof. Dr. Kusnandi Rusmil, dr., Sp.A(K)",
    sponsor: "Bio Farma",
    isOngoing: true,
  },
  {
    year: "2022",
    title:
      "An observational study, following a trial, to assess the immunogenicity and safety of standard dose versus fractional doses of COVID-19 vaccines (Pfizer-BioNTech or AstraZeneca) or standard dose CoronaVac given as an additional dose after priming with CoronaVac or AstraZeneca in healthy adults in Indonesia (BCOV22)",
    pi: "Dr. Eddy Fadlyana, dr., Sp.A(K)",
    sponsor: "MCRI Australia",
    isOngoing: true,
  },
  {
    year: "2021",
    title:
      "Immunogenicity and safety in healthy adults of full dose versus half doses of COVID-19 vaccine (ChAdOx1-S or BNT162b2) or full-dose CoronaVac administered as a booster dose after priming with CoronaVac: a randomised, observer-masked, controlled trial in Indonesia",
    pi: "Dr. Eddy Fadlyana, dr., Sp.A(K)",
    sponsor: "Ministry of Health RI",
    isOngoing: false,
    journalName: "The Lancet Infectious Diseases",
    link: "https://www.thelancet.com/journals/laninf/article/PIIS1473-3099(22)00800-3/fulltext",
  },
  {
    year: "2021",
    title:
      "Efficacy and Safety of the RBD-Dimer-Based Covid-19 Vaccine ZF2001 in Adults",
    pi: "Dr. Rodman Tarigan, dr., Sp.A(K)",
    sponsor: "Anhui Zhifei",
    isOngoing: false,
    journalName: "New England Journal of Medicine (NEJM)",
    link: "https://www.nejm.org/doi/full/10.1056/NEJMoa2202261",
  },
  {
    year: "2020",
    title:
      "A phase III, observer-blind, randomized, placebo-controlled study of the efficacy, safety, and immunogenicity of SARS-CoV-2 inactivated vaccine in healthy adults aged 18–59 years: An interim analysis in Indonesia",
    pi: "Dr. Eddy Fadlyana, dr., Sp.A(K)",
    sponsor: "SINOVAC",
    isOngoing: false,
    journalName: "Elsevier: Vaccine",
    link: "https://www.sciencedirect.com/science/article/pii/S0264410X2101255X",
  },
  {
    year: "2020",
    title:
      "Immunogenicity and safety profile of a primary dose of bivalent oral polio vaccine given simultaneously with DTwP-Hb-Hib and inactivated poliovirus vaccine in Indonesian infants",
    pi: "Dr. Eddy Fadlyana, dr., Sp.A(K)",
    sponsor: "Bio Farma",
    isOngoing: false,
    journalName: "Elsevier: Vaccine",
    link: "https://www.sciencedirect.com/science/article/pii/S0264410X20309166",
  },
]);

const availableYears = computed(() => {
  const years = publications.value.map((item) => item.year);
  return [...new Set(years)].sort((a, b) => b - a);
});

const filteredPublications = computed(() => {
  return publications.value.filter((item) => {
    const q = searchQuery.value.toLowerCase();
    const matchesSearch =
      item.title.toLowerCase().includes(q) ||
      item.pi.toLowerCase().includes(q) ||
      item.sponsor.toLowerCase().includes(q) ||
      (item.journalName && item.journalName.toLowerCase().includes(q));

    const matchesYear =
      selectedYear.value === "All" || item.year === selectedYear.value;

    return matchesSearch && matchesYear;
  });
});
</script>

<style scoped>
.publications-section {
  background-color: #f8fafc;
  padding: 110px 0;
  color: #1e293b;
}

.section-header {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 48px;
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

.section-desc {
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
  border: 1px solid #cbd5e1;
  padding: 11px 16px;
  border-radius: 12px;
  flex: 1;
  max-width: 440px;
  box-shadow: 0 2px 6px rgba(0, 45, 107, 0.03);
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.search-box:focus-within {
  border-color: #0047a5;
  box-shadow: 0 0 0 3px rgba(0, 71, 165, 0.12);
}

.search-box svg {
  color: #64748b;
  flex-shrink: 0;
}

.search-box input {
  border: none;
  outline: none;
  width: 100%;
  font-size: 0.94rem;
  font-family: inherit;
  color: #0f172a;
  background: transparent;
}

.filter-box {
  display: flex;
  align-items: center;
  gap: 10px;
}

.filter-box label {
  font-size: 0.88rem;
  font-weight: 600;
  color: #475569;
}

.filter-box select {
  background: #ffffff;
  border: 1px solid #cbd5e1;
  padding: 10px 16px;
  border-radius: 12px;
  font-size: 0.9rem;
  font-family: inherit;
  font-weight: 600;
  color: #002d6b;
  cursor: pointer;
  outline: none;
  box-shadow: 0 2px 6px rgba(0, 45, 107, 0.03);
}

/* --- TABLE STYLING (modern-web-guidance: responsive-table) --- */
.table-responsive {
  overflow: auto;
  max-inline-size: 100%;
  max-block-size: min(680px, 82dvh);
  container-type: inline-size;
  background: #ffffff;
  border-radius: 20px;
  border: 1px solid rgba(0, 71, 165, 0.1);
  box-shadow: 0 12px 32px rgba(0, 45, 107, 0.04);
}

.journals-table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  text-align: left;
  font-size: 0.93rem;
  --label-no: "No";
  --label-year: "Year";
  --label-pi: "Investigator";
  --label-sponsor: "Sponsor";
  --label-pub: "Publication / Status";
}

.journals-table thead {
  position: sticky;
  inset-block-start: 0;
  z-index: 2;
}

.journals-table thead th {
  background-color: #f1f5f9;
  color: #002d6b;
  font-weight: 700;
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  padding: 16px 20px;
  border-bottom: 2px solid #e2e8f0;
  white-space: nowrap;
}

.journals-table tbody td,
.journals-table tbody th {
  padding: 18px 20px;
  border-bottom: 1px solid #f1f5f9;
  vertical-align: top;
  line-height: 1.6;
}

.journals-table tbody tr:hover {
  background-color: #f8fafc;
}

.col-no {
  width: 56px;
  text-align: center;
  color: #64748b;
  font-weight: 600;
}
.col-year {
  width: 90px;
}
.col-title {
  min-width: 320px;
  color: #0f172a;
  font-weight: 600;
}
.col-pi {
  width: 200px;
  font-weight: 600;
  color: #334155;
}
.col-sponsor {
  width: 150px;
}
.col-pub {
  width: 240px;
}

.year-badge {
  display: inline-block;
  background: rgba(0, 71, 165, 0.08);
  color: #0047a5;
  font-weight: 700;
  padding: 4px 10px;
  border-radius: 6px;
  font-size: 0.84rem;
}

.sponsor-tag {
  display: inline-block;
  font-weight: 600;
  color: #334155;
  background: #f1f5f9;
  padding: 4px 10px;
  border-radius: 6px;
  font-size: 0.84rem;
}

.status-badge.ongoing {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: #fef3c7;
  color: #92400e;
  font-weight: 600;
  padding: 5px 12px;
  border-radius: 999px;
  font-size: 0.8rem;
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
  align-items: flex-start;
  gap: 6px;
}

.journal-badge {
  display: inline-block;
  font-weight: 700;
  color: #002d6b;
  background: rgba(255, 199, 0, 0.22);
  padding: 3px 10px;
  border-radius: 6px;
  font-size: 0.8rem;
}

.journal-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: #0047a5;
  font-weight: 700;
  font-size: 0.84rem;
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
  color: #64748b;
  font-weight: 500;
}

/* Container query stacked cards for narrow screens */
@container (width < 720px) {
  .journals-table,
  .journals-table thead,
  .journals-table tbody,
  .journals-table tr,
  .journals-table th,
  .journals-table td {
    display: block;
    width: 100%;
    min-width: 0;
  }

  .journals-table thead {
    display: none;
  }

  .journals-table tbody tr {
    margin: 16px;
    width: auto;
    border: 1px solid #e2e8f0;
    border-radius: 14px;
    overflow: hidden;
    background: #ffffff;
  }

  .journals-table tbody th.col-title {
    position: sticky;
    inset-block-start: 0;
    z-index: 1;
    background: #f8fafc;
    color: #002d6b;
    padding: 14px 16px;
    border-bottom: 1px solid #e2e8f0;
  }

  .journals-table tbody td {
    padding: 10px 16px;
    text-align: left;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 12px;
  }

  .journals-table tbody td.col-no {
    display: none;
  }

  .journals-table tbody td.col-year::before {
    content: var(--label-year) ": ";
    font-weight: 700;
    color: #64748b;
    font-size: 0.8rem;
    text-transform: uppercase;
  }

  .journals-table tbody td.col-pi::before {
    content: var(--label-pi) ": ";
    font-weight: 700;
    color: #64748b;
    font-size: 0.8rem;
    text-transform: uppercase;
  }

  .journals-table tbody td.col-sponsor::before {
    content: var(--label-sponsor) ": ";
    font-weight: 700;
    color: #64748b;
    font-size: 0.8rem;
    text-transform: uppercase;
  }

  .journals-table tbody td.col-pub::before {
    content: var(--label-pub) ": ";
    font-weight: 700;
    color: #64748b;
    font-size: 0.8rem;
    text-transform: uppercase;
  }
}

@media (max-width: 768px) {
  .publications-section {
    padding: 80px 0;
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
