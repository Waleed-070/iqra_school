/**
 * Navbar.jsx - Responsive navigation bar component.
 * Features a logo, navigation links, mobile hamburger menu,
 * and a prominent "Apply Now" CTA button with scroll-based styling.
 */
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, BookOpen } from 'lucide-react';

/* Navigation link definitions */
const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Admissions', path: '/admissions' },
  { name: 'Faculty', path: '/faculty' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Contact', path: '/contact' },
];

function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  /* Track scroll position for navbar background transition */
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /* Close mobile menu on route change */
  useEffect(() => {
    setIsMobileOpen(false);
  }, [location]);

  return (
    <nav
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-xl shadow-soft border-b border-slate-100'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* ---- Logo ---- */}
          <Link to="/" className="flex items-center gap-3 group">
            <img 
              src="/ivsl3-logo.png" 
              alt="Iqra Virtual School Logo" 
              className="h-12 w-auto transition-transform duration-300 group-hover:scale-105" 
            />
            <div>
              <span className={`text-xl font-bold tracking-tight transition-colors duration-300 ${
                isScrolled ? 'text-emerald-900' : 'text-white'
              }`}>
                IQRA
              </span>
              <span className={`block text-[10px] font-medium tracking-widest uppercase -mt-1 transition-colors duration-300 ${
                isScrolled ? 'text-gold-500' : 'text-gold-300'
              }`}>
                Virtual School
              </span>
            </div>
          </Link>

          {/* ---- Desktop Navigation Links ---- */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                    isActive
                      ? isScrolled
                        ? 'text-emerald-700 bg-emerald-50'
                        : 'text-white bg-white/15'
                      : isScrolled
                        ? 'text-slate-600 hover:text-emerald-700 hover:bg-emerald-50/70'
                        : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* ---- CTA Button + Mobile Toggle ---- */}
          <div className="flex items-center gap-3">
            <Link
              to="/admissions"
              id="cta-apply-now"
              className="hidden sm:inline-flex items-center px-6 py-2.5 bg-gradient-to-r from-gold-500 to-gold-400 text-emerald-950 text-sm font-semibold rounded-xl shadow-md hover:shadow-glow-gold hover:scale-105 transition-all duration-300"
            >
              Apply Now
            </Link>

            {/* Mobile menu toggle */}
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors ${
                isScrolled ? 'text-slate-700 hover:bg-slate-100' : 'text-white hover:bg-white/10'
              }`}
              aria-label="Toggle mobile menu"
            >
              {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* ---- Mobile Menu Dropdown ---- */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-slate-100 shadow-elevated overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? 'bg-emerald-50 text-emerald-700'
                        : 'text-slate-600 hover:bg-slate-50 hover:text-emerald-700'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <Link
                to="/admissions"
                className="block mt-3 text-center px-4 py-3 bg-gradient-to-r from-gold-500 to-gold-400 text-emerald-950 font-semibold rounded-xl shadow-md"
              >
                Apply Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;
