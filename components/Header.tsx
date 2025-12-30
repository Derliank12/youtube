
import React from 'react';

import logo from '../Frame-389-1024x229.png';

interface HeaderProps {
  balance: number;
  darkMode: boolean;
  onToggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ balance, darkMode, onToggleDarkMode }) => {
  return (
    <nav className="sticky top-0 z-40 bg-card-light dark:bg-card-dark border-b border-gray-200 dark:border-gray-800 px-4 py-3 flex justify-between items-center shadow-sm">
      <div className="flex items-center gap-1">
        <img src={logo} alt="YouTube" className="h-8 w-auto" />
      </div>

      <div className="flex items-center gap-4">
        <button
          onClick={onToggleDarkMode}
          className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-300 transition-colors"
        >
          <span className="material-icons-outlined">
            {darkMode ? 'light_mode' : 'dark_mode'}
          </span>
        </button>

        <div className="bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-3 py-1.5 rounded-full font-semibold text-sm flex items-center gap-1">
          <span className="material-icons-outlined text-sm">account_balance_wallet</span>
          ${balance.toFixed(2)}
        </div>

        <img
          alt="User Avatar"
          className="w-8 h-8 rounded-full border border-gray-200 dark:border-gray-700"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCeJ_8uj34wVY5eHAMGS6HluHmKEd0o7VWnyASRNM0l_osB9ch6_Zh0WHmNyweMf9lLszfoineTnNOdtbiquJ49byKlsRk5Xoo6i7g1k8aY9DVP5CGUEum6Q3pAGPX_CkaKpRGE1bQijhiGuAV2TlgE-RGGkCFs3UuaKL6JDBB-CKO58pj2tXOEd3uVqfQCzcY0wZQzh3PpSvovAFg4jFa2tNTzj3WqpL4-g41sFRvw-LK_bW4F3eG60PdZJzUxm8H6tfJ5QUjiN3A"
        />
      </div>
    </nav>
  );
};

export default Header;
