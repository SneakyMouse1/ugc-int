import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const handleScrollDown = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero" 
      className="relative h-screen w-full flex items-center justify-center bg-brand-green overflow-hidden pt-18"
    >
      {/* Bg Hero Image */}
      <div className="absolute inset-0 w-full h-full z-0">
        <img 
          src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1920&q=80"
          alt="International Container Port Infrastructure at Sunset"
          className="w-full h-full object-cover object-center brightness-50 contrast-105 saturate-75"
          referrerPolicy="no-referrer"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-brand-green/80"></div>
      </div>

      {/* Corner lines */}
      <div className="absolute left-10 top-24 w-40 h-40 border-l border-t border-brand-white/10 z-0 pointer-events-none"></div>
      <div className="absolute right-10 bottom-24 w-40 h-40 border-r border-b border-brand-white/10 z-0 pointer-events-none"></div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-3 md:px-10 w-full flex flex-col items-center text-center mt-[-2%]">
        
        {/* Brow line graphic */}
        <motion.div 
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: 48 }}
          transition={{ duration: 0.8 }}
          className="h-px bg-brand-gold-light mb-6"
        ></motion.div>

        {/* Brow label */}
        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-sans text-label-sm md:text-label font-bold tracking-[0.25em] uppercase text-brand-gold-light mb-6"
        >
          United Kingdom · International Trade House & Logistics
        </motion.p>

        {/* Display Heading */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="font-serif text-display-2xs sm:text-display-xs md:text-display-sm lg:text-display font-normal text-brand-white leading-[1.1] tracking-tight max-w-260"
        >
          International Trade, Equipment Sourcing <span className="font-serif italic text-brand-gold-light font-light">&amp;</span> Global Logistics Solutions
        </motion.h1>

        {/* Paragraph */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="max-w-170 mt-8 flex flex-col gap-4 text-brand-white/85 font-sans text-base md:text-body-xl leading-relaxed font-light"
        >
          <p>
            Connecting global markets through secure equipment sourcing, industrial spare parts supply channels, and multi-modal project cargo operations.
          </p>
          <p className="text-xs md:text-sm text-brand-white/60 uppercase tracking-[0.15em] font-medium mt-1">
            Serving Europe · Asia · North America · South America · Africa · Middle East
          </p>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-10"
        >
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-block bg-brand-gold-light hover:bg-brand-gold text-brand-white font-sans text-xs font-bold uppercase tracking-[0.15em] px-10 py-4 transition-all duration-300"
          >
            Request a Quotation
          </a>
        </motion.div>

      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-0 left-0 right-0 flex flex-col items-center">
        <div className="w-full h-px bg-brand-white/15"></div>
        <button 
          onClick={handleScrollDown}
          className="py-4 text-brand-white/40 hover:text-brand-gold-light transition-colors duration-200 focus:outline-none cursor-pointer"
          aria-label="Scroll to About Section"
        >
          <ChevronDown size={22} className="stroke-[1.5px]" />
        </button>
      </div>

    </section>
  );
}
