
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FeaturesSection from '@/components/FeaturesSection';
import PricingPlans from '@/components/PricingPlans';
import SecuritySection from '@/components/SecuritySection';
import RegistrationForm from '@/components/RegistrationForm';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <Hero />
        <FeaturesSection />
        <PricingPlans />
        <SecuritySection />
        <RegistrationForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
