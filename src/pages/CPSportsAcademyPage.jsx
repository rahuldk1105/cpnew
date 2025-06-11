
import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Zap, Users, Target, ShieldCheck, MapPin, BookOpen, CalendarDays, Award, ChevronRight, ChevronLeft, PlayCircle, LocateFixed, Building, Image as ImageIcon, ExternalLink, Trophy, BarChart, Sun, Sparkles } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const academyLocationsData = [
  {
    id: "mumbai-central",
    name: "Mumbai Central",
    imageDescription: "CP Sports Academy Mumbai Central branch exterior",
    imageUrl: "https://images.unsplash.com/photo-1560089020-57900937584d?auto=format&fit=crop&w=1050&q=80",
    mapLink: "https://www.google.com/maps/search/?api=1&query=19.0760,72.8777",
    gallery: [
      { id:1, srcKey: "mumbai-facility-1", alt: "Mumbai indoor cricket nets", imageDescription: "Indoor cricket nets at CP Sports Mumbai" },
      { id:2, srcKey: "mumbai-facility-2", alt: "Mumbai football turf", imageDescription: "Football turf at CP Sports Mumbai"  },
      { id:3, srcKey: "mumbai-facility-3", alt: "Mumbai gym area", imageDescription: "Gym area at CP Sports Mumbai" },
    ],
    sports: [
      { name: "Cricket", monthly: 5000, quarterly: 14000, annually: 50000, icon: <Trophy className="w-5 h-5 mr-2 text-brand-secondary-blue"/> },
      { name: "Football", monthly: 4500, quarterly: 12500, annually: 45000, icon: <Sparkles className="w-5 h-5 mr-2 text-brand-secondary-blue"/> },
      { name: "Athletics", monthly: 4000, quarterly: 11000, annually: 40000, icon: <Sun className="w-5 h-5 mr-2 text-brand-secondary-blue"/> },
    ]
  },
  {
    id: "delhi-north",
    name: "Delhi North",
    imageDescription: "CP Sports Academy Delhi North branch facilities",
    imageUrl: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1050&q=80",
    mapLink: "https://www.google.com/maps/search/?api=1&query=28.7041,77.1025",
    gallery: [
      { id:1, srcKey: "delhi-facility-1", alt: "Delhi basketball court", imageDescription: "Basketball court at CP Sports Delhi" },
      { id:2, srcKey: "delhi-facility-2", alt: "Delhi athletics track", imageDescription: "Athletics track at CP Sports Delhi" },
      { id:3, srcKey: "delhi-facility-3", alt: "Delhi badminton court", imageDescription: "Badminton court at CP Sports Delhi" },
    ],
    sports: [
      { name: "Basketball", monthly: 5500, quarterly: 15000, annually: 55000, icon: <Trophy className="w-5 h-5 mr-2 text-brand-secondary-blue"/> },
      { name: "Athletics", monthly: 4200, quarterly: 11500, annually: 42000, icon: <Sparkles className="w-5 h-5 mr-2 text-brand-secondary-blue"/> },
      { name: "Badminton", monthly: 4800, quarterly: 13000, annually: 48000, icon: <Sun className="w-5 h-5 mr-2 text-brand-secondary-blue"/> },
    ]
  },
  {
    id: "bangalore-elite",
    name: "Bangalore Elite",
    imageDescription: "CP Sports Academy Bangalore Elite training grounds",
    imageUrl: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1050&q=80",
    mapLink: "https://www.google.com/maps/search/?api=1&query=12.9716,77.5946",
    gallery: [
      { id:1, srcKey: "bangalore-facility-1", alt: "Bangalore swimming pool", imageDescription: "Swimming pool at CP Sports Bangalore" },
      { id:2, srcKey: "bangalore-facility-2", alt: "Bangalore tennis courts", imageDescription: "Tennis courts at CP Sports Bangalore" },
      { id:3, srcKey: "bangalore-facility-3", alt: "Bangalore yoga studio", imageDescription: "Yoga studio at CP Sports Bangalore" },
    ],
    sports: [
      { name: "Swimming", monthly: 6000, quarterly: 16000, annually: 60000, icon: <Trophy className="w-5 h-5 mr-2 text-brand-secondary-blue"/> },
      { name: "Tennis", monthly: 5800, quarterly: 15500, annually: 58000, icon: <Sparkles className="w-5 h-5 mr-2 text-brand-secondary-blue"/> },
      { name: "Yoga & Wellness", monthly: 3500, quarterly: 9000, annually: 35000, icon: <Sun className="w-5 h-5 mr-2 text-brand-secondary-blue"/> },
    ]
  },
];


const CPSportsAcademyPage = () => {
  const iconColor = "text-brand-primary-blue";
  const [selectedLocationId, setSelectedLocationId] = useState(academyLocationsData[0].id);

  const heroImages = [
    { id: 1, srcKey: "hero-training-1", alt: "Athlete sprinting on a track", title: "Unleash Your Speed", description: "Peak performance training programs." },
    { id: 2, srcKey: "hero-training-2", alt: "Team huddle during a match", title: "Master Team Dynamics", description: "Strategic and collaborative sports education." },
    { id: 3, srcKey: "hero-training-3", alt: "Focused athlete during practice", title: "Achieve Your Goals", description: "Personalized coaching for success." },
  ];
  const [currentHeroImage, setCurrentHeroImage] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentHeroImage((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000);
    return () => clearTimeout(timer);
  }, [currentHeroImage, heroImages.length]);

  const branches = useMemo(() => [
    { id: 1, name: "Mumbai Central", lat: 19.0760, lng: 72.8777, imageDescription: "CP Sports Academy Mumbai Central branch exterior" },
    { id: 2, name: "Delhi North", lat: 28.7041, lng: 77.1025, imageDescription: "CP Sports Academy Delhi North branch facilities" },
    { id: 3, name: "Bangalore Elite", lat: 12.9716, lng: 77.5946, imageDescription: "CP Sports Academy Bangalore Elite training grounds" },
    { id: 4, name: "Chennai Champs", lat: 13.0827, lng: 80.2707, imageDescription: "CP Sports Academy Chennai Champs indoor courts" },
    { id: 5, name: "Kolkata Stars", lat: 22.5726, lng: 88.3639, imageDescription: "CP Sports Academy Kolkata Stars main building" },
    { id: 6, name: "Hyderabad Hub", lat: 17.3850, lng: 78.4867, imageDescription: "CP Sports Academy Hyderabad Hub sports field" },
    { id: 7, name: "Pune Powerhouse", lat: 18.5204, lng: 73.8567, imageDescription: "CP Sports Academy Pune Powerhouse gym area" },
    { id: 8, name: "Ahmedabad Aces", lat: 23.0225, lng: 72.5714, imageDescription: "CP Sports Academy Ahmedabad Aces swimming pool" },
  ], []);

  const coaches = useMemo(() => [
    { id: 1, name: "Ravi Sharma", expertise: "Head Coach, Cricket", bio: "Former national player with 15+ years of coaching experience. Specializes in batting technique and strategy.", avatarKey: "coach-ravi", imageDescription: "Portrait of Coach Ravi Sharma" },
    { id: 2, name: "Priya Singh", expertise: "Lead Coach, Football", bio: "UEFA A License coach with a focus on youth development and tactical gameplay. Proven record of nurturing talent.", avatarKey: "coach-priya", imageDescription: "Portrait of Coach Priya Singh" },
    { id: 3, name: "Anil Kumar", expertise: "Senior Coach, Athletics", bio: "Certified athletics coach with expertise in sprint and endurance training. Passionate about biomechanics.", avatarKey: "coach-anil", imageDescription: "Portrait of Coach Anil Kumar" },
    { id: 4, name: "Sunita Reddy", expertise: "Wellness Coach", bio: "Sports psychologist and nutritionist, focusing on holistic athlete development and mental resilience.", avatarKey: "coach-sunita", imageDescription: "Portrait of Coach Sunita Reddy" },
  ], []);
  const [hoveredCoach, setHoveredCoach] = useState(null);

  const studentSuccesses = useMemo(() => [
    { id: 1, name: "Aarav Patel", achievement: "Selected for National U-19 Cricket Team", story: "Aarav joined us at 14 and through rigorous training, honed his skills to become a top-order batsman.", imageKey: "student-aarav", imageDescription: "Aarav Patel in cricket uniform" },
    { id: 2, name: "Sneha Verma", achievement: "Football Scholarship to a US University", story: "Sneha's dedication and our specialized football program helped her secure a full scholarship abroad.", imageKey: "student-sneha", imageDescription: "Sneha Verma playing football" },
    { id: 3, name: "Vikram Singh", achievement: "Gold Medalist, National Athletics Meet", story: "Vikram's journey from a novice runner to a national champion is a testament to his hard work and our coaching.", imageKey: "student-vikram", imageDescription: "Vikram Singh with a gold medal" },
  ], []);
  
  const facilityWalkthroughs = useMemo(() => [
    { branch: "Mumbai Central", videoThumbnailKey: "mumbai-facility-thumb", videoUrl: "#", description: "Virtual tour of our Mumbai Central branch", imageDescription: "Thumbnail for Mumbai Central facility walkthrough video" },
    { branch: "Delhi North", videoThumbnailKey: "delhi-facility-thumb", videoUrl: "#", description: "Explore the Delhi North state-of-the-art facilities", imageDescription: "Thumbnail for Delhi North facility walkthrough video" },
    { branch: "Bangalore Elite", videoThumbnailKey: "bangalore-facility-thumb", videoUrl: "#", description: "A look inside Bangalore Elite's training grounds", imageDescription: "Thumbnail for Bangalore Elite facility walkthrough video" },
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
            <img  class="w-full h-full object-cover" alt={heroImages[currentHeroImage].alt} src="https://images.unsplash.com/photo-1632998772668-afc7ae2bc054" />
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
            <Button size="lg" className="bg-brand-sky-blue hover:bg-brand-secondary-blue text-brand-text-dark hover:text-brand-text-light font-bold shadow-xl">
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
        variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} custom={2}
      >
        <h2 className="text-3xl md:text-4xl font-display text-center mb-12 text-brand-text-dark">
          Meet Our <span className="gradient-text">Expert Coaches</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {coaches.map((coach) => (
            <motion.div
              key={coach.id}
              className="relative glassmorphism-card p-6 rounded-xl shadow-lg text-center overflow-hidden cursor-pointer"
              onMouseEnter={() => setHoveredCoach(coach.id)}
              onMouseLeave={() => setHoveredCoach(null)}
              variants={sectionVariants} custom={coach.id}
            >
              <img  class="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-brand-sky-blue object-cover" alt={coach.imageDescription} src="https://images.unsplash.com/photo-1662640010851-6c6db77fbb7d" />
              <h3 className="text-xl font-semibold text-brand-primary-blue mb-1">{coach.name}</h3>
              <p className="text-sm text-brand-secondary-blue font-medium">{coach.expertise}</p>
              <AnimatePresence>
                {hoveredCoach === coach.id && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-brand-primary-blue/90 p-4 flex flex-col justify-center items-center text-brand-text-light"
                  >
                    <h4 className="text-lg font-semibold mb-2">{coach.name}</h4>
                    <p className="text-xs text-center">{coach.bio}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
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
                <img  class="w-full h-full object-cover" alt={selectedAcademy.imageDescription} src="https://images.unsplash.com/photo-1586251689156-7644aae32835" />
              </div>
              <Button 
                onClick={() => window.open(selectedAcademy.mapLink, '_blank')} 
                variant="outline" 
                className="w-full border-brand-sky-blue text-brand-sky-blue hover:bg-brand-sky-blue hover:text-brand-text-dark font-medium"
              >
                <MapPin className="mr-2 h-5 w-5"/> View on Google Maps <ExternalLink className="ml-2 h-4 w-4"/>
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
                    <Button className="w-full mt-4 bg-brand-secondary-blue hover:bg-brand-primary-blue text-brand-text-light">Enroll in {sport.name}</Button>
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
                        <img  class="w-full h-full object-cover group-hover:scale-105 transition-transform" alt={image.alt} src="https://images.unsplash.com/photo-1675023112817-52b789fd2ef0" />
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
          <Button size="lg" className="bg-brand-primary-blue hover:bg-brand-secondary-blue text-brand-text-light font-bold">
            <Zap className="mr-2 h-5 w-5"/> Join Academy
          </Button>
          <Button size="lg" variant="outline" className="border-brand-sky-blue text-brand-sky-blue hover:bg-brand-sky-blue hover:text-brand-text-dark font-bold">
            <LocateFixed className="mr-2 h-5 w-5"/> Locate Nearest Center
          </Button>
        </div>
      </motion.section>
    </div>
  );
};

export default CPSportsAcademyPage;
  