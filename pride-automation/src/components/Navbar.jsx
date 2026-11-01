import { useState, useEffect } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, PhoneCall, ChevronRight } from 'lucide-react'
import { COMPANY_DETAILS } from '../data/products'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on page navigation
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [location.pathname])

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Products', path: '/products' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact Us', path: '/contact' }
  ]

  return (
    <>
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100 py-2.5'
            : 'bg-white border-b border-gray-100/80 py-3.5'
        }`}
      >
        <div className="max-w-[1380px] mx-auto px-4 sm:px-5 lg:px-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <NavLink
              to="/"
              className="flex items-center gap-3 group focus:outline-none"
              aria-label="Pride Automation Home"
            >
              <img
                src={COMPANY_DETAILS.logo}
                alt="Pride Automation Logo"
                className="h-10 sm:h-11 w-auto object-contain transition-transform duration-200 group-hover:scale-102"
              />
            </NavLink>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `relative text-sm font-semibold transition-colors duration-200 py-1 ${
                      isActive ? 'text-[#075522]' : 'text-gray-700 hover:text-[#075522]'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <span>{link.name}</span>
                      {isActive && (
                        <motion.span
                          layoutId="navUnderline"
                          className="absolute left-0 bottom-0 w-full h-0.5 bg-[#075522] rounded-full"
                          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                        />
                      )}
                    </>
                  )}
                </NavLink>
              ))}
            </nav>

            {/* Right Action */}
            <div className="hidden md:flex items-center gap-4">
              <a
                href={`tel:${COMPANY_DETAILS.phone}`}
                className="flex items-center gap-1.5 text-xs font-semibold text-gray-700 hover:text-[#075522] transition-colors"
                title="Call Technical Desk"
              >
                <div className="w-7 h-7 rounded-full bg-[#EAF3E9] text-[#075522] flex items-center justify-center">
                  <PhoneCall className="w-3.5 h-3.5" />
                </div>
                <span>{COMPANY_DETAILS.phoneDisplay}</span>
              </a>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-4 py-2 rounded-xl bg-[#075522] hover:bg-[#03441B] text-white text-xs font-semibold shadow-xs hover:shadow-md transition-all duration-200 active:scale-98"
              >
                Contact Us
              </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex md:hidden items-center gap-2">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl text-gray-700 hover:text-[#075522] hover:bg-[#EAF3E9] transition-colors"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Slide-in Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-xs z-50 md:hidden"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.28, ease: [0.32, 0.72, 0, 1] }}
              className="fixed top-0 right-0 bottom-0 w-72 bg-white shadow-2xl z-50 md:hidden flex flex-col"
            >
              <div className="p-5 flex items-center justify-between border-b border-gray-100">
                <img
                  src={COMPANY_DETAILS.logo}
                  alt="Pride Automation Logo"
                  className="h-8 w-auto object-contain"
                />
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 rounded-lg text-gray-500 hover:text-gray-900 hover:bg-gray-100"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between overflow-y-auto">
                <div className="space-y-1">
                  {navLinks.map((link) => (
                    <NavLink
                      key={link.path}
                      to={link.path}
                      className={({ isActive }) =>
                        `flex items-center justify-between px-3.5 py-3 rounded-xl text-sm font-semibold transition-colors ${
                          isActive
                            ? 'bg-[#EAF3E9] text-[#075522]'
                            : 'text-gray-700 hover:bg-gray-50 hover:text-[#075522]'
                        }`
                      }
                    >
                      <span>{link.name}</span>
                      <ChevronRight className="w-4 h-4 opacity-60" />
                    </NavLink>
                  ))}
                </div>

                <div className="pt-6 border-t border-gray-100 space-y-3">
                  <div className="text-xs text-gray-500">
                    <p className="font-semibold text-gray-700">Pride Automation Technical Desk</p>
                    <p className="mt-0.5">{COMPANY_DETAILS.phoneDisplay}</p>
                    <p>{COMPANY_DETAILS.emailSales}</p>
                  </div>

                  <Link
                    to="/contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-full py-2.5 rounded-xl bg-[#075522] hover:bg-[#03441B] text-white text-xs font-semibold shadow-xs text-center block"
                  >
                    Contact Technical Desk
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
