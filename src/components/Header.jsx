import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Geography', href: '#geography' },
    { name: 'Selected Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  // Track active section on scroll for precise navigation state representation
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // Offset for header height

      // Find which section is currently in view
      for (const link of navLinks) {
        const id = link.href.substring(1);
        const element = document.getElementById(id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id);
            return;
          }
        }
      }

      // Default to Hero if at the very top of page
      if (window.scrollY < 300) {
        setActiveSection('hero');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setMobileMenuOpen(false);
    const id = href.substring(1);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 h-18 bg-brand-white border-b border-brand-stone z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-2.5 md:px-10 h-full flex items-center justify-between">
        
        {/* Wordmark Logo */}
        <a 
          href="#top" 
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex flex-col text-left group"
        >
          <img src="/logo.png" alt="UGC International" className="h-[60px] w-auto" />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const id = link.href.substring(1);
            const isActive = activeSection === id;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={`font-sans text-label-sm font-semibold uppercase tracking-[0.12em] transition-all duration-200 ${
                  isActive 
                    ? 'text-brand-gold border-b border-brand-gold pb-1' 
                    : 'text-brand-slate hover:text-brand-green'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* CTA Request Quote Button */}
        <div className="hidden md:block">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#contact');
            }}
            className="inline-block bg-brand-green hover:bg-brand-gold text-brand-white font-sans text-label-sm font-semibold uppercase tracking-widest px-6 py-3 transition-colors duration-300"
          >
            Request a Quote
          </a>
        </div>

        {/* Mobile Hamburger Trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-brand-green focus:outline-none"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

      </div>

      {/* Mobile Slide-in Navigation Overlay */}
      <div 
        className={`fixed inset-y-0 right-0 top-18 w-full bg-brand-white border-l border-brand-stone/40 z-40 md:hidden flex flex-col justify-start px-8 py-12 gap-8 transition-transform duration-300 ease-in-out shadow-2xl ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col gap-6">
          {navLinks.map((link) => {
            const id = link.href.substring(1);
            const isActive = activeSection === id;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={`font-sans text-body-md font-semibold uppercase tracking-[0.12em] text-left transition-colors duration-200 ${
                  isActive ? 'text-brand-gold' : 'text-brand-green hover:text-brand-gold'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </div>
        
        <div className="border-t border-brand-stone/30 pt-6 mt-4">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#contact');
            }}
            className="w-full block text-center bg-brand-green hover:bg-brand-gold text-brand-white font-sans text-label font-semibold uppercase tracking-widest py-3.5"
          >
            Request a Quote
          </a>
        </div>
      </div>
    </header>
  );
}
