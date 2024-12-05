import { allPosts } from "@/.contentlayer/generated"
import Link from "next/link"
import Image from 'next/image'

export default function Home() {
  const sortedPosts = allPosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  
  return (
    <>
      <div className="flex justify-center items-center">
        <Image
          src="/blog-post-4.jpg"
          alt="Picture of the author"
          className="w-screen h-auto object-cover"
        />
      </div>
    
      <div className="prose dark:prose-invert">
        {sortedPosts.map((post) => (
          <article key={post._id}>
            <Link href={post.slug}>
              <h2>{post.title}</h2>
            </Link>
            {post.description && <p>{post.description}</p>}
          </article>
        ))}
      </div>
    </>
  )
}
