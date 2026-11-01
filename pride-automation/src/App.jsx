import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Home from './pages/Home'
import Services from './pages/Services'
import Products from './pages/Products'
import About from './pages/About'
import Contact from './pages/Contact'

// Component to scroll to top on page navigation
function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])

  return null
}

function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAF8] text-[#17212B]">
      <ScrollToTop />

      {/* Sticky Header */}
      <Navbar />

      {/* Main Page Content */}
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* Catch-all redirect to Home */}
          <Route path="*" element={<Home />} />
        </Routes>
      </main>

      {/* Corporate Footer */}
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <MainLayout />
    </BrowserRouter>
  )
}
