
import React from 'react';
import { Zap, Building, Code, Users, TrendingUp, HeartHandshake as Handshake } from 'lucide-react';
import TimelineSection from '@/pages/HomePageSections/TimelineSection';

const GrowthTimeline = () => {
  const timelineEvents = [
    { year: "2022", title: "CP Sports Academy Founded", description: "Began with a single academy, focusing on grassroots cricket training.", icon: <Zap /> },
    { year: "2023", title: "Expansion & Infra Focus", description: "Opened 3 new academy branches and launched CP Infra to build quality sports facilities.", icon: <Building /> },
    { year: "2024", title: "Tech Division Launched", description: "CP Infotech established, started development of Track My Academy.", icon: <Code /> },
    { year: "2025", title: "International Scouting Arm", description: "Expanded into international talent scouting, placing first batch of players abroad.", icon: <Users /> },
    { year: "2025", title: "Global Recognition", description: "CP SPORTS recognized as a leader in sports tech and development.", icon: <TrendingUp /> },
    { year: "Present", title: "Continued Growth", description: "Expanding all verticals, forging new partnerships, and empowering the future of sports globally.", icon: <Handshake /> },
  ];

  return <TimelineSection timelineEvents={timelineEvents} />;
};

export default GrowthTimeline;
  