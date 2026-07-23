import { useState, useEffect, useRef } from 'react';
import { Mail, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    message: ''
  });
  
  const [submitted, setSubmitted] = useState(false);
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
    if (!turnstileToken) {
      alert("Please complete the security check.");
      return;
    }
    setLoading(true);

    const payload = {
      ...formData,
      turnstileToken: turnstileToken
    };
    console.log("Submitting enquiry with Turnstile token to backend:", payload);

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
        setSubmitted(true);
        setFormData({ name: '', company: '', email: '', message: '' });
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
    <section id="contact" className="py-24 bg-brand-green text-brand-white border-t border-brand-green-light overflow-hidden">
      <div className="max-w-7xl mx-auto px-3 md:px-10">
        
        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column */}
          <div className="lg:col-span-12 xl:col-span-5 flex flex-col items-start text-left">
            <p className="font-sans text-xs font-semibold tracking-[0.2em] uppercase text-brand-gold-light mb-4">
              Get in Touch
            </p>
            <h2 className="font-serif text-heading-md md:text-heading-lg lg:text-heading-xl font-normal text-brand-white leading-none mb-6">
              Submit an Enquiry
            </h2>
            
            <div className="font-sans text-body md:text-body-md text-brand-white/80 leading-relaxed mb-8 space-y-4 font-light">
              <p>
                To request a quotation or discuss a trade or logistics requirement, please complete the form and a member of our team will respond within one business day.
              </p>
              <p className="text-brand-white/65">
                For general correspondence:
              </p>
              <div className="flex items-center gap-3 mt-2">
                <Mail size={16} className="text-brand-gold-light shrink-0" />
                <a 
                  href="mailto:infos@ugc-int.com" 
                  className="font-sans text-body-md font-bold text-brand-gold-light underline tracking-wide hover:opacity-85 transition-opacity"
                >
                  info@ugc-int.com
                </a>
              </div>
            </div>

            <div className="border-t border-brand-green-light pt-6 mt-4 w-full text-left">
              <p className="font-sans text-body-xs text-brand-white/55 leading-relaxed">
                We do not operate a public telephone line.<br />
                All enquiries are handled via email and the contact form.
              </p>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-12 xl:col-span-7 bg-brand-green-mid border border-brand-green-light p-8 md:p-10">
            {submitted ? (
              <div className="text-center py-10 flex flex-col items-center justify-center">
                <CheckCircle size={48} className="text-brand-gold-light mb-4 stroke-[1.5px]" />
                <h3 className="font-serif text-heading-xs md:text-heading-sm font-normal text-brand-white mb-3">
                  Enquiry Received
                </h3>
                <p className="font-sans text-sm md:text-base text-brand-white/80 max-w-120 leading-relaxed mb-6 font-light">
                  Thank you for contacting UGC International. Your enquiry has been routed directly to our operations team. A representative will respond to your registered email address within one business day.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="bg-brand-green border border-brand-green-light hover:border-brand-gold-light transition-all text-brand-white font-sans text-xs font-bold uppercase tracking-widest px-8 py-3 cursor-pointer"
                >
                  Submit Another Enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="text-left">
                    <label htmlFor="name" className="sr-only">Full Name</label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      required
                      placeholder="Full Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full bg-brand-green border border-brand-green-light p-4 font-sans text-body text-brand-white placeholder-brand-white/40 focus:border-brand-gold-light focus:outline-none transition-colors duration-250"
                    />
                  </div>
                  <div className="text-left">
                    <label htmlFor="company" className="sr-only">Company Name</label>
                    <input
                      id="company"
                      type="text"
                      name="company"
                      required
                      placeholder="Company Name"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full bg-brand-green border border-brand-green-light p-4 font-sans text-body text-brand-white placeholder-brand-white/40 focus:border-brand-gold-light focus:outline-none transition-colors duration-250"
                    />
                  </div>
                </div>

                <div className="text-left">
                  <label htmlFor="email" className="sr-only">Email Address</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-brand-green border border-brand-green-light p-4 font-sans text-body text-brand-white placeholder-brand-white/40 focus:border-brand-gold-light focus:outline-none transition-colors duration-250"
                  />
                </div>

                <div className="text-left">
                  <label htmlFor="message" className="sr-only">Describe your requirement</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    placeholder="Describe your requirement"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full bg-brand-green border border-brand-green-light p-4 font-sans text-body text-brand-white placeholder-brand-white/40 focus:border-brand-gold-light focus:outline-none transition-colors duration-250 resize-none animate-none"
                  />
                </div>

                {/* Cloudflare Turnstile CAPTCHA */}
                <div className="w-full flex justify-start my-2">
                  <div ref={turnstileRef}></div>
                </div>

                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-5 pt-2">
                  <p className="font-sans text-label-sm text-brand-white/45 text-left md:max-w-xs leading-relaxed uppercase tracking-wider">
                    Your information is not shared with third parties. Required fields are validated under British corporate security standards.
                  </p>
                  
                  <button
                    type="submit"
                    disabled={loading || !turnstileToken}
                    className="w-full md:w-auto bg-brand-gold-light hover:bg-brand-gold text-brand-white font-sans text-label-sm font-bold uppercase tracking-[0.2em] p-4 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {loading ? "Sending..." : "Submit Enquiry"}
                  </button>
                </div>

              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
