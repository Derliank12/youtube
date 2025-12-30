
import React from 'react';

import logo from '../Frame-389-1024x229.png';

interface HeaderProps {
  balance: number;
}

const Header: React.FC<HeaderProps> = ({ balance }) => {
  return (
    <nav className="sticky top-0 z-40 bg-card-light dark:bg-card-dark border-b border-gray-200 dark:border-gray-800 px-4 py-3 flex justify-between items-center shadow-sm">
      <div className="flex items-center gap-1">
        <img src={logo} alt="YouTube" className="h-8 w-auto" />
      </div>

      <div className="flex items-center gap-4">
        <div className="bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full font-bold text-xl flex items-center gap-2">
          <span className="material-icons-outlined text-xl">account_balance_wallet</span>
          ${balance.toFixed(2)}
        </div>
      </div>
    </nav>
  );
};

export default Header;
