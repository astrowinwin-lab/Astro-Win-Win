import React, { useState } from 'react';
import { LOGO_URL } from '../data/mockData';

export const Footer: React.FC = () => {
  const [modalContent, setModalContent] = useState<string | null>(null);

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
        Your Guidance. Your Journey. · Vedic Precision & AI Companion
      </p>

      {/* Nav Links */}
      <div className="flex flex-wrap justify-center gap-6 text-xs sm:text-sm">
        <button
          onClick={() => setModalContent('privacy')}
          className="hover:text-[#420094] transition-colors"
        >
          Privacy Policy
        </button>
        <button
          onClick={() => setModalContent('terms')}
          className="hover:text-[#420094] transition-colors"
        >
          Terms of Service
        </button>
        <button
          onClick={() => setModalContent('contact')}
          className="hover:text-[#420094] transition-colors"
        >
          Contact Support
        </button>
      </div>

      <p className="text-[11px] sm:text-xs text-[#7b7485]">
        © 2025–2026 Astro Win Win. All rights reserved. Registered under Vedic Astrological Council of India.
      </p>

      {/* Legal & Contact Modal */}
      {modalContent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn text-left">
          <div className="w-full max-w-md bg-white rounded-2xl p-6 shadow-2xl flex flex-col gap-4 border border-[#efdbff]">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-[#25123b]">
                {modalContent === 'privacy' && 'Privacy Policy'}
                {modalContent === 'terms' && 'Terms of Service'}
                {modalContent === 'contact' && 'Contact Support'}
              </h3>
              <button
                onClick={() => setModalContent(null)}
                className="p-1 rounded-lg text-[#7b7485] hover:bg-[#efdbff]"
              >
                <span className="material-symbols-outlined text-[20px]">close</span>
              </button>
            </div>

            <div className="text-xs text-[#4a4454] space-y-2 max-h-60 overflow-y-auto pr-1">
              {modalContent === 'privacy' && (
                <>
                  <p>Astro Win Win guarantees 100% confidentiality of all astrological birth chart data, questions asked, and consultation recordings.</p>
                  <p>Your birth date, time, and coordinates are used strictly to compute Vedic planetary charts (Kundali) and are never shared or sold to third-party ad networks.</p>
                </>
              )}
              {modalContent === 'terms' && (
                <>
                  <p>Astrologers on Astro Win Win are verified independent Vedic scholars. Consultations are charged strictly on a per-minute basis from your prepaid wallet.</p>
                  <p>Any unused wallet balance is refundable upon request to our support team within 30 days.</p>
                </>
              )}
              {modalContent === 'contact' && (
                <>
                  <p>Have questions about your account, wallet recharge, or consultations?</p>
                  <p><strong>Email:</strong> support@astrowinwin.com</p>
                  <p><strong>Phone:</strong> +91 (800) 843-ASTRO</p>
                  <p><strong>Hours:</strong> 24/7 Live Concierge Assistance</p>
                </>
              )}
            </div>

            <button
              onClick={() => setModalContent(null)}
              className="py-2.5 rounded-xl bg-[#420094] text-white text-xs font-bold hover:bg-[#5b20b8]"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </footer>
  );
};
