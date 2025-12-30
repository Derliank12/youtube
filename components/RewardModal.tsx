
import React, { useEffect, useState } from 'react';
import logo from '../Frame-389-1024x229.png';

interface RewardModalProps {
  isOpen: boolean;
  onClose: () => void;
  balance: number;
  lastReward: number;
  isWithdrawActive?: boolean;
  onWithdraw?: () => void;
  isNextDisabled?: boolean;
}

const RewardModal: React.FC<RewardModalProps> = ({
  isOpen,
  onClose,
  balance,
  lastReward,
  isWithdrawActive = false,
  onWithdraw,
  isNextDisabled = false
}) => {
  const [displayBalance, setDisplayBalance] = useState(0);

  useEffect(() => {
    if (isOpen) {
      const duration = 2000; // 2 seconds for a nice effect
      const startTime = performance.now();
      const startValue = 0;

      const animate = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Ease out expo
        const easeOut = (x: number): number => {
          return x === 1 ? 1 : 1 - Math.pow(2, -10 * x);
        };

        const current = startValue + (balance - startValue) * easeOut(progress);
        setDisplayBalance(current);

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    } else {
      setDisplayBalance(0);
    }
  }, [isOpen, balance]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm animate-in fade-in duration-300"
        onClick={onClose}
      ></div>

      <div className="relative bg-white dark:bg-gray-900 rounded-2xl shadow-2xl w-full max-w-sm overflow-hidden transform animate-in zoom-in-95 duration-300 border border-gray-100 dark:border-gray-800">
        <div className="p-6">
          <div className="flex items-center gap-1 mb-6">
            <img src={logo} alt="YouTube" className="h-6 w-auto" />
          </div>

          <div className="flex justify-between items-start mb-6">
            <h2 className="text-3xl font-normal text-gray-800 dark:text-gray-100 leading-tight">
              Gracias<br />por tu<br />reseña.
            </h2>
            <div className="bg-blue-50 dark:bg-blue-900/40 p-3 rounded-xl">
              <span className="material-icons-outlined text-blue-500 text-2xl">card_giftcard</span>
            </div>
          </div>

          <div className="border-t border-dashed border-gray-300 dark:border-gray-700 my-6"></div>

          <div>
            <p className="text-2xl text-gray-500 dark:text-gray-400 font-medium mb-2">Saldo disponible</p>
            <div className="flex items-baseline gap-2">
              <span className="text-5xl font-bold text-blue-600 dark:text-blue-400">${displayBalance.toFixed(2)}</span>
              <div className="flex flex-col">
                <span className="text-xl text-green-600 font-medium">+</span>
                <span className="text-xl text-green-600 font-medium">${lastReward.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="p-6 pt-2 flex items-center justify-between gap-4">
          {isWithdrawActive ? (
            <button
              onClick={onWithdraw}
              className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-bold flex items-center gap-2 transition-colors shadow-lg shadow-blue-600/20"
            >
              <span>Retirar $</span>
            </button>
          ) : (
            <button className="flex items-center gap-2 text-gray-400 dark:text-gray-500 font-medium hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
              <span>Retirar</span>
              <span className="material-icons-outlined text-sm">lock</span>
            </button>
          )}
          <button
            className={`flex-1 py-3 px-4 rounded-lg font-bold flex items-center justify-center gap-2 transition-colors ${isNextDisabled
                ? 'bg-gray-100 dark:bg-gray-800 text-gray-400 cursor-not-allowed'
                : 'bg-blue-100 dark:bg-blue-900/50 hover:bg-blue-200 dark:hover:bg-blue-800 text-blue-700 dark:text-blue-300'
              }`}
            onClick={isNextDisabled ? undefined : onClose}
            disabled={isNextDisabled}
          >
            Ver más...
            <span className="material-icons-round text-lg">arrow_forward</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RewardModal;
