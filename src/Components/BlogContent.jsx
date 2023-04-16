import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { blogData } from '../data/blogData'
import { useAuth } from './auth'

const BlogContent = () => {
  const navigation = useNavigate()
  const { path } = useParams()
  const auth = useAuth()
  const post = blogData.find(post => post.path === path)
  const canDelete = auth.user?.isAdmin || auth.user?.username === post.author
  const returnToBlog = () => {
    return navigation(-1, { replace: true })
  }
  return (
    <>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <span>{post.author}</span>
      <button onClick={returnToBlog}>Back to Blogs</button>

      {canDelete && <button type='button'>Elminar Post</button>}
    </>
  )
}

export { BlogContent }
