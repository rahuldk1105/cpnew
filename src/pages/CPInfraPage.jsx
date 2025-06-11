
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Building, HardHat, MapPin, Award, Lightbulb, ShieldCheck, CalendarClock, FileImage as ImageIcon, CheckCircle, Eye, Briefcase, Image as LucideImage } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const CPInfraPage = () => {
  const pageTitle = "CP Infra";
  const tagline = "Engineering the Future of Sports Infrastructure.";
  const iconColor = "text-brand-primary-blue";

  const heroOverlays = [
    { id: 1, text: "Precision Engineering", x: "10%", y: "20%" },
    { id: 2, text: "Sustainable Design", x: "70%", y: "30%" },
    { id: 3, text: "World-Class Standards", x: "40%", y: "75%" },
  ];

  const services = [
    { icon: <HardHat className={`w-10 h-10 ${iconColor}`} />, title: "Turf & Pitch Development", description: "Expert installation of natural and FIFA-certified artificial turfs for football, cricket, hockey, and more." },
    { icon: <Lightbulb className={`w-10 h-10 ${iconColor}`} />, title: "Advanced LED Lighting", description: "Energy-efficient, broadcast-quality LED lighting solutions for optimal visibility and performance." },
    { icon: <Building className={`w-10 h-10 ${iconColor}`} />, title: "Indoor & Outdoor Stadiums", description: "Design and construction of multi-sport indoor arenas and outdoor stadiums with spectator facilities." },
    { icon: <MapPin className={`w-10 h-10 ${iconColor}`} />, title: "Specialized Court Construction", description: "High-performance courts for tennis, basketball, badminton, volleyball, meeting international standards." },
  ];

  const caseStudies = [
    { 
      id: 1, 
      title: "National Football Stadium", 
      timeline: "18 Months", 
      outcome: "FIFA 2-Star certified stadium, hosting international matches.", 
      imageKey: "case-study-football",
      imageDescription: "Completed National Football Stadium by CP Infra",
      details: [
        "Capacity: 25,000 spectators",
        "Hybrid turf technology",
        "Advanced drainage system",
        "Corporate boxes & media facilities"
      ]
    },
    { 
      id: 2, 
      title: "Multi-Sport Indoor Arena", 
      timeline: "12 Months", 
      outcome: "Versatile arena supporting 5+ sports, increased community engagement.", 
      imageKey: "case-study-arena",
      imageDescription: "Interior of Multi-Sport Indoor Arena by CP Infra",
      details: [
        "Maple wood flooring for basketball/badminton",
        "Retractable seating system",
        "Climate control & acoustic treatment",
        "Integrated training facilities"
      ]
    },
    { 
      id: 3, 
      title: "Cricket Academy Complex", 
      timeline: "24 Months", 
      outcome: "State-of-the-art training hub with multiple pitches and player amenities.", 
      imageKey: "case-study-cricket",
      imageDescription: "Cricket Academy Complex with multiple pitches by CP Infra",
      details: [
        "5 international standard practice pitches",
        "Automated pitch covers",
        "Player dormitory and physio center",
        "Video analysis tower"
      ]
    },
  ];

  const completedProjects = [
    { id: 1, name: "City Sports Arena", location: "Metropolis, State", type: "Multi-Sport Indoor", imageAlt: "Interior of City Sports Arena", imageDesc: "Modern indoor sports arena with basketball court" },
    { id: 2, name: "Regional Football Center", location: "Green Valley, State", type: "Football Stadium", imageAlt: "Aerial view of Regional Football Center", imageDesc: "Football stadium with lush green pitch and stands" },
    { id: 3, name: "Community Tennis Hub", location: "Riverside, State", type: "Tennis Courts", imageAlt: "Community Tennis Hub courts", imageDesc: "Multiple blue tennis courts in a complex" },
    { id: 4, name: "Elite Cricket Ground", location: "Highlands, State", type: "Cricket Ground", imageAlt: "Elite Cricket Ground pitch", imageDesc: "Cricket ground with well-maintained pitch and outfield" },
    { id: 5, name: "University Athletics Track", location: "Campus Town, State", type: "Athletics Facility", imageAlt: "University Athletics Track", imageDesc: "Red athletics running track with lanes" },
    { id: 6, name: "Suburban Hockey AstroTurf", location: "Northwood, State", type: "Hockey Pitch", imageAlt: "Suburban Hockey AstroTurf", imageDesc: "Green astroturf hockey pitch with markings" },
  ];

  const galleryImages = [
    { id: 1, alt: "Construction site of a stadium", description: "Stadium under construction with cranes" },
    { id: 2, alt: "Laying artificial turf", description: "Workers laying rolls of artificial turf" },
    { id: 3, alt: "Installing stadium floodlights", description: "Technicians installing large floodlights on a stadium" },
    { id: 4, alt: "Newly completed basketball court", description: "Shiny new indoor basketball court" },
    { id: 5, alt: "Drone view of a sports complex", description: "Aerial shot of a sprawling sports complex" },
    { id: 6, alt: "Detail of running track surface", description: "Close-up of a red synthetic running track surface" },
    { id: 7, alt: "Modern stadium seating", description: "Rows of colorful modern stadium seats" },
    { id: 8, alt: "Blueprint of a sports facility", description: "Architectural blueprint of a sports facility design" },
  ];


  const certifications = [
    { name: "ISO 9001:2015", description: "Quality Management Systems", icon: <ShieldCheck className={`w-8 h-8 ${iconColor}`} /> },
    { name: "ISO 14001:2015", description: "Environmental Management", icon: <ShieldCheck className={`w-8 h-8 ${iconColor}`} /> },
    { name: "OHSAS 18001", description: "Occupational Health & Safety", icon: <ShieldCheck className={`w-8 h-8 ${iconColor}`} /> },
    { name: "FIFA Quality Programme", description: "For Football Turfs", icon: <Award className={`w-8 h-8 ${iconColor}`} /> },
  ];

  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.7, ease: "easeOut" },
    }),
  };

  return (
    <div className="space-y-20 md:space-y-28 pb-20">
      <motion.section 
        className="relative h-[70vh] md:h-[85vh] w-full overflow-hidden text-brand-text-light rounded-lg shadow-2xl"
      >
        <motion.div 
          className="absolute inset-0"
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "linear", repeat: Infinity, repeatType: "mirror" }}
        >
          <img  class="w-full h-full object-cover" alt="Aerial drone shot of a large sports complex under construction" src="https://images.unsplash.com/photo-1583599937230-fd86f496e52b" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-primary-blue/60 via-brand-primary-blue/20 to-transparent"></div>
        </motion.div>

        {heroOverlays.map((overlay, index) => (
          <motion.div
            key={overlay.id}
            className="absolute p-2 bg-brand-sky-blue/30 backdrop-blur-sm border border-brand-sky-blue/50 rounded"
            style={{ top: overlay.y, left: overlay.x }}
            initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ delay: 0.5 + index * 0.3, type: "spring", stiffness: 100 }}
          >
            <span className="text-xs md:text-sm font-mono tracking-wider">{overlay.text}</span>
            <div className="absolute -top-1 -left-1 w-3 h-3 border-t border-l border-brand-sky-blue"></div>
            <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b border-r border-brand-sky-blue"></div>
          </motion.div>
        ))}
        
        <div className="absolute bottom-0 left-0 p-6 md:p-12 w-full md:w-2/3 lg:w-1/2 z-10">
          <motion.h1 
            initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{delay:0.3, duration:0.5}}
            className="text-4xl md:text-6xl font-display mb-4 drop-shadow-lg"
          >
            {pageTitle}
          </motion.h1>
          <motion.p 
            initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{delay:0.5, duration:0.5}}
            className="text-lg md:text-2xl mb-8 drop-shadow-md"
          >
            {tagline}
          </motion.p>
          <motion.div initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{delay:0.7, duration:0.5}}>
            <Button size="lg" className="bg-brand-sky-blue hover:bg-brand-secondary-blue text-brand-text-dark hover:text-brand-text-light font-bold shadow-xl">
              Book a Free Consultation <HardHat className="ml-2 h-5 w-5"/>
            </Button>
          </motion.div>
        </div>
      </motion.section>

      <motion.section 
        className="py-16 bg-brand-neutral-light/70"
        variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} custom={1}
      >
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-display text-center mb-6 text-brand-text-dark">
              <span className="gradient-text">50+ Acres</span> Developed
            </h2>
            <h2 className="text-4xl md:text-5xl font-display text-center mb-12 text-brand-text-dark">
              <span className="gradient-text">15+ Facilities</span> Delivered
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-10">
              CP Infra is a leader in sports infrastructure development, transforming landscapes into world-class sporting arenas. Our commitment to quality, innovation, and timely delivery sets us apart.
            </p>
        </div>
      </motion.section>

      <motion.section 
        className="container mx-auto px-4"
        variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} custom={2}
      >
        <h2 className="text-3xl md:text-4xl font-display text-center mb-12 text-brand-text-dark">
          Our Core <span className="gradient-text">Services</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="glassmorphism-card p-6 rounded-xl shadow-lg text-center hover:shadow-2xl transition-shadow duration-300"
              variants={sectionVariants} custom={index}
            >
              <div className="flex justify-center mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-brand-primary-blue mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>
      
    
      <motion.section
        className="container mx-auto px-4"
        variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} custom={4}
      >
        <h2 className="text-3xl md:text-4xl font-display text-center mb-12 text-brand-text-dark">
          Our <span className="gradient-text">Completed Projects</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {completedProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="bg-brand-background-light rounded-xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300"
              variants={sectionVariants}
              custom={index * 0.1} 
            >
              <div className="relative h-56">
                <img  class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" alt={project.imageAlt} src="https://images.unsplash.com/photo-1697256200022-f61abccad430" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4">
                  <h3 className="text-xl font-semibold text-brand-text-light mb-1">{project.name}</h3>
                  <p className="text-sm text-brand-neutral-light flex items-center">
                    <MapPin className="w-4 h-4 mr-1.5" /> {project.location}
                  </p>
                </div>
              </div>
              <div className="p-4">
                <p className="text-sm text-gray-600 mb-3">Type: <span className="font-medium text-brand-secondary-blue">{project.type}</span></p>
                <Button variant="outline" size="sm" className="w-full border-brand-sky-blue text-brand-sky-blue hover:bg-brand-sky-blue hover:text-brand-text-dark">
                  View Details
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        className="py-16 bg-brand-neutral-light/30"
        variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} custom={5}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-display text-center mb-12 text-brand-text-dark">
            Infra <span className="gradient-text">Project Gallery</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {galleryImages.map((image, index) => (
              <motion.div
                key={image.id}
                className="aspect-square bg-brand-background-light rounded-lg shadow-md overflow-hidden group relative cursor-pointer"
                variants={sectionVariants}
                custom={index * 0.05}
                whileHover={{ scale: 1.05, zIndex: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img  class="w-full h-full object-cover group-hover:opacity-80 transition-opacity duration-300" alt={image.alt} src="https://images.unsplash.com/photo-1694388001616-1176f534d72f" />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-2">
                  <LucideImage className="w-10 h-10 text-brand-text-light" />
                </div>
              </motion.div>
            ))}
          </div>
           <div className="text-center mt-12">
            <Button variant="default" size="lg" className="bg-brand-primary-blue hover:bg-brand-secondary-blue text-brand-text-light font-semibold">
              <Eye className="mr-2 h-5 w-5"/> View Full Gallery
            </Button>
          </div>
        </div>
      </motion.section>


      <motion.section
        className="container mx-auto px-4"
        variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} custom={6}
      >
        <h2 className="text-3xl md:text-4xl font-display text-center mb-12 text-brand-text-dark">
          Certifications & <span className="gradient-text">Premium Standards</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {certifications.map((cert, index) => (
            <motion.div 
              key={index} 
              className="glassmorphism-card p-6 rounded-xl shadow-lg flex flex-col items-center text-center"
              variants={sectionVariants} custom={index}
            >
              {cert.icon}
              <h3 className="text-lg font-semibold text-brand-primary-blue mt-3 mb-1">{cert.name}</h3>
              <p className="text-xs text-gray-600">{cert.description}</p>
            </motion.div>
          ))}
        </div>
        <p className="text-center mt-8 text-gray-700 max-w-2xl mx-auto">
          Our adherence to international quality, safety, and environmental standards ensures every project is built to last and perform.
        </p>
      </motion.section>

      <motion.section 
        className="text-center py-12 bg-gradient-to-r from-brand-sky-blue/10 via-brand-primary-blue/5 to-brand-sky-blue/10 mt-12 rounded-lg"
        variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} custom={7}
      >
        <h2 className="text-3xl md:text-4xl font-display mb-6 text-brand-text-dark">Have a Vision for a Sports Facility?</h2>
        <p className="text-lg text-gray-700 mb-8 max-w-xl mx-auto">Let CP Infra turn your vision into reality. Partner with us to build the future of sports infrastructure.</p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Button size="lg" className="bg-brand-primary-blue hover:bg-brand-secondary-blue text-brand-text-light font-bold">
            <CalendarClock className="mr-2 h-5 w-5"/> Book a Free Consultation
          </Button>
          <Button size="lg" variant="outline" className="border-brand-sky-blue text-brand-sky-blue hover:bg-brand-sky-blue hover:text-brand-text-dark font-bold">
            <ImageIcon className="mr-2 h-5 w-5"/> View Infra Gallery
          </Button>
        </div>
      </motion.section>
    </div>
  );
};

export default CPInfraPage;
  