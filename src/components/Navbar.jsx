import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const NAV_LINKS = [
  { to: '/',           label: 'home' },
  { to: '/about',      label: 'about' },
  { to: '/experience', label: 'experience' },
  { to: '/projects',   label: 'work' },
  { to: '/places',     label: 'places' },
]

export default function Navbar({ variant = 'default' }) {
  const { pathname } = useLocation()
  const [open,     setOpen]     = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <nav className={`top-nav${scrolled ? ' top-nav--scrolled' : ''}`}>
        <ul className="top-nav-links">
          {NAV_LINKS.map(l => {
            const active = l.to === '/' ? pathname === '/' : pathname === l.to || pathname.startsWith(l.to)
            return (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className={`top-nav-link${active ? ' top-nav-link--active' : ''}`}
                >
                  {l.label}
                </Link>
              </li>
            )
          })}
        </ul>

        <button className="hamburger" onClick={() => setOpen(true)} aria-label="Open menu">
          <span /><span /><span />
        </button>
      </nav>

      <div
        className={`drawer-overlay${open ? ' drawer-overlay--open' : ''}`}
        onClick={() => setOpen(false)}
      >
        <div
          className={`drawer${open ? ' drawer--open' : ''}`}
          onClick={e => e.stopPropagation()}
        >
          <button className="drawer-close" onClick={() => setOpen(false)} aria-label="Close">✕</button>
          <ul className="drawer-links">
            {NAV_LINKS.map(l => (
              <li key={l.to}>
                <Link to={l.to} onClick={() => setOpen(false)}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}
