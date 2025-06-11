
import React from 'react';
import { Zap, Building, Code, Users } from 'lucide-react';
import BusinessUnitSection from '@/pages/HomePageSections/BusinessUnitSection';

const BusinessUnitsOverview = () => {
  const businessUnits = [
    { 
      name: "CP Sports Academy", 
      icon: <Zap/>, 
      description: "High-performance training, 500+ students, 6+ branches.", 
      link: "/cp-sports-academy", 
      cta: "Train with Champions", 
      imageDescription: "Young athletes in intense training session at CP Sports Academy",
      imageUrl: "https://i.ibb.co/kgnYfmfQ/cpacademy.webp"
    },
    { 
      name: "CP Infra", 
      icon: <Building/>, 
      description: "Building 50+ acres of sports infrastructure, 15+ facilities.", 
      link: "/cp-infra", 
      cta: "Build Your Arena", 
      imageDescription: "State-of-the-art sports stadium under construction by CP Infra",
      imageUrl: "https://i.ibb.co/Kp1JbJCw/Whats-App-Image-2025-05-13-at-19-28-50.jpg"
    },
    { 
      name: "CP Infotech", 
      icon: <Code/>, 
      description: "SaaS solutions like Track My Academy & Track My Matches.", 
      link: "/cp-infotech", 
      cta: "Digitize Your Sport", 
      imageDescription: "Futuristic sports technology interface from CP Infotech",
      imageUrl: "https://www.queensu.ca/gazette/sites/gazettewww/files/assets/WEB%20Coding%20arnold-francisca-nPhl2x4fk2s-unsplash.jpg"
    },
    { 
      name: "International Scouting", 
      icon: <Users/>, 
      description: "100+ Indian players, esspecially Tamil Nadu Players placed in global tournaments.", 
      link: "/international-scouting", 
      cta: "Discover Global Talent", 
      imageDescription: "Scout observing a football match for International Scouting division",
      imageUrl: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1493&q=80"
    },
  ];

  return (
    <>
      <div id="verticals" className="pt-2"></div>
      {businessUnits.map((unit, index) => (
        <BusinessUnitSection key={unit.name} unit={unit} index={index} />
      ))}
    </>
  );
};

export default BusinessUnitsOverview;
  