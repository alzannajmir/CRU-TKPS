export const projectsData = [
  {
    id: "sinovac-trial",
    badge: "Clinical Trial Experiences",
    title: "Sinovac COVID-19 Vaccine Trial",
    description:
      "In 2020, during the pandemic, our team conducted Indonesia’s first study on an inactivated COVID‑19 vaccine. The President of the Republic of Indonesia, along with several ministers, visited our site during the kick off of the trial.",
    longDescription:
      "In 2020, during the height of the pandemic, our research cluster successfully executed the baseline phase-3 trials for inactivated SARS-CoV-2 vaccines in Indonesia. This critical study evaluated the immunogenicity safety curves across local vulnerable demographic components, accelerated directly under state surveillance.",
    impact:
      "The results of this study serves as the core evidence for nationwide rollout of COVID-19 vaccination in Indonesia.",
    details: {
      sponsor: "Bio Farma (Persero)",
      participants: "1620 healthy adults",
      duration: "Aug 2020 to May 2021 (10 months)",
      sites:
        "6 sites (FK-UNPAD, Puskesmas Garuda, Dago, Ciumbuleuit, Sukapakir, Klinik Kesehatan UNPAD)",
      status: "Completed & Published",
    },
    progress: [
      {
        date: "August 2020",
        title: "Trial Site Initiation & Kick Off",
        desc: "6 primary sites activated with state visits.",
        status: "done",
      },
      {
        date: "January 2021",
        title: "Interim Safety & Efficacy Report",
        desc: "Primary immunogenicity data analyzed for Emergency Use Authorization (EUA).",
        status: "done",
      },
      {
        date: "May 2021",
        title: "Final Cohort Follow-up",
        desc: "Completed 6-month safety evaluation post-second dose.",
        status: "done",
      },
      {
        date: "Ongoing",
        title: "Long-term Persistence Surveillance",
        desc: "Monitoring antibody decay and protection duration.",
        status: "active",
      },
    ],
    publications: [
      {
        title: "Efficacy and Safety of Inactivated Vaccine - Lancet Regional",
        link: "jurnal-hexa-01.pdf", // Cukup tulis nama file. Pastikan file ada di src/assets/pdf/
      },
    ],
  },
  {
    id: "adult-vaccine",
    badge: "Clinical Trial Experiences",
    title: "Adult Vaccine Studies",
    description:
      "Clinical trial research on vaccine efficacy, safety, and immunogenicity profiles across diverse adult demographics to support national immunization policies.",
    longDescription:
      "This structural cluster covers evaluation frameworks for advanced adult epidemiological protections. We monitor active cohorts across major regional public hospital clusters to formulate data-driven guidelines for national healthcare infrastructures.",
    impact: "Contributed data for national booster program guidelines.",
    details: {
      sponsor: "National & International Sponsors",
      participants: "Multi-center cohorts",
      duration: "Ongoing / Periodic",
      sites: "Hasan Sadikin Hospital & Partnering Facilities",
      status: "Active Phase",
    },
    progress: [
      {
        date: "Jan 2024",
        title: "Cohort Enrollment",
        desc: "Sourcing diverse adult demographics.",
        status: "done",
      },
      {
        date: "Jul 2025",
        title: "Mid-Term Data Evaluation",
        desc: "Formulating current safety profile.",
        status: "active",
      },
    ],
    publications: [
      {
        title: "Adult Immunization Guidelines & Efficacy Profiles",
        link: "#",
      },
    ],
  },
  {
    id: "pediatric-research",
    badge: "Pediatric Research",
    title: "Child Vaccine & Growth Studies",
    description:
      "Comprehensive research supporting pediatric immunization programs and long-term surveillance of child growth and development milestones in West Java since 1995.",
    longDescription:
      "A landmark multi-decade longitudinal study monitoring early pediatric immunological benchmarks alongside physical growth milestones across primary care operational hubs in West Java.",
    impact:
      "Helped optimize local primary health care (Puskesmas) monitoring systems.",
    details: {
      sponsor: "Faculty of Medicine UNPAD / Dr. Hasan Sadikin Hospital",
      participants: "Infants and pediatric groups",
      duration: "Long-term Surveillance",
      sites: "6 Primary Health Centers (Puskesmas) & CRU Hub",
      status: "Long-term Monitoring",
    },
    progress: [
      {
        date: "1995",
        title: "Project Inception",
        desc: "Baseline surveillance setup in West Java.",
        status: "done",
      },
      {
        date: "Continuous",
        title: "Data Stream Optimization",
        desc: "Integrating results with regional primary care health centers.",
        status: "active",
      },
    ],
    publications: [
      {
        title: "Pediatric Milestone Surveillance Reports",
        link: "#",
      },
    ],
  },
];
