import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

import { LanguageProvider, useLanguage } from './context/LanguageContext';

const AppContent = () => {
  const { language } = useLanguage();
  const fontClass = language === 'th' ? 'font-prompt' : 'font-inter';

  return (
    <div className={`min-h-screen bg-slate-50 flex flex-col text-slate-900 ${fontClass}`}>
      <Header />
      <main className="grow">
        <Hero />
        <About />
        <Projects />
        <Contact />
        {/* Sections will go here */}
      </main>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

export default App;
