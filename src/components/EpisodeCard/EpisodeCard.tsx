import AudioPlayer from "../AudioPlayer/AudioPlayer"
import type { Episode } from "../../types/episode"

type EpisodeCardProps = {
     episode: Episode
}


function EpisodeCard({ episode }: EpisodeCardProps) {
  return (
    <div className="flex flex-col gap-3 p-4 border border-(--border) rounded-sm bg-(--bg-surface)">
      <div className="flex flex-col gap-1">
        <span className="text-xs text-(--terra) tracking-widest">
          {episode.date}
        </span>
        <h2 className="text-base font-bold text-(--text) leading-snug">
          {episode.title}
        </h2>
        <p className="text-sm font-light text-(--text-muted) leading-relaxed">
          {episode.description}
        </p>
      </div>
      <AudioPlayer src={episode.src} title={episode.title} duration={episode.duration} />
    </div>
  )
}
export default EpisodeCard