import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { faMedium } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import logo from "../public/assets/lp/icons/sandcastle/icon-256x256.png"

export default function About() {
  return (
    <section id="about" style={{"scrollMarginTop": "0vh"}}>
      <div className="aboutHero">
         <div className="aboutTitle">
              Limitless Possibilities
         </div>
          <div  className="aboutPs">
          <p  className="aboutP">
          Combining blockchain technology with data scientific domains such as artificial intelligence & machine learning (AI & ML), data analytics, and cloud computing has the potential to realize tremendous value for a variety of stakeholders within the blockchain ecosystem and beyond.
          </p>
          <br />
          <p  className="aboutP">
          As software entities, blockchains produce burgeoning datasets across a variety of subjects, all of which can be examined using programmatic and statistical methodologies.
          </p>
          <hr className="m-4 mt-8"/>
          </div>
          <div  className="aboutCTA">
          <h4>
          Here at <span className="text-primary">SandLabs</span>, we peer through the lens of data science at blockchain-related topics to unearth deeper, more rich domain understandings to better realize societal benefit.
          </h4>
          </div>
          <div className="aboutIcon">
            <Image layout="responsive" src={logo}/>
				  </div>
        <div className="aboutButtons">
        <a
              href="/blog"
              className="blogButton"
            >
               <FontAwesomeIcon style={{"height": "5vh"}} icon={faMedium}/>  Read Our Blog
            </a>
          <a
              href="/#domains"
              className="domainButton"
            >
             <FontAwesomeIcon style={{"height": "5vh"}} icon={faGlobe}/>  View Our Domains of Emphasis 
            </a>
          </div>
      </div>
    </section>
  )
}
