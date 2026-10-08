import React, { useState } from 'react';
import { LOGO_URL } from '../data/mockData';
import { Icon } from './Icon';

interface FooterProps {
  onNavigateLegal?: (tab: 'privacy' | 'terms') => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigateLegal }) => {
  const [showContactModal, setShowContactModal] = useState<boolean>(false);

  const handleOpenPrivacy = () => {
    if (onNavigateLegal) {
      onNavigateLegal('privacy');
    } else {
      window.location.hash = '#/privacy-policy';
    }
  };

  const handleOpenTerms = () => {
    if (onNavigateLegal) {
      onNavigateLegal('terms');
    } else {
      window.location.hash = '#/terms-and-conditions';
    }
  };

  return (
    <footer className="w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16 bg-[#fbf0ff] border-t border-[#efdbff] flex flex-col items-center gap-6 text-center text-[#4a4454] mt-auto">
      {/* Brand */}
      <div className="flex items-center gap-2.5">
        <img
          src={LOGO_URL}
          alt="Astro Win Win Logo"
          className="h-7 w-auto object-contain"
          referrerPolicy="no-referrer"
        />
        <span className="text-xl font-bold tracking-tight text-[#420094]">
          Astro Win Win
        </span>
      </div>

      <p className="text-xs sm:text-sm text-[#4a4454] font-medium">
        Your Guidance. Your Journey. · Vedic Precision &amp; AI Companion
      </p>

      {/* Nav Links */}
      <div className="flex flex-wrap justify-center gap-6 text-xs sm:text-sm">
        <button
          onClick={handleOpenPrivacy}
          className="hover:text-[#420094] transition-colors cursor-pointer font-medium"
        >
          Privacy Policy
        </button>
        <button
          onClick={handleOpenTerms}
          className="hover:text-[#420094] transition-colors cursor-pointer font-medium"
        >
          Terms &amp; Conditions
        </button>
        <button
          onClick={() => setShowContactModal(true)}
          className="hover:text-[#420094] transition-colors cursor-pointer font-medium"
        >
          Contact Support
        </button>
      </div>

      <p className="text-[11px] sm:text-xs text-[#7b7485]">
        © 2026 Astro Win Win. All rights reserved. Registered under Vedic Astrological Council of India.
      </p>

      {/* Contact Support Modal */}
      {showContactModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn text-left">
          <div className="w-full max-w-md bg-white rounded-3xl p-6 shadow-2xl flex flex-col gap-4 border border-[#efdbff]">
            <div className="flex items-center justify-between border-b border-[#efdbff]/80 pb-3">
              <div className="flex items-center gap-2">
                <Icon name="contact_support" size={22} className="text-[#420094]" />
                <h3 className="text-lg font-bold text-[#25123b]">Contact Support</h3>
              </div>
              <button
                onClick={() => setShowContactModal(false)}
                className="p-1 rounded-lg text-[#7b7485] hover:bg-[#efdbff] cursor-pointer"
              >
                <Icon name="close" size={20} />
              </button>
            </div>

            <div className="text-xs sm:text-sm text-[#4a4454] space-y-3 leading-relaxed">
              <p>Have questions about consultations, wallet transactions, or our policies?</p>
              <div className="p-4 rounded-2xl bg-[#fbf0ff] border border-[#efdbff] space-y-1.5">
                <p>
                  <strong>Support Email:</strong>{' '}
                  <a href="mailto:support@astrowinwin.com" className="text-[#420094] font-semibold underline">
                    support@astrowinwin.com
                  </a>
                </p>
                <p><strong>Response Time:</strong> Within 24 hours</p>
                <p><strong>Hours:</strong> 24/7 Concierge Vedic Assistance</p>
              </div>
            </div>

            <button
              onClick={() => setShowContactModal(false)}
              className="py-2.5 rounded-xl bg-[#420094] text-white text-xs font-bold hover:bg-[#5b20b8] transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </footer>
  );
};
