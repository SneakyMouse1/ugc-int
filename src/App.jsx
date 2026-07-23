import { useState } from 'react';
import { motion } from 'motion/react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Geography from './components/Geography';
import Projects from './components/Projects';
import WhyUs from './components/WhyUs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LegalModals from './components/LegalModals';
import CookieBanner from './components/CookieBanner';

function ScrollReveal({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export default function App() {
  const [activeLegalModal, setActiveLegalModal] = useState(null); // 'privacy' | 'cookie' | 'terms' | null
  const [isCookieSettingsOpen, setIsCookieSettingsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-brand-offwhite text-brand-charcoal selection:bg-brand-gold-light selection:text-white antialiased overflow-x-hidden pt-18">
      <div id="top"></div>
      <Header />
      <main>

        <Hero />

        <ScrollReveal>
          <About />
        </ScrollReveal>

        <ScrollReveal>
          <Services />
        </ScrollReveal>

        <ScrollReveal>
          <Geography />
        </ScrollReveal>
        
        <ScrollReveal>
          <Projects />
        </ScrollReveal>

        <ScrollReveal>
          <WhyUs />
        </ScrollReveal>

        <ScrollReveal>
          <Contact />
        </ScrollReveal>

      </main>

      <Footer 
        onOpenModal={(modalName) => setActiveLegalModal(modalName)}
        onOpenCookieSettings={() => setIsCookieSettingsOpen(true)}
      />

      <LegalModals 
        activeModal={activeLegalModal} 
        onClose={() => setActiveLegalModal(null)} 
      />

      <CookieBanner 
        isOpenModal={isCookieSettingsOpen} 
        setIsOpenModal={setIsCookieSettingsOpen} 
      />

    </div>
  );
}

