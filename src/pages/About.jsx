import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const HOBBIES = [
  {
    icon: '✈️',
    label: 'Piloting',
    desc: 'Student pilot chasing her wings — one flight lesson at a time.',
  },
  {
    icon: '🎹',
    label: 'Piano',
    desc: 'Classically trained since age five, still playing late into the night.',
  },
  {
    icon: '🍜',
    label: 'Food connoisseur',
    desc: 'On a lifelong mission to find the world\'s best bowl of ramen.',
  },
  {
    icon: '🎧',
    label: 'Learning languages',
    desc: 'I speak English & Mandarin fluently. Currently learning Swedish and Spanish.',
  },
  {
    icon: '🌅',
    label: 'Chasing sunsets',
    desc: 'Collector of golden hours across skylines, mountains, and coastlines.',
  },
  {
    icon: '🌍',
    label: 'Traveling',
    desc: 'Happiest with a one-way ticket and no plan — 16 cities and counting.',
  },
  {
    icon: '🎵',
    label: 'Curating music',
    desc: 'Building playlists for every mood and moment.',
  },
  {
    icon: '🏔️',
    label: 'Hiking',
    desc: 'Exploring trails and chasing mountain views.',
  },
  {
    icon: '📚',
    label: 'Reading',
    desc: 'Lost in stories and new ideas.',
  },
  {
    icon: '🎨',
    label: 'Creating',
    desc: 'Designing and building beautiful things.',
  },
]

function HobbyCard({ hobby, index }) {
  return (
    <div
      className="hobby-card scroll-reveal"
      style={{ transitionDelay: `${index * 0.08}s` }}
    >
      <div className="hobby-placeholder">
        <img src="/images/alyssa2.jpeg" alt={hobby.label} />
      </div>
      <div className="hobby-label">{hobby.label}</div>
      <p className="hobby-desc">{hobby.desc}</p>
    </div>
  )
}

export default function About() {
  return (
    <>
      <div className="about-page">
        <Navbar />

        {/* ── Intro ── */}
        <div className="title" style={{ paddingTop: '8vw', paddingLeft: '5vw' }}>
          <h1>about.</h1>
          <p>a little about who i am</p>
        </div>
        {/* ── Alyssa Photos Row ── */}
        <div className="about-photos-row">
          <img src="/images/alyssa2.jpeg" alt="Alyssa 1" className="about-photo photo-1" />
          <img src="/images/alyssa1.jpeg" alt="Alyssa 2" className="about-photo photo-2" />
          <img src="/images/alyssa3.jpeg" alt="Alyssa 3" className="about-photo photo-3" />
        </div>
        <section className="about-intro scroll-reveal" style={{ paddingTop: '8vw' }}>
          <div className="about-intro-right">
            <p className="about-bio-desc">
              Hi! I'm Alyssa, a Computer Science + Data Science student at UC Berkeley building things at the intersection
              of software and the real world. You can find me grinding at a cafe, trying a new restaurant, at the
              piano, or up in the air flying!
            </p>
            <p className="about-bio-desc">
              I care about craft in code, in design, and in life. The best engineers are
              also curious humans, so I try to do everything with intention.
            </p>
          </div>
        </section>

        {/* ── Hobbies ── */}
        <section className="about-hobbies">
          <div className="title">
            <h1>beyond the code.</h1>
            <p>what keeps me grounded outside of a terminal</p>
          </div>
          <div className="hobbies-paragraph">
            <p>
              I spend my time {HOBBIES.map((h, i) => (
                <span key={h.label}>
                  {h.label.toLowerCase()}
                  {i < HOBBIES.length - 1 && ', '}
                  {i === HOBBIES.length - 2 && 'and '}
                </span>
              ))}. These are the things that bring me joy and creativity outside of code.
            </p>
          </div>
          <div className="hobbies-grid">
            {HOBBIES.map((h, i) => (
              <HobbyCard key={h.label} hobby={h} index={i} />
            ))}
          </div>
        </section>
      </div>

      <Footer />
    </>
  )
}
