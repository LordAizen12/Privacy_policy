import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Footer } from './components/Footer';
import { PolicySection } from './components/PolicySection';
import { POLICY_SECTIONS } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-900 bg-[#f8fafc]">
      <Header />
      
      <main className="flex-grow w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Hero />
        
        <div className="space-y-4 fade-in-up delay-300">
          {POLICY_SECTIONS.map((section, index) => (
            <PolicySection 
              key={section.id} 
              data={section} 
              index={index} 
            />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;
