import Link from 'next/link'
import Blinker from "./blinker"
export default function Header({page}) {
  return (
    <a href="/blog" className="flex flex-row"> 
    <h2 className="my-4 py-2 text-3xl md:text-4xl lg:text-5xl ml-2 text-transparent bg-clip-text bg-gradient-to-tr from-Secondary via-Accent to-dark" style={{"fontFamily": "menlo", "letterSpacing": "-0.1em"}}>
         SandLabs-Blog:{page} visitor$ &thinsp;
    </h2>
    <Blinker/></a>
  )
}
