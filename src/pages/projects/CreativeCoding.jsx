import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom'

export default function CreativeCoding() {
  return (
    <div className="project-detail">
      <Navbar />
      <div className="intro">
        <div className="introtext">
          <h1>Creative Coding Research</h1>
          <h4>Creative coding and AI for social change — in-depth research on the positive and negative impacts of creative computing and artificial intelligence on societal transformation</h4>
          <p className="role">role: research into coding and ai, arcGIS storymaps, digital storytelling</p>
          <a href="https://arcg.is/1iXmzX" target="_blank" rel="noopener noreferrer" className="btn">view live</a>
        </div>
        <img className="side-img" src="/projects/images/ccside.jpeg" alt="Creative Coding side" />
      </div>

      <div>
        <img className="full-img" src="/projects/images/ccfinal.png" alt="Final product" />
      </div>

      <div>
        <h1 className="section-title">research.</h1>
        <div className="two-col">
          <img className="col-img" src="/projects/images/ccresearch1.png" alt="Research 1" />
          <p className="col-text">I did research on the history of computer science and created a timeline of important events. The information was organized on Milanote, a tool for organizing creative projects.</p>
        </div>
        <div className="two-col" style={{flexDirection:'row-reverse'}}>
          <img className="col-img" src="/projects/images/ccresearch2.png" alt="Research 2" />
          <p className="col-text" style={{marginLeft:'9vw', marginRight:'16vw'}}>I also took a deep dive into the history of artificial intelligence as well as the most advanced current AI systems that are in use.</p>
        </div>
      </div>

      <div>
        <h1 className="section-title">asking an ai.</h1>
        <p className="section-text">Since I was doing research about artificial intelligence, I was curious to see what an actual AI would think of the impact of creative coding to the world. I used ChatGPT, an advanced chatbot made by OpenAI.</p>
        <img className="full-img" src="/projects/images/ccai.png" alt="Asking AI" />
      </div>

      <div>
        <h1 className="section-title">analyzing data.</h1>
        <img className="full-img" src="/projects/images/ccanalyze.png" alt="Data analysis" />
        <p className="section-text">After gathering all the research, I analyzed the information regarding the ethics of AI.</p>
      </div>

      <div>
        <h1 className="section-title">demo.</h1>
        <p className="section-text">Using ArcGIS Storymaps, I combined all of my research and analyses into an interactive storytelling experience.</p>
        <p className="section-text">Scroll below!</p>
        <iframe className="detail-iframe" src="https://storymaps.arcgis.com/stories/09a0d47bb5304847bec6184cbe51a26a" width="80%" height="500px" frameBorder="0" allowFullScreen allow="geolocation" title="Creative Coding demo" />
        <a href="https://arcg.is/1iXmzX" target="_blank" rel="noopener noreferrer" className="btn-center">view live</a>
      </div>

      <div className="prev-next">
        <Link to="/projects/oohlala">previous project</Link>
        <Link to="/projects/foodymoody">next project</Link>
      </div>

      <Footer />
    </div>
  )
}
