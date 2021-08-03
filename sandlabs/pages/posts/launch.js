import Layout from '../../components/layout'
import Founders from '../../components/founders'
import Header from '../../components/header'
import Image from 'next/image'
import Head from 'next/head'

export default function BlogPostLaunch() {
  const title = "Launch of the SandLabs Project"
  const subtitle = ""
  const pageName = 'Project-Launch'
  const date = 'August 3rd, 2021'
  const description = (
    "Today marks the day that the SandLabs project officially launches. I created SandLabs to better structure my efforts in helping the BlockchainxData communities and connect with others who are interested in the same... We at SandLabs hope to realize some help to communities such as the BlockchainxData community by sharing data scientific findings we unearth across the blockchain domain, in addition to creating helpful new software entities such as wallets, BlockchainxData-related software packages, and more.")
  const coverImage = "/assets/blog/launch/cover.jpg"
  return (
    <>
      <Layout>
        <Head>
          <title>{title}</title>
          <meta name="description" content={description}/>
        </Head>
          <div>
          <div className="flex flex-col justify-start">
            <div className="m-2 md:m-3 lg:m-4">
              <div className="">
              <Header page={pageName} />
              </div>
              <div className="text-dark text-4xl md:text-5xl font-scp lg:text-6xl mx-2 md:mx-4 lg:mx-6 mx-auto underline text-center my-2 md:my-3 lg:my-4" style={{	"letter-spacing": "-0.21rem"}}>
                {title}
              </div>
            </div>
          </div>
          <div className="relative" style={{"height": "100vh"}}>
            <Image layout="fill" src={coverImage}/>
          </div>
          <div className="mx-24 md:mx-40 lg:mx-60 my-4 md:my-6 lg:my-8  md-text-lg lg:text-xl" style={{"line-height": "2.1rem"}}>
            <p className="text-secondary italic text-lg md:text-xl lg:text-2xl font-medium">{date}</p>
            <hr className="my-2 md:my-4 lg:my-6"/>
            <p> Today marks the day that the <span class="text-primary font-bold italic">SandLabs</span> project officially launches. I created  <span class="text-primary font-bold italic">SandLabs</span> to better structure my efforts in helping the <code class="text-Accent">BlockchainxData</code> communities and connect with others who are interested in the same.
              </p><br/>
            <p>
            We at  <span class="text-primary font-bold italic">SandLabs</span> hope to realize some help to communities such as the <code class="text-Accent">BlockchainxData</code> community by sharing data scientific findings we unearth across the blockchain domain, in addition to creating helpful new software entities such as wallets, <code class="text-Accent">BlockchainxData</code>-related software packages, and more.
            </p><br/>
            <h2 class="text-dark font-extrabold text-2l md:text-3xl lg:text-4xl">Our Team</h2><br/>

            <p>
            The  <span class="text-primary font-bold italic">SandLabs</span> Team currently consists of:
            </p><br/>
           

            <Founders /> <br/>


            <h2 class="text-dark font-extrabold text-2l md:text-3xl lg:text-4xl">Our Vision</h2><br/>

                <p> <span class="text-primary font-bold italic">SandLabs</span> aims to explore the blockchain domain via a data scientific lens to generate new insights and make helpful contributions to the <code class="text-Accent">BlockchainxData</code> communities and beyond. The initial focus of our work will be data collection, extraction, and processing high quality data for future use. At first, this data will primarily come from social media and other API data sources and will focus on <code class="text-Accent">BlockchainxData</code>-related topics, but could possibly expand once we attain high pipeline functionality and automation capabilities. Upon significant successful data extraction, we plan to conduct analysis across our collected datasets in the hopes of generating helpful <code class="text-Accent">BlockchainxData</code> industry insights. 
                  </p><br />
                          

                  <p> Data science can be a powerful tool to uncover hidden patterns and predict the future for necessary values. Automation of data scientific processes has become significantly more refined recently, and we hope that we can fully automate the data engineering aspects of our operation; this will enable both a greater breadth of data collection as well as leave more time available for data analysis. </p><br />

                  <p>In addition to sharing our insights with broader communities of <code class="text-Accent">BlockchainxData</code> developers and practitioners, we hope that the insights we uncover will prove to be helpful leads towards the development of software that will not only help bring about blockchain technology's widespread adoption, but also realize its social benefit. Towards this end, we aim to prioritize ease of use, maximized privacy, and ultimate helpfulness in the design of our projects. </p><br />

            <h2 class="text-dark font-extrabold text-2l md:text-3xl lg:text-4xl">Progress + A Few Ideas So Far</h2> <br />

            <p>In order to help accomplish the vision laid out above, we started with creating <a className="hover:text-Accent hover:transform hover:scale-150" href="sandlabs.co"><i><b>SandLabs.co</b></i></a>, a website to help share our project and its creations with the world at large. In order to serve as a strong foundation for hosting future  <span class="text-primary font-bold italic">SandLabs</span> projects, the site was implemented using the popular <code className="text-Accent">Next.js</code> framework. This is tailored to  <span class="text-primary font-bold italic">SandLabs</span> current needs, but can be expanded to support our growing interests. The architecture employed should enable us to easily include dynamic content in the future, such as data dashboards, helpful visualizations and animations, and more. </p><br />

            <p>We hope to utilize a fully serverless cloud architecture that can scale as needed depending on our project's reception. Considered architectures would also be powerful enough to conduct complex artificial intelligence / machine learning application processes in addition to powering our user-facing applications. This architecture would house our extract, transform, load (ETL) data pipelines, as well as our analysis infrastructure and possibly server-side content rendering.  </p><br />

            <p>So far we have come up with a few possible directions for  <span class="text-primary font-bold italic">SandLabs</span> to explore in the near future. We hope to maximize the impact of our data artifacts by listing them across data exchanges as well as conducting thorough preprocessing on the raw data we collect. To best compile these data artifacts, robust ETL pipelines will be utilized with full automation as a long-term design priority. These ETL pipelines will utilize a variety of different objects within their architecture such as databases (SQl and NoSQL), cloud functions, virtual machines, publication/subscription services, and more. </p><br />

            <p>Apart from sharing our collected data itself, we also plan to conduct thorough data scientific analyses -- hopefully serving as the bedrock for data storytelling and helpful insight generation. Ideally, these data stories and insights will serve to help better inform the <code class="text-Accent">BlockchainxData</code> communities and beyond. </p><br />

            <p>We hope that our insight generation proves fruitful enough to also allow us to glean insights into possible software projects to move towards. Creating software entities such as decentralized applications or helpful developer packages -- or even simply a few smart contracts -- would be an awesome direction to see  <span class="text-primary font-bold italic">SandLabs</span> expand its work. </p><br />

            <p>To accomplish our vision we have started by launching SandLabs.co and applying for a grant from Ocean Protocol. If accepted, we hope to immediately start gathering data from various APIs and compiling a robust dataset that will be sold on Ocean. </p><br />

            <h2 class="text-dark font-extrabold text-2l md:text-3xl lg:text-4xl">Conclusion</h2>  <br />

            <p>We hope big things are in store for the future of  <span class="text-primary font-bold italic">SandLabs</span>. We intend to dig up a few pearls amongst the data seas. </p><br />

            <blockquote class="text-darker text-opacity-80 md:text-lg lg:text-xl p-4 md:p-6 lg:p-9">
            <span class="inline">
            Make sure to stay on the lookout for the upcoming release of a few of our collected data assets as well as a couple blog posts explaining a bit about our projects</span>
            <span  className="inline-block align-middle"><Image width={36} height={36} src="/assets/lp/icons/sandcastle/icon.svg"/></span>
            </blockquote>
          </div>
          </div>
      </Layout>
    </>
  )
}