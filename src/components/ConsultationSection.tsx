import React, { useState } from 'react';
import { ASTROLOGERS } from '../data/mockData';
import { Astrologer, ConsultationMode } from '../types/astrology';

interface ConsultationSectionProps {
  onSelectAstrologer: (astrologer: Astrologer, mode: ConsultationMode) => void;
  onOpenDownload: () => void;
}

export const ConsultationSection: React.FC<ConsultationSectionProps> = ({
  onSelectAstrologer,
  onOpenDownload
}) => {
  const [activeMode, setActiveMode] = useState<ConsultationMode>('chat');
  const [filterSpecialty, setFilterSpecialty] = useState<string>('All');

  const specialties = ['All', 'Kundali Matching', 'Career & Wealth', 'Relationship Harmony', 'Dasha Analysis'];

  const filteredAstrologers = ASTROLOGERS.filter(astro => {
    if (filterSpecialty === 'All') return true;
    return astro.specialties.includes(filterSpecialty);
  });

  return (
    <section id="consultation" className="w-full px-4 sm:px-6 lg:px-8 py-16 sm:py-24 bg-[#fbf0ff] border-y border-[#efdbff]/80">
      <div className="max-w-4xl mx-auto flex flex-col gap-8 sm:gap-10">
        
        {/* Header */}
        <div className="text-center flex flex-col gap-2 max-w-xl mx-auto">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#420094]">
            Seamless Access
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#25123b] tracking-tight">
            Talk to the Right Astrologer, Your Way
          </h2>
          <p className="text-sm sm:text-base text-[#4a4454]">
            Verified Vedic masters available on demand. Choose your preferred consultation format below.
          </p>
        </div>

        {/* Mode Selector Tabs */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex w-full sm:w-auto rounded-xl bg-[#efdbff]/70 p-1 gap-1 border border-[#d3bbff]/50">
            <button
              onClick={() => setActiveMode('chat')}
              className={`flex-1 sm:flex-initial px-5 py-2 rounded-lg text-xs sm:text-sm font-bold flex items-center justify-center gap-1.5 transition-all ${
                activeMode === 'chat'
                  ? 'bg-white text-[#420094] shadow-sm'
                  : 'text-[#4a4454] hover:text-[#25123b]'
              }`}
            >
              <span className="material-symbols-outlined text-[18px]">chat</span>
              Chat
            </button>
            <button
              onClick={() => setActiveMode('voice')}
              className={`flex-1 sm:flex-initial px-5 py-2 rounded-lg text-xs sm:text-sm font-bold flex items-center justify-center gap-1.5 transition-all ${
                activeMode === 'voice'
                  ? 'bg-white text-[#420094] shadow-sm'
                  : 'text-[#4a4454] hover:text-[#25123b]'
              }`}
            >
              <span className="material-symbols-outlined text-[18px]">call</span>
              Voice Call
            </button>
            <button
              onClick={() => setActiveMode('video')}
              className={`flex-1 sm:flex-initial px-5 py-2 rounded-lg text-xs sm:text-sm font-bold flex items-center justify-center gap-1.5 transition-all ${
                activeMode === 'video'
                  ? 'bg-white text-[#420094] shadow-sm'
                  : 'text-[#4a4454] hover:text-[#25123b]'
              }`}
            >
              <span className="material-symbols-outlined text-[18px]">videocam</span>
              Video Call
            </button>
          </div>

          {/* Specialty Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0 scrollbar-none text-xs">
            {specialties.map(spec => (
              <button
                key={spec}
                onClick={() => setFilterSpecialty(spec)}
                className={`px-3 py-1.5 rounded-full whitespace-nowrap font-medium transition-all ${
                  filterSpecialty === spec
                    ? 'bg-[#420094] text-white shadow-xs'
                    : 'bg-white text-[#4a4454] hover:bg-[#efdbff]/50 border border-[#efdbff]'
                }`}
              >
                {spec}
              </button>
            ))}
          </div>
        </div>

        {/* Astrologers Cards List */}
        <div className="flex flex-col gap-4 sm:gap-6">
          {filteredAstrologers.map(astrologer => (
            <div
              key={astrologer.id}
              className="p-5 sm:p-6 rounded-2xl bg-white border border-[#efdbff] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col gap-4"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                {/* Profile info */}
                <div className="flex items-center sm:items-start gap-4">
                  <div className="relative flex-shrink-0">
                    <img
                      src={astrologer.avatarUrl}
                      alt={astrologer.name}
                      className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover shadow-sm ring-2 ring-[#feb700]"
                      referrerPolicy="no-referrer"
                    />
                    <span className="absolute bottom-0 right-0 w-4 h-4 rounded-full bg-[#16B86A] ring-2 ring-white shadow-xs" title="Online now"></span>
                  </div>

                  <div className="flex flex-col min-w-0">
                    <div className="flex items-center gap-1.5">
                      <h3 className="text-lg sm:text-xl font-bold text-[#25123b] leading-tight">
                        {astrologer.name}
                      </h3>
                      <span className="material-symbols-outlined text-[#420094] text-[20px]" title="Verified Vedic Astrologer">
                        verified
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-[#4a4454] pt-0.5">
                      {astrologer.title} • {astrologer.experienceYears}+ Yrs Exp
                    </p>

                    <div className="flex items-center gap-2 pt-1">
                      <span className="flex items-center gap-1 text-[#7c5800] text-xs sm:text-sm font-bold bg-[#ffdea8]/50 px-2 py-0.5 rounded-md">
                        <span className="material-symbols-outlined text-[16px] text-[#feb700] fill-1">star</span>
                        {astrologer.rating}
                      </span>
                      <span className="text-xs text-[#7b7485]">
                        ({astrologer.consultationsCount.toLocaleString()}+ consultations)
                      </span>
                    </div>
                  </div>
                </div>

                {/* Rate Badge */}
                <div className="self-start sm:self-center flex sm:flex-col items-center sm:items-end justify-between w-full sm:w-auto">
                  <span className="text-xs sm:text-sm text-[#4a4454] sm:hidden">Consultation Rate:</span>
                  <span className="px-3.5 py-1.5 rounded-full bg-[#efdbff] text-[#420094] text-xs sm:text-sm font-extrabold shadow-2xs">
                    ₹{astrologer.ratePerMin}/min
                  </span>
                </div>
              </div>

              {/* Bio snippet */}
              {astrologer.about && (
                <p className="text-xs text-[#4a4454] leading-relaxed border-t border-[#f7e9ff] pt-2 italic">
                  "{astrologer.about}"
                </p>
              )}

              {/* Specialties & Languages */}
              <div className="flex flex-wrap items-center gap-1.5 pt-1">
                {astrologer.specialties.map((spec, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 rounded-lg bg-[#fbf0ff] text-[#25123b] text-xs font-medium border border-[#efdbff]"
                  >
                    {spec}
                  </span>
                ))}
                <span className="px-2.5 py-1 rounded-lg bg-gray-50 text-[#7b7485] text-xs font-medium">
                  🗣️ {astrologer.languages.join(', ')}
                </span>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <button
                  onClick={() => onSelectAstrologer(astrologer, 'chat')}
                  className="min-h-[44px] py-2 px-3 rounded-xl bg-[#feb700] hover:bg-[#f5aa00] text-[#271900] text-xs sm:text-sm font-bold flex items-center justify-center gap-1.5 active:scale-95 transition-all shadow-xs"
                >
                  <span className="material-symbols-outlined text-[18px]">chat</span>
                  <span>Chat Now</span>
                </button>

                <button
                  onClick={() => onSelectAstrologer(astrologer, activeMode === 'video' ? 'video' : 'voice')}
                  className="min-h-[44px] py-2 px-3 rounded-xl bg-[#420094] hover:bg-[#5b20b8] text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-1.5 active:scale-95 transition-all shadow-xs"
                >
                  <span className="material-symbols-outlined text-[18px]">
                    {activeMode === 'video' ? 'videocam' : 'call'}
                  </span>
                  <span>{activeMode === 'video' ? 'Video Now' : 'Call Now'}</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Find More CTA */}
        <div className="flex justify-center pt-2">
          <button
            onClick={onOpenDownload}
            className="px-6 py-3 rounded-xl bg-[#efdbff] hover:bg-[#e9d1ff] text-[#420094] text-sm font-bold flex items-center gap-2 transition-all active:scale-95"
          >
            <span>Find an Astrologer in App</span>
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </button>
        </div>
      </div>
    </section>
  );
};
