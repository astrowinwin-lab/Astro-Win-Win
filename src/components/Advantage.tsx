import React from 'react';

export const Advantage: React.FC = () => {
  const advantages = [
    {
      icon: 'verified_user',
      title: 'Verified Astrologers',
      description: 'Connect with thoroughly vetted astrology professionals with authentic lineage and credentials.',
      highlight: '100% Vetted'
    },
    {
      icon: 'video_chat',
      title: 'Flexible Modes',
      description: 'Choose instant live chat, clear voice audio, or high-definition face-to-face video sessions.',
      highlight: '3 Modes'
    },
    {
      icon: 'account_balance_wallet',
      title: 'Transparent Pricing',
      description: 'Recharge your digital wallet securely and pay strictly by the consult minute with zero hidden fees.',
      highlight: 'Zero Hidden Fees'
    },
    {
      icon: 'smart_toy',
      title: 'AI-Powered Insights',
      description: 'Explore instant transit charts and smart summaries backed by deep computational algorithms.',
      highlight: '24/7 Real-Time'
    }
  ];

  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-14 sm:py-20 bg-white border-y border-[#efdbff]/50">
      <div className="max-w-5xl mx-auto flex flex-col gap-8">
        <div className="text-center flex flex-col gap-2 max-w-xl mx-auto">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#420094]">
            The Astro Win Win Advantage
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#25123b] tracking-tight">
            Everything You Need for Your Journey
          </h2>
          <p className="text-sm sm:text-base text-[#4a4454]">
            Built with modern technology and ancient Vedic principles to provide transparent, trustworthy guidance.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pt-2">
          {advantages.map((item, idx) => (
            <div
              key={idx}
              className="group p-5 sm:p-6 rounded-2xl bg-[#fbf0ff] hover:bg-[#f7e9ff] border border-[#efdbff]/70 flex flex-col gap-3 shadow-xs hover:shadow-md transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-[#efdbff] group-hover:bg-[#420094] group-hover:text-white flex items-center justify-center text-[#420094] transition-colors shadow-xs">
                  <span className="material-symbols-outlined text-[24px]">{item.icon}</span>
                </div>
                <span className="text-[11px] font-semibold text-[#420094] bg-[#eaddff] px-2 py-0.5 rounded-full">
                  {item.highlight}
                </span>
              </div>

              <h3 className="text-lg font-bold text-[#25123b] pt-1">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#4a4454] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
