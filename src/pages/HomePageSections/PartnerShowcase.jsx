
import React from 'react';
import PartnersSection from '@/pages/HomePageSections/PartnersSection';

const PartnerShowcase = () => {
  const partners = [
    { name: "Indian Football 7 Association", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0FODn9nQ633gxEaR3s2a671_fej0xkc_K4w&s", description: "Official logo of Indian Football 7s Federation" },
    { name: "Vels Vidyashram", logo: "https://velsvidyashram.ac.in/cantonment/wp-content/uploads/2021/01/main-logo-263x284.png", description: "Logo of Vels Vidyashram" },
    { name: "GGN International School", logo: "https://www.chennaischooldirectory.com/assets/upload/profileimg/PRFIMGUSR18691669036239.png", description: "GGN International School" },
    { name: "Puma India", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNOhHZ-0c3De3DFuwuosHkDnJRDwhDb-tLdw&s", description: "Logo of Puma India" },
    { name: "Yuvha games", logo: "https://media.licdn.com/dms/image/v2/C4D0BAQEc0x4jw994xw/company-logo_200_200/company-logo_200_200/0/1650353874377?e=2147483647&v=beta&t=tNQVYX-gL7TWYYI5Y4-N9nexsy28eJn2h0dQeHEJjpU", description: "Logo of yuvha Games" },
    { name: "Nivia Sports India", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a8/Nivia_Sports_official_logo_2022.png", description: "Logo of Nivia Sports India" },
    { name: "Decathlon", logo: "https://cdn.shopify.com/s/files/1/1330/6287/files/DECATHLON_logo_lockup_stacked_blue_rgb_---_Expires_on_31-12-2100.jpg?v=1744260897", description: "Logo of Decathlon" },
    { name: "KL Cup", logo: "https://www.maximevents.asia/_next/image?url=%2Fkuala-lumpur-cup.png&w=256&q=75", description: "Logo of KL CUP" },
    { name: "Veeran Youth League", logo: "https://i.ibb.co/gqmrMyw/VYL.jpg", description: "Logo of Veeran Youth League" },
    { name: "The Jersey Makerz", logo: "https://i.ibb.co/kgGXPF2N/Screenshot-2025-05-16-at-7-07-48-PM.png", description: "Logo of The Jersey Makerz" },
  ];

  return <PartnersSection partners={partners} />;
};

export default PartnerShowcase;
  