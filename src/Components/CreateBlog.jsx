import React, { useState } from 'react'
import { ProtectedRoutes } from '../middlewares/protectedRoutes'
import { useAuth } from './auth'
import { useNavigate } from 'react-router-dom'

const CreateBlog = ({ addBlogData }) => {
  const auth = useAuth()
  const navigate = useNavigate()
  const [inputData, setInputData] = useState({ path: undefined, title: undefined, content: undefined, author: auth.user?.username })

  const submitData = (event) => {
    event.preventDefault()
    addBlogData(inputData)
    return navigate('/blog')
  }

  const onChangeValues = (event) => {
    const name = event.target.getAttribute('name')
    const value = event.target.value
    if (!Object.keys(inputData).includes(name)) return true
    setInputData(prev => {
      const newObj = { ...prev }
      newObj[name] = value
      return newObj
    })
  }

  return (
    <>
      <ProtectedRoutes>
        <form onSubmit={submitData}>
          <input type='text' name='path' onChange={onChangeValues} placeholder='path' required />
          <input type='text' name='title' onChange={onChangeValues} placeholder='title' required />
          <input type='text' name='content' onChange={onChangeValues} placeholder='content' required />
          <button type='submit'>Submit</button>
        </form>
      </ProtectedRoutes>
    </>
  )
}

export { CreateBlog }
