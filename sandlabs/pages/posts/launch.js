import Layout from '../components/layout'
import LandingHero from '../components/landing-hero'
import About from '../components/about'
import Domains from '../components/domains'
import Header from '../components/header'
import Image from 'next/image'
import trw from '../public/assets/lp/icons/trowel.svg'
import Head from 'next/head'

export default function BlogPostLaunch() {
  const title = "Launch of the SandLabs Project"
  const subtitle = ""
  const description = (
    "Today marks the day that the SandLabs project officially launches. I created SandLabs to better structure my efforts in helping the BlockchainxData communities and connect with others who are interested in the same. 

  We at SandLabs hope to realize some help to communities such as the BlockchainxData community by sharing data scientific findings we unearth across the blockchain domain, in addition to creating helpful new software entities such as wallets, BlockchainxData-related software packages, and more.")
  const coverImage = "assets/blog/launch/cover.jpg"
  return (
    <>
      <Layout>
        <Head>
          <title>{title}</title>
          <description>{description}</description>
        </Head>
          <div>
            <Header />
          <div className="" style={{"height": "100vh"}}
            <Image layout="fill" src={coverImage}/>
          </div>
          </div>
          <About />
          <Domains />
      </Layout>
    </>
  )
}