
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from '@/components/Layout';
import HomePage from '@/pages/HomePage';
import CPSportsAcademyPage from '@/pages/CPSportsAcademyPage';
import CPInfraPage from '@/pages/CPInfraPage';
import CPInfotechPage from '@/pages/CPInfotechPage';
import InternationalScoutingPage from '@/pages/InternationalScoutingPage';
import FounderPage from '@/pages/FounderPage';
import NotFoundPage from '@/pages/NotFoundPage';
import { Toaster } from "@/components/ui/toaster";
import { motion, AnimatePresence } from 'framer-motion';
import ScrollToTop from '@/components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<AnimatedPage><HomePage /></AnimatedPage>} />
            <Route path="/cp-sports-academy" element={<AnimatedPage><CPSportsAcademyPage /></AnimatedPage>} />
            <Route path="/cp-infra" element={<AnimatedPage><CPInfraPage /></AnimatedPage>} />
            <Route path="/cp-infotech" element={<AnimatedPage><CPInfotechPage /></AnimatedPage>} />
            <Route path="/international-scouting" element={<AnimatedPage><InternationalScoutingPage /></AnimatedPage>} />
            <Route path="/founder" element={<AnimatedPage><FounderPage /></AnimatedPage>} />
            <Route path="*" element={<AnimatedPage><NotFoundPage /></AnimatedPage>} />
          </Routes>
        </AnimatePresence>
      </Layout>
      <Toaster />
    </Router>
  );
}

const AnimatedPage = ({ children }) => {
  const pageVariants = {
    initial: {
      opacity: 0,
      y: 20
    },
    in: {
      opacity: 1,
      y: 0
    },
    out: {
      opacity: 0,
      y: -20
    }
  };

  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.5
  };

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      {children}
    </motion.div>
  );
};

export default App;
  