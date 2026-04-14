import { useState } from 'react'
import type { ReactNode } from 'react'
import { PlayerContext } from './PlayerContext'
import { useAudioPlayer } from '../hooks/useAudioPlayer'
import type { Episode } from '../types/episode'
import { episodes } from '../constants/episodes'


export function PlayerProvider({ children }: { children: ReactNode }) {
  const [currentEpisode, setCurrentEpisode] = useState<Episode | null>(null)
  const { audioRef, isPlaying, toggle } = useAudioPlayer()

  const playEpisode = (episode: Episode) => {
    setCurrentEpisode(episode)
    if (audioRef.current) {
      audioRef.current.src = episode.src
      audioRef.current.play()
  }
}

  const next = () => {
   if (!currentEpisode) return
   const currentIndex = episodes.findIndex(e => e.id === currentEpisode.id)
   const nextIndex = (currentIndex + 1) % episodes.length
   playEpisode(episodes[nextIndex])


  }

  const prev = () => {
    if (!currentEpisode) return
    const currentIndex = episodes.findIndex(e => e.id === currentEpisode.id)
    const prevIndex = (currentIndex - 1 + episodes.length) % episodes.length
    playEpisode(episodes[prevIndex])
  }

  return (
    <PlayerContext.Provider value={{
      currentEpisode,
      isPlaying,
      playEpisode,
      toggle,
      next,
      prev,
    }}>
      <audio ref={audioRef} />
      {children}
    </PlayerContext.Provider>
  )
}