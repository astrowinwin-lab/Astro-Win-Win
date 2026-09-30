import React, { useState } from 'react';
import { APP_MODULES } from '../data/mockData';
import { AppScreenModule } from '../types/astrology';

export const AppScreensPreview: React.FC = () => {
  const [activeModule, setActiveModule] = useState<AppScreenModule | null>(null);

  return (
    <section className="w-full py-16 sm:py-24 bg-white border-t border-[#efdbff]/70 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col gap-8 sm:gap-10">
        
        {/* Header */}
        <div className="px-4 sm:px-6 lg:px-8 text-center flex flex-col gap-2 max-w-xl mx-auto">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#420094]">
            Unified Experience
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#25123b] tracking-tight">
            Everything in One App
          </h2>
          <p className="text-sm sm:text-base text-[#4a4454]">
            Explore the key modules that make Astro Win Win deeply practical.
          </p>
        </div>

        {/* Horizontal Carousel Rail */}
        <div className="flex overflow-x-auto gap-4 sm:gap-6 px-4 sm:px-6 lg:px-8 pb-6 pt-2 snap-x snap-mandatory scrollbar-none">
          {APP_MODULES.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveModule(item)}
              className="snap-center flex-shrink-0 w-72 sm:w-80 p-5 rounded-2xl bg-white border border-[#efdbff] shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col gap-3.5 cursor-pointer hover:-translate-y-1 group"
            >
              {/* Graphic Card */}
              <div className={`w-full h-36 rounded-xl bg-gradient-to-br ${item.gradient} p-4 text-white flex flex-col justify-between shadow-xs transition-transform group-hover:scale-[1.02]`}>
                <div className="flex items-center justify-between">
                  <span className="material-symbols-outlined text-[28px] opacity-90">{item.icon}</span>
                  <span className="text-[10px] uppercase font-bold tracking-wider bg-white/20 px-2 py-0.5 rounded-full">
                    {item.moduleNumber}
                  </span>
                </div>
                <div>
                  <p className="text-lg font-bold leading-tight">{item.title}</p>
                  <p className="text-[11px] text-white/80">Tap to inspect details →</p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#4a4454] leading-relaxed line-clamp-2">
                {item.description}
              </p>

              <div className="pt-1 border-t border-[#f7e9ff] flex items-center justify-between text-xs font-semibold text-[#420094]">
                <span>View Features</span>
                <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Module Details Sheet/Modal */}
        {activeModule && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
            <div className="w-full max-w-md bg-white rounded-2xl p-6 shadow-2xl flex flex-col gap-4 border border-[#efdbff]">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-[#420094] bg-[#efdbff] px-2.5 py-0.5 rounded-full">
                    {activeModule.moduleNumber}
                  </span>
                  <h3 className="text-lg font-bold text-[#25123b]">{activeModule.title}</h3>
                </div>
                <button
                  onClick={() => setActiveModule(null)}
                  className="p-1 rounded-lg text-[#7b7485] hover:bg-[#efdbff] transition-colors"
                >
                  <span className="material-symbols-outlined text-[20px]">close</span>
                </button>
              </div>

              <p className="text-xs sm:text-sm text-[#4a4454]">{activeModule.description}</p>

              <div className="flex flex-col gap-2 pt-1">
                <span className="text-xs font-bold text-[#25123b]">Core Capabilities:</span>
                {activeModule.details.map((detail, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-[#4a4454]">
                    <span className="text-[#16B86A] font-bold">✓</span>
                    <span>{detail}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => setActiveModule(null)}
                className="w-full mt-2 py-2.5 rounded-xl bg-[#420094] text-white text-xs font-bold hover:bg-[#5b20b8] transition-colors"
              >
                Close Preview
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
