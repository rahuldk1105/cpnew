
import React, { useEffect } from 'react';
import HeroSection from '@/pages/HomePageSections/HeroSection';
import BusinessUnitsOverview from '@/pages/HomePageSections/BusinessUnitsOverview';
import GrowthTimeline from '@/pages/HomePageSections/GrowthTimeline';
import PartnerShowcase from '@/pages/HomePageSections/PartnerShowcase';
import TestimonialsSlider from '@/pages/HomePageSections/TestimonialsSlider';
import HomeCtaSection from '@/pages/HomePageSections/HomeCtaSection';

const HomePage = () => {
  useEffect(() => {
    document.body.classList.add('hide-scrollbar');
    document.documentElement.classList.add('hide-scrollbar'); 
    return () => {
      document.body.classList.remove('hide-scrollbar');
      document.documentElement.classList.remove('hide-scrollbar');
    };
  }, []);

  return (
    <div className="overflow-x-hidden">
      <HeroSection />
      <div className="relative z-20 bg-brand-background-light mt-[100vh]">
        <BusinessUnitsOverview />
        <GrowthTimeline />
        <PartnerShowcase />
        <TestimonialsSlider />
        <HomeCtaSection />
      </div>
    </div>
  );
};

export default HomePage;
  