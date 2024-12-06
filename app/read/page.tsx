"use client"

import { allPosts } from "@/.contentlayer/generated";
import Link from "next/link";
import { useState } from "react";

export default function ReadPage() {
  const [searchQuery, setSearchQuery] = useState("");

  // Filter posts based on search query and postType
  const filteredPosts = allPosts
    .filter((post) => post.postType === "text")
    .filter((post) => {
      const query = searchQuery.toLowerCase();
      return (
        post.title.toLowerCase().includes(query) ||
        (post.description && post.description.toLowerCase().includes(query))
      );
    });

  return (
    <>
      <div className="prose dark:prose-invert">
        <h1>Read My Stories</h1>
        <p>Short stories and series to come later!</p>
      </div>

      {/* Search Input */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search stories..."
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Filtered Posts */}
      <div className="prose dark:prose-invert">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <article key={post._id} className="mb-4">
              <Link href={post.slug}>
                <h2 className="text-lg font-semibold hover:underline">
                  {post.title}
                </h2>
              </Link>
              {post.description && <p>{post.description}</p>}
            </article>
          ))
        ) : (
          <p>No stories found matching your search.</p>
        )}
      </div>
    </>
  );
}
