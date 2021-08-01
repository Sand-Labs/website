import Avatar from '../components/avatar'
import DateFormatter from '../components/date-formatter'
import CoverImage from './cover-image'
import Link from 'next/link'

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  return (
    <div className="bg-accent bg-opacity-30 flex flex-col justify-start content-between">
      <div className="mb-5 px-4 pt-4">
        <CoverImage
          slug={slug}
          title={title}
          src={coverImage}
          height={278}
          width={556}
        />
      </div>
      <h3 className="text-3xl px-4 mb-3 leading-snug text-dark">
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a className="hover:underline">{title}</a>
        </Link>
      </h3>
      <div className="text-lg mb-4 px-4 text-Secondary">
        <DateFormatter dateString={date} />
      </div>
      <p className="flex-grow text-lg leading-relaxed mb-4 px-4 text-darker">{excerpt}</p>
      <div className="px-4 pb-4 self-end w-full relative bottom-0 left-0 text-Accent"><Avatar name={author.name} picture={author.picture} /></div>
    </div>
  )
}
