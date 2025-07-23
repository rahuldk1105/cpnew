
import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Zap, Users, Target, ShieldCheck, MapPin, BookOpen, CalendarDays, Award, ChevronRight, ChevronLeft, PlayCircle, LocateFixed, Building, Image as ImageIcon, ExternalLink, Trophy, BarChart, Sun, Sparkles } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const academyLocationsData = [
  {
    id: "pallavaram-vels",
    name: "CP SPORTS ACADEMY @ VELS",
    imageDescription: "CP Sports Academy at VELS, Pallavaram, Chennai",
    imageUrl: "https://images.unsplash.com/photo-1560089020-57900937584d?auto=format&fit=crop&w=1050&q=80",
    mapLink: "https://www.google.com/maps/search/?api=1&query=12.9692,80.1636",
    gallery: [
      { id:1, srcKey: "vels-facility-1", alt: "VELS football field", imageDescription: "Football field at CP Sports Academy VELS" },
      { id:2, srcKey: "vels-facility-2", alt: "VELS basketball court", imageDescription: "Basketball court at CP Sports Academy VELS"  },
      { id:3, srcKey: "vels-facility-3", alt: "VELS badminton court", imageDescription: "Badminton court at CP Sports Academy VELS" },
    ],
    sports: [
      { name: "Football", monthly: 4500, quarterly: 12500, annually: 45000, icon: <Trophy className="w-5 h-5 mr-2 text-brand-secondary-blue"/> },
      { name: "Basketball", monthly: 4800, quarterly: 13000, annually: 48000, icon: <Sparkles className="w-5 h-5 mr-2 text-brand-secondary-blue"/> },
      { name: "Badminton", monthly: 4200, quarterly: 11500, annually: 42000, icon: <Sun className="w-5 h-5 mr-2 text-brand-secondary-blue"/> },
      { name: "Skating", monthly: 4000, quarterly: 11000, annually: 40000, icon: <Sun className="w-5 h-5 mr-2 text-brand-secondary-blue"/> },
    ]
  },
  {
    id: "chrompet-ggn",
    name: "CP SPORTS ACADEMY @ GGN",
    imageDescription: "CP Sports Academy at GGN, Chrompet, Chennai",
    imageUrl: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1050&q=80",
    mapLink: "https://www.google.com/maps/search/?api=1&query=12.9516,80.1462",
    gallery: [
      { id:1, srcKey: "ggn-facility-1", alt: "GGN football field", imageDescription: "Football field at CP Sports Academy GGN" },
      { id:2, srcKey: "ggn-facility-2", alt: "GGN basketball court", imageDescription: "Basketball court at CP Sports Academy GGN" },
      { id:3, srcKey: "ggn-facility-3", alt: "GGN pickle ball court", imageDescription: "Pickle ball court at CP Sports Academy GGN" },
    ],
    sports: [
      { name: "Football", monthly: 4500, quarterly: 12500, annually: 45000, icon: <Trophy className="w-5 h-5 mr-2 text-brand-secondary-blue"/> },
      { name: "Basketball", monthly: 4800, quarterly: 13000, annually: 48000, icon: <Sparkles className="w-5 h-5 mr-2 text-brand-secondary-blue"/> },
      { name: "Pickle Ball", monthly: 4200, quarterly: 11500, annually: 42000, icon: <Sun className="w-5 h-5 mr-2 text-brand-secondary-blue"/> },
    ]
  },
  {
    id: "chrompet-diamond",
    name: "CP SPORTS ACADEMY @ DIAMOND SPORT ARENA",
    imageDescription: "CP Sports Academy at Diamond Sport Arena, Chrompet, Chennai",
    imageUrl: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1050&q=80",
    mapLink: "https://www.google.com/maps/search/?api=1&query=12.9516,80.1462",
    gallery: [
      { id:1, srcKey: "diamond-facility-1", alt: "Diamond football field 1", imageDescription: "Football field 1 at CP Sports Academy Diamond" },
      { id:2, srcKey: "diamond-facility-2", alt: "Diamond football field 2", imageDescription: "Football field 2 at CP Sports Academy Diamond" },
      { id:3, srcKey: "diamond-facility-3", alt: "Diamond training area", imageDescription: "Training area at CP Sports Academy Diamond" },
    ],
    sports: [
      { name: "Football", monthly: 4500, quarterly: 12500, annually: 45000, icon: <Trophy className="w-5 h-5 mr-2 text-brand-secondary-blue"/> },
    ]
  },
];


const CPSportsAcademyPage = () => {
  const iconColor = "text-brand-primary-blue";
  const [selectedLocationId, setSelectedLocationId] = useState("pallavaram-vels");

  const heroImages = [
    { id: 1, srcKey: "hero-training-1", alt: "Football training at CP Sports Academy", title: "Elite Football Training", description: "Professional coaching across all our Chennai branches." },
    { id: 2, srcKey: "hero-training-2", alt: "Basketball practice at CP Sports Academy", title: "Basketball Excellence", description: "Develop your skills at our VELS and GGN facilities." },
    { id: 3, srcKey: "hero-training-3", alt: "Multi-sport training at CP Sports Academy", title: "Diverse Sports Programs", description: "From badminton to pickle ball at our Chennai academies." },
  ];
  const [currentHeroImage, setCurrentHeroImage] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentHeroImage((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000);
    return () => clearTimeout(timer);
  }, [currentHeroImage, heroImages.length]);

  const branches = useMemo(() => [
    { id: 1, name: "CP SPORTS ACADEMY @ VELS", lat: 12.9692, lng: 80.1636, imageDescription: "CP Sports Academy at VELS, Pallavaram, Chennai" },
    { id: 2, name: "CP SPORTS ACADEMY @ GGN", lat: 12.9516, lng: 80.1462, imageDescription: "CP Sports Academy at GGN, Chrompet, Chennai" },
    { id: 3, name: "CP SPORTS ACADEMY @ DIAMOND SPORT ARENA", lat: 12.9516, lng: 80.1462, imageDescription: "CP Sports Academy at Diamond Sport Arena, Chrompet, Chennai" },
  ], []);




  
  const facilityWalkthroughs = useMemo(() => [
    { branch: "CP SPORTS ACADEMY @ VELS", videoThumbnailKey: "vels-facility-thumb", videoUrl: "#", description: "Virtual tour of our Pallavaram VELS branch", imageDescription: "Thumbnail for VELS facility walkthrough video" },
    { branch: "CP SPORTS ACADEMY @ GGN", videoThumbnailKey: "ggn-facility-thumb", videoUrl: "#", description: "Explore the Chrompet GGN state-of-the-art facilities", imageDescription: "Thumbnail for GGN facility walkthrough video" },
    { branch: "CP SPORTS ACADEMY @ DIAMOND SPORT ARENA", videoThumbnailKey: "diamond-facility-thumb", videoUrl: "#", description: "A look inside Diamond Sport Arena's football grounds", imageDescription: "Thumbnail for Diamond Sport Arena facility walkthrough video" },
  ], []);

  const selectedAcademy = useMemo(() => academyLocationsData.find(loc => loc.id === selectedLocationId), [selectedLocationId]);

  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.7, ease: "easeOut" },
    }),
  };

  const handleLocationChange = (value) => {
    setSelectedLocationId(value);
  };


  return (
    <div className="space-y-20 md:space-y-28 pb-20">
      <motion.section className="relative h-[70vh] md:h-[85vh] w-full overflow-hidden text-brand-text-light rounded-lg shadow-2xl">
        <AnimatePresence initial={false}>
          <motion.div
            key={heroImages[currentHeroImage].id}
            initial={{ opacity: 0, scale: 1.1, x: currentHeroImage % 2 === 0 ? 100 : -100 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.6, ease: "anticipate" } }}
            transition={{ duration: 1.2, type: "spring", stiffness: 50 }}
            className="absolute inset-0"
          >
            <img  className="w-full h-full object-cover" alt={heroImages[currentHeroImage].alt} src="https://images.unsplash.com/photo-1632998772668-afc7ae2bc054" />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-primary-blue/70 via-brand-primary-blue/30 to-transparent"></div>
          </motion.div>
        </AnimatePresence>
        <div className="absolute bottom-0 left-0 p-6 md:p-12 w-full md:w-2/3 lg:w-1/2 z-10">
          <motion.h1 
            initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{delay:0.3, duration:0.5}}
            className="text-4xl md:text-6xl font-display mb-4 drop-shadow-lg"
          >
            {heroImages[currentHeroImage].title}
          </motion.h1>
          <motion.p 
            initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{delay:0.5, duration:0.5}}
            className="text-lg md:text-2xl mb-8 drop-shadow-md"
          >
            {heroImages[currentHeroImage].description}
          </motion.p>
          <motion.div initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{delay:0.7, duration:0.5}}>
            <Button size="lg" className="bg-brand-sky-blue hover:bg-brand-secondary-blue text-brand-text-dark hover:text-brand-text-light font-bold shadow-xl" onClick={() => window.location.href = '/contact'}>
              Join CP Sports Academy <Zap className="ml-2 h-5 w-5"/>
            </Button>
          </motion.div>
        </div>
        <div className="absolute bottom-4 right-4 flex space-x-2 z-10">
            {heroImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentHeroImage(index)}
                className={`w-3 h-3 rounded-full ${currentHeroImage === index ? 'bg-brand-sky-blue' : 'bg-brand-text-light/50'} transition-all`}
                aria-label={`Go to slide ${index + 1}`}
              ></button>
            ))}
          </div>
      </motion.section>

    


      <motion.section
        className="container mx-auto px-4"
        variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} custom={4}
        id="join"
      >
        <h2 className="text-3xl md:text-4xl font-display text-center mb-12 text-brand-text-dark">
          Dynamic <span className="gradient-text">Pricing & Facilities</span>
        </h2>
        
        <div className="mb-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <label htmlFor="location-select" className="text-lg font-medium text-brand-text-dark">Select Academy Location:</label>
          <Select value={selectedLocationId} onValueChange={handleLocationChange}>
            <SelectTrigger className="w-full sm:w-[280px] bg-brand-background-light border-brand-neutral-medium">
              <SelectValue placeholder="Select a location" />
            </SelectTrigger>
            <SelectContent className="bg-brand-background-light">
              {academyLocationsData.map(loc => (
                <SelectItem key={loc.id} value={loc.id} className="hover:bg-brand-sky-blue/10 focus:bg-brand-sky-blue/20">
                  {loc.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {selectedAcademy && (
          <motion.div
            key={selectedAcademy.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start"
          >
            <div className="lg:col-span-2 space-y-6">
              <h3 className="text-2xl font-semibold text-brand-primary-blue flex items-center">
                <Building className="w-7 h-7 mr-3 text-brand-secondary-blue"/> {selectedAcademy.name} Facility
              </h3>
              <div className="rounded-xl shadow-xl overflow-hidden aspect-video">
                <img  className="w-full h-full object-cover" alt={selectedAcademy.imageDescription} src="https://images.unsplash.com/photo-1586251689156-7644aae32835" />
              </div>
              <Button 
                onClick={() => window.location.href = '/contact'} 
                variant="outline" 
                className="w-full border-brand-sky-blue text-brand-sky-blue hover:bg-brand-sky-blue hover:text-brand-text-dark font-medium"
              >
                <MapPin className="mr-2 h-5 w-5"/> Contact Us <ExternalLink className="ml-2 h-4 w-4"/>
              </Button>
            </div>

            <div className="lg:col-span-3 space-y-6">
              <h3 className="text-2xl font-semibold text-brand-primary-blue flex items-center">
                <BarChart className="w-7 h-7 mr-3 text-brand-secondary-blue"/> Sports Pricing
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {selectedAcademy.sports.map(sport => (
                  <div key={sport.name} className="glassmorphism-card p-6 rounded-xl shadow-lg">
                    <h4 className="text-xl font-bold text-brand-primary-blue mb-3 flex items-center">
                      {sport.icon} {sport.name}
                    </h4>
                    <ul className="space-y-2 text-sm">
                      <li><span className="font-medium text-gray-700">Monthly:</span> ₹{sport.monthly.toLocaleString()}</li>
                      <li><span className="font-medium text-gray-700">Quarterly:</span> ₹{sport.quarterly.toLocaleString()} <span className="text-xs text-green-600">(Save ~{Math.round((1 - (sport.quarterly / (sport.monthly * 3)))*100)}%)</span></li>
                      <li><span className="font-medium text-gray-700">Annually:</span> ₹{sport.annually.toLocaleString()} <span className="text-xs text-green-600">(Save ~{Math.round((1 - (sport.annually / (sport.monthly * 12)))*100)}%)</span></li>
                    </ul>
                    <Button className="w-full mt-4 bg-brand-secondary-blue hover:bg-brand-primary-blue text-brand-text-light" onClick={() => window.location.href = '/contact'}>Enroll in {sport.name}</Button>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
        
        {selectedAcademy && selectedAcademy.gallery.length > 0 && (
          <motion.div 
            className="mt-16"
            key={`gallery-${selectedAcademy.id}`} 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-2xl font-semibold text-brand-primary-blue mb-6 flex items-center">
              <ImageIcon className="w-7 h-7 mr-3 text-brand-secondary-blue"/> {selectedAcademy.name} Gallery
            </h3>
            <Carousel
              opts={{ align: "start", loop: true }}
              className="w-full max-w-5xl mx-auto"
            >
              <CarouselContent>
                {selectedAcademy.gallery.map((image, index) => (
                  <CarouselItem key={image.id} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                      <div className="rounded-xl shadow-lg overflow-hidden aspect-square group">
                        <img  className="w-full h-full object-cover group-hover:scale-105 transition-transform" alt={image.alt} src="https://images.unsplash.com/photo-1675023112817-52b789fd2ef0" />
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="absolute left-[-20px] md:left-[-50px] top-1/2 -translate-y-1/2 bg-brand-background-light/80 hover:bg-brand-sky-blue text-brand-primary-blue hover:text-brand-text-light" />
              <CarouselNext className="absolute right-[-20px] md:right-[-50px] top-1/2 -translate-y-1/2 bg-brand-background-light/80 hover:bg-brand-sky-blue text-brand-primary-blue hover:text-brand-text-light" />
            </Carousel>
          </motion.div>
        )}
      </motion.section>

      <motion.section
        className="text-center py-12 container mx-auto px-4"
        variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} custom={6}
      >
        <h2 className="text-3xl md:text-4xl font-display mb-6 text-brand-text-dark">Ready to Unleash Your Potential?</h2>
        <p className="text-lg text-gray-700 mb-8 max-w-xl mx-auto">Join CP Sports Academy and take the first step towards your athletic dreams. Find a center near you or enroll today!</p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Button size="lg" className="bg-brand-primary-blue hover:bg-brand-secondary-blue text-brand-text-light font-bold" onClick={() => window.location.href = '/contact'}>
            <Zap className="mr-2 h-5 w-5"/> Join Academy
          </Button>
          <Button size="lg" variant="outline" className="border-brand-sky-blue text-brand-sky-blue hover:bg-brand-sky-blue hover:text-brand-text-dark font-bold" onClick={() => window.location.href = '/contact'}>
            <LocateFixed className="mr-2 h-5 w-5"/> Locate Nearest Center
          </Button>
        </div>
      </motion.section>
    </div>
  );
};

export default CPSportsAcademyPage;
  