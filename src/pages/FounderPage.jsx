
import React from 'react';
import { motion } from 'framer-motion';
import { UserCircle, Zap, Building, Code, Users, Linkedin, Send, Target, Briefcase, Award, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FounderPage = () => {
  const founderEmail = "arichandran@cpsports.in";
  const pageTitle = "Our Leadership";
  const founderName = "Mr. Arichandran P";
  const founderTitle = "Founder & CEO, CP SPORTS";
  const founderQuote = "Sport has the power to change the world. Technology has the power to amplify that change. At CP SPORTS, we merge these forces to create a brighter future for athletes and the industry.";
  const founderBio = "Mr. Arichandran CP is a visionary entrepreneur who has dedicated over 7 years to revolutionizing the sports landscape through the strategic integration of technology. Recognizing the untapped potential at the grassroots level, he embarked on a mission to elevate athletic development using innovative solutions, culminating in the establishment of CP SPORTS. This multifaceted organization stands as a testament to his forward-thinking approach, encompassing the development of state-of-the-art sports infrastructure, the deployment of cutting-edge technology solutions designed to enhance performance and engagement, and the cultivation of international talent through specialized programs. Renowned for his commitment to excellence and unwavering belief in every athlete's potential, Mr. Arichandran champions the transformative power of data analytics and artificial intelligence, leveraging these tools to unlock new levels of athletic achievement and fan interaction within the sports world. His dynamic leadership continues to propel CP SPORTS towards new horizons, significantly shaping the future trajectory of the global sports ecosystem by fostering innovation and empowering the next generation of athletes.";
  const iconColor = "text-brand-primary-blue";

  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.7, ease: "easeOut" },
    }),
  };

  const founderImages = [
    { id: 1, alt: "Mr. Arichandran CP addressing a conference", description: "Founder giving a keynote speech" },
    { id: 2, alt: "Mr. Arichandran CP with a sports team", description: "Founder interacting with young athletes" },
    { id: 3, alt: "Mr. Arichandran CP overlooking a new facility", description: "Founder at a CP Infra project site" },
  ];

  const coreTeam = [
    { name: "Mr. Ajai Kumar", title: "Operations Manager", imageKey: "team-member-1", bio: "Expert in scaling operations and ensuring excellence across all verticals.", expertise: ["Operations", "Efficiency"], imageUrl: "https://i.ibb.co/zWrQFhtn/photo-output-3.jpg" },
    { name: "Mr. DK Rahul", title: "Technical Operational Manager", imageKey: "team-member-2", bio: "Driving technological innovation and product development for CP Infotech.", expertise: ["Technology", "SaaS"], imageUrl: "https://i.postimg.cc/SKnpbJ9M/DSC09184-1.jpg" },
    { name: "Ms. Growth Architect", title: "Head of Business Development", imageKey: "team-member-3", bio: "Spearheading market expansion and strategic partnerships globally.", expertise: ["Growth", "Partnerships"], imageUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80" },
    { name: "Mr. Infra Visionary", title: "Director of CP Infra", imageKey: "team-member-4", bio: "Leading the design and execution of world-class sports infrastructure projects.", expertise: ["Infrastructure", "Engineering"], imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&q=80" },
  ];


  return (
    <div className="space-y-20 md:space-y-28 pb-20">
      <motion.section
        className="relative py-16 md:py-24 bg-gradient-to-br from-brand-sky-blue/10 via-transparent to-brand-secondary-blue/10 rounded-lg overflow-hidden"
        variants={sectionVariants} initial="hidden" animate="visible" custom={0}
      >
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div 
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8, type: "spring", stiffness: 100 }}
            className="mb-8"
          >
            <img  class="w-40 h-40 md:w-48 md:h-48 rounded-full mx-auto shadow-2xl border-4 border-brand-background-light object-cover" alt="Dynamic portrait of Mr. Arichandran P, Founder of CP SPORTS" src="https://media.licdn.com/dms/image/v2/D5603AQFu6V2QFP-HfQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1732037812298?e=1752710400&v=beta&t=Rjb7ZQja9fhnL5bML51e6Jujs_An8FciS05BZS6WUCQ" />
          </motion.div>
          <motion.h1
            variants={sectionVariants} custom={1}
            className="text-4xl md:text-6xl font-display mb-3 text-brand-text-dark drop-shadow-sm"
          >{founderName}</motion.h1>
          <motion.p
            variants={sectionVariants} custom={1.5}
            className="text-xl md:text-2xl text-brand-primary-blue font-semibold mb-6"
          >{founderTitle}</motion.p>
          <motion.blockquote
            variants={sectionVariants} custom={2}
            className="text-md md:text-lg italic text-gray-700 max-w-3xl mx-auto mb-8 leading-relaxed"
          >
            "{founderQuote}"
          </motion.blockquote>
          <motion.div variants={sectionVariants} custom={2.5} className="space-x-3">
          <Button
  size="lg"
  className="bg-brand-primary-blue hover:bg-brand-secondary-blue text-brand-text-light font-bold"
  onClick={() => window.location.href = `mailto:${founderEmail}`}
>
  <Send className="mr-2 h-5 w-5" /> Contact {founderName.split(' ')[0]}
</Button>

<Button
  size="lg"
  variant="outline"
  className="border-brand-sky-blue text-brand-sky-blue hover:bg-brand-sky-blue hover:text-brand-text-dark font-bold"
  onClick={() => window.open("https://www.linkedin.com/in/arichandran-cp-715589106/", "_blank", "noopener,noreferrer")}
>
  <Linkedin className="mr-2 h-5 w-5" /> Follow on LinkedIn
</Button>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        className="container mx-auto px-4"
        variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} custom={1}
      >
        <h2 className="text-3xl md:text-4xl font-display text-center mb-12 text-brand-text-dark">
          About Our <span className="gradient-text">Founder</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
          <motion.div 
            className="md:col-span-3"
            variants={sectionVariants}
            custom={1.2}
          >
            <p className="text-lg text-gray-700 leading-relaxed mb-6">{founderBio}</p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Driven by a passion for excellence and innovation, Mr. Arichandran CP continues to lead CP SPORTS with a clear vision for the future, aiming to create lasting impact in the world of sports.
            </p>
          </motion.div>
          <motion.div 
            className="md:col-span-2 grid grid-cols-2 gap-4"
            variants={sectionVariants}
            custom={1.4}
          >
            <img  class="aspect-square w-full rounded-lg shadow-xl object-cover transform hover:scale-105 transition-transform duration-300" alt={founderImages[0].alt} src="https://i.ibb.co/KpcgHsFY/ari1.jpg" />
            <img  class="aspect-square w-full rounded-lg shadow-xl object-cover transform hover:scale-105 transition-transform duration-300 mt-4" alt={founderImages[1].alt} src="https://i.ibb.co/Wv5ZBqPg/ari3.jpg" />
            <img  class="aspect-square w-full rounded-lg shadow-xl object-cover transform hover:scale-105 transition-transform duration-300 col-span-2" alt={founderImages[2].alt} src="https://i.ibb.co/CKJHTJQH/ari2.jpg" />
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        className="py-16 bg-brand-primary-blue/5"
        variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} custom={2}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-display text-center mb-6 text-brand-text-dark">
            Vision for <span className="gradient-text">CP SPORTS</span>
          </h2>
          <p className="text-center text-lg text-gray-700 mb-10 max-w-3xl mx-auto leading-relaxed">
            Our roadmap is focused on sustainable growth, technological innovation, and expanding our global footprint to empower more athletes and organizations worldwide.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div className="glassmorphism-card p-6 rounded-xl shadow-lg">
              <Target className={`w-10 h-10 ${iconColor} mb-3`} />
              <h3 className="text-xl font-semibold text-brand-primary-blue mb-2">Global Expansion</h3>
              <p className="text-sm text-gray-600">Establishing CP SPORTS academies and tech hubs in key international markets within the next 5 years.</p>
            </div>
            <div className="glassmorphism-card p-6 rounded-xl shadow-lg">
              <Award className={`w-10 h-10 ${iconColor} mb-3`} />
              <h3 className="text-xl font-semibold text-brand-primary-blue mb-2">Technology Leadership</h3>
              <p className="text-sm text-gray-600">Pioneering AI-driven analytics and immersive training technologies for peak performance and fan engagement.</p>
            </div>
            <div className="glassmorphism-card p-6 rounded-xl shadow-lg">
              <Users className={`w-10 h-10 ${iconColor} mb-3`} />
              <h3 className="text-xl font-semibold text-brand-primary-blue mb-2">Community Impact</h3>
              <p className="text-sm text-gray-600">Launching nationwide grassroots programs to make quality sports training accessible to underprivileged talent.</p>
            </div>
          </div>
        </div>
      </motion.section>
      
      <motion.section
        className="container mx-auto px-4"
        variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} custom={3}
      >
        <h2 className="text-3xl md:text-4xl font-display text-center mb-12 text-brand-text-dark">
          Meet Our <span className="gradient-text">Core Managing Team</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {coreTeam.map((member, index) => (
            <motion.div 
              key={index} 
              className="bg-brand-background-light p-6 rounded-xl shadow-xl border-t-4 border-brand-sky-blue text-center flex flex-col items-center"
              variants={sectionVariants} custom={index * 0.5}
            >
              <img  class="w-24 h-24 rounded-full mb-4 shadow-md object-cover" alt={`Portrait of ${member.name}`} src={member.imageUrl} />
              <h3 className="text-lg font-semibold text-brand-primary-blue">{member.name}</h3>
              <p className="text-xs text-gray-500 mb-2">{member.title}</p>
              <p className="text-sm text-gray-600 mb-3 text-center h-16 overflow-hidden">{member.bio}</p>
              <div className="flex flex-wrap justify-center gap-1">
                {member.expertise.map(skill => (
                  <span key={skill} className="text-xs bg-brand-sky-blue/20 text-brand-primary-blue px-2 py-0.5 rounded-full">{skill}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        className="text-center py-12 bg-gradient-to-r from-brand-sky-blue/10 via-brand-primary-blue/5 to-brand-sky-blue/10 mt-12 rounded-lg"
        variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} custom={5}
      >
        <h2 className="text-3xl md:text-4xl font-display mb-6 text-brand-text-dark">Connect with Our Vision</h2>
        <p className="text-lg text-gray-700 mb-8 max-w-xl mx-auto">
          {founderName} and the CP SPORTS team are always open to collaborations and discussions that can further the mission of elevating sports.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
        <Button
  size="lg"
  className="bg-brand-primary-blue hover:bg-brand-secondary-blue text-brand-text-light font-bold"
  onClick={() => window.location.href = `mailto:${founderEmail}`}
>
  <Send className="mr-2 h-5 w-5" /> Contact {founderName.split(' ')[0]}
</Button>

<Button
  size="lg"
  variant="outline"
  className="border-brand-sky-blue text-brand-sky-blue hover:bg-brand-sky-blue hover:text-brand-text-dark font-bold"
  onClick={() => window.open("https://www.linkedin.com/in/arichandran-cp-715589106/", "_blank", "noopener,noreferrer")}
>
  <Linkedin className="mr-2 h-5 w-5" /> Follow on LinkedIn
</Button>

        </div>
      </motion.section>
    </div>
  );
};

export default FounderPage;
  