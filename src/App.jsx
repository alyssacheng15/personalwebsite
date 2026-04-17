import { useEffect, useState } from 'react'
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
