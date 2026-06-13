/**
 * About.jsx - About page for Iqra Virtual School.
 * Features school overview, mission/vision, timeline, and values.
 */
import { motion } from 'framer-motion';
import {
  Target,
  Eye,
  BookOpen,
  Heart,
  Shield,
  Users,
  Star,
  Compass,
  Sparkles,
} from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import AnimatedSection from '../components/AnimatedSection';

/* ---- Core Values Data ---- */
const values = [
  {
    icon: Heart,
    title: 'Ihsan (Excellence)',
    description: 'Striving for the highest standard in everything we do, from teaching to character development.',
  },
  {
    icon: Shield,
    title: 'Amanah (Trust)',
    description: 'Upholding the sacred trust placed in us by families to nurture and educate their children.',
  },
  {
    icon: Users,
    title: 'Ukhuwwah (Brotherhood)',
    description: 'Fostering a sense of unity and belonging within our diverse, global school community.',
  },
  {
    icon: Compass,
    title: 'Hikmah (Wisdom)',
    description: 'Teaching students not just to know, but to understand, reflect, and apply knowledge wisely.',
  },
  {
    icon: Star,
    title: 'Ikhlas (Sincerity)',
    description: 'Pursuing education with pure intentions and a genuine desire to benefit humanity.',
  },
  {
    icon: BookOpen,
    title: 'Ilm (Knowledge)',
    description: 'Cultivating a lifelong love of learning that encompasses both sacred and secular knowledge.',
  },
];

/* ---- Timeline Data ---- */
const timeline = [
  { year: '2010', title: 'Foundation', desc: 'Iqra Virtual School was established with a vision to provide quality Islamic education globally.' },
  { year: '2013', title: 'Accreditation', desc: 'Received full accreditation and expanded curriculum to cover K-8 programs.' },
  { year: '2016', title: 'High School Launch', desc: 'Introduced comprehensive high school programs with college preparatory tracks.' },
  { year: '2019', title: 'Global Reach', desc: 'Expanded to serve students across 30+ countries with multilingual support.' },
  { year: '2022', title: 'Innovation Hub', desc: 'Launched the Innovation Hub with STEM programs and digital literacy initiatives.' },
  { year: '2025', title: 'Community of 500+', desc: 'Grew to over 500 enrolled students with a 95% family satisfaction rate.' },
];

function About() {
  return (
    <div className="overflow-hidden">
      {/* ================================================================
          PAGE HERO
          ================================================================ */}
      <section className="relative bg-gradient-hero pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-[0.03] grid-pattern" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-600/10 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/10 mb-6">
              <Sparkles className="w-4 h-4 text-gold-400" />
              <span className="text-sm text-emerald-100 font-medium">Our Story</span>
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              About <span className="text-gradient-gold">Iqra</span> Virtual School
            </h1>
            <p className="text-lg text-emerald-200/70 max-w-2xl mx-auto">
              Discover the vision, values, and community that make Iqra a
              transformative educational experience for Muslim families worldwide.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================================================================
          OVERVIEW SECTION
          ================================================================ */}
      <section id="overview" className="py-24 lg:py-32 bg-[#e0e0e0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image placeholder */}
            <AnimatedSection direction="left">
              <div className="relative aspect-[4/3] rounded-[50px] bg-gradient-to-br from-emerald-50 to-emerald-100/50 border-none overflow-hidden shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff]">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-emerald-700 to-emerald-600 flex items-center justify-center mx-auto mb-5 shadow-lg">
                      <BookOpen className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-emerald-900 mb-2">Our School</h3>
                    <p className="text-emerald-600/60 text-sm">Established 2010</p>
                  </div>
                </div>
                {/* Decorative geometric corners */}
                <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-emerald-300/30 rounded-tl-xl" />
                <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-gold-400/30 rounded-br-xl" />
              </div>
            </AnimatedSection>

            {/* Text content */}
            <AnimatedSection direction="right">
              <SectionHeading
                subtitle="Who We Are"
                title="A Legacy of Faith-Based Education"
                centered={false}
              />
              <div className="space-y-5 text-slate-600 leading-relaxed">
                <p>
                  Iqra Virtual School was founded in 2010 with a singular mission: to provide
                  Muslim families around the world with access to high-quality, faith-centered
                  education that doesn't compromise on academic rigor.
                </p>
                <p>
                  Our name, <strong className="text-emerald-700">"Iqra"</strong> — meaning "Read"
                  in Arabic — reflects the very first word revealed in the Holy Quran, embodying our
                  deep belief that knowledge is the foundation of a meaningful life.
                </p>
                <p>
                  Today, we serve over 500 students from 30+ countries, offering a comprehensive
                  K-12 curriculum that seamlessly integrates Islamic studies, Quran memorization,
                  and Arabic language with core academic subjects.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ================================================================
          MISSION & VISION
          ================================================================ */}
      <section id="mission-vision" className="py-24 lg:py-32 bg-[#e0e0e0] grid-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="Our Purpose"
            title="Mission & Vision"
            description="Guided by faith, driven by excellence."
          />

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Mission Card */}
            <AnimatedSection delay={0}>
              <div className="bg-[#e0e0e0] rounded-[50px] p-10 border-none shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] hover:-translate-y-2 transition-all duration-500 h-full">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-700 to-emerald-600 flex items-center justify-center mb-7 shadow-md">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h3>
                <p className="text-slate-500 leading-relaxed">
                  To provide an exemplary Islamic education that nurtures the intellectual, spiritual,
                  and moral development of each student, empowering them to become compassionate,
                  confident, and contributing members of their communities.
                </p>
              </div>
            </AnimatedSection>

            {/* Vision Card */}
            <AnimatedSection delay={0.15}>
              <div className="bg-[#e0e0e0] rounded-[50px] p-10 border-none shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] hover:-translate-y-2 transition-all duration-500 h-full">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gold-500 to-gold-400 flex items-center justify-center mb-7 shadow-md">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Vision</h3>
                <p className="text-slate-500 leading-relaxed">
                  To be the world's leading Islamic virtual school, recognized for producing
                  graduates who excel academically, embody Islamic values, and lead with integrity
                  in an increasingly interconnected world.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ================================================================
          CORE VALUES
          ================================================================ */}
      <section id="values" className="py-24 lg:py-32 bg-[#e0e0e0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="What Guides Us"
            title="Our Core Values"
            description="These six values form the bedrock of our educational philosophy and community culture."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <AnimatedSection key={value.title} delay={index * 0.08}>
                  <div className="group relative bg-[#e0e0e0] rounded-[50px] p-7 border-none shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] hover:-translate-y-2 transition-all duration-500 h-full">
                    <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center mb-5 group-hover:bg-gradient-to-br group-hover:from-emerald-600 group-hover:to-emerald-500 transition-all duration-300">
                      <Icon className="w-6 h-6 text-emerald-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{value.title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">{value.description}</p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================================================================
          TIMELINE
          ================================================================ */}
      <section id="timeline" className="py-24 lg:py-32 bg-emerald-950 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 opacity-5 grid-pattern" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-600/15 rounded-full blur-3xl" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="Our Journey"
            title="Milestones of Growth"
            description="From humble beginnings to a thriving global community."
            light
          />

          {/* Timeline Items */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-emerald-600 via-gold-400 to-emerald-600 opacity-30" />

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <AnimatedSection
                  key={item.year}
                  delay={index * 0.1}
                  direction={index % 2 === 0 ? 'left' : 'right'}
                >
                  <div className={`relative flex items-start gap-8 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}>
                    {/* Content */}
                    <div className={`flex-1 ml-16 md:ml-0 ${
                      index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'
                    }`}>
                      <span className="inline-block px-3 py-1 bg-gold-500/20 text-gold-400 text-xs font-bold rounded-full mb-2">
                        {item.year}
                      </span>
                      <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-sm text-emerald-300/60">{item.desc}</p>
                    </div>

                    {/* Center dot */}
                    <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-emerald-950 border-2 border-gold-400 shadow-glow-gold z-10" />

                    {/* Spacer for opposite side */}
                    <div className="hidden md:block flex-1" />
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
