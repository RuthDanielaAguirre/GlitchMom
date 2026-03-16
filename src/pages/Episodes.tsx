import { episodes } from '../constants/episodes'
import TiltedCard from '../components/TiltedCard/TiltedCard'


function Episodes() {
  return (
    <main className="min-h-screen bg-(--bg) px-8 py-16">

      <div className="mb-12">
        <span className="tag mb-4 block">// archivo completo</span>
        <h1 className="text-4xl font-bold text-(--text) tracking-tight mb-4">
          todos los episodios
        </h1>
        <p className="text-base font-light text-(--text) max-w-xl leading-relaxed">
          Cada episodio es un momento real. Sin editar la incomodidad,
          sin suavizar lo que costó.
        </p>
      </div>

      <div className="divider">
        <span>// el sistema no me esperaba</span>
      </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
 
{episodes.map(episode => (
  <TiltedCard
    key={episode.id}
    coverImage={episode.coverImage ?? '/GlitchMomLogo.png'}
    captionText={episode.title}
    onClick={() => console.log('abrir episodio', episode.id)}
  />
))}

 
</div>

      

    </main>
  )
}

export default Episodes