const resolvePdfUrl = (filename) =>
  new URL(`../assets/publications/${filename}`, import.meta.url).href;

export const projectsData = [
  {
    id: "sinovac-trial",
    year: 2020,
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
        "6 sites (FK-UNPAD, Garuda Primary Health Center, Dago, Ciumbuleuit, Sukapakir, UNPAD Health Clinic)",
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
        link: resolvePdfUrl("Sinovac-COVID-19.pdf"),
      },
    ],
  },
  {
    id: "adult-vaccine",
    year: 2024,
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
    year: 1995,
    badge: "Pediatric Research",
    title: "Child Vaccine & Growth Studies",
    description:
      "Comprehensive research supporting pediatric immunization programs and long-term surveillance of child growth and development milestones in West Java since 1995.",
    longDescription:
      "A landmark multi-decade longitudinal study monitoring early pediatric immunological benchmarks alongside physical growth milestones across primary care operational hubs in West Java.",
    impact:
      "Helped optimize local primary health care monitoring systems.",
    details: {
      sponsor: "Faculty of Medicine UNPAD / Dr. Hasan Sadikin Hospital",
      participants: "Infants and pediatric groups",
      duration: "Long-term Surveillance",
      sites: "6 Primary Health Centers & CRU Hub",
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
  {
    id: "hexavalent-phase-1",
    year: 2026,
    badge: "Ongoing Clinical Trial",
    title: "HEXAVALENT Phase I",
    description:
      "Phase I hexavalent vaccine study in newborns to evaluate the safety and immune response of a six-in-one combination vaccine.",
    longDescription:
      "This phase I study evaluates the safety, tolerability, and immunogenicity profile of a hexavalent vaccine (diphtheria, tetanus, whole-cell pertussis, hepatitis B, Hib, and polio) administered to newborns as part of the routine immunization schedule in Indonesia. The study is conducted across multiple sites with monitoring by trained healthcare personnel.",
    impact:
      "The study results support the implementation of the hexavalent combination vaccine in the national immunization program to reduce the number of injections infants receive.",
    details: {
      sponsor: "Bio Farma",
      participants: "75 newborns",
      duration: "Apr 2026 – Apr 2027",
      sites: "Bandung Kiwari Regional Hospital, Cintia Independent Midwife Practice, Dewi Independent Midwife Practice",
      status: "Start-up • Site Activation",
    },
    progress: [
      {
        date: "April 2026",
        title: "Site Initiation & Staff Training",
        desc: "Three study sites activated and healthcare personnel trained on the study protocol.",
        status: "done",
      },
      {
        date: "Ongoing",
        title: "Subject Enrollment & Vaccination",
        desc: "Newborn registration and vaccination according to the study visit schedule.",
        status: "active",
      },
    ],
    publications: [],
  },
  {
    id: "hep-b-vaccine",
    year: 2026,
    badge: "Ongoing Clinical Trial",
    title: "Hepatitis B Vaccine",
    description:
      "Hepatitis B vaccine study in newborns to evaluate the safety and effectiveness of the vaccine in preventing hepatitis B infection.",
    longDescription:
      "This study evaluates the safety and immunogenicity of the hepatitis B vaccine administered to newborns as part of routine immunization. The study is conducted at several primary health centers and partner clinics with long-term observation.",
    impact:
      "This study contributes to preventing hepatitis B infection from an early age through vaccination of newborns.",
    details: {
      sponsor: "Bio Farma",
      participants: "270 newborns",
      duration: "May 2026 – Mar 2027",
      sites: "Batujajar Primary Health Center, Garuda Primary Health Center, Al Faiha Clinic, Sri Maemunah Cihampelas Independent Midwife Practice",
      status: "Start-up Phase",
    },
    progress: [
      {
        date: "May 2026",
        title: "Study Site Opening",
        desc: "Study sites activated and participant enrollment initiated.",
        status: "done",
      },
      {
        date: "Ongoing",
        title: "Observation & Data Collection",
        desc: "Subjects are followed up and health data collected periodically.",
        status: "active",
      },
    ],
    publications: [],
  },
  {
    id: "hexavalent-phase-2",
    year: 2026,
    badge: "Ongoing Clinical Trial",
    title: "HEXAVALENT Phase II",
    description:
      "Site readiness and enrollment study for the phase II hexavalent vaccine at multiple health centers to evaluate safety and immunogenicity in a larger cohort.",
    longDescription:
      "This multi-center phase II study evaluates the safety and immunogenicity profile of the hexavalent vaccine in a larger infant cohort across five health sites in Bandung. The study aims to support the licensing and use of the combination vaccine in routine immunization programs.",
    impact:
      "Data from this study are used to support regulatory decisions and the use of the hexavalent vaccine at the national level.",
    details: {
      sponsor: "Bio Farma",
      participants: "405 newborns",
      duration: "Oct 2026 – Mar 2028",
      sites: "Bandung Kiwari Regional Hospital, Batujajar Primary Health Center, Garuda Primary Health Center, Al Faiha Clinic, Sri Maemunah Cihampelas Independent Midwife Practice",
      status: "Start-up Phase",
    },
    progress: [
      {
        date: "October 2026",
        title: "Site Preparation & Initial Enrollment",
        desc: "Five study sites activated and initial cohort enrollment initiated.",
        status: "done",
      },
      {
        date: "Ongoing",
        title: "Multi-Site Cohort Enrollment",
        desc: "Subject enrollment across partner sites is ongoing.",
        status: "active",
      },
    ],
    publications: [],
  },
  {
    id: "b-cov-22-trial",
    year: 2022,
    badge: "Clinical Trial Experiences",
    title: "B-COV 22 Trial",
    description:
      "A COVID-19 booster vaccine study conducted as part of CRU-TKPS efforts to evaluate the safety and immunogenicity profile of booster vaccines in adult subjects. This study is listed in the CRU-TKPS research activity register according to the profile book.",
    longDescription:
      "The B-COV 22 Trial is one of the COVID-19 vaccine research activities carried out by CRU-TKPS. The study aims to evaluate the immune response and safety of booster vaccines in a subject cohort, supporting the advanced vaccination strategy in Indonesia.",
    impact:
      "The study results contributed to the national COVID-19 booster vaccination policy.",
    details: {
      sponsor: "Bio Farma (Persero) & Partners",
      participants: "Adult subjects",
      duration: "Ongoing",
      sites: "Hasan Sadikin Hospital & Partners",
      status: "Active Phase",
    },
    progress: [
      {
        date: "2022",
        title: "Study Initiation",
        desc: "The B-COV 22 Trial was activated as part of CRU-TKPS research activities.",
        status: "done",
      },
      {
        date: "Ongoing",
        title: "Immunogenicity Data Collection",
        desc: "Evaluation of the immune response and booster vaccine safety is ongoing.",
        status: "active",
      },
    ],
    publications: [],
  },
  {
    id: "indovac",
    year: 2022,
    badge: "Clinical Trial Experiences",
    title: "INDOVAC Trial",
    description:
      "A study of the Indonesian-made COVID-19 vaccine (INDOVAC) conducted by CRU-TKPS as part of the national vaccination effort. INDOVAC is a domestically developed COVID-19 vaccine.",
    longDescription:
      "The INDOVAC Trial is a clinical trial of the Indonesian-made COVID-19 vaccine conducted by CRU-TKPS. The study supports national efforts to provide a domestically produced COVID-19 vaccine for immunization programs.",
    impact:
      "Supports the national COVID-19 vaccination program with an Indonesian-made vaccine.",
    details: {
      sponsor: "National Vaccine Partner",
      participants: "Adult and adolescent cohorts",
      duration: "Ongoing / Periodic",
      sites: "Hasan Sadikin Hospital & Partners",
      status: "Active Phase",
    },
    progress: [
      {
        date: "2022",
        title: "Study Initiation",
        desc: "The INDOVAC study was activated at CRU-TKPS.",
        status: "done",
      },
      {
        date: "Ongoing",
        title: "Safety & Immunogenicity Evaluation",
        desc: "Safety and immune response monitoring of the INDOVAC vaccine is ongoing.",
        status: "active",
      },
    ],
    publications: [],
  },
  {
    id: "cyd-trial",
    year: 1995,
    badge: "Clinical Trial Experiences",
    title: "CYD Trial",
    description:
      "A dengue (CYD) vaccine study conducted by CRU-TKPS. This study is part of the pediatric vaccine research activities that have been conducted since 1995.",
    longDescription:
      "The CYD Trial is a dengue vaccine clinical trial conducted by CRU-TKPS. This study is part of pediatric vaccine research that has been continuously conducted since the establishment of the CRU in 1995.",
    impact:
      "Supports dengue control through pediatric vaccination.",
    details: {
      sponsor: "Pediatric Vaccine Partner",
      participants: "Pediatric group",
      duration: "Long-term Surveillance",
      sites: "Partner Primary Health Centers & CRU Hub",
      status: "Long-term Monitoring",
    },
    progress: [
      {
        date: "1995",
        title: "Project Inception",
        desc: "Pediatric vaccine studies began with the establishment of CRU-TKPS in 1995.",
        status: "done",
      },
      {
        date: "Continuous",
        title: "Long-Term Monitoring",
        desc: "Continued monitoring of the dengue vaccine is ongoing.",
        status: "active",
      },
    ],
    publications: [],
  },
  {
    id: "anhui",
    year: 2021,
    badge: "Clinical Trial Experiences",
    title: "ANHUI (Zifei) Trial",
    description:
      "A clinical study in collaboration with Anhui Zifei, listed in the CRU-TKPS partner network according to the profile book. This study is part of CRU-TKPS international collaboration.",
    longDescription:
      "The ANHUI (Zifei) Trial is a clinical trial conducted in international collaboration with Anhui Zifei. This collaboration is listed in the CRU-TKPS partner network, which includes international institutions such as Sanofi Pasteur, Bio Farma, MCRI Australia, CEPI, and others.",
    impact:
      "Expands the CRU-TKPS international clinical research collaboration network.",
    details: {
      sponsor: "Anhui Zifei & International Partners",
      participants: "Study-specific cohort",
      duration: "Project-based",
      sites: "Hasan Sadikin Hospital & Partners",
      status: "Completed",
    },
    progress: [
      {
        date: "2021",
        title: "Collaboration Initiation",
        desc: "Clinical study collaboration with Anhui Zifei activated.",
        status: "done",
      },
      {
        date: "Completed",
        title: "Execution & Reporting",
        desc: "The clinical study has been completed and reported.",
        status: "done",
      },
    ],
    publications: [],
  },
  {
    id: "growth-development-research",
    year: 1995,
    badge: "Long-Term Surveillance",
    title: "Child Growth & Development and Social Pediatrics Research",
    description:
      "More than 30 research studies on child growth and development and social pediatrics have been continuously conducted since 1995 to the present, as the core activity of CRU-TKPS according to the profile book.",
    longDescription:
      "As part of the Growth and Development – Social Pediatrics Division, CRU-TKPS has conducted more than 30 research studies on child growth and development and social pediatrics since 1995. This research is conducted across partner primary health center networks and primary healthcare facilities in Bandung and surrounding areas, focusing on long-term surveillance and child health interventions.",
    impact:
      "Supports the optimization of child health and development monitoring systems at primary health centers and primary healthcare facilities in West Java.",
    details: {
      sponsor: "Faculty of Medicine UNPAD / Hasan Sadikin Hospital & Partners",
      participants: "Infants & children (multi-center)",
      duration: "1995 – Present (Long-Term Surveillance)",
      sites: "Partner Primary Health Centers & CRU Hub",
      status: "Long-term Monitoring",
    },
    progress: [
      {
        date: "1995",
        title: "Research Initiation",
        desc: "Child growth and development studies began with the establishment of CRU-TKPS in 1995.",
        status: "done",
      },
      {
        date: "Continuous",
        title: "Continuous Surveillance",
        desc: "Child growth and development monitoring continues at partner primary health centers and the CRU Hub.",
        status: "active",
      },
    ],
    publications: [
      {
        title: "Child Growth & Development Surveillance Report",
        link: "#",
      },
    ],
  },
];
