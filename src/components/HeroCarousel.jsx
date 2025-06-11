import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const HeroCarousel = ({ images, interval = 5000, children, style }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <div className="relative w-full h-full overflow-hidden" style={{ ...style }}>
      {/* Responsive container that adapts to screen size */}
      <div className="absolute inset-0 w-full h-full">
      <AnimatePresence initial={false}>
        <motion.div
          key={images[currentIndex].id}
          initial={{ opacity: 0, scale: 1.1, x: currentIndex % 2 === 0 ? 100 : -100 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.6, ease: "anticipate" } }}
          transition={{ duration: 1.2, type: "spring", stiffness: 50 }}
          className="absolute inset-0 w-full h-full"
        >
          <img
            className="w-full h-full object-cover"
            alt={images[currentIndex].alt}
            src={images[currentIndex].url}
          />
          <div className="absolute inset-0 bg-brand-primary-blue/30"></div>
        </motion.div>
      </AnimatePresence>

      {children}

      <div className="absolute bottom-4 sm:bottom-6 md:bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-2 sm:space-x-3 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 rounded-full ${currentIndex === index ? 'bg-brand-sky-blue' : 'bg-white/70'} transition-all shadow-md hover:bg-brand-sky-blue/70`}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
      </div>
    </div>
  );
};

export default HeroCarousel;