import Container from './container'
import Image from 'next/image'
import gh from '../public/assets/lp/icons/github-colorized.svg'
import rdt from '../public/assets/lp/icons/reddit-colorized.svg'
import med from '../public/assets/lp/icons/medium.svg'
import twit from '../public/assets/lp/icons/twitter-colorized.svg'

export default function Footer() {
    return (
      <footer className="sticky bottom-0 bg-gradient-to-r from-primary to-secondary" style={{height: "5vh"}}>
        <Container>
          <div className="py-4 flex flex-col lg:flex-row items-center justify-between" style={{height: "5vh"}}>
            <div className="py-4 w-32 lg:w-96 flex flex-col lg:flex-row items-center justify-between">
            <a target="_blank" rel="noopener noreferrer" className="transform hover:origin-top-left hover:scale-150 hover:-rotate-12 transition delay-100 duration-400 ease-in-out hover:m-4  hover:rounded-xl pt-3 p-2" href="https://github.com/Sand-Labs"><Image height={40} width={40} className="self-center" src={gh}/>
              </a>
              <a target="_blank" rel="noopener noreferrer" className="transform hover:origin-top hover:scale-150 hover:rotate-12 transition delay-100 duration-400 ease-in-out hover:p-18 hover:rounded-xl pt-3 p-2" href="https://www.reddit.com/r/SandLabs/"><Image height={40} width={40} className="self-center" src={rdt}/>
              </a>
              <a target="_blank" rel="noopener noreferrer" className="transform hover:origin-top-left hover:scale-150 hover:-rotate-12 transition delay-100 duration-400 ease-in-out hover:m-4  hover:rounded-xl pt-3 p-2" href="https://medium.com/sandlabs"><Image height={40} width={40} className="self-center" src={med}/>
              </a>
              <a target="_blank" rel="noopener noreferrer" className="transform hover:origin-top hover:scale-150 hover:rotate-12 transition delay-100 duration-400 ease-in-out hover:p-18 hover:rounded-xl pt-3 p-2" href="https://twitter.com/SandLabs_"><Image height={40} width={40} className="self-center" src={twit}/>
              </a>
            </div>
            <div className="flex flex-col lg:flex-row justify-end items-center lg:pl-4 lg:w-1/2">
              <a target="_blank" rel="noopener noreferrer"
                href="mailto: admin@sandlabs.co"
                className="mx-3 bg-transparent hover:bg-accent hover:text-darker text-dark font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
              >
                Contact
              </a>
              <a
                href="/"
                className="mx-3 bg-transparent hover:bg-accent hover:text-darker text-dark font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
              >
                © <span className="font-extrabold">SandLabs</span> 2021
              </a>
              {/* <a
                href={`https://github.com/vercel/next.js/tree/canary/examples/${EXAMPLE_PATH}`}
                className="mx-3 font-bold hover:underline"
              >
                View on GitHub
              </a> */}
            </div>
          </div>
        </Container>
      </footer>
    )
  }  