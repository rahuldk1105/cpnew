
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const sectionVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
  }),
};

const HomeCtaSection = () => {
  return (
    <motion.section
      variants={sectionVariants}
      custom={4} 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.05 }}
      className="text-center py-16 md:py-24 bg-gradient-to-r from-brand-sky-blue/20 via-brand-primary-blue/10 to-brand-sky-blue/20"
    >
      <h2 className="text-4xl md:text-5xl font-display mb-6 text-brand-text-dark">
        Ready to <span className="gradient-text">Join Us?</span>
      </h2>
      <p className="text-lg md:text-xl text-gray-700 mb-10 max-w-2xl mx-auto">
        Whether you're an athlete, investor, or partner, CP SPORTS offers unparalleled opportunities to shape the future of sports.
      </p>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
        <Button asChild size="lg" className="bg-brand-primary-blue hover:bg-brand-secondary-blue text-brand-text-light font-bold py-3 px-8 text-lg rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
          <Link to="/contact">Get Involved</Link>
        </Button>
        <Button asChild size="lg" variant="outline" className="border-brand-primary-blue text-brand-primary-blue hover:bg-brand-primary-blue hover:text-brand-text-light font-bold py-3 px-8 text-lg rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
          <Link to="/founder">Meet Our Founder</Link>
        </Button>
      </div>
    </motion.section>
  );
};

export default HomeCtaSection;
  