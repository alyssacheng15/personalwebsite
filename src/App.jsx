import { useEffect, useState, useRef } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import ExperiencePage from './pages/ExperiencePage'
import Places from './pages/Places'
import ProjectsList from './pages/ProjectsList'
import OohLala from './pages/projects/OohLala'
import CreativeCoding from './pages/projects/CreativeCoding'
import FoodyMoody from './pages/projects/FoodyMoody'
import GlobalCitizen from './pages/projects/GlobalCitizen'
import Personal from './pages/projects/Personal'
import Rise from './pages/projects/Rise'
import DesignYourWorld from './pages/projects/DesignYourWorld'
import Skin from './pages/projects/Skin'
import ThreeD from './pages/projects/ThreeD'
import Sft from './pages/projects/Sft'
import StatusWidget from './components/StatusWidget'

/* ── Background gradient ── */
function BgGradient() {
  return <div className="bg-gradient" />
}

/* ── Film grain ── */
function Grain() {
  return <div className="grain" />
}

/* ── Multi-layer node graph with mouse repulsion and scroll parallax ── */
function NodeGraph() {
  useEffect(() => {
    const canvas = document.getElementById('nodes')
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    let W, H
    const mouse = { x: -9999, y: -9999 }
    const desktopLayers = [
      { count: 25, speed: 0.15, size: [0.8, 1.4], opacity: 0.28, parallax: 0.6, depth: 0.5 },
      { count: 35, speed: 0.08, size: [1.0, 1.6], opacity: 0.45, parallax: 0.4, depth: 0.8 },
      { count: 20, speed: 0.04, size: [1.2, 2.0], opacity: 0.65, parallax: 0.2, depth: 1.2 },
    ]
    const mobileLayers = [
      { count: 18, speed: 0.12, size: [0.4, 0.7], opacity: 0.12, parallax: 0.6, depth: 0.35 },
      { count: 24, speed: 0.06, size: [0.5, 0.9], opacity: 0.20, parallax: 0.4, depth: 0.55 },
      { count: 14, speed: 0.03, size: [0.7, 1.1], opacity: 0.30, parallax: 0.2, depth: 0.8 },
    ]
    let nodes = []
    let connectAlpha = 0.32

    function resize() {
      W = canvas.width = window.innerWidth * dpr
      H = canvas.height = window.innerHeight * dpr
      canvas.style.width = window.innerWidth + 'px'
      canvas.style.height = window.innerHeight + 'px'
      const isMobile = window.innerWidth < 650
      const layers = isMobile ? mobileLayers : desktopLayers
      connectAlpha = isMobile ? 0.16 : 0.32
      nodes = []
      layers.forEach((l, layerIdx) => {
        for (let i = 0; i < l.count; i++) {
          nodes.push({
            x: Math.random() * W,
            y: Math.random() * H,
            vx: (Math.random() - 0.5) * l.speed * dpr,
            vy: (Math.random() - 0.5) * l.speed * dpr,
            r: (l.size[0] + Math.random() * (l.size[1] - l.size[0])) * dpr,
            o: l.opacity,
            layer: layerIdx,
            depth: l.depth,
            parallax: l.parallax,
          })
        }
      })
    }
    resize()
    window.addEventListener('resize', resize)
    const onMouseMove = e => {
      if (document.body.dataset.nodeQuiet === 'true') {
        mouse.x = -9999; mouse.y = -9999
      } else {
        mouse.x = e.clientX * dpr; mouse.y = e.clientY * dpr
      }
    }
    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mouseleave', () => { mouse.x = -9999; mouse.y = -9999 })

    let scrollY = 0
    window.addEventListener('scroll', () => { scrollY = window.scrollY }, { passive: true })

    const CONNECT = 140 * dpr
    const MOUSE_R = 180 * dpr

    const wrapY = y => ((y % H) + H) % H

    function draw() {
      ctx.clearRect(0, 0, W, H)
      for (const n of nodes) {
        n.x += n.vx
        n.y += n.vy
        const ddx = n.x - mouse.x
        const ddy = n.y - mouse.y
        const dist = Math.sqrt(ddx * ddx + ddy * ddy)
        if (dist < MOUSE_R) {
          const force = (1 - dist / MOUSE_R) * 0.6
          n.x += (ddx / dist) * force
          n.y += (ddy / dist) * force
        }
        if (n.x < 0) n.x = W; if (n.x > W) n.x = 0
        if (n.y < 0) n.y = H; if (n.y > H) n.y = 0
        const ry = wrapY(n.y + (-scrollY * n.parallax * dpr))
        ctx.fillStyle = `rgba(232, 228, 220, ${n.o})`
        ctx.beginPath()
        ctx.arc(n.x, ry, n.r, 0, Math.PI * 2)
        ctx.fill()
      }
      ctx.lineWidth = 0.7 * dpr
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i]
        const ayOff = wrapY(a.y + (-scrollY * a.parallax * dpr))
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j]
          if (a.layer !== b.layer) continue
          const dx = a.x - b.x
          const byOff = wrapY(b.y + (-scrollY * b.parallax * dpr))
          const dy = ayOff - byOff
          const d = Math.sqrt(dx * dx + dy * dy)
          if (d < CONNECT) {
            const alpha = (1 - d / CONNECT) * connectAlpha * a.depth
            const acx = a.x - mouse.x, acy = ayOff - mouse.y
            const toMouse = Math.sqrt(acx * acx + acy * acy)
            ctx.strokeStyle = toMouse < MOUSE_R
              ? `rgba(122, 167, 255, ${alpha * 2})`
              : `rgba(232, 228, 220, ${alpha})`
            ctx.beginPath()
            ctx.moveTo(a.x, ayOff)
            ctx.lineTo(b.x, byOff)
            ctx.stroke()
          }
        }
      }
      requestAnimationFrame(draw)
    }
    draw()
    return () => window.removeEventListener('resize', resize)
  }, [])

  return (
    <canvas
      id="nodes"
      style={{ position: 'fixed', top: 0, left: 0, zIndex: -2, pointerEvents: 'none' }}
    />
  )
}

/* ── Plane scroll guide ── */
function PlaneGuide() {
  const planeRef = useRef(null)
  const trailPathRef = useRef(null)
  const trailSvgRef = useRef(null)

  useEffect(() => {
    const planeEl = planeRef.current
    const trailPath = trailPathRef.current
    const trailSvg = trailSvgRef.current
    if (!planeEl || !trailPath || !trailSvg) return

    let pathPoints = []

    function buildPath() {
      const vw = window.innerWidth
      const vh = window.innerHeight
      const docH = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
      const stripRight = vw - 60
      const stripLeft = vw - 170
      const segmentPx = 40
      const count = Math.floor(docH / segmentPx)
      pathPoints = []
      for (let i = 0; i <= count; i++) {
        const t = i / count
        const docY = t * docH
        const sway = Math.sin(t * Math.PI * 6) * 0.5 + 0.5
        pathPoints.push({ x: stripLeft + sway * (stripRight - stripLeft), y: docY })
      }
      trailSvg.setAttribute('viewBox', `0 0 ${vw} ${vh}`)
      trailSvg.setAttribute('width', vw)
      trailSvg.setAttribute('height', vh)
    }

    function getPositionAt(sy) {
      const docY = sy + window.innerHeight * 0.5
      let idx = 0
      for (let i = 0; i < pathPoints.length - 1; i++) {
        if (pathPoints[i].y <= docY && pathPoints[i + 1].y >= docY) { idx = i; break }
      }
      const a = pathPoints[idx]
      const b = pathPoints[Math.min(idx + 1, pathPoints.length - 1)]
      const segT = (docY - a.y) / Math.max(1, b.y - a.y)
      const x = a.x + (b.x - a.x) * segT
      const y = docY - sy
      const angle = Math.atan2(b.y - a.y, b.x - a.x) * 180 / Math.PI
      return { x, y, angle }
    }

    function updateTrail(sy) {
      const vh = window.innerHeight
      const startDocY = sy + vh * 0.5 - vh * 0.55
      const endDocY = sy + vh * 0.5 + vh * 0.15
      let d = '', first = true
      for (const pt of pathPoints) {
        if (pt.y < startDocY || pt.y > endDocY) continue
        d += (first ? 'M' : 'L') + pt.x.toFixed(1) + ' ' + (pt.y - sy).toFixed(1) + ' '
        first = false
      }
      trailPath.setAttribute('d', d)
    }

    function render() {
      if (!pathPoints.length) return
      const sy = window.scrollY
      const pos = getPositionAt(sy)
      planeEl.style.transform = `translate(${pos.x - 19}px, ${pos.y - 19}px) rotate(${pos.angle}deg)`
      updateTrail(sy)
    }

    buildPath()
    render()
    const onResize = () => { buildPath(); render() }
    const onScroll = () => requestAnimationFrame(render)
    window.addEventListener('resize', onResize)
    window.addEventListener('scroll', onScroll, { passive: true })
    setTimeout(() => { buildPath(); render() }, 400)
    setTimeout(() => { buildPath(); render() }, 1200)

    return () => {
      window.removeEventListener('resize', onResize)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <div className="plane-guide">
      <svg className="plane-trail" ref={trailSvgRef} preserveAspectRatio="none">
        <path ref={trailPathRef} d="" />
      </svg>
      <div className="plane" ref={planeRef}>
        <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g stroke="#7aa7ff" strokeWidth="1.3" strokeLinejoin="round" strokeLinecap="round" fill="none">
            <path d="M6 32 L54 32" />
            <path d="M54 32 L46 26 L40 26" />
            <path d="M54 32 L46 38 L40 38" />
            <path d="M22 32 L14 20 L20 20 L28 32" fill="rgba(122,167,255,0.12)" />
            <path d="M22 32 L14 44 L20 44 L28 32" fill="rgba(122,167,255,0.12)" />
            <path d="M38 32 L34 24 L38 24 L42 32" fill="rgba(122,167,255,0.2)" />
            <path d="M38 32 L34 40 L38 40 L42 32" fill="rgba(122,167,255,0.2)" />
            <circle cx="50" cy="32" r="1.5" fill="#7aa7ff" stroke="none" />
          </g>
        </svg>
      </div>
    </div>
  )
}

/* ── Flight HUD ── */
function FlightHud() {
  const [alt, setAlt] = useState('00000')

  useEffect(() => {
    const update = () => {
      const scroll = window.scrollY
      const docH = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
      const p = Math.max(0, Math.min(1, scroll / Math.max(1, docH - window.innerHeight)))
      setAlt(Math.round(p * 32000).toString().padStart(5, '0'))
    }
    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])

  return (
    <div className="flight-hud">
      <span className="hud-label">ALT</span>
      <span className="hud-val blue">{alt} FT</span>
      <span className="hud-divider" />
      <span className="hud-label">HDG</span>
      <span className="hud-val">270°</span>
      <span className="hud-divider" />
      <span className="hud-label">STATUS</span>
      <span className="hud-val">IN FLIGHT</span>
    </div>
  )
}

/* ── Scroll to top on route change ── */
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

/* ── Reveal observer (handles both .reveal and .tl-item) ── */
function ScrollReveal() {
  const { pathname } = useLocation()

  useEffect(() => {
    const t = setTimeout(() => {
      const observer = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible')
              observer.unobserve(entry.target)
            }
          })
        },
        { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
      )
      document.querySelectorAll('.scroll-reveal, .reveal, .tl-item').forEach(el => observer.observe(el))
      return () => observer.disconnect()
    }, 80)
    return () => clearTimeout(t)
  }, [pathname])

  return null
}

export default function App() {
  return (
    <>
      <BgGradient />
      <NodeGraph />
      <Grain />
      <PlaneGuide />
      <FlightHud />
      <StatusWidget />
      <ScrollToTop />
      <ScrollReveal />
      <Routes>
        <Route path="/"                         element={<Home />} />
        <Route path="/about"                    element={<About />} />
        <Route path="/experience"               element={<ExperiencePage />} />
        <Route path="/places"                   element={<Places />} />
        <Route path="/projects"                 element={<ProjectsList />} />
        <Route path="/projects/oohlala"         element={<OohLala />} />
        <Route path="/projects/creativecoding"  element={<CreativeCoding />} />
        <Route path="/projects/foodymoody"      element={<FoodyMoody />} />
        <Route path="/projects/globalcitizen"   element={<GlobalCitizen />} />
        <Route path="/projects/personal"        element={<Personal />} />
        <Route path="/projects/rise"            element={<Rise />} />
        <Route path="/projects/dyw"             element={<DesignYourWorld />} />
        <Route path="/projects/skin"            element={<Skin />} />
        <Route path="/projects/3d"              element={<ThreeD />} />
        <Route path="/projects/sft"             element={<Sft />} />
      </Routes>
    </>
  )
}
