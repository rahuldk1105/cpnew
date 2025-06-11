
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingCTA from '@/components/FloatingCTA';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-brand-background-light text-brand-text-dark">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 pt-24 md:pt-32">
        {children}
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default Layout;
  