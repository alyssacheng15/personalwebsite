import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom'

export default function ThreeD() {
  return (
    <div className="project-detail">
      <Navbar />
      <div className="intro">
        <div className="introtext">
          <h1>3-D Modeling Miniature City</h1>
          <h4>Using Autodesk Maya, I modeled, surfaced, rendered, and animated a bus as well as a miniature city around it.</h4>
          <p className="role">role: 3-d modeling, animation, computer aided design</p>
          <a href="https://www.youtube.com/watch?v=1JWQlsGojbY" target="_blank" rel="noopener noreferrer" className="btn">view video</a>
        </div>
        <img className="side-img" src="/projects/images/3dtop.jpeg" alt="3D top view" />
      </div>

      <div>
        <img className="full-img" src="/projects/images/3dside.jpg" alt="3D side view" />
      </div>

      <div>
        <h1 className="section-title">reference photos.</h1>
        <div className="two-col">
          <img className="col-img" src="/projects/images/buildings.jpeg" alt="Buildings reference" />
          <p className="col-text">I took inspiration for my miniature town square from the historic buildings from Gamla Stan in Stockholm, Sweden.</p>
        </div>
        <div className="two-col" style={{flexDirection:'row-reverse'}}>
          <img className="col-img" src="/projects/images/busmodel.jpeg" alt="Bus reference" />
          <p className="col-text" style={{marginLeft:'9vw', marginRight:'16vw'}}>The bus model was inspired by New York City buses and bus stops, specifically the Hyundai Universe.</p>
        </div>
      </div>

      <div>
        <h1 className="section-title">modeling.</h1>
        <p className="section-text">Creating the shape of the bus was the hardest part, which included modeling all the tiny details.</p>
        <img className="full-img" src="/projects/images/modeling.png" alt="Modeling" />
      </div>

      <div>
        <h1 className="section-title">surfacing.</h1>
        <img className="full-img" src="/projects/images/surfacing.png" alt="Surfacing" />
        <p className="section-text">I surfaced each individual structure of the bus, bus stop, and buildings with different materials.</p>
      </div>

      <div>
        <h1 className="section-title">video.</h1>
        <p className="section-text">After modeling, surfacing, and lighting, I used the animation features in Maya to create a drone-like rendering video with music in the background, edited with Final Cut Pro.</p>
        <iframe className="detail-iframe" width="560" height="315" src="https://www.youtube.com/embed/1JWQlsGojbY" title="3D City video" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
        <a href="https://www.youtube.com/watch?v=1JWQlsGojbY" target="_blank" rel="noopener noreferrer" className="btn-center">view live</a>
      </div>

      <div className="prev-next">
        <Link to="/projects/skin">previous project</Link>
        <Link to="/projects/sft">next project</Link>
      </div>

      <Footer />
    </div>
  )
}
