import Image from 'next/image'
import trw from '../public/assets/lp/icons/trowel.svg'

export default function LandingHero() {
  return (
    <section>
      <div className="landingHero">
        <div className="landingTitle">
          <h1 className="landingtitle">
            SandLabs
          </h1>
          <h2 className="subtitle">
            Exploring blockchain technology with data science and software
          </h2>
        </div>
          <a href="/#about"><img className="transform animate-bounce h-1/4 w-auto absolute" style={{"bottom": "5vh", "margin-right": "auto", "margin-left": "auto", "left": 0,
"right": 0}} src="assets/lp/icons/trowel.svg"/></a>
      </div>
    </section>
  )
}
