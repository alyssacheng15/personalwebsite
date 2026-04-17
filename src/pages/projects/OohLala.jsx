import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom'

export default function OohLala() {
  return (
    <div className="project-detail">
      <Navbar />
      <div className="intro">
        <div className="introtext">
          <h1>Ooh La La Panini Website</h1>
          <h4>Ooh La La Panini is a small restaurant in Santa Clarita that specializes in gourmet café style food. The goal of this project was to create an interactive website that showcases their restaurant, as well as develop an ordering system for online purchases.</h4>
          <p className="role">role: ui/ux design, web design, figma wireframing, branding guide, presentation</p>
          <a href="https://oohlalapanini.square.site/" target="_blank" rel="noopener noreferrer" className="btn">view live</a>
        </div>
        <img className="side-img" src="/projects/images/sideoohlala.png" alt="Ooh La La side" />
      </div>

      <div>
        <img className="full-img" src="/projects/images/finaloohlala.png" alt="Final product" />
      </div>

      <div>
        <h1 className="section-title">presentation + brand guide.</h1>
        <img className="full-img" src="/projects/images/brandoohlala.png" alt="Brand guide" />
        <p className="section-text">We created a brand kit and presentation for the owners of Ooh La La Panini, taking inspiration from their menu and their store aesthetic.</p>
      </div>

      <div>
        <h1 className="section-title">colors and typography.</h1>
        <div className="two-col">
          <img className="col-img" src="/projects/images/oohlalacolor.png" alt="Colors" />
          <p className="col-text">The colors were selected from their Instagram account and Yelp page. We incorporated six different shades that represent their minimalistic theme.</p>
        </div>
        <div className="two-col" style={{flexDirection:'row-reverse'}}>
          <img className="col-img" src="/projects/images/oohlalatypography.png" alt="Typography" />
          <p className="col-text" style={{marginLeft:'9vw', marginRight:'16vw'}}>The typography was taken from their menu font, and alternate fonts that we thought would fit their aesthetic.</p>
        </div>
      </div>

      <div>
        <h1 className="section-title">wireframing with figma.</h1>
        <p className="section-text">We used Figma, an application for user interface design, to wireframe and plot out the main points of the site.</p>
        <img className="full-img" src="/projects/images/oohlalafigma.png" alt="Figma wireframe" />
      </div>

      <div>
        <h1 className="section-title">demo.</h1>
        <p className="section-text">Since the owners had to continuously update the site and use the online ordering interface, we chose to develop the website with Square.</p>
        <p className="section-text">Scroll down!</p>
        <iframe className="detail-iframe" src="https://oohlalapanini.square.site/" width="80%" height="500px" frameBorder="0" allowFullScreen allow="geolocation" title="Ooh La La demo" />
        <a href="https://oohlalapanini.square.site/" target="_blank" rel="noopener noreferrer" className="btn-center">view live</a>
      </div>

      <div className="prev-next">
        <Link to="/projects/sft">previous project</Link>
        <Link to="/projects/creativecoding">next project</Link>
      </div>

      <Footer />
    </div>
  )
}
