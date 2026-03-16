import { NavLink } from 'react-router-dom'
import { useTheme } from '../../hooks/useTheme'

function Navbar() {
  const { theme, toggle } = useTheme()

  return (
    <nav className="flex items-center justify-between px-8 py-5 sticky top-0 z-50  bg-(--bg)">
      
      <div className="flex flex-col gap-1">
        <NavLink to="/" className="text-xl font-bold text-(--text) no-underline tracking-tight">
          Glitch Mom
        </NavLink>
        <span className="text-xs text-(--terra) tracking-widest opacity-80">
          // podcast · maternidad × código
        </span>
      </div>

      <div className="flex items-center gap-8">
        <NavLink
          to="/episodes"
          className={({ isActive }) =>
            `text-sm font-light tracking-wider no-underline transition-colors ${isActive ? 'text-(--terra)' : 'text-(--links)'}`
          }
        >
          episodios
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `text-sm font-light tracking-wider no-underline transition-colors ${isActive ? 'text-(--terra)' : 'text-(--links)'}`
          }
        >
          contacto
        </NavLink>
        <button onClick={toggle} className="btn-terciary text-xs px-4 py-2 rounded-md">
          {theme === 'dark' ? '[ luz ]' : '[ noche ]'}
        </button>
      </div>

    </nav>
  )
}

export default Navbar