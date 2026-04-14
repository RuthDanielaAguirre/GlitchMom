import type { ReactNode } from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import { usePlayer } from '../context/PlayerContext'

function Layout({ children }: { children: ReactNode }) {
  const { currentEpisode, isPlaying, toggle, next, prev } = usePlayer()

  return (
    <div className="min-h-screen flex flex-col bg-(--bg)">
      <Navbar />
      <main className="flex-1">
        {children}
      </main>
      <Footer />

      {/* Reproductor sticky — solo aparece si hay episodio */}
      {currentEpisode && (
        <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-(--border) bg-(--bg) px-8 py-4 flex items-center gap-6">
          
          {/* Info episodio */}
          <div className="flex-1 min-w-0">
            <span className="text-xs text-(--terra) tracking-widest block">
              // reproduciendo
            </span>
            <p className="text-sm font-bold text-(--text) truncate">
              {currentEpisode.title}
            </p>
          </div>

          {/* Controles */}
          <div className="flex items-center gap-4">
            <button onClick={prev} className="text-sm text-(--text-muted) hover:text-(--terra) transition-colors">
              ⏮
            </button>
            <button
              onClick={toggle}
              className="w-10 h-10 flex items-center justify-center border border-(--terra) text-(--terra) hover:bg-(--terra) hover:text-(--void) transition-colors rounded-sm"
            >
              {isPlaying ? '⏸' : '▶'}
            </button>
            <button onClick={next} className="text-sm text-(--text-muted) hover:text-(--terra) transition-colors">
              ⏭
            </button>
          </div>

          {/* Duración */}
          <span className="text-xs text-(--terra) tracking-widest shrink-0">
            {currentEpisode.duration || '--:--'}
          </span>

        </div>
      )}
    </div>
  )
}

export default Layout