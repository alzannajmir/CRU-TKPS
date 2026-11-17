<template>
  <Navbar />

  <main>
    <HeroSection />
    <PartnerSection />
    <AboutSection />
    <ServicesSection />
    <HistorySection />
    <ResearchSection />
    <PublicationsSection />
    <FacilitiesSection />
    <TeamSection />
    <ContactSection />
  </main>

  <Footer />
</template>

<script setup>
import Navbar from "../components/layout/Navbar.vue";
import Footer from "../components/layout/Footer.vue";

import HeroSection from "../components/sections/HeroSection.vue";
import PartnerSection from "../components/sections/PartnerSection.vue";
import AboutSection from "../components/sections/AboutSection.vue";
import ServicesSection from "../components/sections/ServicesSection.vue";
import HistorySection from "../components/sections/HistorySection.vue";
import ResearchSection from "../components/sections/ResearchSection.vue";
import PublicationsSection from "../components/sections/PublicationSection.vue";
import FacilitiesSection from "../components/sections/FacilitiesSection.vue";
import TeamSection from "../components/sections/TeamSection.vue";
import ContactSection from "../components/sections/ContactSection.vue";
</script>
