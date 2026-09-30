import React, { useState } from 'react';

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DownloadModal: React.FC<DownloadModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [phoneInput, setPhoneInput] = useState('');
  const [sentSMS, setSentSMS] = useState(false);
  const [downloadProgress, setDownloadProgress] = useState<number | null>(null);

  const handleSimulatedDownload = () => {
    setDownloadProgress(10);
    const interval = setInterval(() => {
      setDownloadProgress(prev => {
        if (prev === null) return 10;
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setDownloadProgress(null), 2000);
          return 100;
        }
        return prev + 25;
      });
    }, 300);
  };

  const handleSendSMS = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phoneInput.trim()) return;
    setSentSMS(true);
    setTimeout(() => {
      setSentSMS(false);
      setPhoneInput('');
    }, 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
      <div className="w-full max-w-md bg-white rounded-3xl p-6 sm:p-7 shadow-2xl border border-[#efdbff] flex flex-col gap-5 text-[#25123b] relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-lg text-[#7b7485] hover:bg-[#efdbff] transition-colors"
        >
          <span className="material-symbols-outlined text-[20px]">close</span>
        </button>

        {/* Modal Header */}
        <div className="flex flex-col items-center text-center gap-1.5 pt-1">
          <div className="w-12 h-12 rounded-2xl bg-[#feb700] text-[#271900] flex items-center justify-center shadow-md">
            <span className="material-symbols-outlined text-[28px]">download</span>
          </div>
          <h3 className="text-xl font-bold text-[#25123b]">Get Astro Win Win</h3>
          <p className="text-xs text-[#4a4454]">
            Instant access to verified astrologers & Vedic AI on your mobile device.
          </p>
        </div>

        {/* QR Code Scan Area */}
        <div className="p-4 rounded-2xl bg-[#fbf0ff] border border-[#efdbff] flex items-center gap-4">
          {/* Stylized QR Code SVG */}
          <div className="w-24 h-24 bg-white p-2 rounded-xl shadow-xs border border-[#d3bbff] flex-shrink-0 flex items-center justify-center">
            <svg viewBox="0 0 100 100" className="w-full h-full text-[#420094]">
              {/* Corner 1 */}
              <rect x="5" y="5" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="6" rx="2" />
              <rect x="13" y="13" width="12" height="12" fill="currentColor" />
              {/* Corner 2 */}
              <rect x="67" y="5" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="6" rx="2" />
              <rect x="75" y="13" width="12" height="12" fill="currentColor" />
              {/* Corner 3 */}
              <rect x="5" y="67" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="6" rx="2" />
              <rect x="13" y="75" width="12" height="12" fill="currentColor" />
              {/* Random Pattern Nodes */}
              <rect x="42" y="10" width="8" height="8" fill="currentColor" />
              <rect x="52" y="25" width="8" height="8" fill="currentColor" />
              <rect x="42" y="42" width="16" height="16" fill="currentColor" />
              <rect x="67" y="48" width="8" height="8" fill="currentColor" />
              <rect x="80" y="60" width="8" height="8" fill="currentColor" />
              <rect x="45" y="75" width="8" height="8" fill="currentColor" />
              <rect x="62" y="80" width="14" height="8" fill="currentColor" />
            </svg>
          </div>

          <div className="flex flex-col gap-1">
            <span className="text-xs font-bold text-[#420094]">Scan with Camera</span>
            <p className="text-[11px] text-[#4a4454] leading-relaxed">
              Open your phone camera to download directly from Google Play or Apple App Store.
            </p>
            <span className="text-[10px] text-[#16B86A] font-semibold flex items-center gap-1 mt-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#16B86A]"></span>
              Version 3.2.4 (Latest Release)
            </span>
          </div>
        </div>

        {/* Direct APK Button */}
        <div className="flex flex-col gap-2">
          {downloadProgress !== null ? (
            <div className="p-3 rounded-xl bg-[#fbf0ff] border border-[#efdbff] flex flex-col gap-1.5">
              <div className="flex justify-between text-xs font-semibold text-[#420094]">
                <span>Downloading AstroWinWin.apk...</span>
                <span>{downloadProgress}%</span>
              </div>
              <div className="w-full h-2 bg-[#efdbff] rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#420094] transition-all duration-300"
                  style={{ width: `${downloadProgress}%` }}
                />
              </div>
              {downloadProgress === 100 && (
                <span className="text-[11px] text-[#16B86A] font-bold">Download Complete! Click to install.</span>
              )}
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={handleSimulatedDownload}
                className="py-2.5 px-3 rounded-xl bg-[#420094] hover:bg-[#5b20b8] text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-sm active:scale-95 transition-all"
              >
                <span className="material-symbols-outlined text-[18px]">android</span>
                <span>Direct APK (42MB)</span>
              </button>

              <button
                onClick={handleSimulatedDownload}
                className="py-2.5 px-3 rounded-xl bg-[#25123b] hover:bg-[#3b2751] text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-sm active:scale-95 transition-all"
              >
                <span className="material-symbols-outlined text-[18px]">phone_iphone</span>
                <span>iOS TestFlight</span>
              </button>
            </div>
          )}
        </div>

        {/* Send Link Via SMS */}
        <form onSubmit={handleSendSMS} className="flex flex-col gap-1.5 pt-1 border-t border-[#efdbff]">
          <label className="text-[11px] font-bold text-[#4a4454]">Or text download link to your phone:</label>
          <div className="flex items-center gap-2">
            <input
              type="tel"
              value={phoneInput}
              onChange={e => setPhoneInput(e.target.value)}
              placeholder="+91 98765 43210"
              className="flex-1 py-2 px-3 rounded-xl bg-[#fbf0ff] border border-[#efdbff] text-xs text-[#25123b] outline-none focus:border-[#420094]"
            />
            <button
              type="submit"
              className="py-2 px-3.5 rounded-xl bg-[#feb700] hover:bg-[#f5aa00] text-[#271900] text-xs font-bold whitespace-nowrap active:scale-95 transition-all shadow-xs"
            >
              Send SMS
            </button>
          </div>
          {sentSMS && (
            <span className="text-[11px] text-[#16B86A] font-semibold flex items-center gap-1 mt-0.5">
              <span className="material-symbols-outlined text-[14px]">check</span>
              Download link SMS sent successfully!
            </span>
          )}
        </form>
      </div>
    </div>
  );
};
