import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/bpl-logo.png'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/facility', label: 'Facility' },
  { to: '/programs', label: 'Programs' },
  { to: '/founders', label: 'Founders' },
  { to: '/get-involved', label: 'Get Involved' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  const isHome = location.pathname === '/'
  // Sub-pages have light hero backgrounds — need dark text when unscrolled
  const lightHero = !isHome

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  // Text colors adapt based on scroll state + hero background
  const navTextBase = scrolled || menuOpen
    ? 'text-white/80 hover:text-white hover:bg-white/5'
    : lightHero
      ? 'text-navy/70 hover:text-navy hover:bg-navy/5'
      : 'text-white/80 hover:text-white hover:bg-white/5'

  const navTextActive = scrolled || menuOpen
    ? 'text-white bg-white/10'
    : lightHero
      ? 'text-navy bg-navy/10'
      : 'text-white bg-white/10'

  const ctaClasses = scrolled || menuOpen
    ? 'bg-steel hover:bg-steel-light text-white'
    : lightHero
      ? 'bg-navy hover:bg-navy-light text-white'
      : 'bg-steel hover:bg-steel-light text-white'

  const hamburgerColor = scrolled || menuOpen
    ? 'text-white'
    : lightHero
      ? 'text-navy'
      : 'text-white'

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen
          ? 'bg-navy/95 backdrop-blur-md shadow-lg shadow-navy-dark/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center shrink-0">
            <img src={logo} alt="Bend Performance Lab" className="h-10 sm:h-14 w-auto" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-3 py-2 text-sm font-medium transition-colors rounded-md ${
                  location.pathname === link.to ? navTextActive : navTextBase
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <Link
            to="/#signup"
            className={`hidden lg:inline-flex items-center px-5 py-2.5 text-sm font-semibold rounded-lg transition-all duration-200 btn-glow ${ctaClasses}`}
          >
            Join the Community
          </Link>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`lg:hidden p-2 transition-colors ${hamburgerColor}`}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-navy border-t border-white/10">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`block px-4 py-3 text-base font-medium rounded-lg transition-colors ${
                  location.pathname === link.to
                    ? 'text-white bg-white/10'
                    : 'text-white/80 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/#signup"
              className="block px-4 py-3 mt-2 bg-steel hover:bg-steel-light text-white text-base font-semibold rounded-lg text-center transition-colors"
            >
              Join the Community
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
