import { useState, useEffect } from 'react';
import { Cookie, X, Check, ShieldCheck, Settings } from 'lucide-react';

export default function CookieBanner({ isOpenModal, setIsOpenModal }) {
  const [showBanner, setShowBanner] = useState(false);
  const [analyticsConsent, setAnalyticsConsent] = useState(false);

  useEffect(() => {
    const savedConsent = localStorage.getItem('ugc_cookie_consent');
    if (!savedConsent) {
      setShowBanner(true);
    } else {
      try {
        const parsed = JSON.parse(savedConsent);
        setAnalyticsConsent(!!parsed.analytics);
      } catch {
        setShowBanner(true);
      }
    }
  }, []);

  const handleAcceptAll = () => {
    const consentObj = { essential: true, analytics: true, timestamp: new Date().toISOString() };
    localStorage.setItem('ugc_cookie_consent', JSON.stringify(consentObj));
    setAnalyticsConsent(true);
    setShowBanner(false);
    setIsOpenModal(false);
  };

  const handleRejectOptional = () => {
    const consentObj = { essential: true, analytics: false, timestamp: new Date().toISOString() };
    localStorage.setItem('ugc_cookie_consent', JSON.stringify(consentObj));
    setAnalyticsConsent(false);
    setShowBanner(false);
    setIsOpenModal(false);
  };

  const handleSavePreferences = () => {
    const consentObj = { essential: true, analytics: analyticsConsent, timestamp: new Date().toISOString() };
    localStorage.setItem('ugc_cookie_consent', JSON.stringify(consentObj));
    setShowBanner(false);
    setIsOpenModal(false);
  };

  return (
    <>
      {/* Floating Bottom Cookie Banner */}
      {showBanner && !isOpenModal && (
        <div className="fixed bottom-4 left-4 right-4 md:left-8 md:right-auto md:max-w-lg z-40 bg-brand-dark/95 backdrop-blur-md border border-brand-gold-light/40 shadow-2xl p-5 md:p-6 font-sans text-brand-stone transition-all duration-300">
          <div className="flex items-start justify-between gap-4 mb-3">
            <div className="flex items-center gap-2.5">
              <Cookie className="w-5 h-5 text-brand-gold-light shrink-0" />
              <h3 className="font-serif text-lg text-brand-white">Cookie & Privacy Choices</h3>
            </div>
            <button 
              onClick={handleRejectOptional}
              className="text-brand-stone/60 hover:text-brand-white transition-colors"
              aria-label="Close banner"
            >
              <X size={18} />
            </button>
          </div>

          <p className="text-xs md:text-sm text-brand-stone/85 leading-relaxed font-light mb-4">
            UGC International Ltd uses essential cookies for site security, spam prevention (Cloudflare Turnstile), and core navigation. We also invite optional cookies to improve performance telemetry.
          </p>

          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={handleAcceptAll}
              className="flex-1 min-w-30 bg-brand-gold-light hover:bg-brand-gold text-brand-white text-xs font-bold uppercase tracking-wider py-2.5 px-4 transition-colors cursor-pointer text-center"
            >
              Accept All
            </button>
            <button
              onClick={handleRejectOptional}
              className="flex-1 min-w-30 bg-brand-green/60 hover:bg-brand-green border border-brand-stone/20 text-brand-stone hover:text-brand-white text-xs font-bold uppercase tracking-wider py-2.5 px-4 transition-colors cursor-pointer text-center"
            >
              Reject Optional
            </button>
            <button
              onClick={() => setIsOpenModal(true)}
              className="p-2.5 text-brand-gold-light hover:text-brand-white border border-brand-stone/20 hover:border-brand-gold-light transition-colors cursor-pointer"
              title="Customize Preferences"
            >
              <Settings size={16} />
            </button>
          </div>
        </div>
      )}

      {/* Cookie Settings Preference Modal */}
      {isOpenModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setIsOpenModal(false)}
        >
          <div 
            className="w-full max-w-lg bg-brand-dark border border-brand-stone/30 shadow-2xl p-6 md:p-8 font-sans text-brand-stone text-left"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 mb-5 border-b border-brand-stone/20">
              <div className="flex items-center gap-3">
                <Cookie className="text-brand-gold-light w-6 h-6 shrink-0" />
                <div>
                  <h3 className="font-serif text-xl text-brand-white">Cookie Preferences</h3>
                  <p className="text-xs text-brand-gold uppercase tracking-wider">UGC International Ltd</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpenModal(false)}
                className="p-1.5 text-brand-stone/60 hover:text-brand-white cursor-pointer"
              >
                <X size={20} />
              </button>
            </div>

            <div className="space-y-4 mb-6">
              {/* Essential Cookies */}
              <div className="p-4 bg-brand-green/30 border border-brand-green-light/30 flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck size={16} className="text-brand-gold-light" />
                    <h4 className="font-semibold text-brand-white text-sm">Essential & Security Cookies</h4>
                  </div>
                  <p className="text-xs text-brand-stone/75 mt-1 leading-relaxed">
                    Necessary for site security, Cloudflare Turnstile anti-bot checks, and storing preference settings. Always active.
                  </p>
                </div>
                <div className="px-2.5 py-1 bg-brand-stone/10 text-brand-gold-light text-xs font-semibold uppercase tracking-wider rounded shrink-0">
                  Always Active
                </div>
              </div>

              {/* Analytics Cookies */}
              <div className="p-4 bg-brand-green/30 border border-brand-green-light/30 flex items-start justify-between gap-4">
                <div>
                  <h4 className="font-semibold text-brand-white text-sm">Performance & Analytics</h4>
                  <p className="text-xs text-brand-stone/75 mt-1 leading-relaxed">
                    Helps us understand website usage and improve corporate enquiry workflows.
                  </p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer shrink-0 mt-1">
                  <input
                    type="checkbox"
                    checked={analyticsConsent}
                    onChange={(e) => setAnalyticsConsent(e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-brand-stone/30 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-brand-gold-light"></div>
                </label>
              </div>
            </div>

            <div className="flex justify-end gap-3 pt-4 border-t border-brand-stone/20">
              <button
                onClick={handleRejectOptional}
                className="px-4 py-2 bg-brand-green/60 hover:bg-brand-green text-brand-stone text-xs font-bold uppercase tracking-wider border border-brand-stone/20 cursor-pointer"
              >
                Reject Optional
              </button>
              <button
                onClick={handleSavePreferences}
                className="px-6 py-2 bg-brand-gold-light hover:bg-brand-gold text-brand-white text-xs font-bold uppercase tracking-wider flex items-center gap-2 cursor-pointer"
              >
                <Check size={14} />
                Save Preferences
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
