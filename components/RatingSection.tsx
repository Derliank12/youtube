
import React from 'react';

interface RatingSectionProps {
  onRate: (relevant: boolean) => void;
}

const RatingSection: React.FC<RatingSectionProps> = ({ onRate }) => {
  return (
    <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg text-center border border-blue-100 dark:border-blue-800/50 mt-4 mb-4">
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-2 font-medium uppercase tracking-wide">
        Responde la pregunta:
      </p>
      <h2 className="text-lg font-semibold mb-6 dark:text-gray-200">
        ¿Este video es relevante para ti?
      </h2>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button 
          onClick={() => onRate(false)}
          className="px-6 py-2 rounded-md text-blue-600 dark:text-blue-300 border border-blue-200 dark:border-blue-700 hover:bg-blue-100 dark:hover:bg-blue-800/50 transition font-medium flex items-center justify-center gap-2"
        >
          <span className="material-icons-outlined text-sm">thumb_down</span>
          No es relevante
        </button>
        <button 
          onClick={() => onRate(true)}
          className="px-6 py-2 rounded-md bg-blue-100 dark:bg-blue-700 text-blue-700 dark:text-blue-100 hover:bg-blue-200 dark:hover:bg-blue-600 transition font-medium flex items-center justify-center gap-2 shadow-sm"
        >
          <span className="material-icons-outlined text-sm">thumb_up</span>
          Es relevante
        </button>
      </div>
    </div>
  );
};

export default RatingSection;
