/**
 * Footer.jsx - Site-wide footer component.
 * Features a multi-column layout with brand info, quick links,
 * contact details, and a newsletter signup.
 */
import { Link } from 'react-router-dom';
import { BookOpen, Mail, Phone, MapPin, Heart, ArrowUpRight, Send } from 'lucide-react';

function Footer() {
  return (
    <footer id="site-footer" className="bg-emerald-950 text-white relative overflow-hidden">
      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid-pattern w-full h-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ---- Newsletter Banner ---- */}
        <div className="py-12 border-b border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-gradient-to-r from-emerald-900 to-emerald-800 rounded-2xl p-8">
            <div>
              <h3 className="text-xl font-bold">Stay Connected</h3>
              <p className="text-emerald-300 text-sm mt-1">
                Get updates on admissions, events, and school news.
              </p>
            </div>
            <div className="flex w-full md:w-auto gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-72 px-5 py-3 bg-white/10 border border-white/20 rounded-xl text-sm text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent transition-all"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-gold-500 to-gold-400 text-emerald-950 font-semibold rounded-xl hover:shadow-glow-gold transition-all duration-300 flex items-center gap-2">
                <Send className="w-4 h-4" />
                <span className="hidden sm:inline">Subscribe</span>
              </button>
            </div>
          </div>
        </div>

        {/* ---- Footer Columns ---- */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <img 
                src="/ivsl3-logo.png" 
                alt="Iqra Virtual School Logo" 
                className="h-12 w-auto" 
              />
              <div>
                <span className="text-lg font-bold">IQRA</span>
                <span className="block text-[10px] font-medium tracking-widest text-gold-400 uppercase -mt-1">
                  Virtual School
                </span>
              </div>
            </div>
            <p className="text-emerald-300/80 text-sm leading-relaxed">
              Nurturing minds and building character through a holistic Islamic education
              that prepares students for academic excellence and spiritual growth.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gold-400 mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/about' },
                { name: 'Admissions', path: '/admissions' },
                { name: 'Faculty', path: '/faculty' },
                { name: 'Gallery', path: '/gallery' },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-emerald-300/70 hover:text-white text-sm flex items-center gap-2 group transition-colors duration-200"
                  >
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Programs */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gold-400 mb-5">
              Programs
            </h4>
            <ul className="space-y-3">
              {[
                'Elementary Program',
                'Middle School',
                'High School',
                'Quran Studies',
                'Arabic Language',
              ].map((item) => (
                <li key={item}>
                  <span className="text-emerald-300/70 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gold-400 mb-5">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span className="text-emerald-300/70 text-sm">info@iqravirtualschool.net</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span className="text-emerald-300/70 text-sm">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span className="text-emerald-300/70 text-sm">
                  123 Knowledge Avenue,<br />Education City, EC 45678
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* ---- Bottom Bar ---- */}
        <div className="py-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-emerald-400/60 text-xs">
            © {new Date().getFullYear()} Iqra Virtual School. All rights reserved.
          </p>
          <p className="text-emerald-400/60 text-xs flex items-center gap-1">
            Built with <Heart className="w-3 h-3 text-red-400" /> for education
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
