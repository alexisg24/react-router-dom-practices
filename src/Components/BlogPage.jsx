import React from 'react'
import { Link } from 'react-router-dom'

const BlogPage = ({ blogData }) => {
  return (
    <>
      <h1>BlogPage</h1>
      <ul>
        {blogData.map(post => (
          <BlogLink key={post.path} post={post} />
        ))}
      </ul>
    </>
  )
}

const BlogLink = ({ post }) => {
  return (
    <li>
      <Link to={`/blog/${post.path}`}>{post.title}</Link>
    </li>
  )
}

export { BlogPage }
