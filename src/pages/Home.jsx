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
import Hero3DContainer from '../components/Hero3DContainer';
import Feature3DContainer from '../components/Feature3DContainer';

const pillars = [
  {
    icon: Heart,
    title: 'Tarbiyah',
    description:
      'A nurturing approach to character development rooted in Islamic values, fostering integrity, empathy, and spiritual awareness in every student.',
    color: 'emerald',
    gradient: 'from-emerald-600 to-emerald-500',
    shadow: 'shadow-[0_4px_20px_rgba(0,99,158,0.3)]',
  },
  {
    icon: BookOpen,
    title: 'Knowledge',
    description:
      'A rigorous academic curriculum that cultivates critical thinking, creativity, and a lifelong love for learning across all disciplines.',
    color: 'gold',
    gradient: 'from-gold-500 to-gold-400',
    shadow: 'shadow-[0_4px_20px_rgba(203,161,53,0.3)]',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description:
      'Embracing modern educational technology and teaching methods to prepare students for the challenges and opportunities of tomorrow.',
    color: 'emerald',
    gradient: 'from-emerald-700 to-emerald-600',
    shadow: 'shadow-[0_4px_20px_rgba(0,58,93,0.3)]',
  },
  {
    icon: Globe,
    title: 'Community',
    description:
      'Building a strong, connected community of learners, parents, and educators who support each other in the pursuit of excellence.',
    color: 'gold',
    gradient: 'from-gold-600 to-gold-500',
    shadow: 'shadow-[0_4px_20px_rgba(203,161,53,0.3)]',
  },
];

const stats = [
  { value: '500+', label: 'Students Enrolled', icon: Users },
  { value: '50+', label: 'Expert Faculty', icon: GraduationCap },
  { value: '95%', label: 'Satisfaction Rate', icon: Star },
  { value: '15+', label: 'Years of Excellence', icon: Award },
];

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

      <section id="hero" className="relative min-h-screen lg:h-screen bg-slate-950 overflow-hidden flex items-center">
        <div className="absolute inset-0 bg-linear-to-tr from-emerald-900 via-slate-900 to-emerald-950 opacity-90" />

        <div className="absolute inset-0">
          <div className="absolute -top-40 -right-40 w-[800px] h-[800px] bg-emerald-600/20 rounded-full blur-[120px] mix-blend-screen" />
          <div className="absolute top-1/3 -left-40 w-[600px] h-[600px] bg-gold-500/10 rounded-full blur-[100px] mix-blend-screen" />
          <div className="absolute -bottom-20 right-1/4 w-[500px] h-[500px] bg-emerald-400/10 rounded-full blur-[80px] mix-blend-screen" />
          <div className="absolute inset-0 opacity-[0.04]">
            <div className="grid-pattern w-full h-full" />
          </div>
        </div>

        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20 lg:pt-16 lg:pb-0">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-12 mt-4 lg:mt-12 w-full">

            <motion.div
              className="lg:w-[55%] z-10"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
        
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-[4.2rem] font-bold text-white leading-[1.1] mb-6 tracking-tight">
                Character Building
                <span className="block mt-2">
                  Meets <span className="font-display italic bg-gradient-to-r from-amber-400 via-gold-400 to-yellow-200 bg-clip-text text-transparent pr-2">Academic</span>
                </span>
                <span className="font-display italic bg-gradient-to-r from-amber-400 via-gold-400 to-yellow-200 bg-clip-text text-transparent block mt-1"> Excellence</span>
              </h1>

              <p className="text-lg text-emerald-100/80 max-w-xl leading-relaxed mb-10">
                A premier Islamic virtual school redefining education. We seamlessly integrate profound moral values with a rigorous curriculum to nurture the complete development of every student—mind, body, and soul.
              </p>

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

            <motion.div
              className="lg:w-[45%] relative w-full mt-10 lg:mt-0"
              initial={{ opacity: 0, x: 50, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <Hero3DContainer />
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="hidden md:block absolute bottom-12 left-1/2 -translate-x-1/2"
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


      <section id="pillars" className="py-24 lg:py-32 bg-gradient-section grid-pattern relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="Our Foundation"
            title="Pillars of Excellence"
            description="Our educational philosophy is built on four foundational pillars that guide every aspect of our students' learning journey."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <AnimatedSection key={pillar.title} delay={index * 0.1}>
                  <div
                    id={`pillar-${pillar.title.toLowerCase()}`}
                    className="group relative bg-white rounded-3xl p-8 border border-slate-100 h-full overflow-hidden hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 ease-out shadow-soft"
                  >
                    
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${pillar.gradient} flex items-center justify-center mb-6 ${pillar.shadow} group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 relative z-10`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>

                    
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{pillar.title}</h3>

                   
                    <p className="text-sm text-slate-500 leading-relaxed">{pillar.description}</p>

                   
                    <div className={`absolute bottom-0 left-8 right-8 h-0.5 bg-linear-to-r ${pillar.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full`} />
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

      <section id="why-choose-us" className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
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
                  
                  <Feature3DContainer />
                  
                </div>
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
