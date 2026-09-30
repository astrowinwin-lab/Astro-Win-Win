import React, { useState, useEffect, useRef } from 'react';
import { Astrologer, ConsultationMode } from '../types/astrology';

interface ConsultationModalProps {
  astrologer: Astrologer | null;
  mode: ConsultationMode;
  onClose: () => void;
  walletBalance: number;
  onDeductBalance: (amount: number) => void;
}

interface ChatMessage {
  id: string;
  sender: 'astrologer' | 'user';
  text: string;
  time: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  astrologer,
  mode,
  onClose,
  walletBalance,
  onDeductBalance
}) => {
  if (!astrologer) return null;

  const [callDuration, setCallDuration] = useState<number>(0);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      sender: 'astrologer',
      text: `Namaste! I am ${astrologer.name}. I have cast your birth chart (Kundali). Please tell me your specific question regarding career, relationship, or planetary transit.`,
      time: 'Just now'
    }
  ]);
  const [inputText, setInputText] = useState<string>('');
  const [isAstrologerTyping, setIsAstrologerTyping] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [isVideoEnabled, setIsVideoEnabled] = useState<boolean>(true);
  const chatEndRef = useRef<HTMLDivElement>(null);

  // Timer counter
  useEffect(() => {
    const timer = setInterval(() => {
      setCallDuration(prev => {
        const next = prev + 1;
        // Deduct 1 minute's worth of coins every 60 seconds
        if (next > 0 && next % 60 === 0) {
          onDeductBalance(astrologer.ratePerMin);
        }
        return next;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [astrologer.ratePerMin, onDeductBalance]);

  // Scroll chat
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isAstrologerTyping]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text: inputText,
      time: 'Just now'
    };

    setMessages(prev => [...prev, userMsg]);
    const userQuery = inputText;
    setInputText('');
    setIsAstrologerTyping(true);

    setTimeout(() => {
      let reply = `Based on your Navamsha chart (D9) and the ongoing transit, planetary aspects are shifting favorably. I recommend focusing on long-term discipline. Wear yellow or light white on Thursdays to strengthen Jupiter.`;
      if (userQuery.toLowerCase().includes('career') || userQuery.toLowerCase().includes('job')) {
        reply = `I see Mercury and Jupiter in a trine from the 10th house. A promotion or new responsibility is strongly indicated within the next 4–6 weeks. Avoid impulsive arguments with seniors on Tuesdays.`;
      } else if (userQuery.toLowerCase().includes('marriage') || userQuery.toLowerCase().includes('love')) {
        reply = `Venus holds high dignity in your 7th house, though Saturn’s third aspect suggests patience until the next full moon. Gauri-Shankar puja will resolve communication friction.`;
      }

      setMessages(prev => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          sender: 'astrologer',
          text: reply,
          time: 'Just now'
        }
      ]);
      setIsAstrologerTyping(false);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/75 backdrop-blur-md animate-fadeIn">
      <div className="w-full max-w-lg bg-[#fff7ff] rounded-3xl overflow-hidden shadow-2xl border border-[#efdbff] flex flex-col h-[85vh] sm:h-[650px] relative">
        
        {/* Top Session Bar */}
        <div className="bg-[#19052F] text-white p-3.5 sm:p-4 flex items-center justify-between border-b border-[#3b2751]">
          <div className="flex items-center gap-3">
            <div className="relative">
              <img
                src={astrologer.avatarUrl}
                alt={astrologer.name}
                className="w-10 h-10 rounded-full object-cover ring-2 ring-[#feb700]"
                referrerPolicy="no-referrer"
              />
              <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-[#16B86A] ring-2 ring-white"></span>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-sm font-bold leading-tight">{astrologer.name}</span>
                <span className="material-symbols-outlined text-[16px] text-[#ffba20]">verified</span>
              </div>
              <div className="flex items-center gap-2 text-[11px] text-[#d4bbff]">
                <span className="capitalize">{mode} Consultation</span>
                <span>•</span>
                <span className="font-mono text-[#ffdea8]">{formatTime(callDuration)}</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="hidden sm:flex flex-col items-end text-right">
              <span className="text-[10px] text-[#ebdcff]">Rate: ₹{astrologer.ratePerMin}/min</span>
              <span className="text-xs font-bold text-[#feb700]">Wallet: ₹{walletBalance}</span>
            </div>

            <button
              onClick={onClose}
              className="px-3 py-1.5 rounded-xl bg-red-600/90 hover:bg-red-700 text-white text-xs font-bold flex items-center gap-1 transition-all active:scale-95 shadow-sm"
              title="End Session"
            >
              <span className="material-symbols-outlined text-[16px]">call_end</span>
              <span className="hidden sm:inline">End</span>
            </button>
          </div>
        </div>

        {/* Voice/Video Call Media Area if mode is Voice or Video */}
        {mode !== 'chat' && (
          <div className="p-4 bg-gradient-to-b from-[#250d44] to-[#19052F] text-white flex flex-col items-center justify-center gap-3 relative">
            {mode === 'video' && isVideoEnabled ? (
              <div className="relative w-full h-36 rounded-2xl overflow-hidden bg-black/40 border border-white/10 flex items-center justify-center">
                <img
                  src={astrologer.avatarUrl}
                  alt={astrologer.name}
                  className="w-full h-full object-cover opacity-80"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
                <span className="absolute bottom-2 left-3 text-xs font-semibold text-white flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#16B86A]"></span>
                  HD Stream · {astrologer.name} (Live)
                </span>
              </div>
            ) : (
              <div className="flex items-center gap-4 py-2">
                <img
                  src={astrologer.avatarUrl}
                  alt={astrologer.name}
                  className="w-16 h-16 rounded-full object-cover ring-4 ring-[#feb700]/50 animate-pulse"
                  referrerPolicy="no-referrer"
                />
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-[#feb700]">Audio Connected</span>
                  <div className="flex items-center gap-1 mt-1">
                    <span className="w-1 h-4 bg-[#16B86A] rounded-full animate-bounce [animation-delay:0.1s]"></span>
                    <span className="w-1 h-6 bg-[#16B86A] rounded-full animate-bounce [animation-delay:0.2s]"></span>
                    <span className="w-1 h-3 bg-[#16B86A] rounded-full animate-bounce [animation-delay:0.3s]"></span>
                    <span className="w-1 h-5 bg-[#16B86A] rounded-full animate-bounce [animation-delay:0.15s]"></span>
                  </div>
                </div>
              </div>
            )}

            {/* Media Controls */}
            <div className="flex items-center gap-3 pt-1">
              <button
                onClick={() => setIsMuted(!isMuted)}
                className={`p-2 rounded-full text-xs font-semibold flex items-center gap-1 ${
                  isMuted ? 'bg-red-500/80 text-white' : 'bg-white/20 text-white hover:bg-white/30'
                }`}
              >
                <span className="material-symbols-outlined text-[18px]">
                  {isMuted ? 'mic_off' : 'mic'}
                </span>
                <span className="text-[11px] pr-1">{isMuted ? 'Muted' : 'Mute'}</span>
              </button>

              {mode === 'video' && (
                <button
                  onClick={() => setIsVideoEnabled(!isVideoEnabled)}
                  className={`p-2 rounded-full text-xs font-semibold flex items-center gap-1 ${
                    !isVideoEnabled ? 'bg-red-500/80 text-white' : 'bg-white/20 text-white hover:bg-white/30'
                  }`}
                >
                  <span className="material-symbols-outlined text-[18px]">
                    {isVideoEnabled ? 'videocam' : 'videocam_off'}
                  </span>
                  <span className="text-[11px] pr-1">{isVideoEnabled ? 'Cam On' : 'Cam Off'}</span>
                </button>
              )}
            </div>
          </div>
        )}

        {/* Live Chat History */}
        <div className="flex-1 p-4 overflow-y-auto flex flex-col gap-3 bg-[#fff7ff]">
          <div className="text-center my-1">
            <span className="text-[10px] text-[#7b7485] bg-[#efdbff] px-3 py-1 rounded-full font-medium">
              🔒 End-to-End Encrypted Vedic Session
            </span>
          </div>

          {messages.map(msg => (
            <div
              key={msg.id}
              className={`flex flex-col max-w-[85%] sm:max-w-[75%] ${
                msg.sender === 'user' ? 'self-end items-end' : 'self-start items-start'
              }`}
            >
              <div
                className={`p-3.5 rounded-2xl text-xs sm:text-sm leading-relaxed ${
                  msg.sender === 'user'
                    ? 'bg-[#420094] text-white rounded-br-xs shadow-sm'
                    : 'bg-white text-[#25123b] border border-[#efdbff] rounded-bl-xs shadow-xs'
                }`}
              >
                {msg.text}
              </div>
              <span className="text-[9px] text-[#7b7485] mt-1 px-1">{msg.time}</span>
            </div>
          ))}

          {isAstrologerTyping && (
            <div className="self-start p-3 rounded-2xl bg-white border border-[#efdbff] text-xs text-[#7b7485] flex items-center gap-1.5 shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#420094] animate-bounce"></span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#420094] animate-bounce [animation-delay:0.15s]"></span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#420094] animate-bounce [animation-delay:0.3s]"></span>
              <span className="text-[11px] ml-1">{astrologer.name} is reviewing charts...</span>
            </div>
          )}

          <div ref={chatEndRef} />
        </div>

        {/* Quick Question Prompts */}
        <div className="px-3 pt-2 pb-1 bg-white border-t border-[#efdbff] flex gap-1.5 overflow-x-auto scrollbar-none text-[11px]">
          <button
            onClick={() => setInputText('What does my Kundali say about career promotion?')}
            className="px-2.5 py-1 rounded-full bg-[#fbf0ff] hover:bg-[#efdbff] text-[#420094] whitespace-nowrap font-medium border border-[#efdbff]"
          >
            💼 Career promotion timing
          </button>
          <button
            onClick={() => setInputText('How will Jupiter transit impact my finances?')}
            className="px-2.5 py-1 rounded-full bg-[#fbf0ff] hover:bg-[#efdbff] text-[#420094] whitespace-nowrap font-medium border border-[#efdbff]"
          >
            💰 Financial growth
          </button>
          <button
            onClick={() => setInputText('Which gemstone is auspicious for my current Dasha?')}
            className="px-2.5 py-1 rounded-full bg-[#fbf0ff] hover:bg-[#efdbff] text-[#420094] whitespace-nowrap font-medium border border-[#efdbff]"
          >
            💎 Gemstone advice
          </button>
        </div>

        {/* Chat Input Bar */}
        <form
          onSubmit={handleSendMessage}
          className="p-3 bg-white flex items-center gap-2 border-t border-[#efdbff]"
        >
          <input
            type="text"
            value={inputText}
            onChange={e => setInputText(e.target.value)}
            placeholder={`Message ${astrologer.name}...`}
            className="flex-1 py-2.5 px-3.5 rounded-xl bg-[#fbf0ff] border border-[#efdbff] focus:border-[#420094] outline-none text-xs sm:text-sm text-[#25123b] placeholder-[#7b7485]"
          />
          <button
            type="submit"
            className="w-10 h-10 rounded-xl bg-[#feb700] hover:bg-[#f5aa00] text-[#271900] flex items-center justify-center shadow-sm active:scale-95 transition-transform"
          >
            <span className="material-symbols-outlined text-[20px]">send</span>
          </button>
        </form>
      </div>
    </div>
  );
};
