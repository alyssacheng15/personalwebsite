import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const HOBBIES = [
  {
    num: '01',
    label: 'Flying',
    desc: "Student pilot, chasing my PPL. Favorite moment: the second the wheels first leave the ground. Bay Area tower, Reid-Hillview 31R.",
  },
  {
    num: '02',
    label: 'Piano',
    desc: 'Classically trained since age five. Chopin ballades & Debussy on repeat. A piano is the closest thing I have to a diary.',
  },
  {
    num: '03',
    label: 'Food',
    desc: "Self-appointed Berkeley food scout. Built Triply partly because I have too many saved TikToks of restaurants I'll never find again.",
  },
  {
    num: '04',
    label: 'Languages',
    desc: 'Duolingo streak I won\'t admit to out loud. English & Mandarin fluently; currently: Spanish & Swedish. Linguistics is just pattern-matching with a soul.',
  },
  {
    num: '05',
    label: 'Chasing sunsets',
    desc: 'Collector of golden hours across skylines, mountains, and coastlines.',
  },
  {
    num: '06',
    label: 'Traveling',
    desc: 'Happiest with a one-way ticket and no plan. Maintaining a running list of places I want to land — in both senses.',
  },
  {
    num: '07',
    label: 'Music',
    desc: 'Building playlists for every mood and moment. Currently: late-night lo-fi and Radiohead deep cuts.',
  },
  {
    num: '08',
    label: 'Hiking',
    desc: 'Exploring trails and chasing mountain views. The Bay Area has more than people expect.',
  },
  {
    num: '09',
    label: 'Reading',
    desc: 'Biographies of engineers, airline ops manuals, and the occasional sci-fi. Currently: Skunk Works, then back to Project Hail Mary.',
  },
  {
    num: '10',
    label: '3D & Design',
    desc: 'Autodesk Maya, Spline, Figma. Half my side projects start as an object rotating slowly in a dark scene.',
  },
]

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
      <section className="hobbies-section">
        <div className="section-header reveal">
          <div>
            <span className="section-num">off-duty</span>
            <h2 className="section-title">What fills<br />the rest.</h2>
          </div>
          <p className="section-sub">the list is long — here are the recurring ones.</p>
        </div>
        <div className="hobbies-grid-new">
          {HOBBIES.map((h, i) => (
            <div
              key={h.label}
              className="hobby-card-new reveal"
              style={{ transitionDelay: `${i * 0.06}s` }}
            >
              <div className="hobby-num">{h.num}</div>
              <div className="hobby-label-new">{h.label}</div>
              <p className="hobby-desc-new">{h.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer quote="Ready to" subQuote="trade altitude stories?" />
    </>
  )
}
