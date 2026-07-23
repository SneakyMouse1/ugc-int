export default function Footer({ onOpenModal, onOpenCookieSettings }) {
  const handleAnchorClick = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-brand-dark text-brand-stone py-16 border-t border-brand-stone/20 font-sans">
      <div className="max-w-7xl mx-auto px-3 md:px-10">
        
        {/* Multi-Column Footer Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 items-start text-left mb-16">
          
          {/* Column 1: Corporate Identity */}
          <div className="flex flex-col gap-3">
            <div className="flex flex-col text-left">
              <span className="font-serif font-bold text-xl tracking-normal leading-none text-brand-white">
                UGC International Ltd
              </span>
              <span className="text-label-2xs uppercase tracking-[0.25em] text-brand-gold mt-1.5 font-semibold">
                International Trade & Logistics
              </span>
            </div>
            <p className="text-label-sm text-brand-stone/80 leading-relaxed uppercase tracking-widest mt-2">
              International Trade · Equipment Supply · Global Logistics
            </p>
          </div>

          {/* Column 2: Quick Navigation */}
          <div className="flex flex-col gap-4">
            <span className="font-bold text-label-xs tracking-[0.2em] text-brand-gold uppercase">
              Navigation
            </span>
            <div className="flex flex-col gap-2.5 items-start">
              {['services', 'geography', 'projects', 'contact'].map((id) => (
                <button 
                  key={id}
                  onClick={() => handleAnchorClick(id)}
                  className="text-label uppercase tracking-[0.12em] text-brand-stone hover:text-brand-gold transition-colors duration-200 focus:outline-none cursor-pointer"
                >
                  {id === 'projects' ? 'Selected Projects' : id.charAt(0).toUpperCase() + id.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Column 3: Legal & Regulatory */}
          <div className="flex flex-col gap-4">
            <span className="font-bold text-label-xs tracking-[0.2em] text-brand-gold uppercase">
              Legal & Compliance
            </span>
            <div className="flex flex-col gap-2.5 items-start">
              <button
                onClick={() => onOpenModal && onOpenModal('privacy')}
                className="text-label uppercase tracking-[0.12em] text-brand-stone hover:text-brand-gold transition-colors duration-200 text-left cursor-pointer"
              >
                Privacy Policy
              </button>
              <button
                onClick={() => onOpenModal && onOpenModal('cookie')}
                className="text-label uppercase tracking-[0.12em] text-brand-stone hover:text-brand-gold transition-colors duration-200 text-left cursor-pointer"
              >
                Cookie Policy
              </button>
              <button
                onClick={() => onOpenModal && onOpenModal('terms')}
                className="text-label uppercase tracking-[0.12em] text-brand-stone hover:text-brand-gold transition-colors duration-200 text-left cursor-pointer"
              >
                Terms & Conditions
              </button>
              <button
                onClick={() => onOpenCookieSettings && onOpenCookieSettings()}
                className="text-label uppercase tracking-[0.12em] text-brand-gold-light hover:text-brand-white underline transition-colors duration-200 text-left cursor-pointer font-semibold"
              >
                Cookie Preferences
              </button>
            </div>
          </div>

          {/* Column 4: Registered Office & Statutory Contact */}
          <div className="flex flex-col gap-3">
            <span className="font-bold text-label-xs tracking-[0.2em] text-brand-gold uppercase">
              Registered Office
            </span>
            <address className="not-italic text-xs text-brand-stone/85 leading-relaxed space-y-1 font-light">
              <p className="font-semibold text-brand-white">UGC International Ltd</p>
              <p>71-75 Shelton Street, Covent Garden</p>
              <p>London, WC2H 9JQ</p>
              <p className="uppercase text-brand-stone/70 tracking-wider">United Kingdom</p>
              <div className="pt-2">
                <a 
                  href="mailto:info@ugc-int.com" 
                  className="text-brand-gold-light hover:text-brand-white underline transition-colors duration-200 font-semibold"
                >
                  info@ugc-int.com
                </a>
              </div>
            </address>
          </div>

        </div>

        {/* Bottom Credits & UK Statutory Disclosures Row */}
        <div className="border-t border-brand-stone/15 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-xs tracking-[0.08em] uppercase text-brand-stone/70">
          <div className="space-y-1 text-left">
            <p>© {new Date().getFullYear()} UGC International Ltd. All rights reserved.</p>
            <p className="text-label-sm text-brand-stone/50 tracking-normal capitalize">
              Registered in England and Wales · Company No. 13854921 · VAT Reg. GB 394 8201 55
            </p>
          </div>
          <div className="text-left md:text-right text-label-sm text-brand-stone/50 tracking-widest">
            UNITED KINGDOM CORPORATE REGISTRATION
          </div>
        </div>

      </div>
    </footer>
  );
}

