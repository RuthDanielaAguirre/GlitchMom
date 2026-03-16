import { useRef, useState } from "react";

export function useAudioPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const play = () => {
    audioRef.current?.play();

    setIsPlaying(true);
  
}

const pause = () => {
    audioRef.current?.pause();
    setIsPlaying(false);
}

const toggle = () => {
    if (isPlaying) {
      pause();
    } else {
      play();
    }
}

return { audioRef, isPlaying, play, pause, toggle }
}