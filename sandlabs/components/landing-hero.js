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
        <div className="w-48 mx-auto">
          <div className="downArrow"><a href="/#about"><Image className="downImg" layout="responsive" src={trw}/></a></div>
        </div>
      </div>
    </section>
  )
}
