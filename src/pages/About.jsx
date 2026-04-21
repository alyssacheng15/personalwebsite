import { useState, useRef, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const FAVS_FOOD = [
  { icon: '☕', label: 'Asha Tea House', href: 'https://ashateatwice.com' },
  { icon: '◎', label: 'Ippudo Ramen', href: 'https://www.ippudousa.com' },
  { icon: '⬢', label: 'Nopa', href: 'https://www.nopasf.com' },
  { icon: '◑', label: 'Flour & Water', href: 'https://www.flourandwater.com' },
]

const FAVS_MUSIC = [
  { icon: '♫', label: 'Cigarettes After Sex', href: 'https://open.spotify.com/artist/2takcwgx4utyer3u4tn5zb' },
  { icon: '♪', label: 'beabadoobee', href: 'https://open.spotify.com/artist/6fy5zio8b37mn7g3t9gcht' },
  { icon: '≋', label: 'Ethel Cain', href: 'https://open.spotify.com/artist/6mfzfcqP9J5JxCuLkEfKc1' },
  { icon: '♬', label: 'Mitski', href: 'https://open.spotify.com/artist/7nqQ3AS0sKSDjKjX0Tpz1c' },
]

const FAVS_DESTINATIONS = [
  { icon: '✈︎', label: 'Tokyo' },
  { icon: '◉', label: 'Iceland' },
  { icon: '△', label: 'Patagonia' },
  { icon: '◈', label: 'Portugal' },
]

const FAVS_MATCHA = [
  { icon: '◈', label: 'Samovar Tea Lounge', href: 'https://www.samovartea.com' },
  { icon: '≋', label: 'Ceremonial matcha', href: 'https://www.encha.com' },
  { icon: '☕', label: 'Late-night lattes', href: 'https://www.bluebottlecoffee.com' },
  { icon: '◐', label: 'Golden hour tea', href: 'https://www.adagio.com' },
]

const HOBBIES = [
  {
    num: '01',
    label: 'Flying',
    emoji: '✈︎',
    desc: "Student pilot, chasing my PPL. Favorite moment: the second the wheels first leave the ground. Bay Area tower, Reid-Hillview 31R.",
    image: 'https://picsum.photos/400/400?random=1',
    wide: true,
  },
  {
    num: '02',
    label: 'Piano',
    emoji: '♪',
    desc: 'Classically trained since age five. Chopin ballades & Debussy on repeat. A piano is the closest thing I have to a diary.',
    image: 'https://picsum.photos/400/400?random=2',
  },
  {
    num: '03',
    label: 'Food',
    emoji: '◎',
    desc: "Self-appointed Berkeley food scout. Built Triply partly because I have too many saved TikToks of restaurants I'll never find again.",
    image: 'https://picsum.photos/400/400?random=3',
  },
  {
    num: '04',
    label: 'Languages',
    emoji: '◈',
    desc: "Duolingo streak I won't admit to out loud. English & Mandarin fluently; currently: Spanish & Swedish. Linguistics is just pattern-matching with a soul.",
    image: 'https://picsum.photos/400/400?random=4',
  },
  {
    num: '05',
    label: 'Sunsets',
    emoji: '◐',
    desc: 'Collector of golden hours across skylines, mountains, and coastlines.',
    image: 'https://picsum.photos/400/400?random=5',
  },
  {
    num: '06',
    label: 'Traveling',
    emoji: '◉',
    desc: 'Happiest with a one-way ticket and no plan. Maintaining a running list of places I want to land — in both senses.',
    image: 'https://picsum.photos/800/400?random=6',
    wide: true,
  },
  {
    num: '07',
    label: 'Music',
    emoji: '≋',
    desc: 'Building playlists for every mood and moment. Currently: late-night lo-fi and Radiohead deep cuts.',
    image: 'https://picsum.photos/400/400?random=7',
  },
  {
    num: '08',
    label: 'Hiking',
    emoji: '△',
    desc: 'Exploring trails and chasing mountain views. The Bay Area has more than people expect.',
    image: 'https://picsum.photos/400/400?random=8',
  },
  {
    num: '09',
    label: 'Reading',
    emoji: '▣',
    desc: 'Biographies of engineers, airline ops manuals, and the occasional sci-fi. Currently: Skunk Works, then back to Project Hail Mary.',
    image: 'https://picsum.photos/400/400?random=9',
  },
  {
    num: '10',
    label: '3D & Design',
    emoji: '⬡',
    desc: 'Autodesk Maya, Spline, Figma. Half my side projects start as an object rotating slowly in a dark scene.',
    image: 'https://picsum.photos/400/400?random=10',
  },
]

function FavPill({ item }) {
  const content = (
    <>
      <span className="fav-pill-icon">{item.icon}</span>
      {item.label}
    </>
  )

  if (item.href) {
    return (
      <a href={item.href} target="_blank" rel="noopener noreferrer" className="fav-pill">
        {content}
      </a>
    )
  }

  return <span className="fav-pill">{content}</span>
}

const HOBBY_SIZES = {
  'p-xs':  { w: 122, imgH: 140 },
  'p-sm':  { w: 142, imgH: 168 },
  'p-md':  { w: 162, imgH: 196 },
  'p-lg':  { w: 182, imgH: 224 },
  'l-sm':  { w: 188, imgH: 108 },
  'l-md':  { w: 218, imgH: 128 },
  'l-lg':  { w: 250, imgH: 150 },
}

const HOBBY_ROW = [
  { ...HOBBIES[0], size: 'p-sm',  rot: -4  },
  { ...HOBBIES[1], size: 'l-md',  rot:  3  },
  { ...HOBBIES[2], size: 'p-lg',  rot: -2  },
  { ...HOBBIES[3], size: 'p-sm',  rot:  5  },
  { ...HOBBIES[4], size: 'l-sm',  rot: -3  },
  { ...HOBBIES[5], size: 'l-lg',  rot:  2  },
  { ...HOBBIES[6], size: 'p-md',  rot: -5  },
  { ...HOBBIES[7], size: 'p-lg',  rot:  3  },
  { ...HOBBIES[8], size: 'p-xs',  rot: -4  },
  { ...HOBBIES[9], size: 'p-md',  rot:  2  },
]

function HobbyPolaroid({ item }) {
  const [hov, setHov] = useState(false)
  const sz = HOBBY_SIZES[item.size]

  return (
    <div
      className={`hobby-pol${hov ? ' hobby-pol--hovered' : ''}`}
      style={{ '--rot': `${item.rot}deg`, '--w': `${sz.w}px`, '--img-h': `${sz.imgH}px` }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      <div className="hobby-pol-pin" />
      <div className="hobby-pol-img">
        {item.image
          ? <img src={item.image} alt={item.label} />
          : <div className="hobby-pol-placeholder"><span>{item.emoji}</span></div>
        }
      </div>
      <div className="hobby-pol-caption">
        <span className="hobby-pol-emoji">{item.emoji}</span>
        <span className="hobby-pol-label">{item.label}</span>
      </div>
    </div>
  )
}

function HobbiesGalleryRow({ items }) {
  const rowRef = useRef(null)
  const [hint, setHint] = useState(false)

  useEffect(() => {
    const el = rowRef.current
    if (!el) return

    const check = () => {
      const overflows = el.scrollWidth > el.clientWidth + 4
      const atEnd     = el.scrollLeft + el.clientWidth >= el.scrollWidth - 16
      setHint(overflows && !atEnd)
    }

    check()
    el.addEventListener('scroll', check, { passive: true })
    window.addEventListener('resize', check)
    return () => {
      el.removeEventListener('scroll', check)
      window.removeEventListener('resize', check)
    }
  }, [])

  return (
    <div className="hobbies-gallery-wrap">
      <div className={`hobbies-gallery-hint${hint ? ' hobbies-gallery-hint--visible' : ''}`}>
        <span>scroll to see more</span>
        <svg width="16" height="10" viewBox="0 0 16 10" fill="none"
          stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="0" y1="5" x2="13" y2="5" />
          <polyline points="9,1 13,5 9,9" />
        </svg>
      </div>
      <div className="hobbies-gallery-line" />
      <div className="hobbies-gallery-row" ref={rowRef}>
        {items.map((item, i) => <HobbyPolaroid key={i} item={item} />)}
      </div>
    </div>
  )
}

function HobbiesGallery() {
  return (
    <section className="hobbies-gallery-section">
      <div className="section-header reveal">
        <div>
          <span className="section-num">off-duty</span>
          <h2 className="section-title">Hobbies</h2>
        </div>
      </div>
      <HobbiesGalleryRow items={HOBBY_ROW} />
    </section>
  )
}

export default function About() {
  return (
    <>
      <Navbar />

      {/* Page header */}
      <div className="page-head">
        <span className="section-num">● About</span>
        <h1>Hi! I'm Alyssa.</h1>
        {/* <p className="sub">a short flight log of how i got here — and where i'm headed.</p> */}
      </div>

      {/* Bio */}
      <div className="about-bio">
        {/* <div className="about-bio-meta reveal">
          <div className="row"><span className="label">Name</span><span className="val">Alyssa Cheng</span></div>
          <div className="row"><span className="label">Based</span><span className="val blue">Berkeley · SF Bay</span></div>
          <div className="row"><span className="label">School</span><span className="val">UC Berkeley · '27</span></div>
          <div className="row"><span className="label">Studying</span><span className="val">CS + Data Science</span></div>
          <div className="row"><span className="label">Now</span><span className="val">Prepping for Salesforce summer</span></div>
          <div className="row"><span className="label">Open to</span><span className="val blue">full-time '27 · early-stage</span></div>
        </div> */}
              {/* Photos */}
      <div className="about-photos-row">
        <img src="/images/alyssa1.jpeg" alt="Alyssa" className="about-photo photo-1 reveal" />
        <img src="/images/alyssa2.jpeg" alt="Alyssa" className="about-photo photo-2 reveal" style={{ transitionDelay: '.08s' }} />
        {/* <img src="/images/alyssa3.jpeg" alt="Alyssa" className="about-photo photo-3 reveal" style={{ transitionDelay: '.16s' }} /> */}
      </div>
        <div className="about-bio-text reveal" style={{ transitionDelay: '.1s' }}>
          <p>
            I grew up curious about how things fit together — planes, circuits, sentences, food.
            That curiosity became a habit: pick one problem apart, then the next. Now I study CS
            and data science at Berkeley, and I spend my time shipping real software.
          </p>
          <p>
            Most recently I built LiDAR-to-depth pipelines at Lucid and shipped a semantic
            ad-ranking model to Nextdoor's feed. Before that I wrote
            an LLM SDK that lets agents swap on Uniswap at Magic Labs. Next: distributed
            messaging on the MuleSoft team at Salesforce.
          </p>
          <p>
            Off the keyboard, I'm training for my private pilot's license — slowly racking up
            hours at Reid-Hillview. I also play too much piano, study too much Spanish on
            Duolingo, and maintain a running list of places I want to land (in both senses).
          </p>
          <p>
            I like working with people who take craft seriously and ship fast. If that sounds
            like you, <a href="mailto:alyssacheng@berkeley.edu">say hi</a>.
          </p>
        </div>
      </div>

      {/* Divider */}
      {/* <div className="runway-divider">
        <div className="runway-line" />
        <span className="runway-label">▲ outside of work</span>
        <div className="runway-line" />
      </div> */}

      {/* Hobbies */}
      <HobbiesGallery />


      {/* Current Favs */}
      <section className="favs-section">
        <div className="section-header reveal">
          <div>
            <span className="section-num">currently</span>
            <h2 className="section-title">What I'm<br />into right now.</h2>
          </div>
          {/* <p className="section-sub">& a few things i'm saving for later.</p> */}
        </div>

        <div className="favs-groups">
          <div className="favs-col reveal">
            <p className="favs-group-label">🍽️ Food</p>
            <div className="favs-pills">
              {FAVS_FOOD.map((item) => (
                <FavPill key={item.label} item={item} />
              ))}
            </div>
          </div>
          <div className="favs-divider" />
          <div className="favs-col reveal">
            <p className="favs-group-label">♫ Music</p>
            <div className="favs-pills">
              {FAVS_MUSIC.map((item) => (
                <span key={item.label} className="fav-pill">
                  <span className="fav-pill-icon">{item.icon}</span>
                  {item.label}
                </span>
              ))}
            </div>
          </div>
          <div className="favs-divider" />
          <div className="favs-col reveal">
            <p className="favs-group-label">✈︎ Next Destinations</p>
            <div className="favs-pills">
              {FAVS_DESTINATIONS.map((item) => (
                <span key={item.label} className="fav-pill">
                  <span className="fav-pill-icon">{item.icon}</span>
                  {item.label}
                </span>
              ))}
            </div>
          </div>
          <div className="favs-divider" />
          <div className="favs-col reveal">
            <p className="favs-group-label">🍵 Matcha</p>
            <div className="favs-pills">
              {FAVS_MATCHA.map((item) => (
                <span key={item.label} className="fav-pill">
                  <span className="fav-pill-icon">{item.icon}</span>
                  {item.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer quote="Ready to" subQuote="trade altitude stories?" />
    </>
  )
}
