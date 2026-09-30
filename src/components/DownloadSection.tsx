import React, { useState } from 'react';

interface DownloadSectionProps {
  onOpenDownloadModal?: () => void;
}

export const DownloadSection: React.FC<DownloadSectionProps> = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="download" className="w-full px-4 sm:px-6 lg:px-8 py-16 sm:py-24 bg-[#19052F] text-white relative overflow-hidden text-center">
      {/* Starry Backdrop Accents */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <circle cx="10%" cy="20%" fill="#FFFFFF" r="1.5" />
          <circle cx="85%" cy="15%" fill="#FEB700" r="2" />
          <circle cx="50%" cy="50%" fill="#FFFFFF" r="1.2" />
          <circle cx="20%" cy="80%" fill="#FFFFFF" r="1.8" />
          <circle cx="80%" cy="75%" fill="#FEB700" r="1.5" />
        </svg>
      </div>

      {/* Mandala Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 sm:w-[32rem] h-96 sm:h-[32rem] bg-[#5b20b8]/35 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-xl mx-auto flex flex-col items-center gap-6">
        <div className="w-14 h-14 rounded-2xl bg-[#feb700] text-[#271900] flex items-center justify-center shadow-xl">
          <span className="material-symbols-outlined text-[32px]">download</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight text-balance">
          Ready to Begin Your Journey?
        </h2>

        <p className="text-sm sm:text-base text-[#ebdcff] max-w-md leading-relaxed text-balance">
          Download Astro Win Win and connect with authentic Vedic astrology guidance whenever you need it.
        </p>

        {/* Large Primary Yellow CTA */}
        <a
          href="#"
          download
          className="w-full sm:w-auto min-h-[52px] px-8 sm:px-10 py-3.5 rounded-full bg-[#feb700] hover:bg-[#f5aa00] text-[#271900] font-bold text-base sm:text-lg flex items-center justify-center gap-2.5 shadow-[0_6px_28px_rgba(254,183,0,0.5)] active:scale-95 transition-all cursor-pointer"
        >
          <span className="material-symbols-outlined text-[24px]">install_mobile</span>
          <span>Download Astro Win Win</span>
        </a>

        {/* Store Buttons */}
        <div className="flex flex-col items-center gap-2 pt-2">
          <span className="text-[11px] sm:text-xs text-[#d4bbff] uppercase tracking-wider font-semibold">
            Available for Android & iOS
          </span>

          <div className="flex items-center gap-3">
            <a
              href="#"
              download
              className="flex items-center gap-2.5 px-4 sm:px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 backdrop-blur-md text-white transition-all active:scale-95 text-left cursor-pointer"
            >
              <span className="material-symbols-outlined text-[22px] text-[#ffdea8]">play_arrow</span>
              <div className="flex flex-col">
                <span className="text-[9px] uppercase tracking-tight text-[#ebdcff] font-medium leading-none">
                  GET IT ON
                </span>
                <span className="text-xs sm:text-sm font-bold leading-tight">
                  Google Play
                </span>
              </div>
            </a>

            <a
              href="#"
              download
              className="flex items-center gap-2.5 px-4 sm:px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 backdrop-blur-md text-white transition-all active:scale-95 text-left cursor-pointer"
            >
              <span className="material-symbols-outlined text-[22px] text-[#ffdea8]">phone_iphone</span>
              <div className="flex flex-col">
                <span className="text-[9px] uppercase tracking-tight text-[#ebdcff] font-medium leading-none">
                  DOWNLOAD ON
                </span>
                <span className="text-xs sm:text-sm font-bold leading-tight">
                  App Store
                </span>
              </div>
            </a>
          </div>

          <button
            onClick={handleCopyLink}
            className="mt-3 text-xs text-[#ebdcff] hover:text-white flex items-center gap-1 transition-colors underline decoration-dotted"
          >
            <span className="material-symbols-outlined text-[14px]">link</span>
            <span>{copied ? 'Link Copied to Clipboard!' : 'Share Web App Link'}</span>
          </button>
        </div>
      </div>
    </section>
  );
};
