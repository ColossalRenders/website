import { allPosts } from "@/.contentlayer/generated"
import Link from "next/link"

export default function ReadPage() {
  return (
    <>
      <div>
        <h1>Read</h1>
        <p>This is the Read page.</p>
      </div>
    
      <div className="prose dark:prose-invert">
        {allPosts
          .filter((post) => post.type === "text")
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
