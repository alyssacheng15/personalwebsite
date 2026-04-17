import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom'

export default function Rise() {
  return (
    <div className="project-detail">
      <Navbar />
      <div className="intro">
        <div className="introtext">
          <h1>Rise</h1>
          <h4>Skin cancer, especially from sun exposure, is a huge problem in the US. With two peers, I modeled a sun protection curriculum from Australia's programs for young kids. We also 3-D rendered a hypothetical sunscreen product that would be more accessible to the public.</h4>
          <p className="role">role: research, 3-d modeling, presentation</p>
          <a href="https://www.canva.com/design/DAFY4R9b8aA/NLNrtNtNf7Ry_6JHgXXuCw/view" className="btn" target="_blank" rel="noopener noreferrer">curriculum</a>
          <a href="https://www.risesunscreen.squarespace.com" className="btn" target="_blank" rel="noopener noreferrer" style={{marginLeft:'1vw'}}>view website</a>
        </div>
        <img className="side-img" src="/projects/images/siderise.png" alt="Rise side" />
      </div>

      <div>
        <img className="full-img" src="/projects/images/risefinal.png" alt="Final product" />
      </div>

      <div>
        <h1 className="section-title">3-d modeling.</h1>
        <div className="two-col">
          <img className="col-img" src="/projects/images/riseresearch.png" alt="Research" />
          <p className="col-text">Using Milanote as an organizational tool, we researched sunscreen's history, ingredients, and applications.</p>
        </div>
      </div>

      <div>
        <h1 className="section-title">making the curriculum.</h1>
        <p className="section-text">Using the research that we compiled, we created a kid-friendly curriculum on the importance of sunscreen.</p>
        <div style={{position:'relative', width:'60%', paddingTop:'56.25%', display:'block', margin:'1.6em auto 0.9em', overflow:'hidden', borderRadius:'8px'}}>
          <iframe
            loading="lazy"
            style={{position:'absolute', width:'100%', height:'100%', top:0, left:0, border:'none', padding:0, margin:0}}
            src="https://www.canva.com/design/DAFY4R9b8aA/view?embed"
            allowFullScreen
            title="Rise curriculum"
          />
        </div>
      </div>

      <div>
        <h1 className="section-title">the product.</h1>
        <iframe className="detail-iframe" src="https://my.spline.design/untitledcopy-8014ce27aadd8a3086c30fafcffe77ef/" frameBorder="0" width="80%" height="500px" title="Rise product Spline" />
        <p className="section-text">We used Spline to make a hypothetical sunscreen product for a business that includes branding and product information.</p>
      </div>

      <div>
        <h1 className="section-title">website.</h1>
        <p className="section-text">Using Squarespace, we made a website to combine all our research, branding, curriculum, and product renderings.</p>
        <video className="demo-video" src="/projects/images/risefinal.mov" autoPlay muted loop />
        <a href="https://risesunscreen.squarespace.com" target="_blank" rel="noopener noreferrer" className="btn-center">view live</a>
      </div>

      <div className="prev-next">
        <Link to="/projects/personal">previous project</Link>
        <Link to="/projects/dyw">next project</Link>
      </div>

      <Footer />
    </div>
  )
}
