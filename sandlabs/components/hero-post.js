import Avatar from '../components/avatar'
import DateFormatter from '../components/date-formatter'
import CoverImage from '../components/cover-image'
import Link from 'next/link'

export default function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  return (
    <section className="rounded-none border-dashed border-4 px-8 my-8 lg:my-4 mt-4 bg-primary bg-opacity-20 sm:flex sm:flex-col sm:content-start" style={{"height": "56vh", "marginBottom": "2vh"}}>
      <div className="mt-4 mb-6 md:mb-10 overflow-hidden h-auto">
        <CoverImage
          title={title}
          src={coverImage}
          slug={slug}
          height={250}
          width={375}
        />
      </div>
      <div className="grid grid-cols-1 mb-8 md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8">
        <div>
          <h3 className="text-4xl lg:text-6xl leading-tight text-dark">
            <Link as={`/posts/${slug}`} href="/posts/[slug]">
              <a className="hover:underline">{title}</a>
            </Link>
          </h3>
          <div className="md:mb-0 text-lg text-Secondary">
            <DateFormatter dateString={date} />
          </div>
        </div>
        <div className="text-Accent flex flex-col justify-between">
          <p className="text-lg leading-relaxed text-darker">{excerpt}</p>
          <Avatar name={author.name} picture={author.picture} />
        </div>
      </div>
    </section>
  )
}
