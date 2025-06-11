
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { AlertTriangle } from 'lucide-react';

const NotFoundPage = () => {
  return (
    <motion.div 
      className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        animate={{ rotate: [0, 10, -10, 0], transition: { duration: 0.5, repeat: Infinity, repeatType: "mirror" } }}
      >
        <AlertTriangle className="w-24 h-24 text-brand-orange mb-8" />
      </motion.div>
      <h1 className="text-6xl font-display text-brand-light mb-4">404</h1>
      <h2 className="text-3xl font-semibold text-brand-cyan mb-6">Page Not Found</h2>
      <p className="text-lg text-gray-400 mb-10 max-w-md">
        Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
      </p>
      <Button asChild size="lg" className="bg-brand-orange hover:bg-brand-orange/90 text-brand-dark font-bold">
        <Link to="/">Go Back Home</Link>
      </Button>
    </motion.div>
  );
};

export default NotFoundPage;
  