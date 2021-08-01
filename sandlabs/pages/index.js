import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
import LandingHero from '../components/landing-hero'
import About from '../components/about'
import Domains from '../components/domains'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'

export default function Index({ allPosts }) {
  const title = "SandLabs"
  const subtitle = "Exploring blockchain technology with data science and software"
  const coverImage = "assets/lp/hero.jpg"
  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)
  return (
    <>
      <Layout>
        <Head>
          <title>SandLabs:Home</title>
        </Head>
          <LandingHero />
          <About />
          <Domains />
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  return {
    props: { allPosts },
  }
}
