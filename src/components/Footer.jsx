
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Mail, Send, Phone, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input'; 

const Footer = () => {
  const socialLinks = [
    { icon: <Facebook className="h-6 w-6" />, href: "https://www.facebook.com/p/Cp-Sports-academy-sports-promoters-100089884742301/", name: "Facebook" },
    { icon: <Youtube className="h-6 w-6" />, href: "https://www.youtube.com/@CP_sports_academy", name: "Youtube" },
    { icon: <Instagram className="h-6 w-6" />, href: "https://www.instagram.com/cpsports_chennai/", name: "Instagram" },
    { icon: <Linkedin className="h-6 w-6" />, href: "https://www.linkedin.com/company/cp-sports-group/", name: "LinkedIn" },
  ];

  const year = new Date().getFullYear();
  const logoUrl = "https://storage.googleapis.com/hostinger-horizons-assets-prod/02ba2335-7c0a-43c1-a6c8-fd5949c39ba4/94521a9f9c66c9779ef9d30ed1fa3311.png";


  return (
    <footer className="bg-gradient-to-r from-brand-sky-blue/30 via-brand-neutral-light to-brand-neutral-light text-brand-text-dark py-12 px-4 border-t border-brand-neutral-medium">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center mb-4">
            <img src={logoUrl} alt="CP SPORTS Logo" className="h-10 mr-3" />
            <h3 className="text-xl font-display font-semibold text-brand-primary-blue">CP SPORTS</h3>
          </div>
          <p className="text-sm text-gray-700 leading-relaxed">
            Pioneering the future of sports through innovative development, world-class infrastructure, cutting-edge technology, and global talent scouting.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4 text-brand-text-dark">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/cp-sports-academy" className="text-gray-600 hover:text-brand-primary-blue transition-colors">CP Sports Academy</Link></li>
            <li><Link to="/cp-infra" className="text-gray-600 hover:text-brand-primary-blue transition-colors">CP Infra</Link></li>
            <li><Link to="/cp-infotech" className="text-gray-600 hover:text-brand-primary-blue transition-colors">CP Infotech</Link></li>
            <li><Link to="/international-scouting" className="text-gray-600 hover:text-brand-primary-blue transition-colors">International Scouting</Link></li>
            <li><Link to="/founder" className="text-gray-600 hover:text-brand-primary-blue transition-colors">Founder Page</Link></li>
            <li><Link to="/contact" className="text-gray-600 hover:text-brand-primary-blue transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4 text-brand-text-dark">Stay Connected</h3>
          <div className="flex space-x-4 mb-4">
            {socialLinks.map((link) => (
              <a key={link.name} href={link.href} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-brand-primary-blue transition-colors" aria-label={link.name}>
                {link.icon}
              </a>
            ))}
          </div>
          <p>
              <a href="mailto:admin@cpsports.com" className="flex items-center text-gray-600 hover:text-brand-primary-blue transition-colors">
                <Mail className="h-4 w-4 mr-2" /> admin@cpsports.com
              </a>
              <a href="+91 89255 15618" className="flex items-center text-gray-600 hover:text-brand-primary-blue transition-colors">
                <Phone className="h-4 w-4 mr-2" /> +91 89255 15618
              </a>
            </p>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-4 text-brand-text-dark">Get in Touch</h3>
          <address className="not-italic text-sm text-gray-700 space-y-2">
            <p>CP SPORTS Headquarters</p>
            <p>NO-11/214, KALAYER STREET, SUSHILA NAGAR, KOVILAMBAKKAM ,CHENNAI - 600129 </p>
           
          </address>
        </div>
      </div>
      <div className="mt-10 border-t border-brand-neutral-medium pt-8 text-center text-sm text-gray-500">
        <p>&copy; {year} CP SPORTS. All rights reserved. Elevating Sports, Empowering Futures.</p>
      </div>
    </footer>
  );
};

export default Footer;
  