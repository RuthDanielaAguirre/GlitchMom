import TiltedCard from '../components/TiltedCard/TiltedCard'
import { episodes } from '../constants/episodes'
import { usePlayer } from '../context/PlayerContext'

function Home() {
  const { playEpisode } = usePlayer()

  return (
    <main className="min-h-screen bg-(--bg)">

      {/* HERO */}
      <section className="relative overflow-hidden flex flex-col lg:flex-row min-h-screen">

        {/* Imagen fondo — solo mobile y tablet */}
        <img
          src="/GlitchMomH.png"
          alt="Glitch Mom"
          className="block lg:hidden absolute inset-0 w-full h-full object-cover"
        />
        <div className="block lg:hidden absolute inset-0 bg-(--void) opacity-70" />

        {/* Columna texto */}
        <div className="relative z-10 flex-1 px-4 sm:px-8 pt-16 pb-12 flex flex-col justify-center">
          <span className="tag mb-4 block">// ep_001 · disponible ahora</span>
          <h1 className="text-5xl font-bold text-(--text) leading-tight tracking-tight mb-4">
            Por qué empecé a programar<br />
            con mi hija en brazos.
          </h1>
          <p className="text-base font-light text-(--text-muted) max-w-xl leading-relaxed mb-8">
            No hay feed de programación que te prepare para el cerebro de mamá.
            Este podcast existe porque no debería existir — y existe igual.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
            <button
              className="btn-primary"
              onClick={() => playEpisode(episodes[0])}
            >
              ▶ escuchar ahora
            </button>
            <button className="btn-secondary">ver episodios</button>
          </div>
        </div>

        {/* Columna imagen — solo desktop */}
        <div className="hidden lg:flex lg:w-1/2 items-center justify-center p-8">
          <img
            src="/GlitchMomH.png"
            alt="Glitch Mom"
            className="w-full max-w-lg object-contain rounded-xl"
          />
        </div>

      </section>

      {/* DIVIDER */}
      <div className="divider mx-8">
        <span>// el sistema no me esperaba</span>
      </div>

      {/* EPISODIOS */}
      <section className="px-8 pb-16">
        <div className="flex items-baseline justify-between mb-8">
          <h2 className="text-2xl font-bold text-(--text) tracking-tight">últimos episodios</h2>
          <a href="/episodes" className="text-xs text-(--terra) tracking-widest hover:opacity-70 transition-opacity">
            ver todos →
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {episodes.slice(0, 3).map(episode => (
            <TiltedCard
              key={episode.id}
              coverImage={episode.coverImage ?? '/GlitchMomLogo.png'}
              captionText={episode.title}
              containerHeight="250px"
              imageHeight="250px"
              imageWidth="100%"
              onClick={() => playEpisode(episode)}
            />
          ))}
        </div>
      </section>


    </main>
  )
}

export default Home