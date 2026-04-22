import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

const NAV_LINKS = [
  { to: '/#home',           label: 'home', hash: true },
  { to: '/about',      label: 'about', hash: false },
  { to: '/experience', label: 'experience', hash: false },
  { to: '/projects',   label: 'work', hash: false },
  { to: '/places',     label: 'places', hash: false },
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
            const active = !l.external && (l.to === '/' ? pathname === '/' : pathname === l.to || pathname.startsWith(l.to))
            return (
              <li key={l.to}>
                {l.external ? (
                  <a href={l.to} className={`top-nav-link${active ? ' top-nav-link--active' : ''}`}>{l.label}</a>
                ) : l.hash ? (
                  <HashLink smooth to={l.to} className={`top-nav-link${active ? ' top-nav-link--active' : ''}`}>{l.label}</HashLink>
                ) : (
                  <Link to={l.to} className={`top-nav-link${active ? ' top-nav-link--active' : ''}`}>{l.label}</Link>
                )}
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
            {NAV_LINKS.map(l => {
              const active = !l.external && (l.to === '/' ? pathname === '/' : pathname === l.to || pathname.startsWith(l.to))
              const cls = `drawer-link${active ? ' drawer-link--active' : ''}`
              return (
                <li key={l.to}>
                  {l.external ? (
                    <a href={l.to} className={cls} onClick={() => setOpen(false)}>{l.label}</a>
                  ) : l.hash ? (
                    <HashLink smooth to={l.to} className={cls} onClick={() => setOpen(false)}>{l.label}</HashLink>
                  ) : (
                    <Link to={l.to} className={cls} onClick={() => setOpen(false)}>{l.label}</Link>
                  )}
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </>
  )
}
