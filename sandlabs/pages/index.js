import Layout from '../components/layout'
import LandingHero from '../components/landing-hero'
import About from '../components/about'
import Domains from '../components/domains'
import Head from 'next/head'

export default function Index() {
  return (
    <>
      <Layout>
        <Head>
          <title>SandLabs-Home</title>
        </Head>
          <LandingHero />
          <About />
          <Domains />
      </Layout>
    </>
  )
}