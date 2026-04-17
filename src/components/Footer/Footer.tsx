import { NavLink } from 'react-router-dom'

function Footer() {
  return (
    <footer className="border-t border-(--text-muted) bg-(--bg) px-4 sm:px-8 py-10 mt-auto">
      
      <div className="flex flex-col sm:flex-row items-start justify-between gap-8">
        <div className="flex flex-col gap-2">
          <span className="text-xl font-bold text-(--text) tracking-tight">
            Glitch Mom
          </span>
          <span className="text-xs text-(--terra) tracking-widest opacity-80">
            // podcast · maternidad × código
          </span>
        </div>

        <div className="flex flex-col sm:flex-row gap-8 sm:gap-12">
          <div className="flex flex-col gap-3">
            <span className="text-xs text-(--terra) tracking-widest uppercase opacity-70">
              navegar
            </span>
            <NavLink to="/" className="text-sm font-light text-(--links) no-underline hover:text-(--terra) transition-colors">
              inicio
            </NavLink>
            <NavLink to="/episodes" className="text-sm font-light text-(--links) no-underline hover:text-(--terra) transition-colors">
              episodios
            </NavLink>
            <NavLink to="/contact" className="text-sm font-light text-(--links) no-underline hover:text-(--terra) transition-colors">
              contacto
            </NavLink>
            <NavLink to="/accessibility" className="text-sm font-light text-(--links) no-underline hover:text-(--terra) transition-colors">
              accesibilidad
            </NavLink>
          </div>
        </div>
      </div>

      <div className="divider mt-8">
        <span>// todos los derechos reservados</span>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between mt-3 gap-2 sm:gap-0">
        <span className="text-sm text-(--links) tracking-wider">
          GlitchMom.fm {new Date().getFullYear()}  
        </span>
        <span className="text-sm text-(--links) tracking-wider">
          <a href="https://www.linkedin.com/in/ruth-daniela-aguirre/">©Ruth Daniela Aguirre</a> 
        </span>
      </div>

    </footer>
  )
}

export default Footer