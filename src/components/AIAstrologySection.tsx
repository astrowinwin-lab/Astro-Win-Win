import React, { useState } from 'react';
import { PRESET_AI_QUERIES } from '../data/mockData';

interface AIAstrologySectionProps {
  onOpenDownload?: () => void;
}

export const AIAstrologySection: React.FC<AIAstrologySectionProps> = () => {
  const [selectedQueryIndex, setSelectedQueryIndex] = useState<number>(0);
  const [customInput, setCustomInput] = useState<string>('');
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const [activeResponse, setActiveResponse] = useState(PRESET_AI_QUERIES[0]);

  const handleSelectPreset = (index: number) => {
    setSelectedQueryIndex(index);
    setIsTyping(true);
    setTimeout(() => {
      setActiveResponse(PRESET_AI_QUERIES[index]);
      setIsTyping(false);
    }, 450);
  };

  const handleCustomSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customInput.trim()) return;

    setIsTyping(true);
    setTimeout(() => {
      setActiveResponse({
        label: '✨ Custom Transit Query',
        query: customInput,
        title: 'Planetary Configuration Analysis',
        answer: `Regarding "${customInput}": Planetary alignments indicate a favorable conjunction between your Lagna Lord and Jupiter. Auspicious period for thoughtful negotiations and personal initiatives.`,
        remedy: 'Practice morning meditation facing East and light a ghee lamp on Tuesday evenings.',
        transitFactor: 'Solar Transit Analysis · D1 Lagna Harmony'
      });
      setIsTyping(false);
      setCustomInput('');
    }, 600);
  };

  return (
    <section id="ai-astrology" className="w-full px-4 sm:px-6 lg:px-8 py-16 sm:py-24 bg-[#19052F] text-white relative overflow-hidden">
      {/* Cosmic Glowing Backdrops */}
      <div className="absolute -right-20 top-10 w-80 h-80 bg-[#7A2FE6] rounded-full blur-[120px] opacity-25 pointer-events-none" />
      <div className="absolute -left-20 bottom-10 w-80 h-80 bg-[#420094] rounded-full blur-[120px] opacity-35 pointer-events-none" />

      {/* Star Constellation Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <circle cx="15%" cy="25%" fill="#FFFFFF" r="1.5" />
          <circle cx="75%" cy="18%" fill="#FEB700" r="1.8" />
          <circle cx="45%" cy="75%" fill="#FFFFFF" r="1.2" />
          <circle cx="85%" cy="80%" fill="#FEB700" r="1.5" />
          <path d="M 150,80 L 220,140 L 300,100" stroke="#d3bbff" strokeWidth="0.5" strokeDasharray="2 3" fill="none" />
        </svg>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col gap-10 sm:gap-12">
        {/* Section Header */}
        <div className="text-center flex flex-col items-center gap-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#efdbff]/15 border border-[#d3bbff]/20 text-[#ffba20] text-xs sm:text-sm font-bold shadow-inner">
            <span className="material-symbols-outlined text-[18px]">smart_toy</span>
            <span>Next-Gen Vedic AI Engine</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight text-balance">
            Meet Your AI Astrology Companion
          </h2>
          <p className="text-sm sm:text-base text-[#ebdcff]/90 max-w-lg text-balance">
            Explore personalized cosmic analytics whenever you need them, 24/7.
          </p>
        </div>

        {/* 4 Feature Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md flex flex-col gap-1.5">
            <span className="material-symbols-outlined text-[#ffba20] text-[22px]">chat</span>
            <h3 className="text-xs sm:text-sm font-bold text-white">AI Assistant</h3>
            <p className="text-[11px] text-[#d4bbff] leading-relaxed">
              Ask any transit query and receive instant planetary insights.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md flex flex-col gap-1.5">
            <span className="material-symbols-outlined text-[#ffba20] text-[22px]">today</span>
            <h3 className="text-xs sm:text-sm font-bold text-white">Daily Horoscope</h3>
            <p className="text-[11px] text-[#d4bbff] leading-relaxed">
              Unpack daily nakshatra vibrations calibrated to your exact birth time.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md flex flex-col gap-1.5">
            <span className="material-symbols-outlined text-[#ffba20] text-[22px]">date_range</span>
            <h3 className="text-xs sm:text-sm font-bold text-white">Weekly & Monthly</h3>
            <p className="text-[11px] text-[#d4bbff] leading-relaxed">
              Plan upcoming decisions with strategic long-term house transits.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md flex flex-col gap-1.5">
            <span className="material-symbols-outlined text-[#ffba20] text-[22px]">summarize</span>
            <h3 className="text-xs sm:text-sm font-bold text-white">Session Summary</h3>
            <p className="text-[11px] text-[#d4bbff] leading-relaxed">
              Automated AI digests summarizing remedies from completed consultations.
            </p>
          </div>
        </div>

        {/* Interactive AI Preview Sandbox */}
        <div className="p-5 sm:p-7 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-xl flex flex-col gap-4 shadow-2xl">
          {/* Box Header */}
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#feb700] text-[#271900] flex items-center justify-center font-extrabold text-xs shadow-md">
                AI
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-white leading-tight">
                  Astro AI Live Assistant
                </span>
                <span className="text-[10px] text-[#ebdcff]">
                  Powered by Vedic Jyotish Algorithms
                </span>
              </div>
            </div>

            <span className="text-xs text-[#d4bbff] flex items-center gap-1.5 bg-[#16B86A]/20 px-2.5 py-0.5 rounded-full border border-[#16B86A]/30">
              <span className="w-2 h-2 rounded-full bg-[#16B86A] animate-pulse"></span>
              Active
            </span>
          </div>

          {/* Quick Query Selector Pills */}
          <div className="flex flex-col gap-1.5">
            <span className="text-[11px] text-[#d4bbff] font-medium">Try asking Astro AI:</span>
            <div className="flex flex-wrap gap-2">
              {PRESET_AI_QUERIES.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSelectPreset(idx)}
                  className={`text-xs px-3 py-1.5 rounded-lg transition-all text-left flex items-center gap-1 ${
                    selectedQueryIndex === idx
                      ? 'bg-[#feb700] text-[#271900] font-bold shadow-xs'
                      : 'bg-white/10 hover:bg-white/20 text-[#ebdcff]'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Response Container */}
          <div className="p-4 sm:p-5 rounded-xl bg-[#19052F]/85 border border-[#d3bbff]/20 flex flex-col gap-3 min-h-[160px] justify-center transition-all">
            {isTyping ? (
              <div className="flex items-center gap-2 text-[#ffdea8] py-6">
                <span className="w-2 h-2 rounded-full bg-[#feb700] animate-bounce"></span>
                <span className="w-2 h-2 rounded-full bg-[#feb700] animate-bounce [animation-delay:0.15s]"></span>
                <span className="w-2 h-2 rounded-full bg-[#feb700] animate-bounce [animation-delay:0.3s]"></span>
                <span className="text-xs text-[#ebdcff] ml-2">Calculating astrological transit aspects...</span>
              </div>
            ) : (
              <>
                <div className="flex items-center justify-between">
                  <p className="text-xs font-bold text-[#ffba20] flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[16px]">auto_awesome</span>
                    {activeResponse.title}
                  </p>
                  <span className="text-[10px] text-[#d4bbff] font-mono">
                    {activeResponse.transitFactor}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-white/95 leading-relaxed">
                  “{activeResponse.answer}”
                </p>

                <div className="p-2.5 rounded-lg bg-[#5b20b8]/40 border border-[#d3bbff]/20 flex items-start gap-2">
                  <span className="material-symbols-outlined text-[#ffba20] text-[16px] flex-shrink-0 mt-0.5">
                    lightbulb
                  </span>
                  <div className="text-xs text-[#ebdcff] leading-normal">
                    <span className="font-bold text-[#ffdea8]">Suggested Remedy: </span>
                    {activeResponse.remedy}
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Interactive Custom Input Field */}
          <form onSubmit={handleCustomSubmit} className="flex items-center gap-2 pt-1">
            <input
              type="text"
              value={customInput}
              onChange={(e) => setCustomInput(e.target.value)}
              placeholder="Ask Astro AI anything about your chart (e.g., career, marriage, dasha)..."
              className="flex-1 py-2.5 px-3.5 rounded-xl bg-white/10 hover:bg-white/15 focus:bg-white/20 text-white placeholder-[#ebdcff]/60 text-xs sm:text-sm border border-white/15 focus:border-[#feb700] outline-none transition-all"
            />
            <button
              type="submit"
              className="h-10 px-4 rounded-xl bg-[#feb700] hover:bg-[#f5aa00] text-[#271900] font-bold text-xs sm:text-sm flex items-center justify-center gap-1 transition-all active:scale-95 shadow-md flex-shrink-0"
              title="Submit Query"
            >
              <span className="material-symbols-outlined text-[18px]">send</span>
              <span className="hidden sm:inline">Ask AI</span>
            </button>
          </form>
        </div>

        {/* Explore Button */}
        <div className="flex justify-center">
          <a
            href="#download"
            className="min-h-[48px] px-8 py-3 rounded-xl bg-[#feb700] hover:bg-[#f5aa00] text-[#271900] font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-[0_4px_20px_rgba(254,183,0,0.4)] active:scale-95 transition-all"
          >
            <span>Explore Astro AI in App</span>
            <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
          </a>
        </div>
      </div>
    </section>
  );
};
