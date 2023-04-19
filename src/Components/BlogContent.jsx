import React, { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useAuth } from './auth'

const BlogContent = ({ blogData, deleteData }) => {
  const navigation = useNavigate()
  const { path } = useParams()
  const auth = useAuth()
  const post = blogData.find(post => post.path === path)
  const canDelete = auth.user?.isAdmin || auth.user?.username === post?.author

  const returnToBlog = () => {
    return navigation(-1, { replace: true })
  }

  const handleClick = () => {
    deleteData({ path: post.path })
    returnToBlog()
  }

  useEffect(() => {
    if (!post) return navigation('/blog')
  }, [])

  return (
    <>
      <h2>{post?.title}</h2>
      <p>{post?.content}</p>
      <span>{post?.author}</span>
      <button onClick={returnToBlog}>Back to Blogs</button>

      {canDelete &&
        <button
          type='button'
          onClick={handleClick}
        >Elminar Post
        </button>}
    </>
  )
}

export { BlogContent }
