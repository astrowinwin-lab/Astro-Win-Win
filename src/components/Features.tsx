import React from 'react';

export const Features: React.FC = () => {
  const features = [
    {
      icon: 'person_search',
      title: 'Find Your Astrologer',
      description: 'Discover astrologers based on Vedic expertise, language, ratings, experience, and real-time availability.',
      iconBg: 'bg-[#5b20b8] text-white',
      accent: 'Specialized Filters'
    },
    {
      icon: 'chat_bubble',
      title: 'Chat Consultation',
      description: 'Ask questions and receive personalized guidance through private, confidential end-to-end chat.',
      iconBg: 'bg-[#feb700] text-[#271900]',
      accent: 'Real-Time Sync'
    },
    {
      icon: 'call',
      title: 'Voice & Video Consultation',
      description: 'Connect directly with astrologers via crystal-clear voice or high-definition face-to-face video consultations.',
      iconBg: 'bg-[#420094] text-white',
      accent: 'HD Encrypted'
    },
    {
      icon: 'wb_sunny',
      title: 'Daily Horoscope',
      description: 'Start each morning with personalized Vedic transit analytics tailored to your unique Moon and Sun sign.',
      iconBg: 'bg-[#efdbff] text-[#420094]',
      accent: 'Panchang & Muhurta'
    },
    {
      icon: 'psychology',
      title: 'AI Astrology',
      description: 'Ask Astro AI complex transit questions anytime, obtaining instantaneous calculations and planetary interpretations.',
      iconBg: 'bg-[#6100c9] text-white',
      accent: 'Vedic Engine'
    },
    {
      icon: 'pan_tool',
      title: 'AI Palm Reading',
      description: 'Upload high-res photos of both palms for computer-vision contour analysis across headline, lifeline, and heartline.',
      iconBg: 'bg-[#ffdea8] text-[#7c5800]',
      accent: 'Computer Vision'
    }
  ];

  return (
    <section id="features" className="w-full px-4 sm:px-6 lg:px-8 py-16 sm:py-24 bg-[#fff7ff]">
      <div className="max-w-5xl mx-auto flex flex-col gap-10 sm:gap-12">
        <div className="text-center flex flex-col gap-2 max-w-xl mx-auto">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#420094]">
            Clarity & Precision
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#25123b] tracking-tight">
            Astrology, Made Simple
          </h2>
          <p className="text-sm sm:text-base text-[#4a4454]">
            Everything you need to explore cosmic alignments and understand your path with poise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="p-5 sm:p-6 rounded-2xl bg-white border border-[#efdbff]/80 shadow-xs hover:shadow-md transition-all duration-300 flex items-start gap-4 sm:gap-5 hover:-translate-y-0.5 group"
            >
              <div className={`w-12 h-12 rounded-xl ${item.iconBg} flex-shrink-0 flex items-center justify-center shadow-xs transition-transform group-hover:scale-105`}>
                <span className="material-symbols-outlined text-[24px]">{item.icon}</span>
              </div>
              <div className="flex flex-col gap-1 min-w-0 flex-1">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-base sm:text-lg font-bold text-[#25123b] truncate">
                    {item.title}
                  </h3>
                  <span className="text-[10px] sm:text-[11px] font-semibold text-[#7c5800] bg-[#ffdea8]/60 px-2.5 py-0.5 rounded-full whitespace-nowrap shrink-0">
                    {item.accent}
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
