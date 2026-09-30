import React from 'react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Download the App',
      description: 'Get Astro Win Win seamlessly on your Android phone or Apple iOS device.',
      badgeBg: 'bg-[#420094] text-white',
      tag: 'Step 1'
    },
    {
      step: '02',
      title: 'Find Your Astrologer',
      description: 'Filter by certified expertise, user reviews, languages, and instant online status.',
      badgeBg: 'bg-[#feb700] text-[#271900]',
      tag: 'Step 2'
    },
    {
      step: '03',
      title: 'Recharge Your Wallet',
      description: 'Add funds with safe UPI, card, or net banking with no hidden subscription fees.',
      badgeBg: 'bg-[#420094] text-white',
      tag: 'Step 3'
    },
    {
      step: '04',
      title: 'Connect & Get Guidance',
      description: 'Initiate confidential private chat, voice call, or high-res video consultation.',
      badgeBg: 'bg-[#feb700] text-[#271900]',
      tag: 'Step 4'
    }
  ];

  return (
    <section id="how-it-works" className="w-full px-4 sm:px-6 lg:px-8 py-16 sm:py-24 bg-[#fbf0ff]">
      <div className="max-w-3xl mx-auto flex flex-col gap-10 sm:gap-12">
        <div className="text-center flex flex-col gap-2 max-w-xl mx-auto">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#420094]">
            Fast & Transparent
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#25123b] tracking-tight">
            Start Your Journey in 4 Simple Steps
          </h2>
          <p className="text-sm sm:text-base text-[#4a4454]">
            Connect to authentic astrological guidance within under 60 seconds.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="flex flex-col gap-5 sm:gap-6 relative pl-3 sm:pl-4">
          {/* Vertical Connecting Guide Bar */}
          <div className="absolute left-[31px] sm:left-[35px] top-6 bottom-6 w-0.5 bg-[#d3bbff] pointer-events-none" />

          {steps.map((item, idx) => (
            <div key={idx} className="flex items-start gap-4 sm:gap-6 relative z-10 group">
              <div
                className={`w-11 h-11 sm:w-12 sm:h-12 rounded-full ${item.badgeBg} flex-shrink-0 flex items-center justify-center font-extrabold text-sm sm:text-base shadow-md ring-4 ring-[#fbf0ff] transition-transform group-hover:scale-110`}
              >
                {item.step}
              </div>

              <div className="p-5 sm:p-6 rounded-2xl bg-white flex-1 border border-[#efdbff] shadow-xs group-hover:shadow-md transition-all duration-300 flex flex-col gap-1">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-base sm:text-lg font-bold text-[#25123b] truncate">
                    {item.title}
                  </h3>
                  <span className="text-[11px] font-semibold text-[#420094] bg-[#efdbff] px-2.5 py-0.5 rounded-full whitespace-nowrap shrink-0">
                    {item.tag}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[#4a4454] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
