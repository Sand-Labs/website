
import Image from 'next/image'

export default function FoundersFeature() {
  return (
<section>
<div className="flex flex-col md:flex-row lg:flex-row w-full h-1/2">
  <div className="flex flex-col content-between w-1/2 h-1/2 px-8 py-4 mr-2 bg-gradient-to-tr from-secondary to-accent bg-opacity-40">
    <Image layout="responsive" src="/assets/blog/authors/wyatt.jpg"/>
    <a target="_blank" rel="noopener noreferrer" className="mt-2 transform hover:underline hover:scale-110" href="https://wwalsh.io/"><span className="text-primary text-xl md:text-2xl lg:text-3xl font-bold">Wyatt Walsh</span></a>
    <span className="text-Accent text-sm md:text-base lg:text-lg italic">Founder and Lead Developer</span>
    <div className="flex flex-row justify-evenly mt-2 w-full">
      <a target="_blank" rel="noopener noreferrer" target="_blank" rel="noopener noreferrer" className="w-1/4 pr-2 transform hover:scale-125 hover:-rotate-12" href="https://github.com/wyattowalsh"><Image src="/assets/lp/icons/github-colorized.svg"/></a>
      <a target="_blank" rel="noopener noreferrer" className="w-1/4 px-2 transform hover:scale-125 hover:rotate-12" href="https://www.linkedin.com/in/wyattowalsh"><Image src="/assets/lp/icons/linkedin-colorized.svg"/></a>
      <a target="_blank" rel="noopener noreferrer" className="w-1/4 px-2 transform hover:scale-125 hover:-rotate-12" href="https://twitter.com/wyattowalsh"><Image src="/assets/lp/icons/twitter-colorized.svg"/></a>
      <a target="_blank" rel="noopener noreferrer" className="w-1/4 pl-2 transform hover:scale-125 hover:rotate-12" href="https://medium.com/@wyattowalsh"><Image src="/assets/lp/icons/medium.svg"/></a>
    </div>
  </div>
   <div className="flex flex-col w-1/2 h-1/2 px-8 py-4 ml-2 bg-gradient-to-tr from-secondary to-accent bg-opacity-40">
    <img className="w-2/3" src="/assets/blog/authors/ryan.jpg"/>
    <div className="my-2 transform hover:underline hover:scale-110"><span className="font-bold text-primary text-xl md:text-2xl lg:text-3xl">Ryan Epprecht</span></div>
    <span className="text-Accent text-sm md:text-base lg:text-lg italic">Chief of Operations; Editor</span>
    <div className="flex flex-row justify-evenly mt-2 w-full">
      <a target="_blank" rel="noopener noreferrer" className="w-1/4 transform hover:scale-125 hover:-rotate-12" href="https://github.com/repprecht"><Image src="/assets/lp/icons/github-colorized.svg"/></a>
      <a target="_blank" rel="noopener noreferrer" className="w-1/4 transform hover:scale-125 hover:rotate-12" href="https://www.linkedin.com/in/ryan-epprecht-177a6a105/"><Image src="/assets/lp/icons/linkedin-colorized.svg"/></a>
    </div>
  </div>
</div>
</section>
 )
}