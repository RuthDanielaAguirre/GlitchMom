import { useAudioPlayer } from "../../hooks/useAudioPlayer"

 type AudioPlayerProps = {
  src: string
  title: string
  duration: string
}

function AudioPlayer({ src, title, duration }: AudioPlayerProps) {
    const { audioRef, isPlaying, toggle } = useAudioPlayer()
    
  return (
    <div className="audio-player">
      <audio ref={audioRef} src={src} className="audio-element" />
      <div className="audio-info">
        <h3 className="audio-title">{title}</h3>
        <p className="audio-duration">{duration}</p>
      </div>
        <button onClick={toggle} className="audio-toggle">
          {isPlaying ? "Pause" : "Play"}
        </button>   
    </div>
  )
}   

export default AudioPlayer