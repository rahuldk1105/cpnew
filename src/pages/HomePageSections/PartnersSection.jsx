
import React from 'react';
import { motion } from 'framer-motion';

const sectionVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
  }),
};

const PartnersSection = ({ partners }) => {
  return (
    <motion.section
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.05 }}
      className="py-16 md:py-24 bg-brand-background-light"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-display text-center mb-16 text-brand-text-dark">
          Our Valued <span className="gradient-text">Partners</span>
        </h2>
        <div className="relative overflow-hidden group">
          <motion.div 
            className="flex space-x-0"
            animate={{ x: ['0%', '-100%'] }}
            transition={{ ease: 'linear', duration: 15, repeat: Infinity }}
          >
            {[...partners, ...partners].map((partner, index) => ( 
              <div key={`${partner.name}-${index}`} className="flex-shrink-0 w-60 h-32 flex items-center justify-center mx-1">
                <img 
                  className="max-w-full max-h-full object-contain transition-all duration-300 hover:scale-110 hover:shadow-lg" 
                  alt={partner.description} 
                  src={partner.logo} 
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default PartnersSection;
  