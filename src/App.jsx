import { useEffect, useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'

import StatusWidget from './components/StatusWidget'
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

function NodeGraph() {
  useEffect(() => {
    const canvas = document.getElementById('node-graph')
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    const nodes = []
    const nodeCount = 60

    // Set canvas to window size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Initialize nodes
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.08,
        vy: (Math.random() - 0.5) * 0.08,
        radius: Math.random() * 1.2 + 0.8,
      })
    }

    const animate = () => {
      ctx.fillStyle = 'rgba(17, 17, 17, 1)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Update and draw nodes
      nodes.forEach(node => {
        node.x += node.vx
        node.y += node.vy

        // Wrap around
        if (node.x < 0) node.x = canvas.width
        if (node.x > canvas.width) node.x = 0
        if (node.y < 0) node.y = canvas.height
        if (node.y > canvas.height) node.y = 0

        // Draw node
        ctx.fillStyle = 'rgba(232, 228, 220, 0.22)'
        ctx.beginPath()
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2)
        ctx.fill()
      })

      // Draw connections
      ctx.strokeStyle = 'rgba(232, 228, 220, 0.12)'
      ctx.lineWidth = 0.5
      const maxDist = 150

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x
          const dy = nodes[i].y - nodes[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < maxDist) {
            ctx.globalAlpha = 1 - (dist / maxDist)
            ctx.beginPath()
            ctx.moveTo(nodes[i].x, nodes[i].y)
            ctx.lineTo(nodes[j].x, nodes[j].y)
            ctx.stroke()
            ctx.globalAlpha = 1
          }
        }
      }

      requestAnimationFrame(animate)
    }

    animate()

    return () => window.removeEventListener('resize', resizeCanvas)
  }, [])

  return (
    <canvas
      id="node-graph"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: -1,
        pointerEvents: 'none',
      }}
    />
  )
}

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

function ScrollReveal() {
  const { pathname } = useLocation()

  useEffect(() => {
    // small delay so the new page's DOM is fully painted
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
      document.querySelectorAll('.scroll-reveal').forEach(el => observer.observe(el))
      return () => observer.disconnect()
    }, 80)

    return () => clearTimeout(t)
  }, [pathname])

  return null
}

export default function App() {
  const [loaded, setLoaded] = useState(false)

  // Loader
  useEffect(() => {
    const hide = () => setTimeout(() => setLoaded(true), 300)
    if (document.readyState === 'complete') { hide() }
    else { window.addEventListener('load', hide) }
    return () => window.removeEventListener('load', hide)
  }, [])

  return (
    <>
      {/* {!loaded && (
        <div id="loader">
          <img src="/images/loader.gif" alt="" className="loader-gif" />
        </div>
      )} */}
      <NodeGraph />
      <ScrollToTop />
      <ScrollReveal />
      <StatusWidget />
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
