/**
 * Home.jsx - Landing page for Iqra Virtual School.
 * Features a hero section with split layout, core pillars grid,
 * stats counter, testimonials, and a call-to-action banner.
 */
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Play,
  Star,
  BookOpen,
  Users,
  Lightbulb,
  Heart,
  GraduationCap,
  Globe,
  Award,
  Sparkles,
  ChevronRight,
} from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import AnimatedSection from '../components/AnimatedSection';
import AnimatedCounter from '../components/AnimatedCounter';

/* ---- Core Pillar Data ---- */
const pillars = [
  {
    icon: Heart,
    title: 'Tarbiyah',
    description:
      'A nurturing approach to character development rooted in Islamic values, fostering integrity, empathy, and spiritual awareness in every student.',
    color: 'emerald',
    gradient: 'from-emerald-600 to-emerald-500',
  },
  {
    icon: BookOpen,
    title: 'Knowledge',
    description:
      'A rigorous academic curriculum that cultivates critical thinking, creativity, and a lifelong love for learning across all disciplines.',
    color: 'gold',
    gradient: 'from-gold-500 to-gold-400',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description:
      'Embracing modern educational technology and teaching methods to prepare students for the challenges and opportunities of tomorrow.',
    color: 'emerald',
    gradient: 'from-emerald-700 to-emerald-600',
  },
  {
    icon: Globe,
    title: 'Community',
    description:
      'Building a strong, connected community of learners, parents, and educators who support each other in the pursuit of excellence.',
    color: 'gold',
    gradient: 'from-gold-600 to-gold-500',
  },
];

/* ---- Statistics Data ---- */
const stats = [
  { value: '500+', label: 'Students Enrolled', icon: Users },
  { value: '50+', label: 'Expert Faculty', icon: GraduationCap },
  { value: '95%', label: 'Satisfaction Rate', icon: Star },
  { value: '15+', label: 'Years of Excellence', icon: Award },
];

/* ---- Testimonials Data ---- */
const testimonials = [
  {
    name: 'Fatima Ahmed',
    role: 'Parent',
    quote:
      'Iqra Virtual School transformed our children\'s education. The blend of academic rigor and Islamic values is exactly what we were looking for.',
    rating: 5,
  },
  {
    name: 'Omar Hassan',
    role: 'Parent',
    quote:
      'The teachers genuinely care about each student\'s growth — both academically and spiritually. We couldn\'t be happier with our choice.',
    rating: 5,
  },
  {
    name: 'Aisha Khan',
    role: 'Student Alumni',
    quote:
      'Iqra prepared me not just for college, but for life. The character-building programs gave me confidence and a strong moral compass.',
    rating: 5,
  },
];

function Home() {
  return (
    <div className="overflow-hidden">
      {/* ================================================================
          HERO SECTION - Split-screen layout
          ================================================================ */}
      <section id="hero" className="relative min-h-screen bg-slate-950 overflow-hidden flex items-center">
        {/* Sleek dark-mode gradient mesh */}
        <div className="absolute inset-0 bg-gradient-to-tr from-emerald-900 via-slate-900 to-emerald-950 opacity-90" />

        {/* Background decorative mesh elements */}
        <div className="absolute inset-0">
          {/* Asymmetrical radial glow */}
          <div className="absolute -top-40 -right-40 w-[800px] h-[800px] bg-emerald-600/20 rounded-full blur-[120px] mix-blend-screen" />
          <div className="absolute top-1/3 -left-40 w-[600px] h-[600px] bg-gold-500/10 rounded-full blur-[100px] mix-blend-screen" />
          <div className="absolute -bottom-20 right-1/4 w-[500px] h-[500px] bg-emerald-400/10 rounded-full blur-[80px] mix-blend-screen" />
          {/* Subtle grid pattern overlay */}
          <div className="absolute inset-0 opacity-[0.04]">
            <div className="grid-pattern w-full h-full" />
          </div>
        </div>

        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 lg:pt-40 lg:pb-28">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-12 min-h-[calc(100vh-160px)]">

            {/* ---- Left Column: Text Content ---- */}
            <motion.div
              className="lg:w-[55%] z-10"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/10 mb-8"
              >
                <Sparkles className="w-4 h-4 text-gold-400" />
                <span className="text-sm text-emerald-100 font-medium tracking-wide">Holistic Development & Moral Values</span>
              </motion.div>

              {/* Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-[4.2rem] font-bold text-white leading-[1.1] mb-6">
                Character Building
                <span className="block mt-2">Meets <span className="text-gradient-gold font-display italic pr-2">Academic</span></span>
                <span className="text-emerald-300 block mt-1"> Excellence</span>
              </h1>

              {/* Subtext */}
              <p className="text-lg text-emerald-100/80 max-w-xl leading-relaxed mb-10">
                A premier Islamic virtual school redefining education. We seamlessly integrate profound moral values with a rigorous curriculum to nurture the complete development of every student—mind, body, and soul.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/admissions"
                  id="hero-apply-btn"
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-gold-500 to-gold-400 text-slate-900 font-bold rounded-2xl shadow-lg hover:shadow-glow-gold hover:scale-105 transition-all duration-300"
                >
                  Start Your Journey
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <button
                  id="hero-tour-btn"
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-white/5 backdrop-blur-sm text-white font-semibold rounded-2xl border border-white/10 hover:bg-white/10 hover:border-white/30 transition-all duration-300"
                >
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="w-3.5 h-3.5 text-emerald-300 fill-emerald-300 ml-0.5" />
                  </div>
                  Discover Our Approach
                </button>
              </div>

              {/* Trust indicators */}
              <div className="mt-12 flex items-center gap-6">
                <div className="flex -space-x-3">
                  {[
                    'bg-emerald-600',
                    'bg-gold-500',
                    'bg-emerald-700',
                    'bg-gold-600',
                  ].map((bg, i) => (
                    <div
                      key={i}
                      className={`w-10 h-10 rounded-full ${bg} border-2 border-slate-900 flex items-center justify-center text-xs font-bold text-white shadow-sm`}
                    >
                      {['FA', 'OH', 'AK', 'MR'][i]}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-gold-400 fill-gold-400" />
                    ))}
                  </div>
                  <p className="text-sm text-emerald-200/60 mt-0.5">
                    Trusted by 500+ families worldwide
                  </p>
                </div>
              </div>
            </motion.div>

            {/* ---- Right Column: Asymmetrical Illustration ---- */}
            {/* <motion.div
              className="lg:w-[45%] relative w-full mt-10 lg:mt-0"
              initial={{ opacity: 0, x: 50, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-800/40 to-emerald-600/10 rounded-[40px] transform rotate-6 scale-105 border border-white/5 shadow-2xl" />
              <div className="relative bg-white/10 backdrop-blur-xl rounded-[32px] border border-white/20 p-8 lg:p-10 shadow-2xl overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-gold-400/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
                
                 <div className="absolute -left-6 top-1/4 w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-400 rounded-full blur-md opacity-40 animate-pulse" />
                
                 <div className="relative aspect-[4/3] rounded-2xl bg-gradient-to-br from-slate-900/60 to-emerald-950/60 border border-white/10 flex items-center justify-center overflow-hidden group shadow-inner">
                   <div className="absolute inset-0 opacity-[0.15]">
                    <svg className="w-full h-full" viewBox="0 0 400 300">
                      <pattern id="geo" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
                        <circle cx="25" cy="25" r="20" fill="none" stroke="white" strokeWidth="0.5" />
                        <circle cx="0" cy="0" r="20" fill="none" stroke="white" strokeWidth="0.5" />
                        <circle cx="50" cy="0" r="20" fill="none" stroke="white" strokeWidth="0.5" />
                        <circle cx="0" cy="50" r="20" fill="none" stroke="white" strokeWidth="0.5" />
                        <circle cx="50" cy="50" r="20" fill="none" stroke="white" strokeWidth="0.5" />
                      </pattern>
                      <rect width="400" height="300" fill="url(#geo)" />
                    </svg>
                  </div>

                  <div className="text-center z-10 relative transform group-hover:scale-105 transition-transform duration-700">
                    <BookOpen className="w-16 h-16 text-emerald-300/90 mx-auto mb-4 drop-shadow-lg" />
                    <p className="text-emerald-50 text-sm font-semibold tracking-wider uppercase drop-shadow-md">
                      Holistic Education
                    </p>
                    <p className="text-gold-300/80 text-xs mt-2 font-medium">
                      Values • Character • Intellect
                    </p>
                  </div>
                </div>

                <div className="relative mt-8 h-24">
                  <div className="absolute left-0 -top-4 bg-white/10 backdrop-blur-xl rounded-2xl p-4 border border-white/20 shadow-xl transform -rotate-6 hover:rotate-0 transition-transform duration-300 z-20">
                    <p className="text-2xl font-bold text-gold-400 drop-shadow-md">98%</p>
                    <p className="text-xs text-emerald-100 mt-1 font-medium tracking-wide">Academic Growth</p>
                  </div>
                  <div className="absolute right-0 top-4 bg-emerald-900/40 backdrop-blur-xl rounded-2xl p-4 border border-emerald-500/20 shadow-xl transform rotate-3 hover:rotate-0 transition-transform duration-300 z-10">
                    <p className="text-2xl font-bold text-white drop-shadow-md">K–12</p>
                    <p className="text-xs text-emerald-200 mt-1 font-medium tracking-wide">Character Programs</p>
                  </div>
                </div>
              </div>

              <div className="absolute -top-8 -right-4 lg:-right-8 w-24 h-24 bg-gradient-to-br from-gold-500 to-gold-400 rounded-[1.5rem] flex items-center justify-center shadow-glow-gold transform rotate-12 hover:rotate-0 transition-transform duration-500 animate-float z-30 border border-white/20">
                <GraduationCap className="w-10 h-10 text-slate-900 -rotate-12 group-hover:rotate-0 transition-transform" />
              </div>
            </motion.div> */}
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-1.5">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-white/60"
            />
          </div>
        </motion.div>
      </section>

      {/* ================================================================
          CORE PILLARS SECTION
          ================================================================ */}
      <section id="pillars" className="py-24 lg:py-32 bg-gradient-section grid-pattern relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="Our Foundation"
            title="Pillars of Excellence"
            description="Our educational philosophy is built on four foundational pillars that guide every aspect of our students' learning journey."
          />

          {/* Pillars Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <AnimatedSection key={pillar.title} delay={index * 0.1}>
                  <div
                    id={`pillar-${pillar.title.toLowerCase()}`}
                    className="group relative bg-white rounded-2xl p-8 shadow-soft border border-slate-100 hover:shadow-card hover:-translate-y-2 transition-all duration-500 h-full"
                  >
                    {/* Icon */}
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${pillar.gradient} flex items-center justify-center mb-6 shadow-md group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{pillar.title}</h3>

                    {/* Description */}
                    <p className="text-sm text-slate-500 leading-relaxed">{pillar.description}</p>

                    {/* Bottom accent line */}
                    <div className={`absolute bottom-0 left-8 right-8 h-0.5 bg-gradient-to-r ${pillar.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full`} />
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================================================================
          STATS SECTION
          ================================================================ */}
      <section id="stats" className="py-20 bg-emerald-950 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-5 grid-pattern" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <AnimatedSection key={stat.label} delay={index * 0.1}>
                  <div className="text-center">
                    <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center mx-auto mb-4 border border-white/10">
                      <Icon className="w-7 h-7 text-gold-400" />
                    </div>
                    <AnimatedCounter value={stat.value} className="text-3xl sm:text-4xl font-bold text-white mb-2" />
                    <p className="text-sm text-emerald-300/60">{stat.label}</p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================================================================
          WHY CHOOSE US / FEATURES SECTION
          ================================================================ */}
      <section id="why-choose-us" className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Image / illustration placeholder */}
            <AnimatedSection direction="left">
              <div className="relative">
                <div className="aspect-square rounded-3xl bg-gradient-to-br from-emerald-50 to-emerald-100 border border-emerald-200/50 flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 opacity-10">
                    <svg className="w-full h-full" viewBox="0 0 400 400">
                      <pattern id="dots" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
                        <circle cx="15" cy="15" r="2" fill="#059669" />
                      </pattern>
                      <rect width="400" height="400" fill="url(#dots)" />
                    </svg>
                  </div>
                  {/* <div className="text-center z-10 p-8">
                    <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-emerald-600 to-emerald-500 flex items-center justify-center mx-auto mb-6 shadow-lg">
                      <GraduationCap className="w-12 h-12 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-emerald-900 mb-2">
                      Holistic Education
                    </h3>
                    <p className="text-emerald-600/70 text-sm">
                      Mind, Body & Soul
                    </p>
                  </div> */}
                </div>

                {/* <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-5 shadow-card border border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gold-500 to-gold-400 flex items-center justify-center">
                      <Award className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900">Accredited</p>
                      <p className="text-xs text-slate-500">Certified Program</p>
                    </div>
                  </div>
                </div> */}
              </div>
            </AnimatedSection>

            {/* Right: Feature list */}
            <AnimatedSection direction="right">
              <SectionHeading
                subtitle="Why Choose Us"
                title="Education That Shapes Futures"
                description="We go beyond traditional schooling to provide a comprehensive educational experience that nurtures the whole child."
                centered={false}
              />

              <div className="space-y-5">
                {[
                  {
                    title: 'Faith-Centered Curriculum',
                    desc: 'Seamlessly integrating Islamic studies with a rigorous academic program.',
                  },
                  {
                    title: 'Small Class Sizes',
                    desc: 'Personalized attention with a maximum of 15 students per virtual classroom.',
                  },
                  {
                    title: 'Certified Educators',
                    desc: 'Experienced, qualified teachers passionate about Islamic education.',
                  },
                  {
                    title: 'Flexible Learning',
                    desc: 'Adaptable schedules that accommodate diverse family needs worldwide.',
                  },
                ].map((feature, i) => (
                  <div
                    key={feature.title}
                    className="flex gap-4 group cursor-default"
                  >
                    <div className="shrink-0 w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center group-hover:bg-emerald-600 group-hover:border-emerald-600 transition-colors duration-300">
                      <ChevronRight className="w-4 h-4 text-emerald-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">{feature.title}</h4>
                      <p className="text-sm text-slate-500">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ================================================================
          TESTIMONIALS SECTION
          ================================================================ */}
      <section id="testimonials" className="py-24 lg:py-32 bg-gradient-section grid-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="Testimonials"
            title="What Our Community Says"
            description="Hear from the families and students who have experienced the transformative power of our educational approach."
          />

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <AnimatedSection key={testimonial.name} delay={index * 0.15}>
                <div className="bg-white rounded-2xl p-8 shadow-soft border border-slate-100 hover:shadow-card transition-all duration-500 h-full flex flex-col">
                  {/* Stars */}
                  <div className="flex gap-1 mb-5">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-gold-500 fill-gold-500" />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-slate-600 leading-relaxed mb-6 flex-1 italic">
                    "{testimonial.quote}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3 pt-5 border-t border-slate-100">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-600 to-emerald-500 flex items-center justify-center text-white text-sm font-bold">
                      {testimonial.name.split(' ').map((n) => n[0]).join('')}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-900">{testimonial.name}</p>
                      <p className="text-xs text-slate-500">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          CTA BANNER
          ================================================================ */}
      <section id="cta-banner" className="py-24 bg-emerald-950 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10 grid-pattern" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-600/20 rounded-full blur-3xl" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/10 mb-8">
              <Sparkles className="w-4 h-4 text-gold-400" />
              <span className="text-sm text-emerald-100 font-medium">Limited Seats Available</span>
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              Ready to Transform Your{' '}
              <span className="text-gradient-gold">Child's Future?</span>
            </h2>

            <p className="text-lg text-emerald-200/70 max-w-2xl mx-auto mb-10">
              Join hundreds of families who have chosen Iqra Virtual School for a
              faith-based, academically excellent educational experience.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/admissions"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-gold-500 to-gold-400 text-emerald-950 font-bold rounded-2xl shadow-lg hover:shadow-glow-gold hover:scale-105 transition-all duration-300"
              >
                Begin Enrollment
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                Contact Us
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}

export default Home;
