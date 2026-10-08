import React from 'react';
import { Icon } from './Icon';

interface BottomNavProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({ activeSection, onNavigate }) => {
  const navItems = [
    { id: 'hero', label: 'Overview', icon: 'home' },
    { id: 'features', label: 'Features', icon: 'video_search' },
    { id: 'how-it-works', label: 'How It Works', icon: 'insights' },
    { id: 'download', label: 'Download', icon: 'download_for_offline' }
  ];

  return (
    <nav className="md:hidden fixed bottom-0 w-full z-40 bg-[#fff7ff]/90 backdrop-blur-xl border-t border-[#efdbff]/80 shadow-[0_-2px_10px_rgba(0,0,0,0.05)] pb-safe">
      <div className="flex justify-around items-center h-14 px-2">
        {navItems.map(item => {
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`flex flex-col items-center justify-center gap-0.5 min-w-[56px] min-h-[44px] transition-all cursor-pointer ${
                isActive ? 'text-[#420094] font-bold scale-105' : 'text-[#4a4454] hover:text-[#25123b]'
              }`}
            >
              <Icon name={item.icon} size={20} />
              <span className="text-[10px] tracking-tight">{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
