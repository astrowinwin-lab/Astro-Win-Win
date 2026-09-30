/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Advantage } from './components/Advantage';
import { Features } from './components/Features';
import { ConsultationSection } from './components/ConsultationSection';
import { AIAstrologySection } from './components/AIAstrologySection';
import { HowItWorks } from './components/HowItWorks';
import { AppScreensPreview } from './components/AppScreensPreview';
import { DownloadSection } from './components/DownloadSection';
import { Footer } from './components/Footer';
import { BottomNav } from './components/BottomNav';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const lenisRef = useRef<Lenis | null>(null);

  // Initialize Lenis smooth scroll and GSAP animations
  useEffect(() => {
    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    gsap.registerPlugin(ScrollTrigger);

    let lenis: Lenis | null = null;

    if (!prefersReducedMotion) {
      lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        touchMultiplier: 1.5,
        infinite: false,
      });

      lenisRef.current = lenis;

      lenis.on('scroll', ScrollTrigger.update);

      const updateTicker = (time: number) => {
        lenis?.raf(time * 1000);
      };

      gsap.ticker.add(updateTicker);
      gsap.ticker.lagSmoothing(0);

      // Hero animations
      const ctx = gsap.context(() => {
        gsap.from('.hero-anim', {
          opacity: 0,
          y: 30,
          duration: 0.9,
          stagger: 0.12,
          ease: 'power2.out',
        });

        gsap.to('.hero-mockup', {
          y: -14,
          duration: 3,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        });
      });

      return () => {
        ctx.revert();
        gsap.ticker.remove(updateTicker);
        lenis?.destroy();
      };
    }
  }, []);

  // Update active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'features', 'consultation', 'ai-astrology', 'how-it-works', 'download'];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const targetEl = document.getElementById(sectionId);
    if (targetEl) {
      if (lenisRef.current) {
        lenisRef.current.scrollTo(targetEl, { offset: -60 });
      } else {
        targetEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fff7ff] text-[#25123b] font-sans antialiased selection:bg-[#ffdea8] selection:text-[#420094]">
      {/* Fixed Top Navigation Bar */}
      <Header />

      {/* Main Content Area */}
      <main className="flex-1 pt-16 pb-16 md:pb-0">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Advantage Section */}
        <Advantage />

        {/* 3. Features Section */}
        <Features />

        {/* 4. Consultation Experience Section */}
        <ConsultationSection />

        {/* 5. AI Astrology Section */}
        <AIAstrologySection />

        {/* 6. How It Works Section */}
        <HowItWorks />

        {/* 7. App Screens Preview Rail */}
        <AppScreensPreview />

        {/* 8. Final Download CTA Section */}
        <DownloadSection />

        {/* 9. Footer */}
        <Footer />
      </main>

      {/* Mobile Bottom Dock Bar */}
      <BottomNav
        activeSection={activeSection}
        onNavigate={handleNavigate}
      />
    </div>
  );
}
