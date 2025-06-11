
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Users, Globe, Search, Star, FileText, ShieldCheck, Award, UserPlus, ClipboardList } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const InternationalScoutingPage = () => {
  const pageTitle = "International Scouting Division";
  const tagline = "Connecting Global Talent with World-Class Opportunities.";
  const iconColor = "text-brand-primary-blue";

  const milestones = [
    { value: "100+", label: "Players Placed Internationally", icon: <Users className={`w-10 h-10 ${iconColor}`} /> },
    { value: "25+", label: "Countries in Network", icon: <Globe className={`w-10 h-10 ${iconColor}`} /> },
    { value: "50+", label: "Partner Clubs & Federations", icon: <Award className={`w-10 h-10 ${iconColor}`} /> },
  ];

  const processSteps = [
    { 
      icon: <Search className={`w-12 h-12 ${iconColor} mb-3`} />, 
      title: "Talent Identification & Selection", 
      description: "Rigorous scouting through national camps, local tournaments, and our extensive scout network. Data-driven analysis identifies high-potential athletes." 
    },
    { 
      icon: <Star className={`w-12 h-12 ${iconColor} mb-3`} />, 
      title: "Elite Training & Development", 
      description: "Selected players undergo specialized training programs at CP SPORTS Academies, focusing on skill enhancement, tactical awareness, and physical conditioning." 
    },
    { 
      icon: <FileText className={`w-12 h-12 ${iconColor} mb-3`} />, 
      title: "Documentation & Compliance", 
      description: "Comprehensive support for all necessary documentation, including visas, international clearances, and contractual agreements, ensuring a smooth transition." 
    },
    { 
      icon: <ShieldCheck className={`w-12 h-12 ${iconColor} mb-3`} />, 
      title: "International Tournament Exposure", 
      description: "Facilitating participation in prestigious international tournaments, providing players with invaluable experience and exposure to global scouts and clubs." 
    },
  ];

  const tournamentImages = [
    { id: 1, srcKey: "tournament-action-1", alt: "Indian youth football team competing in an international tournament in Europe" },
    { id: 2, srcKey: "tournament-celebration-1", alt: "CP SPORTS scouted players celebrating a goal at an overseas match" },
    { id: 3, srcKey: "tournament-team-photo-1", alt: "Group photo of Indian contingent at an international sports event" },
    { id: 4, srcKey: "tournament-action-2", alt: "Young Indian athlete showcasing skills at a global scouting event" },
    { id: 5, srcKey: "tournament-award-1", alt: "CP SPORTS player receiving an award at an international competition" },
  ];

  const partners = [
    { name: "Global Sports Federation", logoKey: "partner-logo-gsf", description: "Global Sports Federation Logo" },
    { name: "Euro Elite Club", logoKey: "partner-logo-eec", description: "Euro Elite Club Logo" },
    { name: "Asian Football Confederation", logoKey: "partner-logo-afc", description: "Asian Football Confederation Logo" },
    { name: "Youth Champions League", logoKey: "partner-logo-ycl", description: "Youth Champions League Logo" },
    { name: "International Athletes Org", logoKey: "partner-logo-iao", description: "International Athletes Org Logo" },
    { name: "National Sports Council", logoKey: "partner-logo-nsc", description: "National Sports Council Logo" },
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
          <img  class="w-full h-full object-cover" alt="Young Indian footballer skillfully dribbling past opponents on an international pitch" src="https://images.unsplash.com/photo-1593018007981-2936f16980af" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-primary-blue/70 via-brand-primary-blue/30 to-transparent"></div>
        </motion.div>
        
        <div className="absolute bottom-0 left-0 p-6 md:p-12 w-full md:w-2/3 lg:w-1/2 z-10">
          <motion.div 
            initial={{ opacity:0, x:-20 }} animate={{ opacity:1, x:0 }} transition={{delay:0.2, duration:0.5}}
            className="inline-block p-3 bg-brand-sky-blue/30 backdrop-blur-sm rounded-full mb-4"
          >
            <Globe className="w-10 h-10 md:w-12 md:h-12 text-brand-sky-blue" />
          </motion.div>
          <motion.h1 
            initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{delay:0.4, duration:0.5}}
            className="text-4xl md:text-6xl font-display mb-4 drop-shadow-lg"
          >
            {pageTitle}
          </motion.h1>
          <motion.p 
            initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{delay:0.6, duration:0.5}}
            className="text-lg md:text-2xl mb-8 drop-shadow-md"
          >
            {tagline}
          </motion.p>
          <motion.div initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{delay:0.8, duration:0.5}} className="space-x-3">
            <Button size="lg" className="bg-brand-sky-blue hover:bg-brand-secondary-blue text-brand-text-dark hover:text-brand-text-light font-bold shadow-xl">
              Register for Trials <UserPlus className="ml-2 h-5 w-5"/>
            </Button>
          </motion.div>
        </div>
      </motion.section>

      <motion.section 
        className="py-16 bg-brand-neutral-light/70"
        variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} custom={1}
      >
        <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-display text-center mb-12 text-brand-text-dark">
              Our Impact: <span className="gradient-text">Global Milestones</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              {milestones.map((milestone, index) => (
                <motion.div 
                  key={index}
                  className="glassmorphism-card p-6 rounded-xl shadow-lg"
                  variants={sectionVariants} custom={index}
                >
                  <div className="flex justify-center mb-4">{milestone.icon}</div>
                  <p className={`text-4xl md:text-5xl font-bold ${iconColor} mb-2`}>{milestone.value}</p>
                  <p className="text-md md:text-lg text-brand-text-dark font-semibold">{milestone.label}</p>
                </motion.div>
              ))}
            </div>
        </div>
      </motion.section>

      <motion.section 
        className="container mx-auto px-4"
        variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} custom={2}
      >
        <h2 className="text-3xl md:text-4xl font-display text-center mb-16 text-brand-text-dark">
          Our Scouting <span className="gradient-text">Process Flow</span>
        </h2>
        <div className="relative">
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-brand-sky-blue/30 rounded-full transform -translate-y-1/2"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-6 relative">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                className="bg-brand-background-light p-6 rounded-xl shadow-xl text-center border-t-4 border-brand-sky-blue relative flex flex-col items-center"
                variants={sectionVariants} custom={index}
              >
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-brand-sky-blue text-brand-text-light w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold shadow-md">
                  {index + 1}
                </div>
                <div className="mt-8 mb-4">{step.icon}</div>
                <h3 className="text-xl font-semibold text-brand-primary-blue mb-3">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
      
      <motion.section
        className="py-16 bg-brand-primary-blue/5"
        variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} custom={3}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-display text-center mb-12 text-brand-text-dark">
            Tournament <span className="gradient-text">Participation Highlights</span>
          </h2>
          <Carousel
            opts={{ align: "start", loop: true }}
            className="w-full max-w-4xl mx-auto"
          >
            <CarouselContent>
              {tournamentImages.map((image) => (
                <CarouselItem key={image.id} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-2">
                    <div className="aspect-[4/3] bg-gray-200 rounded-lg shadow-md overflow-hidden group">
                      <img  class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" alt={image.alt} src={`https://images.unsplash.com/photo-1517649763962-0c623066013b?ixlib=rb-${image.id}.2.1&auto=format&fit=crop&w=800&q=70`} />
                       <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-3">
                         <p className="text-brand-text-light text-xs font-medium drop-shadow-sm">{image.alt.substring(0,40)}...</p>
                       </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-[-20px] md:left-[-50px] top-1/2 -translate-y-1/2 bg-brand-background-light/80 hover:bg-brand-sky-blue text-brand-primary-blue hover:text-brand-text-light" />
            <CarouselNext className="absolute right-[-20px] md:right-[-50px] top-1/2 -translate-y-1/2 bg-brand-background-light/80 hover:bg-brand-sky-blue text-brand-primary-blue hover:text-brand-text-light" />
          </Carousel>
        </div>
      </motion.section>

      <motion.section
        className="container mx-auto px-4"
        variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} custom={4}
      >
        <h2 className="text-3xl md:text-4xl font-display text-center mb-12 text-brand-text-dark">
          Our <span className="gradient-text">Esteemed Partners</span>
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
          {partners.map((partner, index) => (
            <motion.div 
              key={index} 
              className="flex justify-center items-center p-4 glassmorphism-card rounded-lg h-24"
              variants={sectionVariants} custom={index}
            >
              <img  class="max-h-12 max-w-full object-contain grayscale hover:grayscale-0 transition-all duration-300" alt={partner.description} src={`https://images.unsplash.com/photo-160000000000${index}?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80`} />
            </motion.div>
          ))}
        </div>
        <p className="text-center mt-8 text-gray-700 max-w-2xl mx-auto">
          We collaborate with leading sports federations, clubs, and organizations worldwide to create unparalleled opportunities for talented athletes.
        </p>
      </motion.section>

      <motion.section 
        className="text-center py-12 bg-gradient-to-r from-brand-sky-blue/10 via-brand-primary-blue/5 to-brand-sky-blue/10 mt-12 rounded-lg"
        variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} custom={5}
      >
        <h2 className="text-3xl md:text-4xl font-display mb-6 text-brand-text-dark">Unlock Your Potential or Find the Next Star</h2>
        <p className="text-lg text-gray-700 mb-8 max-w-xl mx-auto">Whether you're an aspiring athlete dreaming of global stages or a scout looking for exceptional talent, CP SPORTS International Scouting is your gateway.</p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Button size="lg" className="bg-brand-primary-blue hover:bg-brand-secondary-blue text-brand-text-light font-bold">
            <ClipboardList className="mr-2 h-5 w-5"/> Register for Trials
          </Button>
        </div>
      </motion.section>
    </div>
  );
};

export default InternationalScoutingPage;
  