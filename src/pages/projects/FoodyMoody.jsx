import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom'

export default function FoodyMoody() {
  return (
    <div className="project-detail">
      <Navbar />
      <div className="intro">
        <div className="introtext">
          <h1>Foody Moody</h1>
          <h4>With a peer, I created an application that allows users in Santa Clarita to search for local small businesses and specific cuisines based on a mood quiz. This project focuses on small businesses, modern monopolies, authentic cuisines, and mental/physical health.</h4>
          <p className="role">role: coding in react, javascript, html/css, yelp api, postman</p>
          <a href="https://foodymoodyscv.netlify.app/" target="_blank" rel="noopener noreferrer" className="btn">view live</a>
          <a href="https://github.com/alyssacheng15/foodymoody" target="_blank" rel="noopener noreferrer" className="btn" style={{marginLeft:'1vw'}}>github repo</a>
        </div>
        <img className="side-img" src="/projects/images/fmside.png" alt="Foody Moody side" />
      </div>

      <div>
        <img className="full-img" src="/projects/images/fmfinal.png" alt="Final product" />
      </div>

      <div>
        <h1 className="section-title">using yelp api + postman.</h1>
        <p className="section-text">In order to retrieve data on restaurants in Santa Clarita, I used Yelp's free RESTful API called Fusion. I tested and ran it in Postman, an API design platform.</p>
        <img className="full-img" src="/projects/images/fmapi.png" alt="Yelp API" />
      </div>

      <div>
        <h1 className="section-title">designing with figma.</h1>
        <img className="full-img" src="/projects/images/fmfigma.png" alt="Figma design" />
        <p className="section-text">We used Figma to wireframe a rough foundation for what we wanted our application to look like, along with a color theme and typography.</p>
      </div>

      <div>
        <h1 className="section-title">testing.</h1>
        <div className="two-col">
          <img className="col-img" src="/projects/images/fmtesting1.png" alt="Testing 1" />
          <p className="col-text">We coded and tested the API and the application in VS Code, using React.js, a Javascript library, and a bit of HTML/CSS.</p>
        </div>
        <div className="two-col" style={{flexDirection:'row-reverse'}}>
          <img className="col-img" src="/projects/images/fmtesting2.jpeg" alt="Testing 2" />
          <p className="col-text" style={{marginLeft:'9vw', marginRight:'16vw'}}>We used command line as a tool for git and importing to Github, as well as Netlify for free continuous public deployment.</p>
        </div>
      </div>

      <div>
        <h1 className="section-title">demo.</h1>
        <video className="demo-video" src="/projects/images/fmvid.mov" autoPlay muted loop />
        <a href="https://foodymoodyscv.netlify.app/" target="_blank" rel="noopener noreferrer" className="btn-center">view live</a>
      </div>

      <div className="prev-next">
        <Link to="/projects/creativecoding">previous project</Link>
        <Link to="/projects/globalcitizen">next project</Link>
      </div>

      <Footer />
    </div>
  )
}
