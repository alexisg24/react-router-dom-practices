import { useState } from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import { Menu } from './Components/Menu'
import { AuthProvider } from './Components/auth'
import { ProfilePage } from './Components/ProfilePage'
import { HomePage } from './Components/HomePage'
import { Footer } from './Components/Footer'
import { BlogPage } from './Components/BlogPage'
import { BlogContent } from './Components/BlogContent'
import { LoginPage } from './Components/LoginPage'
import { LogoutPage } from './Components/LogoutPage'
import { blogData } from './data/blogData'
import { CreateBlog } from './Components/CreateBlog'

function App () {
  const [data, setData] = useState(blogData)

  const deleteBlogData = ({ path }) => {
    const blogIndex = data.findIndex(element => element.path === path)
    return setData([...data.slice(0, blogIndex), ...data.slice(blogIndex + 1)])
  }

  const addBlogData = ({ path, title, content, author }) => {
    const newData = [...data, { path, title, content, author }]
    return setData(newData)
  }

  return (
    <>
      <HashRouter>
        <AuthProvider>
          <Menu />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/blog' element={<BlogPage blogData={data} />} />
            <Route path='/blog/:path' element={<BlogContent blogData={data} deleteData={deleteBlogData} />} />
            <Route path='/add' element={<CreateBlog addBlogData={addBlogData} />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/logout' element={<LogoutPage />} />
            <Route path='/profile' element={<ProfilePage />} />
            <Route path='*' element={<p>Not Found</p>} />
          </Routes>
          <Footer />
        </AuthProvider>
      </HashRouter>
    </>
  )
}

export default App
