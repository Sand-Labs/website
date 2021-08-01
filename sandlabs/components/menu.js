export default function Menu() {
  return(
    <div class="flex flex-col md:flex-row lg:flex-row justify-center content-center  my-4 pb-2 md:pb-0 lg:pb-0">
       <a
              href="/blog"
              className="mx-3 bg-transparent hover:bg-accent hover:text-darker border border-black text-dark font-bold py-1.5 px-6 lg:px-8 duration-200 transition-colors"
            >
              Blog
            </a>
            {/* <a
              href={`https://github.com/vercel/next.js/tree/canary/examples/${EXAMPLE_PATH}`}
              className="mx-3 font-bold hover:underline"
            >
              View on GitHub
            </a> */}
    </div>
  )}
  