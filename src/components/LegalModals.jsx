import { useEffect } from 'react';
import { X, ShieldCheck, Cookie, Scale, Building2, Mail } from 'lucide-react';

export default function LegalModals({ activeModal, onClose }) {
  // Lock body scroll when modal is open
  useEffect(() => {
    if (activeModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [activeModal]);

  // Handle ESC key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!activeModal) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/80 backdrop-blur-sm transition-opacity duration-300"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl max-h-[85vh] bg-brand-dark border border-brand-stone/30 shadow-2xl overflow-hidden flex flex-col text-left text-brand-stone font-sans"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-brand-stone/20 bg-brand-green-mid/40">
          <div className="flex items-center gap-3">
            {activeModal === 'privacy' && <ShieldCheck className="text-brand-gold-light w-6 h-6 shrink-0" />}
            {activeModal === 'cookie' && <Cookie className="text-brand-gold-light w-6 h-6 shrink-0" />}
            {activeModal === 'terms' && <Scale className="text-brand-gold-light w-6 h-6 shrink-0" />}
            
            <div>
              <h2 className="font-serif text-xl md:text-2xl text-brand-white font-normal">
                {activeModal === 'privacy' && 'Privacy Policy'}
                {activeModal === 'cookie' && 'Cookie Policy'}
                {activeModal === 'terms' && 'Terms and Conditions'}
              </h2>
              <p className="text-xs uppercase tracking-widest text-brand-gold font-semibold mt-0.5">
                UGC International Ltd · Statutory Disclosure
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-brand-stone/70 hover:text-brand-white hover:bg-brand-stone/10 rounded-full transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X size={22} />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 md:p-8 overflow-y-auto space-y-6 text-sm md:text-base text-brand-stone/90 leading-relaxed font-light">
          
          {/* Statutory Company Badge */}
          <div className="p-4 bg-brand-green/40 border border-brand-green-light/40 text-xs md:text-sm text-brand-white/80 space-y-1">
            <div className="flex items-center gap-2 text-brand-gold-light font-semibold uppercase tracking-wider">
              <Building2 size={16} />
              <span>Registered Corporate Entity Details</span>
            </div>
            <p><strong>Full Registered Name:</strong> UGC International Ltd</p>
            <p><strong>Company Registration Number:</strong> Company No. 13854921</p>
            <p><strong>Jurisdiction of Incorporation:</strong> Registered in England and Wales</p>
            <p><strong>Registered Office:</strong> 71-75 Shelton Street, Covent Garden, London, WC2H 9JQ, United Kingdom</p>
            <p><strong>VAT Registration:</strong> VAT No. GB 394 8201 55</p>
          </div>

          {/* Privacy Policy Content */}
          {activeModal === 'privacy' && (
            <div className="space-y-6">
              <section className="space-y-2">
                <h3 className="text-lg font-serif text-brand-white border-b border-brand-stone/15 pb-1">1. Data Controller Overview</h3>
                <p>
                  UGC International Ltd (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;) is committed to preserving the privacy of our corporate clients, trade partners, and web visitors in strict accordance with the UK General Data Protection Regulation (UK GDPR), the Data Protection Act 2018 (DPA 2018), and the Privacy and Electronic Communications Regulations (PECR).
                </p>
              </section>

              <section className="space-y-2">
                <h3 className="text-lg font-serif text-brand-white border-b border-brand-stone/15 pb-1">2. Information We Collect</h3>
                <p>We process personal data submitted via our website contact form or directly via corporate correspondence:</p>
                <ul className="list-disc pl-5 space-y-1 text-brand-stone/80">
                  <li>Full Name and Job Title</li>
                  <li>Corporate Email Address and Business Phone Number</li>
                  <li>Company / Entity Name and Jurisdiction</li>
                  <li>Details of commercial enquiries, supply specifications, or trade quotes</li>
                  <li>Technical diagnostics data (IP address, user agent, timestamps, Cloudflare Turnstile security tokens)</li>
                </ul>
              </section>

              <section className="space-y-2">
                <h3 className="text-lg font-serif text-brand-white border-b border-brand-stone/15 pb-1">3. Legal Basis for Processing</h3>
                <p>We rely on the following lawful bases under UK GDPR Article 6:</p>
                <ul className="list-disc pl-5 space-y-1 text-brand-stone/80">
                  <li><strong>Pre-contractual Steps & Contract Performance (Art. 6(1)(b)):</strong> Processing enquiries to provide quotes, equipment specifications, or logistics agreements.</li>
                  <li><strong>Legitimate Interests (Art. 6(1)(f)):</strong> Safeguarding site infrastructure against malicious traffic using security verification tools (Cloudflare Turnstile) and managing B2B corporate communications.</li>
                  <li><strong>Legal Compliance (Art. 6(1)(c)):</strong> Fulfilling UK tax, audit, and trade record-keeping duties under British statutory legislation.</li>
                </ul>
              </section>

              <section className="space-y-2">
                <h3 className="text-lg font-serif text-brand-white border-b border-brand-stone/15 pb-1">4. Security & Cloudflare Turnstile</h3>
                <p>
                  To secure our contact forms against spam and automated abuse, we utilize Cloudflare Turnstile. Turnstile evaluates telemetry signals (such as browser features and challenge responses) without storing invasive user cross-tracking profiles.
                </p>
              </section>

              <section className="space-y-2">
                <h3 className="text-lg font-serif text-brand-white border-b border-brand-stone/15 pb-1">5. Data Sharing & Retention</h3>
                <p>
                  We do not sell, rent, or commercialize your personal information. Data is stored securely on protected UK/EU servers. Commercial enquiry records are retained for a maximum of 6 years to satisfy UK corporate record-keeping requirements.
                </p>
              </section>

              <section className="space-y-2">
                <h3 className="text-lg font-serif text-brand-white border-b border-brand-stone/15 pb-1">6. Your Rights under UK GDPR</h3>
                <p>Under UK data protection law, you possess the right to:</p>
                <ul className="list-disc pl-5 space-y-1 text-brand-stone/80">
                  <li>Request access to copies of your personal data</li>
                  <li>Request rectification of inaccurate data</li>
                  <li>Request erasure of data (&quot;Right to be forgotten&quot;) under applicable statutory limits</li>
                  <li>Object to or restrict data processing</li>
                  <li>Lodge a complaint with the UK Information Commissioner&apos;s Office (ICO) at <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" className="text-brand-gold-light underline">ico.org.uk</a></li>
                </ul>
              </section>

              <section className="space-y-2 pt-2 border-t border-brand-stone/15">
                <h3 className="text-lg font-serif text-brand-white">Data Protection Contact</h3>
                <p className="flex items-center gap-2 text-brand-gold-light">
                  <Mail size={16} />
                  <a href="mailto:info@ugc-int.com" className="underline font-medium">info@ugc-int.com</a>
                </p>
              </section>
            </div>
          )}

          {/* Cookie Policy Content */}
          {activeModal === 'cookie' && (
            <div className="space-y-6">
              <section className="space-y-2">
                <h3 className="text-lg font-serif text-brand-white border-b border-brand-stone/15 pb-1">1. What are Cookies?</h3>
                <p>
                  Cookies and local storage are small text files placed on your browser or device when accessing websites. They allow websites to remember user settings, maintain secure browsing sessions, and optimize interface performance.
                </p>
              </section>

              <section className="space-y-2">
                <h3 className="text-lg font-serif text-brand-white border-b border-brand-stone/15 pb-1">2. How UGC International Ltd Uses Cookies</h3>
                <p>
                  In compliance with the UK Privacy and Electronic Communications Regulations (PECR), we only deploy essential cookies by default. Non-essential cookies are disabled until you grant explicit consent via our Cookie Consent Banner.
                </p>
              </section>

              <section className="space-y-2">
                <h3 className="text-lg font-serif text-brand-white border-b border-brand-stone/15 pb-1">3. Categories of Cookies Used</h3>
                <div className="space-y-3">
                  <div className="p-3 bg-brand-green/30 border border-brand-green-light/30">
                    <h4 className="font-semibold text-brand-gold-light">Strictly Necessary / Security (Essential)</h4>
                    <p className="text-xs text-brand-stone/80 mt-1">
                      Required for basic website navigation, form submission security, Cloudflare Turnstile challenge tokens, and saving your cookie preferences. Cannot be disabled in user settings.
                    </p>
                  </div>
                  <div className="p-3 bg-brand-green/30 border border-brand-green-light/30">
                    <h4 className="font-semibold text-brand-gold-light">Performance & Analytics (Optional)</h4>
                    <p className="text-xs text-brand-stone/80 mt-1">
                      Aggregated anonymous telemetry used to measure website traffic and improve layout usability. Deployed only upon consent.
                    </p>
                  </div>
                </div>
              </section>

              <section className="space-y-2">
                <h3 className="text-lg font-serif text-brand-white border-b border-brand-stone/15 pb-1">4. Managing Preferences</h3>
                <p>
                  You can modify or withdraw your consent at any time by clicking <strong>&quot;Cookie Settings&quot;</strong> in the website footer or by adjusting browser storage settings.
                </p>
              </section>
            </div>
          )}

          {/* Terms & Conditions Content */}
          {activeModal === 'terms' && (
            <div className="space-y-6">
              <section className="space-y-2">
                <h3 className="text-lg font-serif text-brand-white border-b border-brand-stone/15 pb-1">1. Corporate Terms of Web Service</h3>
                <p>
                  This website is operated by <strong>UGC International Ltd</strong> (Company No. 13854921), registered in England and Wales. By accessing or requesting trade services through this portal, you agree to comply with these terms.
                </p>
              </section>

              <section className="space-y-2">
                <h3 className="text-lg font-serif text-brand-white border-b border-brand-stone/15 pb-1">2. Nature of Services & Enquiries</h3>
                <p>
                  This website functions as an informative corporate portal and commercial enquiry portal for B2B global equipment sourcing, machinery supply, and international logistics. Submissions via this portal constitute request for information or quote and do not form a binding commercial sale contract until formal written trade agreements are executed.
                </p>
              </section>

              <section className="space-y-2">
                <h3 className="text-lg font-serif text-brand-white border-b border-brand-stone/15 pb-1">3. Intellectual Property Rights</h3>
                <p>
                  All graphic trademarks, brand elements, software code, images, and content displayed on this website are the proprietary property of UGC International Ltd or licensed third parties and are protected under UK intellectual property laws.
                </p>
              </section>

              <section className="space-y-2">
                <h3 className="text-lg font-serif text-brand-white border-b border-brand-stone/15 pb-1">4. Limitation of Liability</h3>
                <p>
                  While UGC International Ltd endeavours to keep site information current and accurate, we supply website content &quot;as is&quot; without warranties. To the fullest extent permitted by British law, UGC International Ltd disclaims liability for direct or indirect losses arising from website access or technical downtime.
                </p>
              </section>

              <section className="space-y-2">
                <h3 className="text-lg font-serif text-brand-white border-b border-brand-stone/15 pb-1">5. Governing Law & Jurisdiction</h3>
                <p>
                  These terms, privacy notices, and any non-contractual obligations arising out of website usage shall be governed by and construed in accordance with the laws of <strong>England and Wales</strong>. The courts of England and Wales have exclusive jurisdiction over any dispute.
                </p>
              </section>
            </div>
          )}

        </div>

        {/* Footer actions */}
        <div className="px-6 py-4 border-t border-brand-stone/20 bg-brand-green-mid/40 flex justify-between items-center">
          <span className="text-xs text-brand-stone/60 uppercase tracking-wider">
            Last Updated: July 2026
          </span>
          <button
            onClick={onClose}
            className="px-6 py-2 bg-brand-gold-light hover:bg-brand-gold text-brand-white text-xs font-bold uppercase tracking-widest transition-colors cursor-pointer"
          >
            Close Window
          </button>
        </div>

      </div>
    </div>
  );
}
