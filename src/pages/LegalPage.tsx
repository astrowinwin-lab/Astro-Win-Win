import React, { useState, useEffect } from 'react';
import { Icon } from '../components/Icon';

interface LegalPageProps {
  initialTab?: 'privacy' | 'terms';
  onNavigateHome: () => void;
  onNavigateTab: (tab: 'privacy' | 'terms') => void;
}

export const LegalPage: React.FC<LegalPageProps> = ({
  initialTab = 'privacy',
  onNavigateHome,
  onNavigateTab,
}) => {
  const [activeTab, setActiveTab] = useState<'privacy' | 'terms'>(initialTab);

  useEffect(() => {
    setActiveTab(initialTab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [initialTab]);

  const handleTabChange = (tab: 'privacy' | 'terms') => {
    setActiveTab(tab);
    onNavigateTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#fff7ff] text-[#25123b] flex flex-col font-sans antialiased selection:bg-[#ffdea8] selection:text-[#420094]">
      {/* Top Header */}
      <header className="sticky top-0 z-40 bg-[#fff7ff]/95 backdrop-blur-xl border-b border-[#efdbff]/80">
        <div className="max-w-5xl mx-auto h-16 px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          {/* Brand */}
          <button
            onClick={onNavigateHome}
            className="flex items-baseline gap-2 text-left group whitespace-nowrap cursor-pointer"
          >
            <span className="text-xl sm:text-2xl font-bold tracking-tight text-[#420094] leading-tight whitespace-nowrap group-hover:opacity-90 transition-opacity">
              Astro Win Win
            </span>
            <span className="text-xs text-[#4a4454] font-medium hidden sm:inline whitespace-nowrap">
              · Vedic & AI Platform
            </span>
          </button>

          {/* Action / Back to Home */}
          <div className="flex items-center gap-3">
            <button
              onClick={onNavigateHome}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white hover:bg-[#fbf0ff] text-[#420094] border border-[#efdbff] text-xs sm:text-sm font-semibold transition-all active:scale-95 shadow-xs cursor-pointer"
            >
              <Icon name="arrow_back" size={18} />
              <span>Back to Home</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="flex-1 max-w-4xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Breadcrumb & Navigation Switcher */}
        <div className="flex flex-col gap-6 mb-8">
          <div className="flex items-center gap-2 text-xs text-[#7b7485]">
            <button
              onClick={onNavigateHome}
              className="hover:text-[#420094] transition-colors cursor-pointer"
            >
              Home
            </button>
            <span>/</span>
            <span className="text-[#420094] font-semibold">
              {activeTab === 'privacy' ? 'Privacy Policy' : 'Terms & Conditions'}
            </span>
          </div>

          {/* Tab Selector Buttons */}
          <div className="flex p-1.5 bg-[#f3e2ff]/60 rounded-2xl border border-[#efdbff] w-full sm:w-fit gap-1.5">
            <button
              onClick={() => handleTabChange('privacy')}
              className={`flex-1 sm:flex-initial px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center justify-center gap-2 ${
                activeTab === 'privacy'
                  ? 'bg-white text-[#420094] shadow-sm'
                  : 'text-[#4a4454] hover:text-[#25123b] hover:bg-white/40'
              }`}
            >
              <Icon name="verified_user" size={18} />
              <span>Privacy Policy</span>
            </button>
            <button
              onClick={() => handleTabChange('terms')}
              className={`flex-1 sm:flex-initial px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center justify-center gap-2 ${
                activeTab === 'terms'
                  ? 'bg-white text-[#420094] shadow-sm'
                  : 'text-[#4a4454] hover:text-[#25123b] hover:bg-white/40'
              }`}
            >
              <Icon name="gavel" size={18} />
              <span>Terms & Conditions</span>
            </button>
          </div>
        </div>

        {/* Content Card */}
        <article className="bg-white rounded-3xl border border-[#efdbff] p-6 sm:p-10 lg:p-12 shadow-sm">
          {activeTab === 'privacy' ? (
            /* PRIVACY POLICY */
            <div className="space-y-8 text-[#332a42]">
              {/* Header Header */}
              <div className="border-b border-[#efdbff]/80 pb-6">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#fbf0ff] text-[#420094] text-xs font-semibold border border-[#d3bbff]/50 mb-3">
                  <Icon name="shield" size={14} />
                  Legal Compliance
                </span>
                <h1 className="text-2xl sm:text-4xl font-extrabold text-[#25123b] tracking-tight">
                  Astro Win Win — Privacy Policy
                </h1>
                <p className="text-xs sm:text-sm text-[#7b7485] font-medium mt-2">
                  Last Updated: 01.10.2026
                </p>
                <p className="text-sm sm:text-base text-[#4a4454] leading-relaxed mt-4">
                  Astro Win Win (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) respects your privacy. This Privacy Policy explains how we collect, use, and protect information when you use the Astro Win Win application and related services.
                </p>
              </div>

              {/* 1. Information We Collect */}
              <section className="space-y-3">
                <h2 className="text-lg sm:text-xl font-bold text-[#25123b] flex items-center gap-2">
                  <span className="w-7 h-7 rounded-lg bg-[#efdbff] text-[#420094] text-xs font-bold inline-flex items-center justify-center">
                    1
                  </span>
                  Information We Collect
                </h2>
                <p className="text-sm text-[#4a4454]">We may collect:</p>
                <ul className="list-disc pl-6 space-y-1.5 text-sm text-[#4a4454]">
                  <li>Name, mobile number and email address</li>
                  <li>Date, time and place of birth for astrology services</li>
                  <li>Profile information and preferences</li>
                  <li>Consultation, chat and booking information</li>
                  <li>Wallet, payment and transaction details</li>
                  <li>Reviews and ratings</li>
                  <li>Device and basic technical information</li>
                  <li>Information submitted to AI astrology features, including palm images when you use palm reading</li>
                  <li>Astrologer KYC information, where applicable</li>
                </ul>
                <div className="p-3.5 rounded-xl bg-[#fbf0ff] border border-[#efdbff] text-xs sm:text-sm text-[#4a4454] leading-relaxed mt-3">
                  <span className="font-semibold text-[#420094]">Payment Note: </span>
                  Payment card/bank credentials may be processed by our authorized payment providers and are not necessarily stored directly by Astro Win Win.
                </div>
              </section>

              {/* 2. How We Use Your Information */}
              <section className="space-y-3">
                <h2 className="text-lg sm:text-xl font-bold text-[#25123b] flex items-center gap-2">
                  <span className="w-7 h-7 rounded-lg bg-[#efdbff] text-[#420094] text-xs font-bold inline-flex items-center justify-center">
                    2
                  </span>
                  How We Use Your Information
                </h2>
                <p className="text-sm text-[#4a4454]">We use your information to:</p>
                <ul className="list-disc pl-6 space-y-1.5 text-sm text-[#4a4454]">
                  <li>Create and manage your account</li>
                  <li>Provide astrology and consultation services</li>
                  <li>Connect you with astrologers</li>
                  <li>Process wallet and payment transactions</li>
                  <li>Provide personalized horoscope and AI features</li>
                  <li>Maintain consultation history</li>
                  <li>Send important notifications</li>
                  <li>Improve our services</li>
                  <li>Prevent fraud, misuse and unauthorized activity</li>
                  <li>Comply with applicable legal requirements</li>
                </ul>
              </section>

              {/* 3. Consultation Data */}
              <section className="space-y-3">
                <h2 className="text-lg sm:text-xl font-bold text-[#25123b] flex items-center gap-2">
                  <span className="w-7 h-7 rounded-lg bg-[#efdbff] text-[#420094] text-xs font-bold inline-flex items-center justify-center">
                    3
                  </span>
                  Consultation Data
                </h2>
                <p className="text-sm sm:text-base text-[#4a4454] leading-relaxed">
                  Chat, voice and video consultations may be processed or stored where necessary to provide, secure, monitor or improve the service, subject to applicable law.
                </p>
                <p className="text-sm sm:text-base text-[#4a4454] leading-relaxed">
                  Users and astrologers must not share unnecessary personal contact information or attempt to move consultations outside the Astro Win Win platform.
                </p>
              </section>

              {/* 4. AI Features */}
              <section className="space-y-3">
                <h2 className="text-lg sm:text-xl font-bold text-[#25123b] flex items-center gap-2">
                  <span className="w-7 h-7 rounded-lg bg-[#efdbff] text-[#420094] text-xs font-bold inline-flex items-center justify-center">
                    4
                  </span>
                  AI Features
                </h2>
                <p className="text-sm sm:text-base text-[#4a4454] leading-relaxed">
                  Astro Win Win may use AI to provide horoscope, palm-reading, astrology assistance and consultation-related insights.
                </p>
                <p className="text-sm sm:text-base text-[#4a4454] leading-relaxed">
                  AI-generated information is provided for general guidance and entertainment purposes and should not be treated as professional medical, legal, financial or other professional advice.
                </p>
              </section>

              {/* 5. Data Security */}
              <section className="space-y-3">
                <h2 className="text-lg sm:text-xl font-bold text-[#25123b] flex items-center gap-2">
                  <span className="w-7 h-7 rounded-lg bg-[#efdbff] text-[#420094] text-xs font-bold inline-flex items-center justify-center">
                    5
                  </span>
                  Data Security
                </h2>
                <p className="text-sm sm:text-base text-[#4a4454] leading-relaxed">
                  We use reasonable technical and organizational measures to protect user information against unauthorized access, loss, misuse or disclosure.
                </p>
                <p className="text-sm sm:text-base text-[#4a4454] leading-relaxed">
                  However, no online service can guarantee absolute security.
                </p>
              </section>

              {/* 6. Third-Party Services */}
              <section className="space-y-3">
                <h2 className="text-lg sm:text-xl font-bold text-[#25123b] flex items-center gap-2">
                  <span className="w-7 h-7 rounded-lg bg-[#efdbff] text-[#420094] text-xs font-bold inline-flex items-center justify-center">
                    6
                  </span>
                  Third-Party Services
                </h2>
                <p className="text-sm sm:text-base text-[#4a4454] leading-relaxed">
                  We may use third-party providers for payment processing, cloud services, notifications, analytics, AI services and other operational functions. These providers may process information according to their own privacy policies and applicable agreements.
                </p>
              </section>

              {/* 7. Data Sharing */}
              <section className="space-y-3">
                <h2 className="text-lg sm:text-xl font-bold text-[#25123b] flex items-center gap-2">
                  <span className="w-7 h-7 rounded-lg bg-[#efdbff] text-[#420094] text-xs font-bold inline-flex items-center justify-center">
                    7
                  </span>
                  Data Sharing
                </h2>
                <p className="text-sm sm:text-base text-[#4a4454] leading-relaxed">
                  We do not sell personal information to third parties.
                </p>
                <p className="text-sm sm:text-base text-[#4a4454] leading-relaxed">
                  Information may be shared with astrologers, service providers, payment partners, authorities where legally required, or other parties where necessary to provide or protect the service.
                </p>
              </section>

              {/* 8. Data Retention */}
              <section className="space-y-3">
                <h2 className="text-lg sm:text-xl font-bold text-[#25123b] flex items-center gap-2">
                  <span className="w-7 h-7 rounded-lg bg-[#efdbff] text-[#420094] text-xs font-bold inline-flex items-center justify-center">
                    8
                  </span>
                  Data Retention
                </h2>
                <p className="text-sm sm:text-base text-[#4a4454] leading-relaxed">
                  We retain information only for as long as reasonably necessary for providing services, maintaining records, resolving disputes, preventing fraud and meeting legal or regulatory requirements.
                </p>
              </section>

              {/* 9. Your Rights */}
              <section className="space-y-3">
                <h2 className="text-lg sm:text-xl font-bold text-[#25123b] flex items-center gap-2">
                  <span className="w-7 h-7 rounded-lg bg-[#efdbff] text-[#420094] text-xs font-bold inline-flex items-center justify-center">
                    9
                  </span>
                  Your Rights
                </h2>
                <p className="text-sm sm:text-base text-[#4a4454] leading-relaxed">
                  Subject to applicable law, you may request access to, correction of, or deletion of your personal information.
                </p>
                <div className="p-4 rounded-2xl bg-[#fbf0ff] border border-[#efdbff] mt-2">
                  <p className="text-sm font-semibold text-[#25123b]">For privacy-related requests, contact:</p>
                  <p className="text-sm text-[#420094] font-medium mt-1">
                    Email:{' '}
                    <a
                      href="mailto:support@astrowinwin.com"
                      className="underline hover:text-[#5b20b8]"
                    >
                      support@astrowinwin.com
                    </a>
                  </p>
                </div>
              </section>

              {/* 10. Policy Updates */}
              <section className="space-y-3">
                <h2 className="text-lg sm:text-xl font-bold text-[#25123b] flex items-center gap-2">
                  <span className="w-7 h-7 rounded-lg bg-[#efdbff] text-[#420094] text-xs font-bold inline-center items-center justify-center">
                    10
                  </span>
                  Policy Updates
                </h2>
                <p className="text-sm sm:text-base text-[#4a4454] leading-relaxed">
                  We may update this Privacy Policy from time to time. Updated versions will be published through the application or website.
                </p>
              </section>
            </div>
          ) : (
            /* TERMS & CONDITIONS */
            <div className="space-y-8 text-[#332a42]">
              {/* Header */}
              <div className="border-b border-[#efdbff]/80 pb-6">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#fbf0ff] text-[#420094] text-xs font-semibold border border-[#d3bbff]/50 mb-3">
                  <Icon name="description" size={14} />
                  Agreement of Terms
                </span>
                <h1 className="text-2xl sm:text-4xl font-extrabold text-[#25123b] tracking-tight">
                  Astro Win Win — Terms &amp; Conditions
                </h1>
                <p className="text-xs sm:text-sm text-[#7b7485] font-medium mt-2">
                  Last Updated: 01.10.2026
                </p>
                <p className="text-sm sm:text-base text-[#4a4454] leading-relaxed mt-4">
                  By registering for or using Astro Win Win, you agree to these Terms &amp; Conditions. If you do not agree, please do not use the service.
                </p>
              </div>

              {/* 1. About the Service */}
              <section className="space-y-3">
                <h2 className="text-lg sm:text-xl font-bold text-[#25123b] flex items-center gap-2">
                  <span className="w-7 h-7 rounded-lg bg-[#efdbff] text-[#420094] text-xs font-bold inline-flex items-center justify-center">
                    1
                  </span>
                  About the Service
                </h2>
                <p className="text-sm sm:text-base text-[#4a4454] leading-relaxed">
                  Astro Win Win provides an online platform that connects users with astrologers for astrology-related consultations through chat, voice and video.
                </p>
                <p className="text-sm sm:text-base text-[#4a4454] leading-relaxed">
                  Astrology and AI features are provided for general guidance and informational/entertainment purposes.
                </p>
              </section>

              {/* 2. User Account */}
              <section className="space-y-3">
                <h2 className="text-lg sm:text-xl font-bold text-[#25123b] flex items-center gap-2">
                  <span className="w-7 h-7 rounded-lg bg-[#efdbff] text-[#420094] text-xs font-bold inline-flex items-center justify-center">
                    2
                  </span>
                  User Account
                </h2>
                <p className="text-sm sm:text-base text-[#4a4454] leading-relaxed">
                  Users must provide accurate information when creating an account and must keep their login credentials secure.
                </p>
                <p className="text-sm sm:text-base text-[#4a4454] leading-relaxed">
                  You are responsible for activity performed through your account.
                </p>
              </section>

              {/* 3. Astrology Consultations */}
              <section className="space-y-3">
                <h2 className="text-lg sm:text-xl font-bold text-[#25123b] flex items-center gap-2">
                  <span className="w-7 h-7 rounded-lg bg-[#efdbff] text-[#420094] text-xs font-bold inline-flex items-center justify-center">
                    3
                  </span>
                  Astrology Consultations
                </h2>
                <p className="text-sm sm:text-base text-[#4a4454] leading-relaxed">
                  Users may consult astrologers through available consultation methods.
                </p>
                <p className="text-sm sm:text-base text-[#4a4454] leading-relaxed">
                  Astrologers are independent service providers on the platform. Astro Win Win does not guarantee any particular prediction, result or outcome from a consultation.
                </p>
                <p className="text-sm sm:text-base text-[#4a4454] leading-relaxed">
                  Users should not rely solely on astrology or AI-generated information when making important medical, legal, financial or other professional decisions.
                </p>
              </section>

              {/* 4. Wallet and Payments */}
              <section className="space-y-3">
                <h2 className="text-lg sm:text-xl font-bold text-[#25123b] flex items-center gap-2">
                  <span className="w-7 h-7 rounded-lg bg-[#efdbff] text-[#420094] text-xs font-bold inline-flex items-center justify-center">
                    4
                  </span>
                  Wallet and Payments
                </h2>
                <p className="text-sm sm:text-base text-[#4a4454] leading-relaxed">
                  Astro Win Win operates a prepaid wallet system.
                </p>
                <ul className="list-disc pl-6 space-y-1.5 text-sm text-[#4a4454]">
                  <li><strong className="text-[#25123b]">Minimum wallet recharge:</strong> ₹100</li>
                  <li>Users must maintain sufficient wallet balance before starting a paid consultation.</li>
                  <li>Consultations are charged according to the astrologer&apos;s displayed rate.</li>
                  <li>Chat, voice and video consultations may be charged per minute.</li>
                  <li>Charging begins only after the consultation has been accepted and successfully connected.</li>
                  <li>Consultations automatically end when the available balance is insufficient.</li>
                  <li>Users may recharge their wallet during an active consultation where supported.</li>
                </ul>
                <div className="p-3.5 rounded-xl bg-[#fbf0ff] border border-[#efdbff] text-xs sm:text-sm text-[#4a4454] leading-relaxed mt-2">
                  Wallet transactions and payment processing may be subject to third-party payment provider terms.
                </div>
              </section>

              {/* 5. Refunds */}
              <section className="space-y-3">
                <h2 className="text-lg sm:text-xl font-bold text-[#25123b] flex items-center gap-2">
                  <span className="w-7 h-7 rounded-lg bg-[#efdbff] text-[#420094] text-xs font-bold inline-flex items-center justify-center">
                    5
                  </span>
                  Refunds
                </h2>
                <p className="text-sm sm:text-base text-[#4a4454] leading-relaxed">
                  Wallet recharges and completed consultation charges are generally non-refundable, except where a refund is required by applicable law or specifically approved by Astro Win Win.
                </p>
              </section>

              {/* 6. Astrologer Availability */}
              <section className="space-y-3">
                <h2 className="text-lg sm:text-xl font-bold text-[#25123b] flex items-center gap-2">
                  <span className="w-7 h-7 rounded-lg bg-[#efdbff] text-[#420094] text-xs font-bold inline-flex items-center justify-center">
                    6
                  </span>
                  Astrologer Availability
                </h2>
                <p className="text-sm sm:text-base text-[#4a4454] leading-relaxed">
                  The online status shown in the application indicates the astrologer&apos;s current platform availability and may change at any time.
                </p>
                <p className="text-sm sm:text-base text-[#4a4454] leading-relaxed">
                  Astro Win Win does not guarantee that an astrologer will always be available.
                </p>
              </section>

              {/* 7. User Conduct */}
              <section className="space-y-3">
                <h2 className="text-lg sm:text-xl font-bold text-[#25123b] flex items-center gap-2">
                  <span className="w-7 h-7 rounded-lg bg-[#efdbff] text-[#420094] text-xs font-bold inline-flex items-center justify-center">
                    7
                  </span>
                  User Conduct
                </h2>
                <p className="text-sm text-[#4a4454]">Users must not:</p>
                <ul className="list-disc pl-6 space-y-1.5 text-sm text-[#4a4454]">
                  <li>Harass, threaten or abuse astrologers</li>
                  <li>Share inappropriate or illegal content</li>
                  <li>Attempt to bypass platform payments</li>
                  <li>Share or request personal contact information for unauthorized off-platform consultations</li>
                  <li>Misuse the platform</li>
                  <li>Create fraudulent accounts</li>
                  <li>Attempt to manipulate ratings or reviews</li>
                </ul>
                <p className="text-xs sm:text-sm text-red-600 font-medium pt-1">
                  Violation may result in warnings, restrictions or account termination.
                </p>
              </section>

              {/* 8. Reviews and Ratings */}
              <section className="space-y-3">
                <h2 className="text-lg sm:text-xl font-bold text-[#25123b] flex items-center gap-2">
                  <span className="w-7 h-7 rounded-lg bg-[#efdbff] text-[#420094] text-xs font-bold inline-flex items-center justify-center">
                    8
                  </span>
                  Reviews and Ratings
                </h2>
                <p className="text-sm sm:text-base text-[#4a4454] leading-relaxed">
                  Users may submit ratings and reviews after completing a consultation.
                </p>
                <p className="text-sm sm:text-base text-[#4a4454] leading-relaxed">
                  Reviews must be genuine, relevant and respectful. Astro Win Win may remove reviews that violate these Terms.
                </p>
              </section>

              {/* 9. AI Features */}
              <section className="space-y-3">
                <h2 className="text-lg sm:text-xl font-bold text-[#25123b] flex items-center gap-2">
                  <span className="w-7 h-7 rounded-lg bg-[#efdbff] text-[#420094] text-xs font-bold inline-flex items-center justify-center">
                    9
                  </span>
                  AI Features
                </h2>
                <p className="text-sm sm:text-base text-[#4a4454] leading-relaxed">
                  AI-generated astrology, horoscope and palm-reading results are automated interpretations and may not always be accurate.
                </p>
                <p className="text-sm sm:text-base text-[#4a4454] leading-relaxed">
                  AI results should not be considered guaranteed predictions or professional advice.
                </p>
              </section>

              {/* 10. Intellectual Property */}
              <section className="space-y-3">
                <h2 className="text-lg sm:text-xl font-bold text-[#25123b] flex items-center gap-2">
                  <span className="w-7 h-7 rounded-lg bg-[#efdbff] text-[#420094] text-xs font-bold inline-flex items-center justify-center">
                    10
                  </span>
                  Intellectual Property
                </h2>
                <p className="text-sm sm:text-base text-[#4a4454] leading-relaxed">
                  The Astro Win Win application, branding, content, design and platform materials are protected by applicable intellectual-property laws.
                </p>
                <p className="text-sm sm:text-base text-[#4a4454] leading-relaxed">
                  Users may not copy, reproduce, modify, distribute or commercially exploit the platform without permission.
                </p>
              </section>

              {/* 11. Service Availability */}
              <section className="space-y-3">
                <h2 className="text-lg sm:text-xl font-bold text-[#25123b] flex items-center gap-2">
                  <span className="w-7 h-7 rounded-lg bg-[#efdbff] text-[#420094] text-xs font-bold inline-flex items-center justify-center">
                    11
                  </span>
                  Service Availability
                </h2>
                <p className="text-sm sm:text-base text-[#4a4454] leading-relaxed">
                  We may temporarily suspend or modify services for maintenance, security, technical issues or other operational reasons.
                </p>
                <p className="text-sm sm:text-base text-[#4a4454] leading-relaxed">
                  We do not guarantee uninterrupted availability.
                </p>
              </section>

              {/* 12. Account Suspension */}
              <section className="space-y-3">
                <h2 className="text-lg sm:text-xl font-bold text-[#25123b] flex items-center gap-2">
                  <span className="w-7 h-7 rounded-lg bg-[#efdbff] text-[#420094] text-xs font-bold inline-flex items-center justify-center">
                    12
                  </span>
                  Account Suspension
                </h2>
                <p className="text-sm sm:text-base text-[#4a4454] leading-relaxed">
                  Astro Win Win may suspend or terminate accounts that violate these Terms, engage in fraudulent activity, misuse the platform or create risks for users or the service.
                </p>
              </section>

              {/* 13. Limitation of Liability */}
              <section className="space-y-3">
                <h2 className="text-lg sm:text-xl font-bold text-[#25123b] flex items-center gap-2">
                  <span className="w-7 h-7 rounded-lg bg-[#efdbff] text-[#420094] text-xs font-bold inline-flex items-center justify-center">
                    13
                  </span>
                  Limitation of Liability
                </h2>
                <p className="text-sm sm:text-base text-[#4a4454] leading-relaxed">
                  Astro Win Win is a technology platform connecting users and astrologers. We are not responsible for decisions, actions, losses or outcomes resulting from astrology consultations or AI-generated information.
                </p>
                <p className="text-sm sm:text-base text-[#4a4454] leading-relaxed">
                  To the maximum extent permitted by applicable law, Astro Win Win&apos;s liability will be limited to the extent permitted by law.
                </p>
              </section>

              {/* 14. Changes to These Terms */}
              <section className="space-y-3">
                <h2 className="text-lg sm:text-xl font-bold text-[#25123b] flex items-center gap-2">
                  <span className="w-7 h-7 rounded-lg bg-[#efdbff] text-[#420094] text-xs font-bold inline-flex items-center justify-center">
                    14
                  </span>
                  Changes to These Terms
                </h2>
                <p className="text-sm sm:text-base text-[#4a4454] leading-relaxed">
                  We may update these Terms from time to time. Continued use of the application after changes are published constitutes acceptance of the updated Terms.
                </p>
              </section>

              {/* 15. Contact */}
              <section className="space-y-3">
                <h2 className="text-lg sm:text-xl font-bold text-[#25123b] flex items-center gap-2">
                  <span className="w-7 h-7 rounded-lg bg-[#efdbff] text-[#420094] text-xs font-bold inline-flex items-center justify-center">
                    15
                  </span>
                  Contact
                </h2>
                <p className="text-sm sm:text-base text-[#4a4454] leading-relaxed">
                  For questions, complaints or reports:
                </p>
                <div className="p-4 rounded-2xl bg-[#fbf0ff] border border-[#efdbff] mt-2">
                  <p className="text-sm text-[#420094] font-medium">
                    Email:{' '}
                    <a
                      href="mailto:support@astrowinwin.com"
                      className="underline hover:text-[#5b20b8]"
                    >
                      support@astrowinwin.com
                    </a>
                  </p>
                </div>
              </section>
            </div>
          )}
        </article>

        {/* Back to top & Home button */}
        <div className="flex items-center justify-between mt-8 pt-6 border-t border-[#efdbff]">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-xs text-[#7b7485] hover:text-[#420094] font-semibold flex items-center gap-1.5 cursor-pointer"
          >
            <Icon name="arrow_upward" size={16} />
            Back to top
          </button>

          <button
            onClick={onNavigateHome}
            className="px-5 py-2.5 rounded-xl bg-[#420094] hover:bg-[#5b20b8] text-white text-xs sm:text-sm font-bold flex items-center gap-2 transition-all active:scale-95 shadow-sm cursor-pointer"
          >
            <Icon name="home" size={18} />
            Return to Astro Win Win
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full px-4 sm:px-6 lg:px-8 py-8 bg-[#fbf0ff] border-t border-[#efdbff] text-center text-xs text-[#7b7485]">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© 2026 Astro Win Win. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <button
              onClick={() => handleTabChange('privacy')}
              className={`hover:text-[#420094] transition-colors cursor-pointer ${
                activeTab === 'privacy' ? 'font-bold text-[#420094]' : ''
              }`}
            >
              Privacy Policy
            </button>
            <span>•</span>
            <button
              onClick={() => handleTabChange('terms')}
              className={`hover:text-[#420094] transition-colors cursor-pointer ${
                activeTab === 'terms' ? 'font-bold text-[#420094]' : ''
              }`}
            >
              Terms &amp; Conditions
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};
