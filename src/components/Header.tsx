import React, { useState } from 'react';

interface HeaderProps {
  onOpenDownload?: () => void;
  onOpenWallet?: () => void;
  walletBalance?: number;
}

export const Header: React.FC<HeaderProps> = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-[#fff7ff]/90 backdrop-blur-xl border-b border-[#efdbff]/80 transition-all duration-300">
      <div className="max-w-7xl mx-auto h-16 px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        {/* Brand Zone */}
        <a href="#" className="flex items-baseline gap-2 text-left group whitespace-nowrap">
          <span className="text-xl sm:text-2xl font-bold tracking-tight text-[#420094] leading-tight whitespace-nowrap">
            Astro Win Win
          </span>
          <span className="text-xs text-[#4a4454] font-medium hidden sm:inline whitespace-nowrap">
            · Vedic & AI Platform
          </span>
        </a>

        {/* Navigation Links (Desktop) */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-semibold text-[#4a4454]">
          <a href="#hero" className="hover:text-[#420094] transition-colors py-1">
            Overview
          </a>
          <a href="#features" className="hover:text-[#420094] transition-colors py-1">
            Features
          </a>
          <a href="#consultation" className="hover:text-[#420094] transition-colors py-1">
            Astrologers
          </a>
          <a href="#ai-astrology" className="hover:text-[#420094] transition-colors py-1 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#16B86A] animate-pulse"></span>
            Astro AI
          </a>
          <a href="#how-it-works" className="hover:text-[#420094] transition-colors py-1">
            How It Works
          </a>
        </nav>

        {/* Action Zone */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          {/* Download App CTA */}
          <a
            href="#download"
            className="min-h-[42px] px-4 sm:px-5 py-2 rounded-xl bg-[#feb700] hover:bg-[#f5aa00] text-[#271900] font-bold text-xs sm:text-sm flex items-center justify-center gap-1.5 transition-all shadow-[0_4px_16px_rgba(255,184,0,0.35)] active:scale-95"
          >
            <span className="material-symbols-outlined text-[18px]">download</span>
            <span className="whitespace-nowrap">Download App</span>
          </a>

          {/* Mobile hamburger toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-[#4a4454] hover:bg-[#efdbff] transition-colors"
            aria-label="Toggle Navigation"
          >
            <span className="material-symbols-outlined text-[24px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#efdbff] bg-[#fff7ff] px-4 py-4 flex flex-col gap-3 shadow-xl animate-fadeIn">
          <a
            href="#hero"
            onClick={() => setMobileMenuOpen(false)}
            className="py-2 px-3 rounded-lg text-sm font-semibold text-[#25123b] hover:bg-[#fbf0ff]"
          >
            Overview
          </a>
          <a
            href="#features"
            onClick={() => setMobileMenuOpen(false)}
            className="py-2 px-3 rounded-lg text-sm font-semibold text-[#25123b] hover:bg-[#fbf0ff]"
          >
            Features
          </a>
          <a
            href="#consultation"
            onClick={() => setMobileMenuOpen(false)}
            className="py-2 px-3 rounded-lg text-sm font-semibold text-[#25123b] hover:bg-[#fbf0ff]"
          >
            Astrologers & Live Consult
          </a>
          <a
            href="#ai-astrology"
            onClick={() => setMobileMenuOpen(false)}
            className="py-2 px-3 rounded-lg text-sm font-semibold text-[#25123b] hover:bg-[#fbf0ff] flex items-center justify-between"
          >
            <span>Astro AI Companion</span>
            <span className="px-2 py-0.5 rounded-full bg-[#16B86A]/20 text-[#16B86A] text-[10px] font-bold">LIVE</span>
          </a>
          <a
            href="#how-it-works"
            onClick={() => setMobileMenuOpen(false)}
            className="py-2 px-3 rounded-lg text-sm font-semibold text-[#25123b] hover:bg-[#fbf0ff]"
          >
            How It Works
          </a>

          <div className="pt-2 border-t border-[#efdbff]">
            <a
              href="#download"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-2.5 rounded-xl bg-[#feb700] text-[#271900] font-bold text-xs flex items-center justify-center gap-1.5 shadow-sm"
            >
              <span className="material-symbols-outlined text-[16px]">download</span>
              <span>Download App</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
