import Head from 'next/head'
import { CMS_NAME, HOME_OG_IMAGE_URL } from '../lib/constants'

export default function Meta() {
  return (
    <Head>
      <link
        rel="apple-touch-icon"
        sizes="192x192"
        href="/assets/lp/icons/sandcastle/icon-192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/assets/lp/icons/sandcastle/icon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="24x24"
        href="/assets/lp/icons/sandcastle/icon-24x24.png"
      />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/assets/lp/icons/sandcastle/icon.svg"
      />
      <link rel="shortcut icon" href="/assets/lp/icons/sandcastle/icon.ico" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
      <meta name="theme-color" content="#000" />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      <meta
        name="description"
        content={`SandLabs, exploring blockchain technology with data science and software`}
      />
      <meta property="og:image" content={HOME_OG_IMAGE_URL} />
    </Head>
  )
}
