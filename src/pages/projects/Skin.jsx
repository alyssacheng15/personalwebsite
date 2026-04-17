import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom'

export default function Skin() {
  return (
    <div className="project-detail">
      <Navbar />
      <div className="intro">
        <div className="introtext">
          <h1>SKIN</h1>
          <h4>With a team, I designed and developed a website for a project that focuses on exposing the racism and prejudice of skin conditions. The platform serves as an information hub and a safe space.</h4>
          <p className="role">role: collaborative web design and development, figma wireframing</p>
        </div>
        <img className="side-img" src="/projects/images/skinside.jpeg" alt="SKIN side" />
      </div>

      <div>
        <img className="full-img" src="/projects/images/computer.png" alt="Final product" />
      </div>

      <div className="prev-next">
        <Link to="/projects/dyw">previous project</Link>
        <Link to="/projects/3d">next project</Link>
      </div>

      <Footer />
    </div>
  )
}
