
import React, { useState, useEffect, useCallback } from 'react';
import Header from './components/Header';
import VideoPlayer from './components/VideoPlayer';
import RatingSection from './components/RatingSection';
import LockedVideo from './components/LockedVideo';
import RewardModal from './components/RewardModal';
import WithdrawModal from './components/WithdrawModal';
import VSLPage from './components/VSLPage';
import { Video } from './types';
import { getSuggestedVideos } from './services/geminiService';
import clickSound from './click.mp3';
import shakiraAvatar from './img/channels4_profile.jpg';
import alwaysAvatar from './img/352736150_646586647499958_8602396302428599251_n-1024x1024.jpg';
import iteroAvatar from './img/channels44_profile.jpg';

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [balance, setBalance] = useState<number>(46.09);
  const [lastReward, setLastReward] = useState<number>(0);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const [isWithdrawModalOpen, setIsWithdrawModalOpen] = useState<boolean>(false);
  const [isVSLActive, setIsVSLActive] = useState<boolean>(false);
  const [videosRatedCount, setVideosRatedCount] = useState<number>(0);

  const [currentVideo, setCurrentVideo] = useState<Video | null>(null);
  const [nextVideos, setNextVideos] = useState<Video[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Initialize data
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const videos = await getSuggestedVideos();
      if (videos.length > 0) {
        // Force specific rewards and content
        if (videos[0]) {
          videos[0].reward = 36.82;
          videos[0].title = "Shakira Oral B 3D White Perfection";
          videos[0].thumbnail = "https://i.imgur.com/vjQE0Zt.jpg";
          videos[0].videoUrl = "https://i.imgur.com/oifW4EZ.mp4";
          videos[0].channel = {
            name: "Shakira",
            avatar: shakiraAvatar,
            isVerified: true
          };
        }
        if (videos[1]) {
          videos[1].reward = 34.20;
          videos[1].title = "Always Ultra Thin – Sin miedo a las salpicaduras";
          videos[1].videoUrl = "https://i.imgur.com/TEaZx1H.mp4";
          videos[1].channel = {
            name: "Always",
            avatar: alwaysAvatar,
            isVerified: true
          };
        }
        if (videos[2]) {
          videos[2].reward = 34.98;
          videos[2].title = "Expand Horizonts";
          videos[2].videoUrl = "https://i.imgur.com/DBKYqxh.mp4";
          videos[2].channel = {
            name: "iTero",
            avatar: iteroAvatar,
            isVerified: true
          };
        }

        setCurrentVideo(videos[0]);
        setNextVideos(videos.slice(1));
      }
      setIsLoading(false);
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleToggleDarkMode = () => {
    setDarkMode(prev => !prev);
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const handleRate = useCallback((relevant: boolean) => {
    if (!currentVideo) return;

    if (relevant) {
      const audio = new Audio(clickSound);
      audio.play().catch(e => console.error("Error playing sound:", e));
    }

    const reward = currentVideo.reward;
    setLastReward(reward);
    setBalance(prev => prev + reward);
    setVideosRatedCount(prev => prev + 1);
    setIsModalOpen(true);
  }, [currentVideo]);

  const handleCloseModal = () => {
    setIsModalOpen(false);
    // Cycle to next video
    if (nextVideos.length > 0) {
      setCurrentVideo(nextVideos[0]);
      setNextVideos(prev => prev.slice(1));
    } else {
      // Re-fetch if we ran out
      getSuggestedVideos().then(videos => {
        if (videos.length > 0) {
          setCurrentVideo(videos[0]);
          setNextVideos(videos.slice(1));
        }
      });
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleWithdraw = () => {
    setIsModalOpen(false);
    setIsWithdrawModalOpen(true);
  };

  const handleCloseWithdrawModal = () => {
    setIsWithdrawModalOpen(false);
  };

  const handleStartTutorial = () => {
    window.location.href = 'https://trendtodaymedia.com/pv/';
  };

  if (isVSLActive) {
    return <VSLPage />;
  }

  if (isLoading && !currentVideo) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-background-light dark:bg-background-dark">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Header
        balance={balance}
        darkMode={darkMode}
        onToggleDarkMode={handleToggleDarkMode}
      />

      <main className="max-w-2xl mx-auto px-4 py-6 space-y-8">
        {currentVideo && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <VideoPlayer video={currentVideo} />
            <RatingSection onRate={handleRate} />
          </div>
        )}

        <div className="space-y-6">
          <h3 className="text-gray-500 dark:text-gray-400 font-medium ml-1 text-sm uppercase tracking-wider">
            Siguientes Videos
          </h3>
          {nextVideos.map((video) => (
            <LockedVideo key={video.id} video={video} />
          ))}
          {nextVideos.length === 0 && (
            <div className="p-8 text-center text-gray-500 italic">
              Generando más recompensas para ti...
            </div>
          )}
        </div>
      </main>

      <RewardModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        balance={balance}
        lastReward={lastReward}
        isWithdrawActive={videosRatedCount >= 3}
        onWithdraw={handleWithdraw}
        isNextDisabled={videosRatedCount >= 3}
      />

      <WithdrawModal
        isOpen={isWithdrawModalOpen}
        onClose={handleCloseWithdrawModal}
        balance={balance}
        onContinue={handleStartTutorial}
      />
    </div>
  );
};

export default App;
