import { BrowserRouter, HashRouter, Routes, Route } from 'react-router-dom'
import { ProfilePage } from './Components/ProfilePage'
import { Menu } from './Components/Menu'
import { HomePage } from './Components/HomePage'
import { Footer } from './Components/Footer'
import { BlogPage } from './Components/BlogPage'

function App() {
  return (
    <>
      <HashRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/blog" element={<BlogPage/>} />
          <Route path="/profile" element={<ProfilePage/>} />
          <Route path="*" element={<p>Not Found</p>} />
        </Routes>
        <Footer /> 
      </HashRouter>
    </>
  )
}

export default App
