import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';
import HackingIntro from './components/HackingIntro';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <AnimatePresence>
          {showIntro && <HackingIntro onComplete={() => setShowIntro(false)} />}
        </AnimatePresence>
        
        <AnimatePresence>
          {!showIntro && (
            <>
              <Navbar />
              <main>
                <Hero />
                <Services />
                <Portfolio />
                <Testimonials />
                <Pricing />
                <Contact />
              </main>
              <Footer />
            </>
          )}
        </AnimatePresence>
      </div>
    </ThemeProvider>
  );
}

export default App;