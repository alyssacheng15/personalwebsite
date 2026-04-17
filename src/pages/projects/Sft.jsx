import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom'

export default function Sft() {
  return (
    <div className="project-detail">
      <Navbar />
      <div className="intro">
        <div className="introtext">
          <h1>Skills for Tomorrow</h1>
          <h4>With a team, I designed and developed a website for a project that focuses on providing young people with a toolkit of skills necessary to navigate the ever-changing world.</h4>
          <p className="role">role: collaborative web design and development, figma wireframing</p>
        </div>
        <img className="side-img" src="/projects/images/sftside.webp" alt="SFT side" />
      </div>

      <div>
        <img className="full-img" src="/projects/images/computer.png" alt="Final product" />
      </div>

      <div className="prev-next">
        <Link to="/projects/3d">previous project</Link>
        <Link to="/projects/oohlala">next project</Link>
      </div>

      <Footer />
    </div>
  )
}
