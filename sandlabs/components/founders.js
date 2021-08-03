import Image from "next/image";

export default function FoundersFeature() {
	return (
		<section>
			<div
				className="flex flex-col md:flex-row lg:flex-row justify-between w-full"
				style={{ height: "42vh" }}
			>
				<div className="flex flex-col justify-center content-between w-full h-full px-8 mx-4 py-4 mr-2 bg-gradient-to-tr from-secondary to-accent bg-opacity-40">
					<div className="flex flex-col justify-evenly">
						<div className="flex flex-row w-full h-full justify-between items-center">
							<div className="h-full w-full mx-2">
								<Image
									width={256}
									height={256}
									layout="intrinsic"
									src="/assets/blog/authors/wyatt.jpg"
								/>
							</div>
							<div className="grid grid-cols-2 grid-rows-2 w-full h-full gap-2 md:gap-4 lg:gap-6 mx-2 justify-items-stretch">
								<a
									target="_blank"
									rel="noopener noreferrer"
									target="_blank"
									rel="noopener noreferrer"
									className="w-full transform hover:scale-125 hover:-rotate-12"
									href="https://github.com/wyattowalsh"
								>
									<Image
										layout="responsive"
										width={32}
										height={32}
										src="/assets/lp/icons/github-colorized.svg"
									/>
								</a>
								<a
									target="_blank"
									rel="noopener noreferrer"
									className="w-full transform hover:scale-125 hover:rotate-12"
									href="https://www.linkedin.com/in/wyattowalsh"
								>
									<Image
										layout="responsive"
										width={32}
										height={32}
										src="/assets/lp/icons/linkedin-colorized.svg"
									/>
								</a>
								<a
									target="_blank"
									rel="noopener noreferrer"
                  className="w-full transform hover:scale-125 hover:-rotate-12"
									href="https://twitter.com/wyattowalsh"
								>
									<Image
										layout="responsive"
										width={32}
										height={32}
										src="/assets/lp/icons/twitter-colorized.svg"
									/>
								</a>
								<a
									target="_blank"
									rel="noopener noreferrer"
                  className="w-full transform hover:scale-125 hover:rotate-12"
									href="https://medium.com/@wyattowalsh"
								>
									<Image
										layout="responsive"
										width={32}
										height={32}
										src="/assets/lp/icons/medium.svg"
									/>
								</a>
							</div>
						</div>
						<div className="flex flex-col justify-center">
							<a
								target="_blank"
								rel="noopener noreferrer"
								className="mt-2 transform hover:underline hover:scale-110"
								href="https://wwalsh.io/"
							>
								<span className="text-primary text-2xl md:text-3xl lg:text-4xl font-bold">
									Wyatt Walsh
								</span>
							</a>
							<span className="text-Accent  md:text-lg lg:text-xl italic">
								Founder and Lead Developer
							</span>
						</div>
					</div>
				</div>
        <div className="flex flex-col justify-center content-between w-full h-full px-8 py-4 mx-4 mr-2 bg-gradient-to-tr from-secondary to-accent bg-opacity-40">
					<div className="flex flex-col justify-evenly">
						<div className="flex flex-row w-full h-full mx-2 justify-between items-center">
							<div className="h-full w-full">
								<Image
									width={256}
									height={256}
									layout="intrinsic"
									src="/assets/blog/authors/ryan.jpg"
								/>
							</div>
							<div className="grid grid-cols-1 grid-rows-2 w-full h-full gap-2 md:gap-4 lg:gap-6 mx-2 justify-items-center items-center">
								<a
									target="_blank"
									rel="noopener noreferrer"
									target="_blank"
									rel="noopener noreferrer"
									className="w-2/5 h-auto transform hover:scale-125 hover:-rotate-12"
									href="https://github.com/repprecht"
								>
									<Image
										layout="responsive"
										width={32}
										height={32}
										src="/assets/lp/icons/github-colorized.svg"
									/>
								</a>
								<a
									target="_blank"
									rel="noopener noreferrer"
									className="w-2/5 h-auto transform hover:scale-125 hover:rotate-12"
                  href="https://www.linkedin.com/in/ryan-epprecht-177a6a105/"
								>
									<Image
										layout="responsive"
										width={32}
										height={32}
										src="/assets/lp/icons/linkedin-colorized.svg"
									/>
								</a>
							</div>
						</div>
						<div className="flex flex-col justify-center">
							<a
								target="_blank"
								rel="noopener noreferrer"
								className="mt-2 transform hover:underline hover:scale-110"
								href="https://wwalsh.io/"
							>
								<span className="text-primary text-2xl md:text-3xl lg:text-4xl font-bold">
									Ryan Epprecht
								</span>
							</a>
							<span className="text-Accent md:text-lg lg:text-xl italic">
								Chief of Operations, Editor
							</span>
						</div>
					</div>
				</div>
        </div>
		</section>
	);
}
