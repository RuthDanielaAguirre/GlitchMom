import { useAudioPlayer } from "../../hooks/useAudioPlayer"

type AudioPlayerProps = {
  src: string
  title: string
  duration: string
}

function AudioPlayer({ src, duration }: AudioPlayerProps) {
  const { audioRef, isPlaying, toggle, currentTime, audioDuration, seek, formatTime } = useAudioPlayer()

  const progress = audioDuration ? (currentTime / audioDuration) * 100 : 0

  return (
    <div className="flex flex-col gap-3 pt-3 border-t border-(--border) mt-2">
      <audio ref={audioRef} src={src} />

      <div
        className="w-full h-0.5 bg-(--border) cursor-pointer relative"
        onClick={(e) => {
          const rect = e.currentTarget.getBoundingClientRect()
          const ratio = (e.clientX - rect.left) / rect.width
          seek(ratio * audioDuration)
        }}
      >
        <div
          className="h-full bg-(--terra) transition-all"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="flex items-center gap-3">
        <button
          onClick={toggle}
          disabled={!src}
          className="flex items-center justify-center w-8 h-8 border border-(--terra) text-(--terra) text-xs hover:bg-(--terra) hover:text-(--void) transition-colors disabled:opacity-30 disabled:cursor-not-allowed rounded-sm shrink-0"
        >
          {isPlaying ? '⏸' : '▶'}
        </button>

        <div className="flex items-center gap-2 flex-1">
          <span className="text-xs text-(--text-muted) tracking-wider">
            {formatTime(currentTime)}
          </span>
          <span className="text-xs text-(--text-muted)">·</span>
          <span className="text-xs text-(--terra) tracking-wider">
            {duration || '--:--'}
          </span>
        </div>

        {!src && (
          <span className="text-xs text-(--text-muted) tracking-widest">
            próximamente
          </span>
        )}
      </div>
    </div>
  )
}

export default AudioPlayer