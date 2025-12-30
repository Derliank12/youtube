
import React from 'react';
import { Video } from '../types';

interface VideoPlayerProps {
  video: Video;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ video }) => {
  return (
    <div className="bg-card-light dark:bg-card-dark rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 overflow-hidden relative group transition-all duration-300">
      {/* Reward Badge */}
      <div className="absolute top-4 right-4 z-10 bg-blue-100 dark:bg-blue-900/80 text-blue-700 dark:text-blue-200 px-3 py-1 rounded font-bold shadow-sm backdrop-blur-sm">
        $ {video.reward.toFixed(2)}
      </div>

      {/* Video Thumbnail Area */}
      <div className="relative aspect-video bg-black flex items-center justify-center group cursor-pointer overflow-hidden">
        <img 
          alt={video.title} 
          className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" 
          src={video.thumbnail}
        />
        <div className="bg-black/60 rounded-full p-4 hover:bg-primary/90 transition-all transform hover:scale-110 z-10">
          <span className="material-icons-round text-white text-5xl">play_arrow</span>
        </div>
        
        {/* Progress Bar Simulation */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-600">
          <div className="h-full bg-primary w-1/3"></div>
        </div>
      </div>

      {/* Video Info */}
      <div className="p-4">
        <h1 className="text-lg md:text-xl font-medium line-clamp-2 mb-2 dark:text-white">
          {video.title}
        </h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
          {video.views} visualizaciones • {video.timeAgo}
        </p>
        
        <div className="flex items-center justify-between border-t border-gray-100 dark:border-gray-700 pt-4">
          <div className="flex items-center gap-3">
            <img 
              alt={video.channel.name} 
              className="w-10 h-10 rounded-full" 
              src={video.channel.avatar}
            />
            <div>
              <p className="font-medium text-sm dark:text-gray-200">{video.channel.name}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">Official Channel</p>
            </div>
          </div>
          
          {video.channel.isVerified && (
            <div className="bg-black dark:bg-white text-white dark:text-black px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm">
              <span className="text-xs font-bold leading-none">Socio<br/>verificado</span>
              <span className="material-icons-round text-blue-500 text-sm">verified</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
