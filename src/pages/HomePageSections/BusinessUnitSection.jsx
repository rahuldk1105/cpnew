
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const sectionVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
  }),
};

const BusinessUnitSection = ({ unit, index }) => {
  const iconColor = 'text-brand-primary-blue'; 
  
  return (
    <motion.section
      key={unit.name}
      custom={index}
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.05 }}
      className={`${index === 0 ? 'pt-0 md:pt-0 pb-8 md:pb-12' : 'py-8 md:py-12'} ${index % 2 === 0 ? 'bg-brand-neutral-light/50' : 'bg-brand-background-light'}`}
    >
      <div className={`container mx-auto px-6 flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12`}>
        <div className="md:w-1/2 text-center md:text-left">
          <motion.div 
            variants={sectionVariants} 
            custom={0.5}
            className="inline-flex items-center justify-center p-3 bg-brand-sky-blue/20 rounded-full mb-6"
          >
            {React.cloneElement(unit.icon, { className: `w-10 h-10 ${iconColor}`})}
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-display mb-4 text-brand-text-dark">
            {unit.name.split(" ")[0]} <span className="gradient-text">{unit.name.substring(unit.name.indexOf(" ") + 1)}</span>
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-md mx-auto md:mx-0">{unit.description}</p>
          <Button asChild size="lg" variant="default" className="bg-brand-primary-blue hover:bg-brand-secondary-blue text-brand-text-light font-semibold">
            <Link to={unit.link}>{unit.cta} <ArrowRight className="ml-2 h-5 w-5" /></Link>
          </Button>
        </div>
        <motion.div 
          variants={sectionVariants} 
          custom={0.7}
          className="md:w-1/2"
        >
          <img  className="w-full h-auto max-h-[400px] object-cover rounded-xl shadow-2xl" alt={unit.imageDescription} src={unit.imageUrl || "https://images.unsplash.com/photo-1690721606848-ac5bdcde45ea"} />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default BusinessUnitSection;
  