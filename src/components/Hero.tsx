import React, { useState } from 'react';
import { SUNITA_AVATAR, ROHAN_AVATAR, ZODIAC_FORECASTS, ASTROLOGERS, APP_DOWNLOAD_URL, PLAY_STORE_URL, APP_STORE_URL } from '../data/mockData';
import { Astrologer } from '../types/astrology';
import { Icon } from './Icon';

interface HeroProps {
  onOpenDownload?: () => void;
  onSelectAstrologer?: (astrologer: Astrologer, mode: 'chat' | 'call' | 'video') => void;
}

export const Hero: React.FC<HeroProps> = () => {
  const [selectedZodiac, setSelectedZodiac] = useState<string>('Aries');
  const [activeTab, setActiveTab] = useState<'kundali' | 'match' | 'palm'>('kundali');

  const currentForecast = ZODIAC_FORECASTS[selectedZodiac] || ZODIAC_FORECASTS['Aries'];

  return (
    <section id="hero" className="relative w-full overflow-hidden bg-gradient-to-b from-[#19052F] via-[#250d44] to-[#310D59] text-white px-4 sm:px-6 lg:px-8 pt-8 sm:pt-14 pb-16 sm:pb-24 flex flex-col items-center">
      {/* Subtle Geometric Mandala SVG Watermark */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-15 overflow-hidden">
        <svg
          className="w-[620px] sm:w-[780px] h-[620px] sm:h-[780px] animate-[spin_140s_linear_infinite]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 200 200"
        >
          <circle cx="100" cy="100" r="90" strokeDasharray="2 4" strokeWidth="0.5" />
          <circle cx="100" cy="100" r="75" strokeWidth="0.5" />
          <circle cx="100" cy="100" r="60" strokeDasharray="1 3" strokeWidth="0.5" />
          <polygon points="100,20 180,100 100,180 20,100" strokeWidth="0.5" />
          <polygon points="100,30 170,100 100,170 30,100" strokeWidth="0.4" />
          <circle cx="100" cy="100" r="40" strokeWidth="0.5" />
          <path d="M100,5 L100,195 M5,100 L195,100 M33,33 L167,167 M33,167 L167,33" strokeWidth="0.3" />
        </svg>
      </div>

      {/* Radiant Glow Aura */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 sm:w-[32rem] h-96 sm:h-[32rem] bg-[#5b20b8] rounded-full blur-[130px] opacity-40 pointer-events-none" />

      {/* Starry Dust Accents */}
      <div className="absolute inset-0 pointer-events-none opacity-25">
        <div className="absolute top-12 left-[15%] w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
        <div className="absolute top-36 right-[20%] w-2 h-2 rounded-full bg-[#feb700] animate-ping" />
        <div className="absolute top-64 left-[10%] w-1 h-1 rounded-full bg-[#ebdcff]" />
        <div className="absolute top-80 right-[12%] w-1.5 h-1.5 rounded-full bg-white" />
      </div>

      <div className="relative z-10 w-full max-w-2xl flex flex-col items-center text-center gap-5 sm:gap-6">
        {/* Top Pill */}
        <div className="hero-anim inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#efdbff]/15 backdrop-blur-md border border-[#d3bbff]/20 shadow-inner">
          <span className="w-2 h-2 rounded-full bg-[#16B86A] animate-pulse" />
          <span className="text-xs sm:text-sm font-semibold text-[#ffdea8] tracking-wide">
            India's Trusted Vedic & AI Platform
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="hero-anim text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15] text-balance">
          Your Stars. <span className="text-[#ffba20]">Your Guidance.</span> Your Journey.
        </h1>

        {/* Supporting Body */}
        <p className="hero-anim text-sm sm:text-base text-[#ebdcff]/90 max-w-xl leading-relaxed text-balance">
          Connect with verified astrologers through chat, voice, and video consultations. Explore personalized kundali charts and AI-powered insights, all in one app.
        </p>

        {/* CTA Buttons Group */}
        <div className="hero-anim flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto pt-1">
          <a
            href={APP_DOWNLOAD_URL}
            className="w-full sm:w-auto min-h-[48px] px-6 sm:px-8 py-3 rounded-xl bg-[#feb700] hover:bg-[#f5aa00] text-[#271900] font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-[0_4px_22px_rgba(254,183,0,0.45)] active:scale-95 transition-all duration-200"
          >
            <Icon name="download" size={20} />
            <span>Download Astro Win Win</span>
          </a>
          <a
            href="#features"
            className="w-full sm:w-auto min-h-[48px] px-6 sm:px-8 py-3 rounded-xl bg-[#efdbff]/15 hover:bg-[#efdbff]/25 border border-[#efdbff]/20 text-white font-semibold text-sm sm:text-base flex items-center justify-center transition-colors"
          >
            Explore Features
          </a>
        </div>

        {/* App Stores Badges Row */}
        <div className="hero-anim flex flex-col items-center gap-2 pt-2">
          <span className="text-[11px] sm:text-xs text-[#d4bbff] uppercase tracking-wider font-semibold">
            Available on Android & iOS
          </span>
          <div className="flex items-center gap-3">
            <a
              href={PLAY_STORE_URL}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 backdrop-blur-md text-white transition-all active:scale-95 text-left"
            >
              <Icon name="play_arrow" size={20} className="text-[#ffdea8]" />
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
              href={APP_STORE_URL}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 backdrop-blur-md text-white transition-all active:scale-95 text-left"
            >
              <Icon name="phone_iphone" size={20} className="text-[#ffdea8]" />
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
        </div>

        {/* Trust Indicators Mini Row */}
        <div className="hero-anim flex flex-wrap items-center justify-center gap-x-5 gap-y-2 pt-2 text-xs sm:text-sm text-[#e9d1ff]/90">
          <span className="flex items-center gap-1.5 font-medium">
            <span className="text-[#16B86A] font-bold">✓</span> Verified Astrologers
          </span>
          <span className="flex items-center gap-1.5 font-medium">
            <span className="text-[#16B86A] font-bold">✓</span> Secure Payments
          </span>
          <span className="flex items-center gap-1.5 font-medium">
            <span className="text-[#16B86A] font-bold">✓</span> Chat, Voice & Video
          </span>
          <span className="flex items-center gap-1.5 font-medium">
            <span className="text-[#16B86A] font-bold">✓</span> AI-Powered
          </span>
        </div>

        {/* Centerpiece Phone Frame Mockup */}
        <div className="hero-mockup relative w-full max-w-[340px] sm:max-w-[360px] mt-6 pt-2">
          {/* Floating Pill: Live Astrologers Online */}
          <div className="absolute -top-3 -left-3 sm:-left-6 z-20 flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#19052F]/90 backdrop-blur-md border border-[#d3bbff]/30 shadow-xl text-white">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#16B86A] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#16B86A]"></span>
            </span>
            <span className="text-xs font-semibold">Live Astrologers Online</span>
          </div>

          {/* Floating Pill: Rating 4.9 */}
          <div className="absolute top-1/3 -right-3 sm:-right-6 z-20 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white text-[#25123b] shadow-xl border border-[#efdbff]">
            <span className="material-symbols-outlined text-[#ffba20] text-[18px] fill-1">star</span>
            <span className="text-xs font-bold">4.9</span>
            <span className="text-[10px] text-[#7b7485] font-medium">(45k+)</span>
          </div>

          {/* Phone Bezel */}
          <div className="relative rounded-[2.8rem] bg-[#0c0217] p-2.5 sm:p-3 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9),0_0_40px_rgba(113,61,206,0.3)] ring-1 ring-white/20">
            {/* Screen Inner */}
            <div className="rounded-[2.4rem] bg-[#fbf0ff] overflow-hidden flex flex-col text-[#25123b] text-left h-[590px] shadow-inner relative select-none">
              
              {/* Phone Status Bar + Header */}
              <div className="bg-[#19052F] text-white pt-2.5 px-4 pb-2.5 flex flex-col gap-1.5">
                <div className="flex items-center justify-between text-[11px] text-[#ebdcff] font-bold">
                  <span className="tracking-tight">9:41</span>
                  {/* Dynamic Island / Notch */}
                  <div className="w-24 h-4 bg-black rounded-full mx-auto flex items-center justify-center">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#19052F] mr-4"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-[#032e18]"></div>
                  </div>
                  <div className="flex items-center gap-1.5 text-[12px]">
                    <span className="material-symbols-outlined text-[13px]">signal_cellular_4_bar</span>
                    <span className="material-symbols-outlined text-[13px]">wifi</span>
                    <span className="material-symbols-outlined text-[14px]">battery_full</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-1">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#ffba20] text-[20px]">explore</span>
                    <span className="text-[15px] font-bold tracking-tight text-white">Astro Win Win</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center">
                      <span className="material-symbols-outlined text-[16px] text-white">notifications</span>
                    </div>
                    <img
                      src={SUNITA_AVATAR}
                      alt="Priya Profile"
                      className="w-7 h-7 rounded-full object-cover ring-1 ring-[#feb700]"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
              </div>

              {/* Phone Scroll Content */}
              <div className="p-3 flex-1 flex flex-col gap-2.5 overflow-hidden">
                {/* Greeting + Zodiac Selector */}
                <div className="flex items-center justify-between">
                  <div className="flex flex-col">
                    <p className="text-sm font-bold text-[#420094] leading-tight">Good Morning, Priya!</p>
                    <p className="text-[11px] text-[#4a4454]">Your Daily Vedic Transit</p>
                  </div>
                  {/* Interactive Zodiac Dropdown / Tag */}
                  <select
                    value={selectedZodiac}
                    onChange={(e) => setSelectedZodiac(e.target.value)}
                    className="px-2 py-0.5 rounded-full bg-[#ffdea8] text-[#271900] text-[11px] font-bold border border-[#feb700] cursor-pointer outline-none focus:ring-1 focus:ring-[#7c5800]"
                  >
                    <option value="Aries">Aries ♈</option>
                    <option value="Taurus">Taurus ♉</option>
                    <option value="Gemini">Gemini ♊</option>
                    <option value="Cancer">Cancer ♋</option>
                    <option value="Leo">Leo ♌</option>
                  </select>
                </div>

                {/* Today's Forecast Card */}
                <div className="rounded-xl p-3 bg-gradient-to-r from-[#5b20b8] to-[#420094] text-white shadow-md flex flex-col gap-1.5 transition-all">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[#ffba20] text-[16px]">auto_awesome</span>
                      <span className="text-xs text-[#ffdea8] font-bold">Today's Forecast</span>
                    </div>
                    <span className="text-[10px] text-[#ebdcff] font-medium">Oct 28 · Shubh Muhurta</span>
                  </div>

                  <p className="text-xs text-white/95 leading-snug line-clamp-2">
                    {currentForecast.transitSummary}
                  </p>

                  <div className="flex items-center justify-between pt-1 text-[11px] text-[#ffba20]">
                    <span className="flex items-center gap-1 font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#feb700]"></span>
                      Lucky: {currentForecast.luckyColor}
                    </span>
                    <span className="text-[#ebdcff] font-bold">Transit Score: {currentForecast.score}%</span>
                  </div>
                </div>

                {/* Kundali / Match / Palm Quick Tabs */}
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => setActiveTab('kundali')}
                    className={`px-2.5 py-1 rounded-lg text-xs font-semibold whitespace-nowrap flex items-center gap-1 transition-all ${
                      activeTab === 'kundali'
                        ? 'bg-[#efdbff] text-[#420094] shadow-sm font-bold'
                        : 'bg-white text-[#4a4454] shadow-xs'
                    }`}
                  >
                    <span className="material-symbols-outlined text-[14px]">psychology</span>
                    Kundali
                  </button>
                  <button
                    onClick={() => setActiveTab('match')}
                    className={`px-2.5 py-1 rounded-lg text-xs font-semibold whitespace-nowrap flex items-center gap-1 transition-all ${
                      activeTab === 'match'
                        ? 'bg-[#efdbff] text-[#420094] shadow-sm font-bold'
                        : 'bg-white text-[#4a4454] shadow-xs'
                    }`}
                  >
                    <span className="material-symbols-outlined text-[14px]">favorite</span>
                    Match
                  </button>
                  <button
                    onClick={() => setActiveTab('palm')}
                    className={`px-2.5 py-1 rounded-lg text-xs font-semibold whitespace-nowrap flex items-center gap-1 transition-all ${
                      activeTab === 'palm'
                        ? 'bg-[#efdbff] text-[#420094] shadow-sm font-bold'
                        : 'bg-white text-[#4a4454] shadow-xs'
                    }`}
                  >
                    <span className="material-symbols-outlined text-[14px]">pan_tool</span>
                    Palm
                  </button>
                </div>

                {/* Available Mentors List */}
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-[#25123b] font-bold">Available Mentors</span>
                    <a href="#consultation" className="text-[11px] text-[#420094] font-bold hover:underline">
                      View All
                    </a>
                  </div>

                  {/* Mentor 1 */}
                  <div className="flex items-center justify-between p-2 rounded-xl bg-white shadow-sm border border-[#efdbff]/60">
                    <div className="flex items-center gap-2">
                      <div className="relative">
                        <img
                          src={SUNITA_AVATAR}
                          alt="Dr. Sunita S."
                          className="w-9 h-9 rounded-full object-cover ring-1 ring-[#feb700]"
                          referrerPolicy="no-referrer"
                        />
                        <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-[#16B86A] ring-1 ring-white"></span>
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs font-bold text-[#25123b] leading-tight">Dr. Sunita S.</p>
                        <p className="text-[10px] text-[#4a4454] leading-tight">Vedic · 15 Yrs · ⭐ 5.0</p>
                      </div>
                    </div>
                    <a
                      href="#download"
                      className="px-2.5 py-1 rounded-lg bg-[#feb700] hover:bg-[#f5aa00] text-[#271900] text-[11px] font-bold shadow-xs active:scale-95 transition-transform"
                    >
                      Chat ₹30
                    </a>
                  </div>

                  {/* Mentor 2 */}
                  <div className="flex items-center justify-between p-2 rounded-xl bg-white shadow-sm border border-[#efdbff]/60">
                    <div className="flex items-center gap-2">
                      <div className="relative">
                        <img
                          src={ROHAN_AVATAR}
                          alt="Acharya Rohan"
                          className="w-9 h-9 rounded-full object-cover ring-1 ring-[#420094]"
                          referrerPolicy="no-referrer"
                        />
                        <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-[#16B86A] ring-1 ring-white"></span>
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs font-bold text-[#25123b] leading-tight">Acharya Rohan</p>
                        <p className="text-[10px] text-[#4a4454] leading-tight">Kundali · 12 Yrs · ⭐ 4.9</p>
                      </div>
                    </div>
                    <a
                      href="#download"
                      className="px-2.5 py-1 rounded-lg bg-[#420094] hover:bg-[#5b20b8] text-white text-[11px] font-bold shadow-xs active:scale-95 transition-transform"
                    >
                      Call ₹25
                    </a>
                  </div>
                </div>
              </div>

              {/* Phone Bottom Nav */}
              <div className="bg-white flex flex-col pt-1.5 pb-2 px-3 border-t border-[#efdbff]">
                <div className="flex items-center justify-around text-[#4a4454]">
                  <div className="flex flex-col items-center text-[#420094]">
                    <Icon name="home" size={18} />
                    <span className="text-[9px] font-bold">Home</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <Icon name="explore" size={18} />
                    <span className="text-[9px]">Kundali</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <Icon name="chat" size={18} />
                    <span className="text-[9px]">Chat</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <Icon name="call" size={18} />
                    <span className="text-[9px]">Call</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <Icon name="person" size={18} />
                    <span className="text-[9px]">Profile</span>
                  </div>
                </div>
                {/* Home Indicator Bar */}
                <div className="w-28 h-1 bg-[#25123b]/40 rounded-full mx-auto mt-2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
