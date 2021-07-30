import Container from './container'

export default function Nav() {
  return (
    <header className="sticky top-0 bg-gradient-to-r from-primary to-secondary border-t border-Secondary">
      <Container>
        <div className="max-h-24 py-4 flex flex-col lg:flex-row items-center">
          <a href="/"><img className="max-h-40 "src="assets/lp/logos/logo-transparent.svg"/>
            </a>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2 text-transparent bg-clip-text bg-gradient-to-br from-dark to-accent hover:to-Accent">
          <a href="/">SandLabs</a>
          </h3>
          <nav className="flex flex-col lg:flex-row justify-end items-center lg:pl-4 lg:w-1/2">
            <a
              href="/blog"
              className="mx-3 bg-transparent hover:bg-accent hover:text-darker border border-black text-dark font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
            >
              Blog
            </a>
            {/* <a
              href={`https://github.com/vercel/next.js/tree/canary/examples/${EXAMPLE_PATH}`}
              className="mx-3 font-bold hover:underline"
            >
              View on GitHub
            </a> */}
          </nav>
        </div>
      </Container>
    </header>
  )
}
