import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

/* ── Typing animation ── */
const ROLES = ['developer', 'builder', 'pilot in training', 'creative designer', 'piano player', 'duolingo fanatic', 'explorer']

function TypingText() {
  const [text, setText] = useState('')
  const [roleIdx, setRoleIdx] = useState(0)
  const [charIdx, setCharIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused) return
    const current = ROLES[roleIdx]
    const speed = deleting ? 40 : 80 + Math.random() * 40

    const t = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, charIdx + 1)
        setText(next)
        setCharIdx(charIdx + 1)
        if (next === current) {
          setPaused(true)
          setTimeout(() => { setPaused(false); setDeleting(true) }, 1800)
        }
      } else {
        const next = current.slice(0, charIdx - 1)
        setText(next)
        setCharIdx(charIdx - 1)
        if (next === '') {
          setDeleting(false)
          setRoleIdx((roleIdx + 1) % ROLES.length)
          setCharIdx(0)
        }
      }
    }, speed)
    return () => clearTimeout(t)
  }, [text, roleIdx, charIdx, deleting, paused])

  return <>{text}</>
}

/* ── Experiences data ── */
const EXPERIENCES = [
  {
    company: 'Salesforce',
    role: 'Software Engineer Intern · San Francisco, CA',
    date: 'Summer 2026',
    incoming: true,
    tags: ['Java', 'MuleSoft', 'Distributed Systems', 'Messaging'],
    bullets: [
      'Incoming intern on the MuleSoft team (Marketing Cloud) building web-scale, distributed messaging and storage services',
    ],
  },
  {
    company: 'Lucid Motors',
    role: 'Software Developer · Contract',
    date: 'Sept 2025 – Feb 2026',
    tags: ['Python', 'PyTorch', 'LiDAR', '3D Reconstruction', 'Computer Vision', 'Metric3D'],
    bullets: [
      'Built robust end-to-end data pipelines for LiDAR-to-depth projection, RGB image preprocessing, and dense point cloud generation, supporting accurate metric-scale 3D scene reconstruction across diverse driving scenarios for Lucid vehicles',
      'Integrated Metric3D-based monocular depth models into the pipeline, performed LiDAR-to-camera calibration, as well as developed evaluation workflows to improve depth accuracy by∼35% (AbsRel) and threshold accuracy to∼70%',
      'Implemented enhancements such as distance-weighted loss and multi-camera normalization for maintaining reliability',
    ],
  },
  {
    company: 'Nextdoor',
    role: 'Software Engineer Intern · San Francisco, CA',
    date: 'May 2025 – Aug 2025',
    tags: ['Java', 'Python', 'PyTorch', 'HuggingFace', 'Kafka', 'NLP', 'Pandas'],
    bullets: [
      'Increased the relevance accuracy of Nextdoor’s ad recommendation engine by∼12% by pioneering/integrating a NLP model from HuggingFace to understand the semantic relationships between user posts and ads using Java and PyTorch',
      'Built a distributed data pipeline using Java and RPCs to ingest content categories from user feed, generate embeddings, and compute/stream the cosine similarity to the ads recommendation engine, processing∼850k% messages efficiently',
      'Evaluated and fine-tuned NLP embedding models, developing benchmarking scripts in Python with Pandas and JupyterNotebooks to cut inference latency per message while preserving semantic similarity accuracy and guide model selection',
      'Reduced total processing time by∼90% by implementing an asynchronous Kafka flow with dedicated consumers, enabling pods to start immediately while maintaining low-latency and accurate ad recommendations for all users',
    ],
  },
  {
    company: 'Magic Labs',
    role: 'Software Developer · Contract',
    date: 'Feb 2025 – May 2025',
    tags: ['Python', 'LangChain', 'OpenAI API', 'Blockchain', 'Web3'],
    bullets: [
      'Designed/implemented an LLM SDK for creating AI agents that can autonomously interact with blockchain networks and perform transactions such as wallet creation, balance checking, and currency swaps using Python and LangChain',
      'Integrated a decentralized, cryptocurrency exchange protocol (Uniswap) by connecting LangChain/OpenAI agents andthe SDK to interact with ERC20 contracts and sign/broadcast transactions using cryptographic keys',
    ],
  },
]

/* ── Featured projects ── */
const HOME_PROJECTS = [
  {
    title: 'Triply',
    desc: 'AI-powered platform for friend groups to save foodie videos, extract restaurant info, schedule hangouts, and split bills. Submitted to Berkeley AI Hackathon 2025.',
    meta: 'Berkeley AI Hackathon · 2025',
    tags: ['React', 'TypeScript', 'Next.js', 'Claude AI', 'Firebase'],
    image: '/projects/images/triply.png',
    link: 'https://triply-app.vercel.app/',
    external: true,
  },
  {
    title: 'Zone',
    desc: 'Companion app that restores body awareness during deep focus states without interrupting your flow. Submitted to Figma Build Hackathon 2026.',
    meta: 'Figma Build Hackathon · 2026',
    tags: ['React', 'TypeScript', 'Figma', 'UI/UX'],
    image: '/projects/images/zone.png',
    link: 'https://flow-state.figma.site',
    external: true,
  },
  {
    title: 'Foody Moody',
    desc: 'Mood-based restaurant discovery app for local small businesses using the Yelp Fusion API. Submitted to Congressional App Challenge 2022.',
    meta: 'Congressional App Challenge · 2022',
    tags: ['React', 'JavaScript', 'Yelp API', 'Netlify'],
    image: '/projects/images/fmside.png',
    link: '',
    external: true,
  },
]

/* ── Skills ── */
const SKILLS = [
  { label: 'Languages',       items: ['Python', 'Java', 'C', 'C++', 'JavaScript', 'TypeScript', 'Kotlin', 'SQL', 'Swift', 'HTML/CSS'] },
  { label: 'Frameworks',      items: ['React', 'Next.js', 'Flask', 'Node.js', 'Express.js', 'PyTorch', 'TensorFlow', 'LangChain'] },
  { label: 'AI / ML / Data',  items: ['scikit-learn', 'HuggingFace', 'OpenAI API', 'Pandas', 'NumPy', 'Kafka', 'Jupyter'] },
  { label: 'Tools & Design',  items: ['AWS', 'Git', 'Protobuf', 'MongoDB', 'Kafka', 'Kubernetes', 'Figma', 'Docker', 'SQLite', 'Jupyter', 'Firebase', 'Autodesk Maya', 'Spline', 'Postman', 'VS Code', 'Databricks'] },
]

/* ── Project card with 3D tilt ── */
function PCard({ project, index }) {
  const cardRef = useRef(null)
  const rafRef = useRef(null)

  const handleMove = (e) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const dx = (e.clientX - rect.left - rect.width / 2) / rect.width
    const dy = (e.clientY - rect.top - rect.height / 2) / rect.height
    cancelAnimationFrame(rafRef.current)
    rafRef.current = requestAnimationFrame(() => {
      if (cardRef.current)
        cardRef.current.style.transform = `perspective(1200px) rotateY(${dx * 8}deg) rotateX(${-dy * 8}deg) translateZ(6px)`
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
          <span className="p-card-ext">open →</span>
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
  const sty = { transitionDelay: `${(index % 3) * 0.08}s` }

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

export default function Home() {
  const heroLeftRef  = useRef(null)
  const heroRightRef = useRef(null)
  const tiltCardRef  = useRef(null)
  const tiltRAF      = useRef(null)

  /* Hero parallax on scroll */
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      if (y > window.innerHeight) return
      const stacked = window.innerWidth <= 1000
      const left  = heroLeftRef.current
      const right = heroRightRef.current
      if (left) {
        left.style.transform = `translateY(${y * 0.18}px)`
        left.style.opacity   = Math.max(0, 1 - y / (window.innerHeight * 0.8))
      }
      if (right) {
        if (stacked) {
          right.style.transform = ''
          right.style.opacity   = '1'
        } else {
          right.style.transform = `translateY(${y * 0.08}px)`
          right.style.opacity   = String(Math.max(0, 1 - y / (window.innerHeight * 0.9)))
        }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* Tilt card 3D effect */
  const handleTiltMove = (e) => {
    if (!heroRightRef.current || !tiltCardRef.current) return
    const rect = heroRightRef.current.getBoundingClientRect()
    const dx = (e.clientX - rect.left - rect.width / 2) / rect.width
    const dy = (e.clientY - rect.top  - rect.height / 2) / rect.height
    cancelAnimationFrame(tiltRAF.current)
    tiltRAF.current = requestAnimationFrame(() => {
      if (tiltCardRef.current) {
        tiltCardRef.current.style.transform = `rotateY(${dx * 14}deg) rotateX(${-dy * 14}deg)`
        tiltCardRef.current.style.setProperty('--mx', `${(dx + 0.5) * 100}%`)
        tiltCardRef.current.style.setProperty('--my', `${(dy + 0.5) * 100}%`)
      }
    })
  }
  const handleTiltLeave = () => {
    cancelAnimationFrame(tiltRAF.current)
    if (tiltCardRef.current) tiltCardRef.current.style.transform = 'rotateY(0) rotateX(0)'
  }

  return (
    <>
      <Navbar variant="home" />

      {/* ── HERO ── */}
      <section className="hero" id="home">
        <div className="hero-left" ref={heroLeftRef}>
          {/* <div className="eyebrow">
            <span className="eyebrow-dot" />
            UC Berkeley · CS + Data Science · Class of '27
          </div> */}
          <h1 className="hero-name">
            <span className="line-1">Alyssa Cheng</span>
            {/* <span className="line-2">Cheng</span> */}
          </h1>
          <div className="hero-typing">
            <span className="chev">&gt;</span>
            <TypingText />
            <span className="cursor" />
          </div>
          <p className="hero-bio">
            Hi! I'm a student at UC Berkeley studying Data Science & Computer Science. 
            I'm passionate about building innovative solutions and exploring the intersection of 
            technology, creativity, and social innovation.
          </p>
          <div className="hero-ctas">
            <a href="/#experience" className="btn btn-ghost">VIEW WORK <span className="arrow">→</span></a>
          </div>
        </div>

        <div className="hero-right" ref={heroRightRef}
             onMouseMove={handleTiltMove} onMouseLeave={handleTiltLeave}>
          <div className="tilt-card" ref={tiltCardRef}>
            <div className="tilt-corner tl" />
            <div className="tilt-corner tr" />
            <div className="tilt-corner bl" />
            <div className="tilt-corner br" />
            <div className="tilt-card-frame">
              <img src="/images/alyssa.png" alt="Alyssa Cheng" />
            </div>
            <div className="tilt-gloss" />
            <div className="tilt-chip chip-location">
              <span className="chip-dot" />SF / LA
            </div>
            <div className="tilt-chip chip-role">
              <span className="chip-dot" /> UC BERKELEY '27
            </div>
          </div>
        </div>

        <div className="scroll-hint">
          <span>scroll</span>
          <div className="scroll-hint-line" />
        </div>
      </section>

      {/* ── EXPERIENCE ── */}
      <section id="experience">
        <div className="section-header reveal">
          <div>
            <span className="section-num">where I've learned and grown</span>
            <h2 className="section-title">Experience</h2>
            <a href="/images/Alyssa_Cheng_Resume.pdf" target="_blank" rel="noopener noreferrer"
               className="btn btn-ghost">Resume <span className="arrow">↗</span></a>
          </div>
          {/* <p className="section-sub">where I've learned and grown as a developer.</p> */}
        </div>
        <div className="home-timeline">
          {EXPERIENCES.map((exp, i) => (
            <div
              key={exp.company}
              className={`tl-item${exp.incoming ? ' current' : ''}`}
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div className="tl-head">
                <span className="tl-company">{exp.company}</span>
                <span className="tl-date">
                  {exp.incoming && <span className="incoming">●</span>}
                  {exp.date}
                </span>
              </div>
              <div className="tl-role">{exp.role}</div>
              <p style={{ fontFamily: 'Alegreya Sans', fontSize: '16px', lineHeight: '1.65', color: 'var(--ink-soft)', marginBottom: '16px' }}>{exp.bullets[0]}</p>
              <div className="tl-tags">
                {exp.tags.map(t => <span key={t} className="tag">{t}</span>)}
              </div>
            </div>
          ))}
        </div>
        <div className="section-cta">
          <Link to="/experience" className="btn btn-ghost">more details <span className="arrow">→</span></Link>
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section id="projects">
        <div className="section-header reveal">
          <div>
            <span className="section-num">hackathons & fun work</span>
            <h2 className="section-title">Projects</h2>
          </div>
          {/* <p className="section-sub">side projects, hackathon wins, and the occasional brand system.</p> */}
        </div>
        <div className="projects-grid">
          {HOME_PROJECTS.map((p, i) => <PCard key={p.title} project={p} index={i} />)}
        </div>
        <div className="projects-more reveal">
          <Link to="/projects" className="btn btn-ghost">All projects <span className="arrow">→</span></Link>
        </div>
      </section>

      {/* ── SKILLS ── */}
      <section id="skills">
        {/* <div className="section-header reveal">
          <div>
            <span className="section-num">04 — Toolbox</span>
            <h2 className="section-title">What I<br />reach for.</h2>
          </div>
          <p className="section-sub">code, frameworks, the occasional design tool — the stuff that's on my desk.</p>
        </div> */}
        <div className="new-skills-grid">
          {SKILLS.map((cat, i) => (
            <div key={cat.label} className="reveal" style={{ transitionDelay: `${i * 0.06}s` }}>
              <div className="skill-cat-label">{cat.label}</div>
              <div className="skill-chips">
                {cat.items.map(item => <span key={item} className="skill-chip">{item}</span>)}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  )
}
