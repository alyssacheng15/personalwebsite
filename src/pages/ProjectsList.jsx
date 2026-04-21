import { useRef } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const ALL_PROJECTS = [
  {
    title: 'Triply',
    desc: 'AI-powered platform for friend groups to save foodie videos, extract restaurant info, schedule hangouts, and split bills.',
    meta: 'Berkeley AI Hackathon · 2025',
    tags: ['React', 'TypeScript', 'Next.js', 'Claude AI', 'Firebase'],
    image: '/projects/images/triply.png',
    link: 'https://triply-app.vercel.app/',
    external: true,
  },
  {
    title: 'Zone',
    desc: 'Companion app that restores body awareness during deep focus states without interrupting your flow.',
    meta: 'Figma Build Hackathon · 2026',
    tags: ['React', 'TypeScript', 'Figma', 'UI/UX'],
    image: '/projects/images/zone.png',
    link: 'https://flow-state.figma.site',
    external: true,
  },
  {
    title: 'Foody Moody',
    desc: 'Mood-based restaurant discovery app for local small businesses using the Yelp Fusion API.',
    meta: 'Congressional App Challenge · 2022',
    tags: ['React', 'JavaScript', 'Yelp API', 'Netlify'],
    image: '/projects/images/fmside.png',
    link: '',
    external: true,
  },
  {
    title: 'ReGenVen Studio',
    desc: 'Portfolio website for a UC Berkeley venture studio building early-stage companies with regenerative business models (SCET).',
    meta: 'UC Berkeley · SCET',
    tags: ['React', 'Web Design', 'Figma', 'UC Berkeley'],
    image: '/projects/images/comingsoon.png',
    link: 'https://www.regenvenstudio.com/',
    external: true,
  },
  {
    title: 'Ooh La La Panini',
    desc: 'Full brand identity, website, and wireframed ordering system for a local restaurant.',
    meta: 'Branding · UI/UX',
    tags: ['Figma', 'UI/UX', 'Branding', 'Web Design'],
    image: '/projects/images/oohlalaCover.png',
    link: '/projects/oohlala',
    external: false,
  },
  {
    title: '3D Miniature City',
    desc: 'Modeled, surfaced, and animated a bus and miniature city using Autodesk Maya + Arnold.',
    meta: '3D · Animation',
    tags: ['Autodesk Maya', 'Arnold', '3D', 'Animation'],
    image: '/projects/images/3d.png',
    link: '/projects/3d',
    external: false,
  },
]

function PCard({ project, index }) {
  const cardRef = useRef(null)
  const rafRef  = useRef(null)

  const handleMove = (e) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const dx = (e.clientX - rect.left - rect.width / 2) / rect.width
    const dy = (e.clientY - rect.top  - rect.height / 2) / rect.height
    cancelAnimationFrame(rafRef.current)
    rafRef.current = requestAnimationFrame(() => {
      if (cardRef.current)
        cardRef.current.style.transform =
          `perspective(1200px) rotateY(${dx * 8}deg) rotateX(${-dy * 8}deg) translateZ(6px)`
    })
  }
  const handleLeave = () => {
    cancelAnimationFrame(rafRef.current)
    if (cardRef.current) cardRef.current.style.transform = ''
  }

  const inner = (
    <div className="p-card-inner">
      <div className="p-card-img">
        <img src={project.image} alt={project.title} loading="lazy" />
      </div>
      <div className="p-card-body">
        <div className="p-card-top">
          <span className="p-card-title">{project.title}</span>
          <span className="p-card-ext">case study →</span>
        </div>
        {project.meta && <div className="p-card-meta">{project.meta}</div>}
        <p className="p-card-desc">{project.desc}</p>
        <div className="p-card-tags">
          {project.tags.map(t => <span key={t} className="p-card-tag">{t}</span>)}
        </div>
      </div>
    </div>
  )

  const cls = 'p-card reveal'
  const sty = { transitionDelay: `${(index % 3) * 0.06}s` }

  return project.external ? (
    <a ref={cardRef} href={project.link || undefined} className={cls} style={sty}
       target="_blank" rel="noopener noreferrer"
       onMouseMove={handleMove} onMouseLeave={handleLeave}>
      {inner}
    </a>
  ) : (
    <Link ref={cardRef} to={project.link} className={cls} style={sty}
          onMouseMove={handleMove} onMouseLeave={handleLeave}>
      {inner}
    </Link>
  )
}

export default function ProjectsList() {
  return (
    <>
      <Navbar />

      <div className="page-head">
        <span className="section-num">● Work</span>
        <h1>things i've<br />shipped.</h1>
        <p className="sub">side projects, hackathon wins, and production code in disguise.</p>
      </div>

      <section style={{ paddingTop: '20px' }}>
        <div className="projects-grid">
          {ALL_PROJECTS.map((p, i) => <PCard key={p.title} project={p} index={i} />)}
        </div>
      </section>

      <Footer quote="More in the" subQuote="hangar." />
    </>
  )
}
