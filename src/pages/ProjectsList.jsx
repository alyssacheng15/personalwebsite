import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const ALL_PROJECTS = [
  {
    title: 'Triply',
    desc: 'AI-powered platform for friend groups to save foodie videos, extract restaurant info, schedule hangouts, and split bills. Submitted to Berkeley AI Hackathon 2025.',
    tags: ['React', 'TypeScript', 'Next.js', 'Claude AI', 'Firebase'],
    image: '/projects/images/triply.png',
    link: 'https://triply-app.vercel.app/',
    external: true,
  },
  {
    title: 'Foody Moody',
    desc: 'Mood-based restaurant discovery app for local small businesses using the Yelp Fusion API. Submitted to Congressional App Challenge 2022.',
    tags: ['React', 'JavaScript', 'Yelp API', 'Netlify'],
    image: '/projects/images/fmside.png',
    link: '',
    external: true,
  },
  {
    title: 'Zone',
    desc: 'Companion app that restores body awareness during deep focus states without interrupting your flow. Submitted to Figma Build Hackathon 2026.',
    tags: ['React', 'TypeScript', 'Figma', 'UI/UX'],
    image: '/projects/images/zone.png',
    link: 'https://flow-state.figma.site',
    external: true,
  },
  {
    title: 'ReGenVen Studio',
    desc: 'Portfolio website for a UC Berkeley venture studio building early-stage companies with regenerative business models. Built for Sutardja Center for Entrepreneurship and Technology (SCET).',
    tags: ['React', 'Web Design', 'Figma', 'UC Berkeley'],
    image: '/projects/images/comingsoon.png',
    link: 'https://www.regenvenstudio.com/',
    external: true,
  },
  {
    title: 'Ooh La La Panini',
    desc: 'Full brand identity, website, and wireframed ordering system for a local restaurant.',
    tags: ['Figma', 'UI/UX', 'Branding', 'Web Design'],
    image: '/projects/images/oohlalaCover.png',
    link: '/projects/oohlala',
  },
  {
    title: '3D Miniature City',
    desc: 'Modeled, surfaced, and animated a bus and miniature city using Autodesk Maya + Arnold.',
    tags: ['Autodesk Maya', 'Arnold', '3D', 'Animation'],
    image: '/projects/images/3d.png',
    link: '/projects/3d',
  },
]

export default function ProjectsList() {
  return (
    <>
      <div className="projects-listing-wrap">
        <Navbar variant="blue" />

        <div className="title" style={{ paddingTop: '8vw' }}>
          <h1>projects.</h1>
          <p>what i've been working on</p>
        </div>

        <div className="project-cards-grid">
          {ALL_PROJECTS.map((p, i) => {
            const cardClass = `project-card scroll-reveal`
            const cardStyle = { transitionDelay: `${(i % 3) * 0.08}s` }
            const inner = (
              <>
                <div className="project-card-img">
                  <img src={p.image} alt={p.title} />
                </div>
                <div className="project-card-body">
                  <div className="project-card-title">{p.title}</div>
                  <p className="project-card-desc">{p.desc}</p>
                  <div className="project-card-tags">
                    {p.tags.map(tag => (
                      <span key={tag} className="project-tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </>
            )
            return p.external ? (
              <a
                href={p.link}
                key={p.title}
                className={cardClass}
                style={cardStyle}
                target="_blank"
                rel="noopener noreferrer"
              >
                {inner}
              </a>
            ) : (
              <Link to={p.link} key={p.title} className={cardClass} style={cardStyle}>
                {inner}
              </Link>
            )
          })}
        </div>
      </div>

      <Footer />
    </>
  )
}
