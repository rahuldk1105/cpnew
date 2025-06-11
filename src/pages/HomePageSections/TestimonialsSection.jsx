
import React from 'react';
import { motion } from 'framer-motion';
import { Carousel, CarouselContent, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import TestimonialCard from './TestimonialCard';

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.8, ease: "easeOut" },
  }),
};

const TestimonialsSection = ({ testimonials }) => {
  return (
    <motion.section
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      className="py-16 md:py-24 bg-brand-neutral-light/50"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-display text-center mb-16 text-brand-text-dark">
          Words From Our <span className="gradient-text">Community</span>
        </h2>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-[-50px] top-1/2 -translate-y-1/2 hidden md:inline-flex bg-brand-background-light/80 hover:bg-brand-sky-blue text-brand-primary-blue hover:text-brand-text-light" />
          <CarouselNext className="absolute right-[-50px] top-1/2 -translate-y-1/2 hidden md:inline-flex bg-brand-background-light/80 hover:bg-brand-sky-blue text-brand-primary-blue hover:text-brand-text-light" />
        </Carousel>
      </div>
    </motion.section>
  );
};

export default TestimonialsSection;
  