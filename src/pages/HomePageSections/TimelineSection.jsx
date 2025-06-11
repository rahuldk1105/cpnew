
import React from 'react';
import { motion } from 'framer-motion';
import TimelineItem from './TimelineItem';

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
  }),
};

const TimelineSection = ({ timelineEvents }) => {
  return (
    <motion.section
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.05 }}
      className="py-16 md:py-24 bg-brand-primary-blue/5"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-display text-center mb-16 text-brand-text-dark">
          Our Growth <span className="gradient-text">Timeline</span>
        </h2>
        <div className="relative">
          <div className="hidden md:block absolute top-0 left-1/2 w-1 bg-brand-sky-blue/50 h-full -ml-0.5"></div>
          {timelineEvents.map((event, index) => (
            <TimelineItem key={index} event={event} index={index} />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default TimelineSection;
  