
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Code, BarChart2, Sliders, Briefcase, CloudCog, Users, Play, FileText, Send, HelpCircle, Rocket } from 'lucide-react';

const CPInfotechPage = () => {
  const pageTitle = "CP Infotech";
  const missionStatement = "Optimizing the Sports Ecosystem with Intelligent Software.";
  const iconColor = "text-brand-primary-blue";

  const animatedCodeLines = [
    "// Initializing SportTech OS...",
    "import { SportsAnalytics, PlayerPerformance } from '@cp-infotech/core';",
    "const tournament = new TournamentManager({ name: 'Global Cup 2025' });",
    "function trackPlayer(playerId) { return PlayerPerformance.get(playerId); }",
    "console.log('CP Infotech: Engineering the future of sports.');",
    "// System Ready. Awaiting commands.",
  ];
  const [currentCodeLine, setCurrentCodeLine] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentCodeLine((prevLine) => (prevLine + 1) % animatedCodeLines.length);
    }, 2500);
    return () => clearInterval(intervalId);
  }, [animatedCodeLines.length]);

  const services = [
    { 
      icon: <Sliders className={`w-10 h-10 ${iconColor}`} />, 
      title: "Tech Automation & Analytics", 
      description: "Streamline sports organization workflows with AI-powered automation and gain deep insights through advanced data analytics. Optimize performance, fan engagement, and operational efficiency." 
    },
    { 
      icon: <Briefcase className={`w-10 h-10 ${iconColor}`} />, 
      title: "White-Labeled Software Solutions", 
      description: "Leverage our robust software platforms, customizable and brandable for your organization. Extend our proven technology to diverse industries beyond sports." 
    },
    { 
      icon: <CloudCog className={`w-10 h-10 ${iconColor}`} />, 
      title: "Full-Stack Custom Development", 
      description: "Bespoke web and mobile application development. From concept to deployment, we build scalable, secure, and high-performance solutions tailored to your specific needs." 
    },
  ];

  const saasProducts = [
    {
      icon: <img  alt="Track My Academy Logo Icon" class="w-12 h-12 object-contain" src="https://i.ibb.co/G32KHv5H/TMA-logo-original.png" />,
      title: "Track My Academy",
      shortDesc: "All-in-one academy management platform.",
      features: ["Dynamic Dashboard", "Smart Attendance", "Automated Reports", "Fee Management", "Communication Hub"],
      imageKey: "tma-dashboard",
      imageDescription: "Mockup of Track My Academy dashboard interface"
    },
    {
      icon: <img  alt="Track My Matches Logo Icon" class="w-12 h-12 object-contain" src="https://i.ibb.co/4Z5mB0T8/TMM1.png" />,
      title: "Track My Matches",
      shortDesc: "Match registration, live tracking, and tournament management.",
      features: ["Easy Registration", "Live Score Updates", "Tournament Brackets", "Player Statistics", "Venue Management"],
      imageKey: "tmm-interface",
      imageDescription: "Mockup of Track My Matches live scoring interface"
    }
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
        className="relative h-[80vh] md:h-[90vh] w-full overflow-hidden text-brand-text-light rounded-lg shadow-2xl"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-brand-primary-blue/90 via-brand-secondary-blue/80 to-brand-sky-blue/70">
          <img  class="absolute inset-0 w-full h-full object-cover opacity-10 mix-blend-overlay" alt="Abstract network of data points and sports icons" src="https://images.unsplash.com/photo-1643101807331-21a4a3f081d5" />
        </div>
        
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-10 w-full px-4">
          <motion.div 
            initial={{ opacity:0, scale:0.8 }} animate={{ opacity:1, scale:1 }} transition={{delay:0.2, duration:0.7, type: "spring", stiffness:100}}
            className="inline-block p-4 bg-brand-background-light/10 backdrop-blur-sm rounded-full mb-6"
          >
            <Code className="w-16 h-16 md:w-20 md:h-20 text-brand-sky-blue" />
          </motion.div>
          <motion.h1 
            initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{delay:0.4, duration:0.5}}
            className="text-4xl md:text-6xl lg:text-7xl font-display mb-4 drop-shadow-lg"
          >
            {pageTitle}
          </motion.h1>
          <motion.p 
            initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{delay:0.6, duration:0.5}}
            className="text-lg md:text-2xl mb-8 max-w-2xl mx-auto drop-shadow-md text-brand-neutral-light"
          >
            {missionStatement}
          </motion.p>
          <motion.div initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{delay:0.8, duration:0.5}} className="space-x-4">
            <Button size="lg" className="bg-brand-sky-blue hover:bg-brand-background-light text-brand-text-dark font-bold shadow-xl">
              Request Demo <Send className="ml-2 h-5 w-5"/>
            </Button>
            
          </motion.div>
        </div>

        <motion.div 
          className="absolute bottom-4 left-4 md:bottom-8 md:left-8 w-full max-w-sm md:max-w-md p-3 bg-black/30 backdrop-blur-sm rounded-md font-mono text-xs text-green-400 shadow-xl"
          initial={{ opacity:0, x:-50 }} animate={{ opacity:1, x:0 }} transition={{delay:1, duration:0.5}}
        >
          <div className="flex items-center mb-1">
            <div className="w-3 h-3 rounded-full bg-red-500 mr-1.5"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500 mr-1.5"></div>
            <div className="w-3 h-3 rounded-full bg-green-500 mr-auto"></div>
            <span className="text-gray-400 text-xxs">CP_Infotech_Shell</span>
          </div>
          <AnimatePresence mode="wait">
            <motion.p
              key={currentCodeLine}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-blue-400">&gt;</span> {animatedCodeLines[currentCodeLine]}
            </motion.p>
          </AnimatePresence>
        </motion.div>
        
        <div className="absolute top-10 right-10 hidden md:block">
             <img  class="w-32 h-32 opacity-30 animate-pulse" alt="Animated dashboard graphic" src="https://images.unsplash.com/photo-1662057219054-ac91f1c562b5" />
        </div>
      </motion.section>

      <motion.section 
        className="container mx-auto px-4"
        variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} custom={1}
      >
        <h2 className="text-3xl md:text-4xl font-display text-center mb-12 text-brand-text-dark">
          Our Core <span className="gradient-text">Services</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
        className="py-16 bg-brand-neutral-light/50"
        variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} custom={2}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-2">
            <Rocket className={`w-8 h-8 ${iconColor} mr-3`} />
            <h2 className="text-3xl md:text-4xl font-display text-center text-brand-text-dark">
              Our Public <span className="gradient-text">SaaS Products</span>
            </h2>
          </div>
          <p className="text-center text-gray-700 mb-12 max-w-2xl mx-auto">
            Discover our flagship software solutions designed to revolutionize sports management and engagement. These products are not listed in the main navigation but are core to our Infotech offerings.
          </p>
          <div className="space-y-12">
            {saasProducts.map((product, index) => (
              <motion.div 
                key={product.title} 
                className={`flex flex-col md:flex-row items-center gap-8 p-6 md:p-8 rounded-xl shadow-xl bg-brand-background-light ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
                variants={sectionVariants}
                custom={index}
              >
                <div className="md:w-1/2">
                  <div className="flex items-center mb-4">
                    {product.icon}
                    <h3 className="ml-4 text-2xl md:text-3xl font-bold text-brand-primary-blue">{product.title}</h3>
                  </div>
                  <p className="text-gray-700 mb-4">{product.shortDesc}</p>
                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-sm text-gray-600">
                        <BarChart2 className="w-4 h-4 text-brand-sky-blue mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="border-brand-sky-blue text-brand-sky-blue hover:bg-brand-sky-blue hover:text-brand-text-dark">
                    Learn More <Play className="ml-2 h-4 w-4"/>
                  </Button>
                </div>
                <div className="md:w-1/2">
                  <div className="aspect-video bg-gray-200 rounded-lg shadow-md overflow-hidden relative group">
                    <img  class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" alt={product.imageDescription} srcKey={product.imageKey} src="https://i.ibb.co/Q7dPwndC/Whats-App-Image-2024-05-11-at-22-28-12-c2fb99d8-Copy.jpg" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-4">
                       <h4 className="text-brand-text-light text-lg font-semibold">{product.title} Interface</h4>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
      
      <motion.section 
        className="text-center py-12 bg-gradient-to-r from-brand-sky-blue/10 via-brand-primary-blue/5 to-brand-sky-blue/10 mt-12 rounded-lg"
        variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} custom={4}
      >
        <h2 className="text-3xl md:text-4xl font-display mb-6 text-brand-text-dark">Ready to Elevate Your Tech Game?</h2>
        <p className="text-lg text-gray-700 mb-8 max-w-xl mx-auto">Let CP Infotech be your technology partner. Request a demo of our products or discuss your custom development needs with our experts.</p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Button size="lg" className="bg-brand-primary-blue hover:bg-brand-secondary-blue text-brand-text-light font-bold">
            <HelpCircle className="mr-2 h-5 w-5"/> Request a Demo
          </Button>
          
        </div>
      </motion.section>
    </div>
  );
};

export default CPInfotechPage;
  