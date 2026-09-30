import React, { useState } from 'react';

interface WalletModalProps {
  isOpen: boolean;
  onClose: () => void;
  balance: number;
  onAddFunds: (amount: number) => void;
}

export const WalletModal: React.FC<WalletModalProps> = ({
  isOpen,
  onClose,
  balance,
  onAddFunds
}) => {
  if (!isOpen) return null;

  const [selectedPlan, setSelectedPlan] = useState<number>(250);
  const [paymentMethod, setPaymentMethod] = useState<'upi' | 'card' | 'netbanking'>('upi');
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const rechargeOptions = [
    { amount: 100, bonus: 0, tag: 'Quick Top-up' },
    { amount: 250, bonus: 25, tag: 'Most Popular', popular: true },
    { amount: 500, bonus: 75, tag: '+15% Extra' },
    { amount: 1000, bonus: 200, tag: 'Best Value (+20%)' }
  ];

  const handlePay = () => {
    setIsProcessing(true);
    setTimeout(() => {
      const plan = rechargeOptions.find(p => p.amount === selectedPlan);
      const totalAdded = selectedPlan + (plan?.bonus || 0);
      onAddFunds(totalAdded);
      setIsProcessing(false);
      setSuccessMessage(`Successfully recharged ₹${totalAdded} (including bonus)!`);
      setTimeout(() => {
        setSuccessMessage(null);
        onClose();
      }, 1500);
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="w-full max-w-md bg-white rounded-3xl p-6 shadow-2xl border border-[#efdbff] flex flex-col gap-5 text-[#25123b]">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#efdbff] pb-3">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-[#efdbff] text-[#420094] flex items-center justify-center font-bold">
              <span className="material-symbols-outlined text-[20px]">account_balance_wallet</span>
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold">Astro Wallet</h3>
              <p className="text-[11px] text-[#4a4454]">Secure, minute-by-minute billing</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-[#7b7485] hover:bg-[#efdbff] transition-colors"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Current Balance Card */}
        <div className="p-4 rounded-2xl bg-gradient-to-r from-[#420094] to-[#5b20b8] text-white flex items-center justify-between shadow-sm">
          <div>
            <span className="text-[11px] text-[#d4bbff] font-medium uppercase tracking-wide">Available Balance</span>
            <p className="text-2xl sm:text-3xl font-extrabold text-white">₹{balance}</p>
          </div>
          <span className="text-xs bg-white/20 px-3 py-1 rounded-full text-[#ffdea8] font-bold">
            100% Refundable
          </span>
        </div>

        {/* Choose Amount */}
        <div className="flex flex-col gap-2">
          <label className="text-xs font-bold text-[#4a4454]">Choose Recharge Amount:</label>
          <div className="grid grid-cols-2 gap-2.5">
            {rechargeOptions.map(option => (
              <button
                key={option.amount}
                type="button"
                onClick={() => setSelectedPlan(option.amount)}
                className={`p-3 rounded-xl border text-left flex flex-col gap-1 transition-all ${
                  selectedPlan === option.amount
                    ? 'border-[#420094] bg-[#fbf0ff] ring-2 ring-[#420094]/30 shadow-xs'
                    : 'border-[#efdbff] hover:bg-[#fff7ff]'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-[#25123b]">₹{option.amount}</span>
                  {option.popular && (
                    <span className="text-[9px] bg-[#feb700] text-[#271900] px-1.5 py-0.2 rounded-full font-bold">
                      POPULAR
                    </span>
                  )}
                </div>
                <span className="text-[10px] text-[#420094] font-medium">
                  {option.bonus > 0 ? `+₹${option.bonus} Free Bonus` : option.tag}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Payment Method Selector */}
        <div className="flex flex-col gap-2">
          <label className="text-xs font-bold text-[#4a4454]">Select Payment Gateway:</label>
          <div className="grid grid-cols-3 gap-2">
            <button
              type="button"
              onClick={() => setPaymentMethod('upi')}
              className={`p-2 rounded-xl border text-center text-xs font-semibold flex flex-col items-center gap-1 ${
                paymentMethod === 'upi'
                  ? 'border-[#420094] bg-[#fbf0ff] text-[#420094]'
                  : 'border-[#efdbff] text-[#4a4454]'
              }`}
            >
              <span className="material-symbols-outlined text-[18px]">qr_code_2</span>
              <span>UPI / QR</span>
            </button>

            <button
              type="button"
              onClick={() => setPaymentMethod('card')}
              className={`p-2 rounded-xl border text-center text-xs font-semibold flex flex-col items-center gap-1 ${
                paymentMethod === 'card'
                  ? 'border-[#420094] bg-[#fbf0ff] text-[#420094]'
                  : 'border-[#efdbff] text-[#4a4454]'
              }`}
            >
              <span className="material-symbols-outlined text-[18px]">credit_card</span>
              <span>Debit / Card</span>
            </button>

            <button
              type="button"
              onClick={() => setPaymentMethod('netbanking')}
              className={`p-2 rounded-xl border text-center text-xs font-semibold flex flex-col items-center gap-1 ${
                paymentMethod === 'netbanking'
                  ? 'border-[#420094] bg-[#fbf0ff] text-[#420094]'
                  : 'border-[#efdbff] text-[#4a4454]'
              }`}
            >
              <span className="material-symbols-outlined text-[18px]">account_balance</span>
              <span>Net Banking</span>
            </button>
          </div>
        </div>

        {/* Success Feedback Alert */}
        {successMessage && (
          <div className="p-3 rounded-xl bg-[#16B86A]/15 border border-[#16B86A]/40 text-[#0d683b] text-xs font-bold flex items-center gap-2">
            <span className="material-symbols-outlined text-[18px]">check_circle</span>
            <span>{successMessage}</span>
          </div>
        )}

        {/* CTA */}
        <button
          onClick={handlePay}
          disabled={isProcessing}
          className="w-full py-3 rounded-xl bg-[#feb700] hover:bg-[#f5aa00] text-[#271900] font-bold text-sm flex items-center justify-center gap-2 shadow-md active:scale-95 transition-all disabled:opacity-50"
        >
          {isProcessing ? (
            <>
              <span className="w-4 h-4 border-2 border-[#271900] border-t-transparent rounded-full animate-spin"></span>
              <span>Verifying with Bank...</span>
            </>
          ) : (
            <>
              <span className="material-symbols-outlined text-[18px]">lock</span>
              <span>Pay ₹{selectedPlan} Securely</span>
            </>
          )}
        </button>

        <p className="text-[10px] text-center text-[#7b7485]">
          🔒 256-bit SSL encryption · Supported by RBI compliant payment gateway
        </p>
      </div>
    </div>
  );
};
