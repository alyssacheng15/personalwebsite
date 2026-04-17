import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

/* ── Skills data ── */
const SKILLS = [
  {
    label: 'Languages',
    items: ['Python', 'JavaScript', 'TypeScript', 'Java', 'HTML', 'CSS', 'C'],
  },
  {
    label: 'Frameworks & Libraries',
    items: ['React', 'Flask', 'Node.js', 'PyTorch', 'TensorFlow', 'LangChain', 'Pandas', 'NumPy'],
  },
  {
    label: 'AI / ML',
    items: ['scikit-learn', 'HuggingFace', 'OpenAI API', 'Jupyter', 'Kafka'],
  },
  {
    label: 'Tools & Design',
    items: ['Git', 'GitHub', 'Figma', 'Postman', 'Autodesk Maya', 'VS Code', 'Spline'],
  },
]

function Skills() {
  return (
    <div className="curiosities" id="skills">
      {/* <div className="title scroll-reveal">
        <h1>hard skills.</h1>
        <p>technologies and tools that I use for my creations</p>
      </div> */}
      <div className="skills-grid">
        {SKILLS.map((cat, i) => (
          <div key={cat.label} className="scroll-reveal" style={{ transitionDelay: `${i * 0.08}s` }}>
            <div className="skills-category-label">{cat.label}</div>
            <div className="skills-chips-row">
              {cat.items.map(item => (
                <span key={item} className="skill-chip">{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ── Project cards data ── */
const HOME_PROJECTS = [
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
]

function ProjectCards() {
  return (
    <div className="projects-section" id="projects">
      <div className="title scroll-reveal" style={{ paddingTop: '0vw' }}>
        <h1>projects.</h1>
      </div>
      <div className="project-cards-grid">
        {HOME_PROJECTS.map((p, i) => {
          const cls = 'project-card scroll-reveal'
          const sty = { transitionDelay: `${(i % 3) * 0.08}s` }
          const inner = (
            <>
              <div className="project-card-img">
                <img src={p.image} alt={p.title} />
              </div>
              <div className="project-card-body">
                <div className="project-card-title">{p.title}</div>
                <p className="project-card-desc">{p.desc}</p>
                <div className="project-card-tags">
                  {p.tags.map(tag => <span key={tag} className="project-tag">{tag}</span>)}
                </div>
              </div>
            </>
          )
          return p.external ? (
            <a key={p.title} href={p.link} className={cls} style={sty} target="_blank" rel="noopener noreferrer">
              {inner}
            </a>
          ) : (
            <Link key={p.title} to={p.link} className={cls} style={sty}>{inner}</Link>
          )
        })}
      </div>
      <div className="projects-view-all scroll-reveal">
        <Link to="/projects">view all projects →</Link>
      </div>
    </div>
  )
}

const EXPERIENCES = [
  {
    company: 'Salesforce',
    role: 'Software Engineer Intern  ·  San Francisco, CA',
    date: 'Incoming Summer 2026',
    tags: ['Java', 'MuleSoft', 'Distributed Systems', 'Messaging'],
    bullets: [
      'Incoming intern on the MuleSoft team (Marketing Cloud) building web-scale, distributed messaging and storage services',
    ],
  },
  {
    company: 'Lucid Motors',
    role: 'Software Developer  ·  Contract',
    date: 'September 2025 – February 2026',
    tags: ['Python', 'PyTorch', 'LiDAR', '3D Reconstruction', 'Computer Vision', 'Metric3D'],
    bullets: [
      'Built robust end-to-end data pipelines for LiDAR-to-depth projection, RGB image preprocessing, and dense point cloud generation, supporting accurate metric-scale 3D scene reconstruction across diverse driving scenarios for Lucid vehicles',
      'Integrated Metric3D-based monocular depth models into the pipeline, performed LiDAR-to-camera calibration, as well as developed evaluation workflows to improve depth accuracy by ∼ 35% (AbsRel) and threshold accuracy to ∼ 70%',
      'Implemented enhancements such as distance-weighted loss and multi-camera normalization for maintaining reliability',
    ],
  },
  {
    company: 'Nextdoor',
    role: 'Software Engineer Intern  ·  San Francisco, CA',
    date: 'May 2025 – August 2025',
    tags: ['Java', 'Python', 'PyTorch', 'HuggingFace', 'Kafka', 'NLP', 'Pandas'],
    bullets: [
      'Increased the relevance accuracy of Nextdoor\u2019s ad recommendation engine by \u223c 12% by pioneering/integrating a NLP model from HuggingFace to understand the semantic relationships between user posts and ads using Java and PyTorch',
      'Built a distributed data pipeline using Java and RPCs to ingest content categories from user feed, generate embeddings, and compute/stream the cosine similarity to the ads recommendation engine, processing \u223c 850k% messages efficiently',
      'Evaluated and fine-tuned NLP embedding models, developing benchmarking scripts in Python with Pandas and Jupyter Notebooks to cut inference latency per message while preserving semantic similarity accuracy and guide model selection',
      'Reduced total processing time by \u223c 90% by implementing an asynchronous Kafka flow with dedicated consumers, enabling pods to start immediately while maintaining low-latency and accurate ad recommendations for all users',
    ],
  },
  {
    company: 'Magic Labs',
    role: 'Software Developer  ·  Contract',
    date: 'Feb 2025 – May 2025',
    tags: ['Python', 'LangChain', 'OpenAI API', 'Blockchain', 'Web3'],
    bullets: [
      'Designed/implemented an LLM SDK for creating AI agents that can autonomously interact with blockchain networks and perform transactions such as wallet creation, balance checking, and currency swaps using Python and LangChain',
      'Integrated a decentralized, cryptocurrency exchange protocol (Uniswap) by connecting LangChain/OpenAI agents and the SDK to interact with ERC20 contracts and sign/broadcast transactions using cryptographic keys',
    ],
  },
]

function Experience() {
  const itemRefs = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) entry.target.classList.add('visible')
        })
      },
      { threshold: 0.15 }
    )
    itemRefs.current.forEach(el => { if (el) observer.observe(el) })
    return () => observer.disconnect()
  }, [])

  return (
    <div className="experience" id="experience">
      <div className="title">
        <h1>experience</h1>
        <a href="/images/Alyssa_Cheng_Resume.pdf" target="_blank" rel="noopener noreferrer" className="resume-link">view resume ↗</a>
      </div>
      <div className="timeline">
        {EXPERIENCES.map((exp, i) => (
          <div
            key={exp.company}
            className="timeline-item"
            ref={el => (itemRefs.current[i] = el)}
            style={{ transitionDelay: `${i * 0.1}s` }}
          >
            <div>
              <span className="timeline-company">{exp.company}</span>
              <span className="timeline-date">{exp.date}</span>
            </div>
            <div className="timeline-role">{exp.role}</div>
            <ul className="timeline-bullets">
              {exp.bullets.map((b, j) => (
                <li key={j}>{b}</li>
              ))}
            </ul>
            {exp.tags && (
              <div className="timeline-tags">
                {exp.tags.map(tag => (
                  <span key={tag} className="skill-chip">{tag}</span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

const CONTENT = [
  'developer', 'builder', 'creative designer', 'explorer',
   'pilot in training', 'piano player', 'duolingo fanatic',
]

function TypingText() {
  const [text, setText] = useState('')
  const [part, setPart] = useState(0)
  const [charIdx, setCharIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused) return
    const current = CONTENT[part]
    const speed = deleting ? 50 : 200

    const t = setTimeout(() => {
      if (!deleting) {
        const next = current.substring(0, charIdx + 1)
        setText(next)
        setCharIdx(charIdx + 1)
        if (next === current) {
          setPaused(true)
          setTimeout(() => { setPaused(false); setDeleting(true) }, 2500)
        }
      } else {
        const next = current.substring(0, charIdx - 1)
        setText(next)
        setCharIdx(charIdx - 1)
        if (next === '') {
          setDeleting(false)
          setPart((part + 1) % CONTENT.length)
          setCharIdx(0)
        }
      }
    }, speed)
    return () => clearTimeout(t)
  }, [text, part, charIdx, deleting, paused])

  return <>{text}</>
}

export default function Home() {
  const heroContentRef = useRef(null)
  const [scrollHintVisible, setScrollHintVisible] = useState(false)

  // Fade hero content as user scrolls away
  useEffect(() => {
    const onScroll = () => {
      const progress = window.scrollY / (window.innerHeight * 0.55)
      const opacity = Math.max(0, 1 - progress)
      if (heroContentRef.current) heroContentRef.current.style.opacity = opacity
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Show scroll hint after 3s, hide on first scroll
  useEffect(() => {
    const timer = setTimeout(() => setScrollHintVisible(true), 3000)
    const onScroll = () => setScrollHintVisible(false)
    window.addEventListener('scroll', onScroll, { passive: true, once: true })
    return () => {
      clearTimeout(timer)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <>
      {/* HERO */}
      <div className="cover" id="about">
        <Navbar variant="home" />
        <div className="hero-inner" ref={heroContentRef}>
          <div className="hero-name-block">
            <h1 className="hero-name">
              <span className="hero-first">Alyssa</span>
              <span className="hero-last">Cheng</span>
            </h1>
            <p className="hero-typing">
              <span className="hero-arrow">&gt;</span>
              <TypingText />
              <span className="hero-cursor" />
            </p>
          </div>

          <div className="hero-bio-block">
            <p className="hero-bio">
              Hi! I'm a student at UC Berkeley studying Data Science & CS. I'm passionate about building innovative solutions 
              and exploring the intersection of technology, creativity, and social good.
            </p>
            <div className="hero-ctas">
              <a href="#experience" className="hero-btn-primary">View Work</a>
            </div>
          </div>

          <div className="hero-right">
            <div className="hero-photo">
              <img src="/images/alyssa.png" alt="Alyssa Cheng" />
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div className={`hero-scroll-hint${scrollHintVisible ? ' hero-scroll-hint--visible' : ''}`}>
          <span>scroll</span>
          <div className="hero-scroll-line" />
        </div>
      </div>

      <Experience />

      <ProjectCards />

      <Skills />

      <Footer />
    </>
  )
}
