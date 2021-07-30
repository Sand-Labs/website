import Container from './container'
import { EXAMPLE_PATH } from '../lib/constants'

export default function Footer() {
    return (
      <footer className="sticky bottom-0 bg-gradient-to-r from-primary to-secondary" style={{height: "5vh"}}>
        <Container>
          <div className="py-4 flex flex-col lg:flex-row items-center justify-between" style={{height: "5vh"}}>
            <div className="py-4 w-32 lg:w-96 flex flex-col lg:flex-row items-center justify-between">
            <a target="_blank" rel="noopener noreferrer" className="transform hover:origin-top-left hover:scale-150 hover:-rotate-12 transition delay-100 duration-400 ease-in-out hover:m-4  hover:rounded-xl" href="https://github.com/Sand-Labs"><img className="max-h-40 h-12 p-2" color="#181717" src="assets/lp/icons/github-colorized.svg"/>
              </a>
              <a target="_blank" rel="noopener noreferrer" className="transform hover:origin-top hover:scale-150 hover:rotate-12 transition delay-100 duration-400 ease-in-out hover:p-18 hover:rounded-xl" href="https://www.reddit.com/r/SandLabs/"><img className="max-h-40 h-12 p-2" color="#181717" src="assets/lp/icons/reddit-colorized.svg"/>
              </a>
              <a target="_blank" rel="noopener noreferrer" className="transform hover:origin-top-left hover:scale-150 hover:-rotate-12 transition delay-100 duration-400 ease-in-out hover:m-4  hover:rounded-xl" href="https://medium.com/sandlabs"><img className="max-h-40 h-12 p-2" color="#181717" src="assets/lp/icons/medium.svg"/>
              </a>
              <a target="_blank" rel="noopener noreferrer" className="transform hover:origin-top hover:scale-150 hover:rotate-12 transition delay-100 duration-400 ease-in-out hover:p-18 hover:rounded-xl" href="https://twitter.com/SandLabs_"><img className="max-h-40 h-12 p-2" color="#181717" src="assets/lp/icons/twitter-colorized.svg"/>
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
                © <span class="font-extrabold">SandLabs</span> 2021
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