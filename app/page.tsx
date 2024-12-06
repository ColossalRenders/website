import { allPosts } from "@/.contentlayer/generated"
import Link from "next/link"
import Image from 'next/image'

export default function Home() {
  const sortedPosts = allPosts.filter((post) => post.homePage).sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  
  return (
    <>
      <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
        <Link href="/posts/we-are-here">
          <Image
            src="/IMG_3418.jpeg"
            alt="Banner image"
            className="w-full h-auto object-cover object-[80%]"
            style={{ maxHeight: "50vh" }}
          />
          {/* Text overlay */}
          <div className="absolute bottom-0 left-0 p-4 text-white font-semibold text-4xl group-hover:underline">
            We Are Here: Read part 1 of the Anthology
          </div>
        </Link>
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
