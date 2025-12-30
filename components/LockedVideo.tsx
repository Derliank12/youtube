
import React from 'react';
import { Video } from '../types';

interface LockedVideoProps {
  video: Video;
}

const LockedVideo: React.FC<LockedVideoProps> = ({ video }) => {
  return (
    <div className="relative rounded-xl overflow-hidden aspect-[16/6] bg-gray-200 dark:bg-gray-800 group border border-gray-200 dark:border-gray-800">
      <img 
        alt="Blocked Video" 
        className="w-full h-full object-cover filter blur-[6px] scale-105" 
        src={video.thumbnail}
      />
      <div className="absolute inset-0 bg-black/40 dark:bg-black/60 flex flex-col items-center justify-center text-center p-4">
        <div className="bg-black/80 text-white px-6 py-3 rounded-lg backdrop-blur-sm shadow-lg transform transition group-hover:scale-105">
          <span className="material-icons-outlined block text-2xl mb-1 mx-auto">lock</span>
          <span className="font-bold block">Blocked content</span>
          <span className="text-xs text-gray-300 font-light block mt-1">Rate the videos selected first.</span>
        </div>
      </div>
    </div>
  );
};

export default LockedVideo;
