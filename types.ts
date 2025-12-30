
export interface Video {
  id: string;
  title: string;
  views: string;
  timeAgo: string;
  thumbnail: string;
  videoUrl?: string; // Optional URL for actual video playback
  reward: number;
  channel: {
    name: string;
    avatar: string;
    isVerified: boolean;
  };
}

export interface UserWallet {
  balance: number;
  lastReward: number;
}
