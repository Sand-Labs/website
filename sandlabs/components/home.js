import Image from 'next/image'
import logo from '../public/assets/lp/logos/logo-transparent.svg'

export default function Home() {
return(
  <div class="flex flex-row justify-start md:justify-start lg:justify-start content-start" style={{"width": "35vh"}}>
    <a href="/"><Image width={100} height={100} className="justify-self-start mx-0 px-0" src={logo}/></a>
    <a className="self-center text-2xl md:text-3xl lg:text-4xl pl-0 ml-0 font-bold tracking-tighter leading-tight text-left text-transparent bg-clip-text bg-gradient-to-br from-dark to-accent hover:to-Accent" href="/">SandLabs</a>
  </div>
)}
