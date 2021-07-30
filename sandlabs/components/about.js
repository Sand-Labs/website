import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { faMedium } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function About() {
  return (
    <section id="about" style={{"scroll-margin-top": ""}}>
      <div className="aboutHero">
         <div className="aboutTitle">
            <h1>
                Limitless Possibilities
              </h1>
         </div>
          <div  className="aboutPs">
          <p  className="aboutP">
          Combining blockchain technology with data scientific domains such as artificial intelligence & machine learning (AI & ML), data analytics, and cloud computing has the potential to realize tremendous value for a variety of stakeholders within the blockchain ecosystem and beyond.
          </p>
          <br />
          <p  className="aboutP">
          As software entities, blockchains produce burgeoning datasets across a variety of subjects, all of which can be examined using programmatic and statistical methodologies. 
          </p>
          <hr class="my-4"/>
          </div>
          <div  className="aboutCTA">
          <h4>
          Here at <span class="text-primary">SandLabs</span>, we peer through the lens of data science at blockchain-related topics to unearth deeper, more rich domain understandings to better realize societal benefit.
          </h4>
          </div>
          <div class="aboutIcon">
            <img
              class="aboutIconImg"
              src="assets/lp/icons/sandcastle/icon-128x128.png"/>
				  </div>
        <div className="aboutButtons">
        <a
              href="/blog"
              className="mx-3 bg-transparent hover:bg-accent hover:text-darker border border-black border-4 text-dark font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
            >
               <FontAwesomeIcon icon={faMedium} style={{"height": "2.5rem"}}/>  Read Our Blog
            </a>
          <a
              href="/#domains"
              className="mx-3 bg-transparent hover:bg-accent hover:text-darker border border-black text-dark border-4 font-extrabold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
            >
             <FontAwesomeIcon icon={faGlobe} style={{"height": "2.5rem", "padding-bottom": "0.3rem"}}/>  View Our Domains of Emphasis 
            </a>
          </div>
      </div>
    </section>
  )
}
