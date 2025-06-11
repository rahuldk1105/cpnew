
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Phone, MessageSquare as MessageSquareText, X, Users, Bot } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const FloatingCTA = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();

  const excludedPaths = ['/founder']; 

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setIsOpen(false); 
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (excludedPaths.includes(location.pathname)) {
    return null;
  }

  const toggleOpen = () => setIsOpen(!isOpen);

  const ctaButtonVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 260, damping: 20 } },
  };

  const menuVariants = {
    closed: { opacity: 0, y: 20, scale: 0.95, transition: { duration: 0.2 } },
    open: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.3, staggerChildren: 0.1, delayChildren: 0.1 } },
  };

  const itemVariants = {
    closed: { opacity: 0, y: 10 },
    open: { opacity: 1, y: 0 },
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-6 right-6 z-50"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={ctaButtonVariants}
        >
          <AnimatePresence>
            {isOpen && (
              <motion.div
                variants={menuVariants}
                initial="closed"
                animate="open"
                exit="closed"
                className="mb-3 p-3 bg-brand-background-light rounded-lg shadow-xl border border-brand-neutral-medium flex flex-col space-y-2 w-60"
              >
                <motion.a href="/contact#enquiry" variants={itemVariants} className="w-full">
                  <Button variant="default" className="w-full justify-start bg-brand-sky-blue hover:bg-brand-primary-blue text-brand-text-light">
                    <MessageSquareText className="mr-2 h-5 w-5" /> General Enquiry
                  </Button>
                </motion.a>
                <motion.a href="/cp-infotech#demo" variants={itemVariants} className="w-full">
                  <Button variant="outline" className="w-full justify-start border-brand-sky-blue text-brand-sky-blue hover:bg-brand-sky-blue/10">
                    <Phone className="mr-2 h-5 w-5" /> Request Infotech Demo
                  </Button>
                </motion.a>
                 <motion.a href="/cp-sports-academy#join" variants={itemVariants} className="w-full">
                  <Button variant="outline" className="w-full justify-start border-brand-secondary-blue text-brand-secondary-blue hover:bg-brand-secondary-blue/10">
                    <Users className="mr-2 h-5 w-5" /> Join Academy
                  </Button>
                </motion.a>
              </motion.div>
            )}
          </AnimatePresence>
          
          <Button
            size="lg"
            className="rounded-full shadow-2xl w-16 h-16 bg-brand-primary-blue hover:bg-brand-secondary-blue text-white flex items-center justify-center"
            onClick={toggleOpen}
            aria-label={isOpen ? "Close CTA menu" : "Open CTA menu"}
          >
            {isOpen ? <X size={28} className="text-white" /> : <div className="flex items-center justify-center w-full h-full"><Bot size={32} className="text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.7)]" strokeWidth={2.5} /></div>}
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingCTA;
  
