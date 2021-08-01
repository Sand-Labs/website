import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
import Blinker from '../components/blinker'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'

export default function Blog({ allPosts }) {
  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)
  return (
    <>
      <Layout>
        <Head>
          <title>SandLabs:Blog</title>
        </Head>
          <div className="container w-4/5 ml-auto mr-auto" style={{"min-height": "85vh"}}>
          <div className="flex flex-row" style={{"width": "80vh"}}>
          <h1 className="my-4 py-2 text-xl md:text-2xl lg:text-5xl ml-2 text-transparent bg-clip-text bg-gradient-to-tr from-Secondary via-Accent to-dark" style={{"fontFamily": "menlo", "letterSpacing": "-0.1em"}}>
            SandLabs-Blog:Welcome visitor$ &thinsp;
          </h1>
          <Blinker/>
          </div>
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </div>
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
