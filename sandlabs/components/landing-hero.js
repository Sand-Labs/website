import Container from './container'
import { EXAMPLE_PATH } from '../lib/constants'

export default function LandingHero() {
  
  return (
    <section>
      <div className="landingHero">
       <Container>
       <Container>
        <div className="landingTitle">
          <h1 className="landingtitle">
            SandLabs
          </h1>
          <h2 className="subtitle">
            Exploring blockchain technology with data science and software
          </h2>
        </div>
        </Container>
        </Container>
        {/* <div className="downArrow"><a><h5 class="downNote">Read More Below</h5><img className="downImg" src="/assets/lp/icons/trowel.svg"></img></a></div> */}
        <div className="downArrow"><a href="/#about"><img className="downImg" src="/assets/lp/icons/trowel.svg"></img></a></div>
      </div>
    </section>
  )
}
