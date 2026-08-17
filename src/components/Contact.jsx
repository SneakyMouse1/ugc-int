import { useState, useEffect, useRef } from 'react';
import { Mail, CheckCircle2, Phone, Clock, ShieldCheck, ArrowRight, Check, ChevronDown } from 'lucide-react';

export default function Contact({ onOpenModal }) {
  const categories = [
    "Equipment Sourcing",
    "Agricultural Machinery",
    "Multimodal Logistics",
    "Spare Parts Supply",
    "Project Cargo (Oversized)",
    "General Trade Consultation"
  ];

  const [selectedCategory, setSelectedCategory] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    message: ''
  });
  const [consent, setConsent] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [referenceCode, setReferenceCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState(null);

  const turnstileRef = useRef(null);
  const widgetIdRef = useRef(null);

  useEffect(() => {
    const renderWidget = () => {
      if (window.turnstile && turnstileRef.current && !widgetIdRef.current) {
        widgetIdRef.current = window.turnstile.render(turnstileRef.current, {
          sitekey: '0x4AAAAAAD1DQSXRf1NXxNzU',
          theme: 'dark',
          callback: (token) => {
            setTurnstileToken(token);
          },
          'expired-callback': () => {
            setTurnstileToken(null);
          },
          'error-callback': () => {
            setTurnstileToken(null);
          }
        });
      }
    };

    if (window.turnstile) {
      renderWidget();
    } else {
      const interval = setInterval(() => {
        if (window.turnstile) {
          renderWidget();
          clearInterval(interval);
        }
      }, 100);
      return () => clearInterval(interval);
    }

    return () => {
      if (widgetIdRef.current && window.turnstile) {
        window.turnstile.remove(widgetIdRef.current);
        widgetIdRef.current = null;
      }
    };
  }, [submitted]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedCategory) {
      alert("Please select a Trade / Logistics Scope.");
      return;
    }
    if (!consent) {
      alert("Please confirm your consent with our EU/UK GDPR Privacy Policy and Terms & Conditions.");
      return;
    }
    if (!turnstileToken) {
      alert("Please complete the security check.");
      return;
    }
    setLoading(true);

    const payload = {
      name: formData.name,
      company: formData.company,
      email: formData.email,
      category: selectedCategory,
      message: formData.message,
      turnstileToken: turnstileToken
    };
    console.log("Submitting enquiry to backend:", payload);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      const result = await response.json();

      if (response.ok && result.success) {
        const genRef = `UGC-${Math.floor(100000 + Math.random() * 900000)}`;
        setReferenceCode(genRef);
        setSubmitted(true);
        setFormData({ name: '', company: '', email: '', message: '' });
        setSelectedCategory('');
        setConsent(false);
      } else {
        alert(result.error || 'Failed to submit enquiry. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting enquiry:', error);
      alert('A network error occurred. Please verify your connection and try again.');
    } finally {
      setLoading(false);
      setTurnstileToken(null);
      if (widgetIdRef.current && window.turnstile) {
        window.turnstile.reset(widgetIdRef.current);
      }
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-24 bg-brand-green text-brand-white border-t border-brand-green-light relative overflow-hidden">
      {/* Ambient background architectural lines */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="w-full h-full" style={{ backgroundImage: 'radial-gradient(#D2A836 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-10 relative z-10">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          
          {/* Left Column: Direct Trade Desk & SLA Protocol */}
          <div className="lg:col-span-5 flex flex-col items-start text-left">
            <p className="font-sans text-xs font-bold tracking-[0.2em] uppercase text-brand-gold mb-4">
              Direct Trade Desk · Enquiry Portal
            </p>

            <h2 className="font-serif text-heading-md md:text-heading-lg lg:text-heading-xl font-normal text-brand-white leading-[1.1] mb-6">
              Initiate a Trade or Logistics Operation
            </h2>
            
            <p className="font-sans text-body md:text-body-md text-brand-white/80 leading-relaxed font-light mb-8">
              Submit your technical specifications, procurement schedule or freight requirements. Our London trade desk reviews each submission and coordinates directly with certified international suppliers and carriers.
            </p>

            {/* Protocol Badges */}
            <div className="w-full space-y-3 mb-8">
              <div className="flex items-start gap-4 p-4 bg-brand-green-mid/70 border border-brand-green-light/80">
                <div className="p-2 bg-brand-green border border-brand-green-light text-brand-gold shrink-0 mt-0.5">
                  <Clock size={16} className="stroke-[1.75px]" />
                </div>
                <div>
                  <h4 className="font-sans text-xs font-bold uppercase tracking-widest text-brand-white">
                    24-Hour Response SLA
                  </h4>
                  <p className="font-sans text-body-xs text-brand-white/70 mt-1 font-light leading-relaxed">
                    Formal assessment and preliminary routing confirmed within one business day (GMT).
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-brand-green-mid/70 border border-brand-green-light/80">
                <div className="p-2 bg-brand-green border border-brand-green-light text-brand-gold shrink-0 mt-0.5">
                  <ShieldCheck size={16} className="stroke-[1.75px]" />
                </div>
                <div>
                  <h4 className="font-sans text-xs font-bold uppercase tracking-widest text-brand-white">
                    Trade Confidentiality & Compliance
                  </h4>
                  <p className="font-sans text-body-xs text-brand-white/70 mt-1 font-light leading-relaxed">
                    All transactions and cargo specifications are handled under strict bilateral NDA principles and EU/UK GDPR compliance.
                  </p>
                </div>
              </div>
            </div>

            {/* Direct Contacts Column */}
            <div className="w-full border-t border-brand-green-light pt-6">
              <p className="font-sans text-label-xs uppercase tracking-[0.2em] text-brand-gold font-bold mb-5">
                Direct Desk Communications
              </p>
              
              <div className="flex flex-col divide-y divide-brand-green-light/40 font-sans text-sm">
                <a 
                  href="mailto:British.UGC@gmail.com" 
                  className="py-3 flex items-center justify-between group transition-colors duration-200 text-left hover:text-brand-gold"
                >
                  <div className="flex items-center gap-3">
                    <Mail size={16} className="text-brand-gold shrink-0 transition-transform group-hover:scale-110" />
                    <div>
                      <div className="text-[10px] uppercase tracking-wider text-brand-white/50 font-medium">Headquarters Desk</div>
                      <span className="text-brand-white font-medium group-hover:text-brand-gold transition-colors">British.UGC@gmail.com</span>
                    </div>
                  </div>
                  <ArrowRight size={14} className="text-brand-gold opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-200" />
                </a>

                <a 
                  href="tel:+37066266400" 
                  className="py-3 flex items-center justify-between group transition-colors duration-200 text-left hover:text-brand-gold"
                >
                  <div className="flex items-center gap-3">
                    <Phone size={16} className="text-brand-gold shrink-0 transition-transform group-hover:scale-110" />
                    <div>
                      <div className="text-[10px] uppercase tracking-wider text-brand-white/50 font-medium">Baltic Logistics Desk</div>
                      <span className="text-brand-white font-medium group-hover:text-brand-gold transition-colors">+370 662 66400</span>
                    </div>
                  </div>
                  <ArrowRight size={14} className="text-brand-gold opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-200" />
                </a>

                <a 
                  href="tel:+48666557461" 
                  className="py-3 flex items-center justify-between group transition-colors duration-200 text-left hover:text-brand-gold"
                >
                  <div className="flex items-center gap-3">
                    <Phone size={16} className="text-brand-gold shrink-0 transition-transform group-hover:scale-110" />
                    <div>
                      <div className="text-[10px] uppercase tracking-wider text-brand-white/50 font-medium">Central Europe Desk</div>
                      <span className="text-brand-white font-medium group-hover:text-brand-gold transition-colors">+48 666 557 461</span>
                    </div>
                  </div>
                  <ArrowRight size={14} className="text-brand-gold opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-200" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Architectural Enquiry Form */}
          <div className="lg:col-span-7 bg-brand-green-mid border border-brand-green-light p-6 sm:p-8 md:p-10 relative shadow-2xl">
            
            {/* Top decorative badge */}
            <div className="flex items-center justify-between border-b border-brand-green-light pb-4 mb-6 text-left">
              <span className="font-sans text-label-xs font-bold uppercase tracking-[0.2em] text-brand-gold">
                Electronic RFQ / Specification Form
              </span>
              <span className="font-sans text-[11px] text-brand-white/40 uppercase tracking-widest hidden sm:inline-block">
                Ref: UK-TRD-2026
              </span>
            </div>

            {submitted ? (
              /* Success confirmation receipt */
              <div className="text-left py-8 sm:py-12 flex flex-col items-start">
                <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 bg-brand-green border border-brand-gold mb-6">
                  <CheckCircle2 size={18} className="text-brand-gold stroke-[2px]" />
                  <span className="font-sans text-label-xs font-bold uppercase tracking-[0.2em] text-brand-gold">
                    Enquiry Logged & Transmitted
                  </span>
                </div>

                <h3 className="font-serif text-heading-md font-normal text-brand-white mb-3">
                  Requirement Transmitted to Operations
                </h3>

                <p className="font-sans text-sm md:text-base text-brand-white/80 leading-relaxed font-light mb-6">
                  Thank you for submitting your specifications to <strong className="font-semibold text-brand-white">United Global Commerce LTD</strong>. Your request has been assigned to our primary trade and logistics desk.
                </p>

                {/* Structured Receipt Info */}
                <div className="w-full bg-brand-green border border-brand-green-light p-5 space-y-3 mb-8">
                  <div className="flex justify-between items-center border-b border-brand-green-light pb-2 text-xs">
                    <span className="text-brand-white/50 uppercase tracking-widest">Enquiry Reference:</span>
                    <span className="font-mono text-brand-gold font-semibold">{referenceCode}</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-brand-green-light pb-2 text-xs">
                    <span className="text-brand-white/50 uppercase tracking-widest">Scope Category:</span>
                    <span className="text-brand-white font-medium">{selectedCategory}</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-brand-white/50 uppercase tracking-widest">Operational SLA:</span>
                    <span className="text-brand-white font-medium">1 Business Day Response (GMT)</span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="bg-brand-gold hover:bg-[#c0972b] text-brand-dark font-sans text-xs font-bold uppercase tracking-[0.2em] px-8 py-3.5 transition-all duration-200 cursor-pointer"
                >
                  Submit Another Requirement
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 text-left">
                
                {/* Requirement Category Selector */}
                <div className="space-y-1.5">
                  <label htmlFor="category" className="block font-sans text-label-xs font-bold tracking-[0.18em] uppercase text-brand-gold">
                    Trade / Logistics Scope
                  </label>
                  <div className="relative">
                    <select
                      id="category"
                      required
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className={`w-full bg-brand-green border border-brand-green-light px-4 py-3.5 font-sans text-body transition-colors duration-200 cursor-pointer appearance-none pr-10 focus:border-brand-gold focus:outline-none ${
                        selectedCategory ? 'text-brand-white' : 'text-brand-white/40'
                      }`}
                    >
                      <option value="" disabled className="bg-brand-green text-brand-white/40">
                        — Please Select Scope / Requirement —
                      </option>
                      {categories.map((cat) => (
                        <option key={cat} value={cat} className="bg-brand-green-mid text-brand-white py-2">
                          {cat}
                        </option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-brand-gold">
                      <ChevronDown size={16} />
                    </div>
                  </div>
                </div>

                {/* Information Fields */}
                <div className="space-y-4 pt-1">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Name */}
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="block font-sans text-label-xs font-bold tracking-[0.18em] uppercase text-brand-white/70">
                        Representative Name <span className="text-brand-gold">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        name="name"
                        required
                        placeholder="e.g. Johnathan Vance"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full bg-brand-green border border-brand-green-light px-4 py-3.5 font-sans text-body text-brand-white placeholder-brand-white/30 focus:border-brand-gold focus:outline-none transition-colors duration-200"
                      />
                    </div>

                    {/* Company */}
                    <div className="space-y-1.5">
                      <label htmlFor="company" className="block font-sans text-label-xs font-bold tracking-[0.18em] uppercase text-brand-white/70">
                        Company & Jurisdiction <span className="text-brand-gold">*</span>
                      </label>
                      <input
                        id="company"
                        type="text"
                        name="company"
                        required
                        placeholder="e.g. AgriCorp Logistics GmbH"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full bg-brand-green border border-brand-green-light px-4 py-3.5 font-sans text-body text-brand-white placeholder-brand-white/30 focus:border-brand-gold focus:outline-none transition-colors duration-200"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="block font-sans text-label-xs font-bold tracking-[0.18em] uppercase text-brand-white/70">
                      Corporate Email Address <span className="text-brand-gold">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      required
                      placeholder="e.g. j.vance@agricorp.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full bg-brand-green border border-brand-green-light px-4 py-3.5 font-sans text-body text-brand-white placeholder-brand-white/30 focus:border-brand-gold focus:outline-none transition-colors duration-200"
                    />
                  </div>

                  {/* Message / Specifications */}
                  <div className="space-y-1.5">
                    <label htmlFor="message" className="block font-sans text-label-xs font-bold tracking-[0.18em] uppercase text-brand-white/70">
                      Scope, Specifications or Route Details <span className="text-brand-gold">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      placeholder="Please specify equipment model, part numbers, quantity, origin/destination ports, or transport timeframe..."
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full bg-brand-green border border-brand-green-light p-4 font-sans text-body text-brand-white placeholder-brand-white/30 focus:border-brand-gold focus:outline-none transition-colors duration-200 resize-none"
                    />
                  </div>
                </div>

                {/* Cloudflare Turnstile CAPTCHA */}
                <div className="w-full flex justify-start my-2">
                  <div ref={turnstileRef}></div>
                </div>

                {/* EU GDPR Compliance Checkbox */}
                <div className="pt-1">
                  <label className="flex items-start gap-3 cursor-pointer select-none group">
                    <div className="relative flex items-center justify-center shrink-0 mt-0.5">
                      <input
                        type="checkbox"
                        checked={consent}
                        onChange={(e) => setConsent(e.target.checked)}
                        className="sr-only"
                        required
                      />
                      <div className={`w-4 h-4 border transition-colors flex items-center justify-center ${
                        consent 
                          ? 'bg-brand-gold border-brand-gold text-brand-dark' 
                          : 'bg-brand-green border-brand-green-light group-hover:border-brand-gold/70'
                      }`}>
                        {consent && <Check size={12} className="stroke-[3px]" />}
                      </div>
                    </div>
                    
                    <p className="font-sans text-xs text-brand-white/75 leading-relaxed font-light text-left">
                      I consent to the processing of my corporate contact details in accordance with the{' '}
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          if (onOpenModal) onOpenModal('privacy');
                        }}
                        className="text-brand-gold underline hover:text-brand-white transition-colors cursor-pointer font-medium"
                      >
                        Privacy Policy
                      </button>{' '}
                      and accept the{' '}
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          if (onOpenModal) onOpenModal('terms');
                        }}
                        className="text-brand-gold underline hover:text-brand-white transition-colors cursor-pointer font-medium"
                      >
                        Terms & Conditions
                      </button>
                      . Required under EU & UK GDPR regulations for international trade enquiries.
                    </p>
                  </label>
                </div>

                {/* Submit Action Bar */}
                <div className="pt-3">
                  <button
                    type="submit"
                    disabled={loading || !turnstileToken || !consent}
                    className="w-full bg-brand-gold hover:bg-[#c0972b] text-brand-dark font-sans text-xs font-bold uppercase tracking-[0.2em] py-4 px-8 transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed shadow-lg hover:shadow-brand-gold/10"
                  >
                    {loading ? (
                      <span>Transmitting Specifications...</span>
                    ) : (
                      <>
                        <span>Submit Trade Enquiry</span>
                        <ArrowRight size={16} className="stroke-[2.5px]" />
                      </>
                    )}
                  </button>
                  <p className="text-center font-sans text-[10px] uppercase tracking-wider text-brand-white/40 mt-3">
                    Validated under UK Statutory Compliance · Response within 24h
                  </p>
                </div>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
