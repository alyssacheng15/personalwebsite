import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom'

export default function DesignYourWorld() {
  return (
    <div className="project-detail">
      <Navbar />
      <div className="intro">
        <div className="introtext">
          <h1>Design Your World</h1>
          <h4>With a team, I coded a website for a project called Design Your World, which displays students' 3-D modeled "safe spaces" in the ideology of escapism.</h4>
          <p className="role">role: collaborative coding with html/css, figma wireframing</p>
          <a href="https://designyourwrld.com/" target="_blank" rel="noopener noreferrer" className="btn">view live</a>
          <a href="https://github.com/alyssacheng15/Design-Your-World" target="_blank" rel="noopener noreferrer" className="btn" style={{marginLeft:'1vw'}}>github repo</a>
        </div>
        <img className="side-img" src="/projects/images/dywside.png" alt="Design Your World side" />
      </div>

      <div>
        <img className="full-img" src="/projects/images/dywfinal.png" alt="Final product" />
      </div>

      <div>
        <h1 className="section-title">wireframing with figma.</h1>
        <p className="section-text">We used Figma to wireframe a rough foundation for what we wanted our website to look like, along with a color theme and typography.</p>
        <img className="full-img" src="/projects/images/dywfigma.png" alt="Figma wireframe" />
      </div>

      <div>
        <h1 className="section-title">collaborative coding.</h1>
        <img className="full-img" src="/projects/images/dywreplit.png" alt="Replit" />
        <p className="section-text">To code simultaneously with a team, we utilized Replit, a web-based IDE.</p>
      </div>

      <div>
        <h1 className="section-title">demo.</h1>
        <iframe className="detail-iframe" src="https://designyourwrld.com/" width="80%" height="500px" frameBorder="0" allowFullScreen title="Design Your World demo" />
        <a href="https://designyourwrld.com/" target="_blank" rel="noopener noreferrer" className="btn-center">view live</a>
      </div>

      <div className="prev-next">
        <Link to="/projects/rise">previous project</Link>
        <Link to="/projects/skin">next project</Link>
      </div>

      <Footer />
    </div>
  )
}
