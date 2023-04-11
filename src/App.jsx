import { BrowserRouter, HashRouter, Routes, Route } from 'react-router-dom'
import { Menu } from './Components/Menu'
import { AuthProvider} from './Components/auth'
import { ProfilePage } from './Components/ProfilePage'
import { HomePage } from './Components/HomePage'
import { Footer } from './Components/Footer'
import { BlogPage } from './Components/BlogPage'
import { BlogContent } from './Components/BlogContent'
import { LoginPage } from './Components/LoginPage'
import { LogoutPage } from './Components/LogoutPage'

function App() {
  return (
    <>
    <HashRouter>
      <AuthProvider>
        <Menu />
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/blog" element={<BlogPage/>} />
          <Route path="/blog/:path" element={<BlogContent/>} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/logout" element={<LogoutPage/>} />
          <Route path="/profile" element={<ProfilePage/>} />
          <Route path="*" element={<p>Not Found</p>} />
        </Routes>
        <Footer /> 
      </AuthProvider>
    </HashRouter>
    </>
  )
}

export default App
