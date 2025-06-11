
import React from 'react';
import TestimonialsSection from '@/pages/HomePageSections/TestimonialsSection';

const TestimonialsSlider = () => {
  const testimonials = [
    {
      quote: "My son aravind Krishna is going for football coaching in this academy. Coaches are so skilled and the facilities are really good. Coaches understands the kids very much and train accordingly. Most importantly kids are getting lot of exposure in tournaments which are getting conducted frequently. My son enjoys football now and all credit goes to CP sports academy",
      name: "Ganesh Kannan",
      role: "Parent of Academy Student",
      avatarKey: "parent-avatar-1",
      imageDescription: "Smiling parent with child in CP Sports Academy gear"
    },
    {
      quote: "My son last 6 month are learn here... such a wonderful sports ground and coach are good communication to students. Many events are conducting and bring also out side event.... so healthy sports academy",
      name: "Suresh U",
      role: "Parent of Academy Student",
      avatarKey: "player-avatar-1",
      imageDescription: "Young footballer in professional kit scouted by CP SPORTS"
    },
    {
      quote: "Most peaceful place for kid's.Coaches are friendly to kids.Traning are good and performance also Great. They are conducting tournament.",
      name: "Hemanathan S",
      role: "Professional Footballer and D Liscensed Coach",
      avatarKey: "client-avatar-1",
      imageDescription: "Professional director using Track My Academy in an office setting"
    },
    {
      quote: "Best academy in chennai.Great hospitality and friendly coach.I highly recommend this for kids❤️",
      name: "Nandhini Gnanam",
      role: "Parent of Academy Student",
      avatarKey: "client-avatar-2",
      imageDescription: "Commissioner at a new sports complex built by CP Infra"
    },
  ];

  return <TestimonialsSection testimonials={testimonials} />;
};

export default TestimonialsSlider;
  