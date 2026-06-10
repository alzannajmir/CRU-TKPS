<template>
  <Navbar />

  <HeroSection />
  <AboutSection />
  <VisionMissionSection />
  <HistorySection />
  <ServicesSection />
  <FacilitiesSection />
  <ResearchSection />
  <TeamSection />
  <PartnerSection />
  <ContactSection />

  <Footer />
</template>

<script setup>
import Navbar from '../components/layout/Navbar.vue'
import Footer from '../components/layout/Footer.vue'

import HeroSection from '../components/sections/HeroSection.vue'
import AboutSection from '../components/sections/AboutSection.vue'
import VisionMissionSection from '../components/sections/VisionMissionSection.vue'
import HistorySection from '../components/sections/HistorySection.vue'
import ServicesSection from '../components/sections/ServicesSection.vue'
import FacilitiesSection from '../components/sections/FacilitiesSection.vue'
import ResearchSection from '../components/sections/ResearchSection.vue'
import TeamSection from '../components/sections/TeamSection.vue'
import PartnerSection from '../components/sections/PartnerSection.vue'
import ContactSection from '../components/sections/ContactSection.vue'
</script>