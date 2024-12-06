import { allPosts } from "@/.contentlayer/generated"
import Link from "next/link"

export default function ReadPage() {
  return (
    <>
      <div className="prose dark:prose-invert">
        <h1>Read My Stories</h1>
        <p>Short stories and series to come later!</p>
      </div>
    
      <div className="prose dark:prose-invert">
        {allPosts
          .filter((post) => post.postType === "text")
          .map((post) => (
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
