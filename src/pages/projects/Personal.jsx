import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom'

export default function Personal() {
  return (
    <div className="project-detail">
      <Navbar />
      <div className="intro">
        <div className="introtext">
          <h1>Personal Website Process</h1>
          <h4>A look into the process I took to design and code this website, as well as the branding, colors, and typography.</h4>
          <p className="role">role: coding in html/css, javascript, figma wireframing</p>
          <Link to="/" className="btn">view live</Link>
          <a href="https://github.com/alyssacheng15/personalwebsite" target="_blank" rel="noopener noreferrer" className="btn" style={{marginLeft:'1vw'}}>github repo</a>
        </div>
        <img className="side-img" src="/projects/images/personalside.webp" alt="Personal Website side" />
      </div>

      <div>
        <img className="full-img" src="/projects/images/pwfinal.png" alt="Final product" />
      </div>

      <div>
        <h1 className="section-title">branding.</h1>
        <img className="full-img" src="/projects/images/personalbranding.png" alt="Branding" />
      </div>

      <div>
        <h1 className="section-title">wireframing with figma.</h1>
        <p className="section-text">I used Figma to map out and wireframe a rough outline of my website and made some of the graphics in Canva.</p>
        <img className="full-img" src="/projects/images/personalfigma.png" alt="Figma wireframe" />
      </div>

      <div>
        <h1 className="section-title">testing the cursor.</h1>
        <div className="two-col">
          <video className="col-img" src="/projects/images/personalcursor.mov" autoPlay muted loop style={{objectFit:'cover'}} />
          <p className="col-text">With Javascript and CSS, I created an interactive animated cursor that expands when a link is hovered. I also developed numerous animations for buttons and links.</p>
        </div>
        <div className="two-col" style={{flexDirection:'row-reverse'}}>
          <img className="col-img" src="/projects/images/personalcode.png" alt="Code" />
          <p className="col-text" style={{marginLeft:'9vw', marginRight:'16vw'}}>I experimented with z-values, transitions, and transformations in CSS, and made functions and query selectors with Javascript.</p>
        </div>
      </div>

      <div>
        <h1 className="section-title">coding the webpages.</h1>
        <img className="full-img" src="/projects/images/personalwebpages.png" alt="Webpages" />
        <p className="section-text">At the end, I had over a dozen code files, and thousands of lines of code.</p>
      </div>

      <div>
        <h1 className="section-title">3-d modeling.</h1>
        <p className="section-text">Using Spline, I modeled and surfaced a 3-D rendering of a workspace with all my favorite things — music, coding, and travel.</p>
        <iframe className="detail-iframe" src="https://my.spline.design/miniroommusiccopy-5244fdf1e04ac8a080fb9ba7feaae1ac/" frameBorder="0" width="100%" height="400px" title="Spline model" />
      </div>

      <div>
        <h1 className="section-title">demo.</h1>
        <p className="section-text">After dozens of hours of coding, modeling, and designing, I deployed my website using Netlify.</p>
        <p className="section-text">Scroll down!</p>
        <iframe className="detail-iframe" src="https://alyssacheng.space" width="80%" height="500px" frameBorder="0" allowFullScreen allow="geolocation" title="Live site demo" />
        <Link to="/" className="btn-center">view live</Link>
      </div>

      <div className="prev-next">
        <Link to="/projects/globalcitizen">previous project</Link>
        <Link to="/projects/rise">next project</Link>
      </div>

      <Footer />
    </div>
  )
}
