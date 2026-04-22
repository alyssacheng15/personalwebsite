import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

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
      'Integrated Metric3D-based monocular depth models into the pipeline, performed LiDAR-to-camera calibration, as well as developed evaluation workflows to improve depth accuracy by ∼35% (AbsRel) and threshold accuracy to ∼70%',
      'Implemented enhancements such as distance-weighted loss and multi-camera normalization for maintaining reliability',
    ],
  },
  {
    company: 'Nextdoor',
    role: 'Software Engineer Intern · San Francisco, CA',
    date: 'May 2025 – Aug 2025',
    tags: ['Java', 'Python', 'PyTorch', 'HuggingFace', 'Kafka', 'NLP', 'Pandas'],
    bullets: [
      'Increased the relevance accuracy of Nextdoor\'s ad recommendation engine by ∼12% by pioneering/integrating a NLP model from HuggingFace to understand the semantic relationships between user posts and ads using Java and PyTorch',
      'Built a distributed data pipeline using Java and RPCs to ingest content categories from user feed, generate embeddings, and compute/stream the cosine similarity to the ads recommendation engine, processing ∼850k messages efficiently',
      'Evaluated and fine-tuned NLP embedding models, developing benchmarking scripts in Python with Pandas and Jupyter Notebooks to cut inference latency per message while preserving semantic similarity accuracy and guide model selection',
      'Reduced total processing time by ∼90% by implementing an asynchronous Kafka flow with dedicated consumers, enabling pods to start immediately while maintaining low-latency and accurate ad recommendations for all users',
    ],
  },
  {
    company: 'Magic Labs',
    role: 'Software Developer · Contract',
    date: 'Feb 2025 – May 2025',
    tags: ['Python', 'LangChain', 'OpenAI API', 'Blockchain', 'Web3'],
    bullets: [
      'Designed/implemented an LLM SDK for creating AI agents that can autonomously interact with blockchain networks and perform transactions such as wallet creation, balance checking, and currency swaps using Python and LangChain',
      'Integrated a decentralized, cryptocurrency exchange protocol (Uniswap) by connecting LangChain/OpenAI agents and the SDK to interact with ERC20 contracts and sign/broadcast transactions using cryptographic keys',
    ],
  },
]

export default function ExperiencePage() {
  return (
    <>
      <Navbar />
      <div className="page-head">
        <span className="section-num">● Experience</span>
        <h1>work experience</h1>
        <p className="sub"> I'm thankful to have been able to work with so many talented people and products</p>
        <a href="/images/Alyssa_Cheng_Resume.pdf" target="_blank" rel="noopener noreferrer"
           className="btn btn-ghost">Resume <span className="arrow">↗</span></a>
      </div>
      <section style={{ position: 'relative', padding: '0 8vw 7.8vw', maxWidth: '1600px', margin: '0 auto' }}>
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
              <ul className="tl-bullets">
                {exp.bullets.map((b, j) => <li key={j}>{b}</li>)}
              </ul>
              <div className="tl-tags">
                {exp.tags.map(t => <span key={t} className="tag">{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  )
}
