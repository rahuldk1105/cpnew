import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import HeroCarousel from '@/components/HeroCarousel';

const logoUrl = "https://i.ibb.co/Df3QnDrh/c80698d8-4380-4b7f-9e2b-82336adaf7d6-removebg-preview.png";

const HeroSection = () => {
  const { scrollYProgress } = useScroll();
  const heroScale = useTransform(scrollYProgress, [0, 0.1], [1, 1.2]); // Scale effect for the carousel
  const heroOpacity = useTransform(scrollYProgress, [0, 0.05, 0.15], [1, 0.5, 0]); // Opacity for carousel and text
  // heroTextY is removed as text will be centered within the spacer
  // Responsive spacer height calculation - full viewport height for better mobile coverage
  const spacerHeight = useTransform(scrollYProgress, [0, 0.15], ["100vh", "0vh"]); // Use full viewport height for complete coverage

  const heroImages = [
    {
      id: 1,
      url: "https://i.ibb.co/jPyHz7dm/unnamed-2.webp",
      alt: "Dynamic panoramic sports collage"
    },
    {
      id: 2,
      url: "https://i.ibb.co/Wvjs3MMT/unnamed-1.webp",
      alt: "Athletes training on a sports field"
    },
    {
      id: 3,
      url: "https://i.ibb.co/5xcFrbNB/2023-08-09.webp",
      alt: "Stadium with sports equipment"
    },
    {
      id: 4,
      url: "https://i.ibb.co/TMP78SwS/unnamed.webp",
      alt: "Sports team celebrating victory"
    },
    {
      id: 5,
      url: "https://i.ibb.co/pjVF36rt/2023-06-01.webp",
      alt: "Sports team celebrating victory"
    },
    {
      id: 6,
      url: "https://i.ibb.co/Psw5RPs4/2023-05-04.webp",
      alt: "Sports team celebrating victory"
    },
    {
      id: 7,
      url: "https://i.ibb.co/gZv3fygB/2024-05-13.webp",
      alt: "Athletes in training session"
    }
  ];

  return (
    <div style={{ position: 'relative' }}>
      <motion.section
        style={{ scale: heroScale, opacity: heroOpacity }}
        className="w-full h-screen fixed top-0 left-0 -z-10 flex justify-center items-center overflow-hidden"
      >
        <HeroCarousel
          images={heroImages}
          interval={6000}
          style={{ width: '100%', height: '100%' }}
        />
      </motion.section>

      {/* This div now acts as a spacer AND the container for the hero text content */}
      {/* Its height will match the carousel's initial aspect ratio height and then shrink */}
      <motion.div 
        style={{ height: spacerHeight }} 
        className="relative w-full flex flex-col justify-center items-center text-center text-brand-text-light z-10 px-4 pt-0"
      >
        {/* The content below will be centered within this spacer div */}
        {/* Opacity is applied directly to the content wrapper */}
        <motion.div 
          style={{ opacity: heroOpacity }} 
          className="w-full max-w-3xl mx-auto h-full flex flex-col justify-center items-center overflow-hidden" // Ensure content fits and is centered in spacer
        >
          <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="mb-4 sm:mb-6 md:mb-8 flex justify-center mt-[-40px] sm:mt-[-20px] md:mt-0" // Added negative top margin to push logo higher on mobile
        >
          <img src={logoUrl} alt="CP SPORTS Logo" className="w-48 h-48 sm:w-52 sm:h-52 md:w-60 md:h-60 lg:w-85 lg:h-85 object-contain" /> {/* Increased logo size for mobile */}
        </motion.div>
        <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-display mb-2 sm:mb-6 drop-shadow-xl">
          CP <span className="text-brand-sky-blue">SPORTS</span>
        </h1>
        <p className="text-base sm:text-xl md:text-3xl mb-4 sm:mb-10 drop-shadow-md font-medium">
          Elevating Sports. Empowering Futures.
        </p>
        <Button asChild size="lg" className="bg-brand-primary-blue hover:bg-brand-secondary-blue text-brand-text-light font-bold py-2 sm:py-4 px-5 sm:px-10 text-sm sm:text-lg rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300">
          <Link to="/cp-sports-academy">Discover Our World <ArrowRight className="ml-2 h-4 sm:h-5 w-4 sm:w-5" /></Link>
        </Button>
      </motion.div>
      </motion.div> {/* Close spacer */}
    </div> /* Close outer div */
  );
};

export default HeroSection;