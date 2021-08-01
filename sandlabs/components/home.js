import Image from 'next/image'
import logo from '../public/assets/lp/logos/logo-transparent.svg'

export default function Home() {
return(
  <div class="flex flex-row justify-center mt-2 md:justify-start lg:justify-start content-start">
    <a href="/"><Image width={100} className="justify-self-start" src={logo}/></a>
    <a className="self-center text-2xl md:text-3xl lg:text-4xl font-bold tracking-tighter leading-tight text-left text-transparent bg-clip-text bg-gradient-to-br from-dark to-accent hover:to-Accent" href="/">SandLabs</a>
  </div>
)}
