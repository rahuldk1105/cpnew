
import React from 'react';
import { motion } from 'framer-motion';

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
  }),
};

const TimelineItem = ({ event, index }) => {
  const iconColor = 'text-brand-text-light'; 

  return (
    <motion.div
      key={index}
      custom={index}
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className={`mb-6 flex md:items-center w-full ${index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'}`}
    >
      <div className="hidden md:block w-1/2"></div>
      <div className="hidden md:flex relative w-12 h-12 bg-brand-sky-blue rounded-full shadow-md items-center justify-center text-brand-text-light z-10">
        {React.cloneElement(event.icon, { className: `w-6 h-6 ${iconColor}`})}
      </div>
      <div className={`w-full md:w-1/2 p-6 rounded-lg shadow-xl glassmorphism-card ${index % 2 === 0 ? 'md:mr-auto md:ml-8' : 'md:ml-auto md:mr-8'}`}>
        <div className={`flex items-center md:hidden mb-3 ${index % 2 === 0 ? 'justify-start' : 'justify-start'}`}>
           <div className="relative w-10 h-10 bg-brand-sky-blue rounded-full shadow-md flex items-center justify-center text-brand-text-light z-10 mr-4">
            {React.cloneElement(event.icon, { className: `w-5 h-5 ${iconColor}`})}
          </div>
          <h3 className="text-2xl font-semibold text-brand-primary-blue">{event.year}</h3>
        </div>
        <h3 className="hidden md:block text-2xl font-semibold text-brand-primary-blue mb-1">{event.year}</h3>
        <h4 className="text-xl font-semibold text-brand-text-dark mb-2">{event.title}</h4>
        <p className="text-sm text-gray-600">{event.description}</p>
      </div>
    </motion.div>
  );
};

export default TimelineItem;
  