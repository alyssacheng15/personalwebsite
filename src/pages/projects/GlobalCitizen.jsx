import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom'

export default function GlobalCitizen() {
  return (
    <div className="project-detail">
      <Navbar />
      <div className="intro">
        <div className="introtext">
          <h1>Global Citizen</h1>
          <h4>A project combining cultural values and web development — two of my favorite things. Along with a peer, we developed an online interactive curriculum that teaches young people how complex modern societies really are.</h4>
          <p className="role">role: research into culture and international relations, web development</p>
          <a href="https://globalcitizen.cargo.site" target="_blank" rel="noopener noreferrer" className="btn">view live</a>
        </div>
        <img className="side-img" src="/projects/images/gcside.png" alt="Global Citizen side" />
      </div>

      <div>
        <img className="full-img" src="/projects/images/gcfinal.png" alt="Final product" />
      </div>

      <div>
        <h1 className="section-title">research.</h1>
        <div className="two-col">
          <img className="col-img" src="/projects/images/gcresearch.png" alt="Research" />
          <p className="col-text">We gathered various regions of the world, and did a deep dive on the cultural values, stereotypes, and current events on each topic.</p>
        </div>
        <div className="two-col" style={{flexDirection:'row-reverse'}}>
          <img className="col-img" src="/projects/images/gcresearch2.png" alt="Research 2" />
          <p className="col-text" style={{marginLeft:'9vw', marginRight:'16vw'}}>For example, we researched about Bossa Nova in Brazil. We focused on the background, origin, composition, lyrics, artists, and contemporary connections.</p>
        </div>
      </div>

      <div>
        <h1 className="section-title">demo.</h1>
        <p className="section-text">Using Cargo and Vev Design, I created an interactive game-like homepage that gathers together all of my research.</p>
        <p className="section-text">Scroll below!</p>
        <iframe className="detail-iframe" src="https://globalcitizen.cargo.site" width="80%" height="500px" frameBorder="0" allowFullScreen title="Global Citizen demo" />
        <a href="https://globalcitizen.cargo.site" target="_blank" rel="noopener noreferrer" className="btn-center">view live</a>
      </div>

      <div className="prev-next">
        <Link to="/projects/foodymoody">previous project</Link>
        <Link to="/projects/personal">next project</Link>
      </div>

      <Footer />
    </div>
  )
}
