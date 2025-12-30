
import { GoogleGenAI, Type } from "@google/genai";
import { Video } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });

export const getSuggestedVideos = async (): Promise<Video[]> => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: "Generate 5 interesting YouTube video titles and channel names for a rating app. The titles should be catchy. Return as JSON.",
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              title: { type: Type.STRING },
              channelName: { type: Type.STRING },
              views: { type: Type.STRING },
              timeAgo: { type: Type.STRING }
            },
            required: ["title", "channelName", "views", "timeAgo"]
          }
        }
      }
    });

    const data = JSON.parse(response.text || "[]");
    return data.map((item: any, index: number) => ({
      id: `vid-${index}`,
      title: item.title,
      views: item.views,
      timeAgo: item.timeAgo,
      reward: parseFloat((Math.random() * 10 + 2).toFixed(2)),
      thumbnail: `https://picsum.photos/seed/${index + 100}/640/360`,
      channel: {
        name: item.channelName,
        avatar: `https://picsum.photos/seed/${index + 200}/100/100`,
        isVerified: Math.random() > 0.5
      }
    }));
  } catch (error) {
    console.error("Error fetching videos from Gemini:", error);
    // Fallback static data
    return Array.from({ length: 5 }).map((_, i) => ({
      id: `fallback-${i}`,
      title: `Recommended Video ${i + 1}`,
      views: "100K",
      timeAgo: "2 days ago",
      reward: 5.50,
      thumbnail: `https://picsum.photos/seed/${i}/640/360`,
      channel: {
        name: "Content Creator",
        avatar: `https://picsum.photos/seed/c${i}/100/100`,
        isVerified: true
      }
    }));
  }
};
