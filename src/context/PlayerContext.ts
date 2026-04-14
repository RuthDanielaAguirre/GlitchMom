import { createContext, useContext } from "react";
import type { Episode } from "../types/episode";

type PlayerContextType = {
  currentEpisode: Episode | null;
  isPlaying: boolean;
  playEpisode: (episode: Episode) => void;
  
toggle: () => void;
next: () => void;
prev: () => void;

};

export const PlayerContext = createContext<PlayerContextType | null>(null);

export function usePlayer() {
  const context = useContext(PlayerContext);
  if (!context) {
    throw new Error("Audio is Missing");
  }
  return context;
}

export default PlayerContext