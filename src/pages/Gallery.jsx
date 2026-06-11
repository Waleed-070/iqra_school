/**
 * Gallery.jsx - Gallery page for Iqra Virtual School.
 * Features a masonry-style grid layout showcasing campus life categories
 * with elegant card design and hover effects.
 */
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sparkles,
  Camera,
  BookOpen,
  Users,
  Award,
  Palette,
  Globe,
  Heart,
  GraduationCap,
  Star,
  Image,
  Filter,
} from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import AnimatedSection from '../components/AnimatedSection';

/* ---- Gallery Categories ---- */
const categories = ['All', 'Campus Life', 'Academics', 'Events', 'Arts', 'Community'];

/* ---- Gallery Items Data ---- */
const galleryItems = [
  {
    title: 'Virtual Classroom Session',
    category: 'Academics',
    icon: BookOpen,
    gradient: 'from-emerald-600 to-emerald-500',
    size: 'large', // spans 2 columns
    description: 'Interactive learning sessions with small class sizes',
  },
  {
    title: 'Quran Recitation',
    category: 'Academics',
    icon: Star,
    gradient: 'from-gold-500 to-gold-400',
    size: 'normal',
    description: 'Students perfecting their Quran recitation',
  },
  {
    title: 'Science Fair Projects',
    category: 'Events',
    icon: Award,
    gradient: 'from-emerald-700 to-emerald-600',
    size: 'normal',
    description: 'Annual virtual science fair showcase',
  },
  {
    title: 'Islamic Calligraphy',
    category: 'Arts',
    icon: Palette,
    gradient: 'from-gold-600 to-gold-500',
    size: 'normal',
    description: 'Beautiful calligraphy art created by students',
  },
  {
    title: 'Global Student Community',
    category: 'Community',
    icon: Globe,
    gradient: 'from-emerald-800 to-emerald-600',
    size: 'large',
    description: 'Students from 30+ countries learning together',
  },
  {
    title: 'Parent-Teacher Conference',
    category: 'Community',
    icon: Users,
    gradient: 'from-emerald-600 to-emerald-400',
    size: 'normal',
    description: 'Regular meetings to discuss student progress',
  },
  {
    title: 'Ramadan Activities',
    category: 'Events',
    icon: Heart,
    gradient: 'from-gold-500 to-gold-300',
    size: 'normal',
    description: 'Special programs during the blessed month',
  },
  {
    title: 'Graduation Ceremony',
    category: 'Events',
    icon: GraduationCap,
    gradient: 'from-emerald-700 to-emerald-500',
    size: 'normal',
    description: 'Celebrating student achievements and milestones',
  },
  {
    title: 'Art & Design Workshop',
    category: 'Arts',
    icon: Palette,
    gradient: 'from-gold-600 to-gold-400',
    size: 'normal',
    description: 'Creative workshops combining art with Islamic themes',
  },
  {
    title: 'Student Club Activities',
    category: 'Campus Life',
    icon: Users,
    gradient: 'from-emerald-600 to-emerald-500',
    size: 'large',
    description: 'Various clubs and extracurricular programs',
  },
  {
    title: 'Book Fair',
    category: 'Campus Life',
    icon: BookOpen,
    gradient: 'from-gold-500 to-gold-400',
    size: 'normal',
    description: 'Annual virtual book fair and reading celebrations',
  },
  {
    title: 'Cultural Exchange Day',
    category: 'Community',
    icon: Globe,
    gradient: 'from-emerald-700 to-emerald-600',
    size: 'normal',
    description: 'Celebrating the diverse cultures in our community',
  },
];

function Gallery() {
  const [activeFilter, setActiveFilter] = useState('All');

  /* Filtered gallery items */
  const filteredItems =
    activeFilter === 'All'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter);

  return (
    <div className="overflow-hidden">
      {/* ================================================================
          PAGE HERO
          ================================================================ */}
      <section className="relative bg-gradient-hero pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] grid-pattern" />
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gold-500/10 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/10 mb-6">
              <Camera className="w-4 h-4 text-gold-400" />
              <span className="text-sm text-emerald-100 font-medium">Campus Life</span>
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Our <span className="text-gradient-gold">Gallery</span>
            </h1>
            <p className="text-lg text-emerald-200/70 max-w-2xl mx-auto">
              Explore snapshots of life at Iqra Virtual School — from virtual classrooms
              to community celebrations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================================================================
          GALLERY GRID
          ================================================================ */}
      <section id="gallery-grid" className="py-24 lg:py-32 bg-gradient-section grid-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="Explore"
            title="Life at Iqra"
            description="A visual journey through our vibrant school community and academic programs."
          />

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                  activeFilter === cat
                    ? 'bg-emerald-700 text-white shadow-md'
                    : 'bg-white text-slate-600 border border-slate-200 hover:border-emerald-200 hover:text-emerald-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Masonry Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className={`${item.size === 'large' ? 'sm:col-span-2' : ''}`}
                  >
                    <div className="group relative bg-white rounded-2xl overflow-hidden shadow-soft border border-slate-100 hover:shadow-card transition-all duration-500 h-full">
                      {/* Image placeholder */}
                      <div className={`relative ${item.size === 'large' ? 'h-64' : 'h-56'} bg-gradient-to-br ${item.gradient} overflow-hidden`}>
                        {/* Pattern overlay */}
                        <div className="absolute inset-0 opacity-10">
                          <svg className="w-full h-full" viewBox="0 0 400 300">
                            <pattern id={`gal-${index}`} x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                              <circle cx="20" cy="20" r="1.5" fill="white" />
                            </pattern>
                            <rect width="400" height="300" fill={`url(#gal-${index})`} />
                          </svg>
                        </div>

                        {/* Center icon */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Icon className="w-16 h-16 text-white/30 group-hover:scale-110 transition-transform duration-500" />
                        </div>

                        {/* Hover overlay */}
                        <div className="absolute inset-0 bg-emerald-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                          <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
                            <Image className="w-6 h-6 text-white" />
                          </div>
                        </div>

                        {/* Category badge */}
                        <div className="absolute top-4 left-4 px-3 py-1.5 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium text-white border border-white/20">
                          {item.category}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <h3 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-emerald-700 transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-sm text-slate-500">{item.description}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Gallery;
