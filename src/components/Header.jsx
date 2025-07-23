
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navItems = [
  { name: 'Home', path: '/' },
 // { name: 'Sports Academies', path: '/cp-sports-academy' },
  { name: 'Sports Infra', path: '/cp-infra' },
  { name: 'Infotech & Solutions', path: '/cp-infotech' },
  { name: 'International Scouting', path: '/international-scouting' },
];

const logoUrl = "https://i.ibb.co/Df3QnDrh/c80698d8-4380-4b7f-9e2b-82336adaf7d6-removebg-preview.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const activeLinkStyle = "text-brand-primary-blue scale-110 font-semibold";
  const inactiveLinkStyle = "text-brand-text-dark hover:text-brand-sky-blue transition-colors duration-300";

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 50, delay: 0.2 }}
      className="fixed top-0 left-0 right-0 z-50 bg-brand-background-light/90 backdrop-blur-md shadow-md"
    >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-3">
          <img src={logoUrl} alt="CP SPORTS Logo" className="h-16 w-auto md:h-18" />
          <h1 className="text-3xl md:text-3xl font-display font-bold text-brand-text-dark">
            CP <span className="text-brand-primary-blue">SPORTS</span>
          </h1>
        </Link>

        <nav className="hidden md:flex space-x-6 items-center">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `${isActive ? activeLinkStyle : inactiveLinkStyle} text-sm font-medium uppercase tracking-wider`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Toggle menu" className="text-brand-text-dark hover:bg-brand-sky-blue/20">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-brand-background-light pb-4 border-t border-brand-neutral-medium"
        >
          <nav className="flex flex-col items-center space-y-4 pt-4">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={toggleMenu}
                className={({ isActive }) =>
                  `${isActive ? activeLinkStyle : inactiveLinkStyle} text-lg font-medium uppercase py-2`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;
  