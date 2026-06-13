/**
 * Faculty.jsx - Faculty page for Iqra Virtual School.
 * Displays an elegant grid of staff profile cards with hover transitions.
 */
import { motion } from 'framer-motion';
import { Mail, Sparkles, BookOpen, Award, ExternalLink } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import AnimatedSection from '../components/AnimatedSection';

/* ---- Faculty Data ---- */
const faculty = [
  {
    name: 'Dr. Yusuf Rahman',
    role: 'Principal & Founder',
    department: 'Leadership',
    bio: 'Ph.D. in Islamic Education with 20+ years of experience in curriculum development and school leadership.',
    initials: 'YR',
    gradient: 'from-emerald-700 to-emerald-600',
  },
  {
    name: 'Ustadha Maryam Ali',
    role: 'Head of Quran Studies',
    department: 'Islamic Studies',
    bio: 'Hafidha with Ijazah in the ten Qira\'at. Passionate about making Quran memorization accessible to all students.',
    initials: 'MA',
    gradient: 'from-gold-500 to-gold-400',
  },
  {
    name: 'Mr. Ahmad Khalil',
    role: 'Mathematics Lead',
    department: 'STEM',
    bio: 'M.Sc. in Applied Mathematics. Specializes in making complex concepts engaging and accessible.',
    initials: 'AK',
    gradient: 'from-emerald-600 to-emerald-500',
  },
  {
    name: 'Ms. Sarah Ibrahim',
    role: 'English & Literature',
    department: 'Humanities',
    bio: 'M.A. in English Literature. Dedicated to developing students\' critical thinking through literary analysis.',
    initials: 'SI',
    gradient: 'from-emerald-800 to-emerald-700',
  },
  {
    name: 'Dr. Fatima Noor',
    role: 'Science Department Head',
    department: 'STEM',
    bio: 'Ph.D. in Biology. Passionate about inspiring the next generation of Muslim scientists and researchers.',
    initials: 'FN',
    gradient: 'from-gold-600 to-gold-500',
  },
  {
    name: 'Ustadh Omar Hassan',
    role: 'Arabic Language Lead',
    department: 'Islamic Studies',
    bio: 'Native Arabic speaker with M.A. in Arabic Linguistics. Uses immersive methods for language acquisition.',
    initials: 'OH',
    gradient: 'from-emerald-700 to-emerald-500',
  },
  {
    name: 'Ms. Aisha Patel',
    role: 'Art & Islamic Calligraphy',
    department: 'Arts',
    bio: 'Award-winning calligrapher combining traditional Islamic art forms with contemporary creative expression.',
    initials: 'AP',
    gradient: 'from-gold-500 to-gold-300',
  },
  {
    name: 'Mr. Bilal Ahmed',
    role: 'Physical Education & Wellness',
    department: 'Student Life',
    bio: 'Certified fitness trainer focused on holistic health education aligned with the Sunnah lifestyle.',
    initials: 'BA',
    gradient: 'from-emerald-600 to-emerald-400',
  },
];

function Faculty() {
  return (
    <div className="overflow-hidden">
      {/* ================================================================
          PAGE HERO
          ================================================================ */}
      <section className="relative bg-gradient-hero pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] grid-pattern" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/10 mb-6">
              <Sparkles className="w-4 h-4 text-gold-400" />
              <span className="text-sm text-emerald-100 font-medium">Our Team</span>
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Meet Our <span className="text-gradient-gold">Faculty</span>
            </h1>
            <p className="text-lg text-emerald-200/70 max-w-2xl mx-auto">
              Dedicated educators who combine academic expertise with a deep
              commitment to Islamic values and student success.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================================================================
          FACULTY GRID
          ================================================================ */}
      <section id="faculty-grid" className="py-24 lg:py-32 bg-[#e0e0e0] grid-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="Educators"
            title="Passionate & Qualified"
            description="Every member of our faculty brings expertise, dedication, and a genuine love for teaching."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {faculty.map((member, index) => (
              <AnimatedSection key={member.name} delay={index * 0.08}>
                <div
                  id={`faculty-${member.initials.toLowerCase()}`}
                  className="group bg-[#e0e0e0] rounded-[50px] overflow-hidden border-none shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] hover:-translate-y-2 transition-all duration-500"
                >
                  <div className="relative h-48 bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 opacity-5">
                      <svg className="w-full h-full" viewBox="0 0 200 200">
                        <pattern id={`p-${index}`} x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                          <circle cx="10" cy="10" r="1.5" fill="#059669" />
                        </pattern>
                        <rect width="200" height="200" fill={`url(#p-${index})`} />
                      </svg>
                    </div>

                    <div className={`w-24 h-24 rounded-3xl bg-gradient-to-br ${member.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 z-10`}>
                      <span className="text-2xl font-bold text-white">{member.initials}</span>
                    </div>

                    <div className="absolute top-4 right-4 px-3 py-1 bg-white/80 backdrop-blur-sm rounded-full text-xs font-medium text-emerald-700 border border-emerald-100/50">
                      {member.department}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-emerald-700 transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-sm font-medium text-gold-500 mb-3">{member.role}</p>
                    <p className="text-sm text-slate-500 leading-relaxed mb-4">{member.bio}</p>

                    <div className="flex items-center gap-2 text-emerald-600 text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                      <Mail className="w-4 h-4" />
                      <span>Contact</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          JOIN TEAM CTA
          ================================================================ */}
      <section className="py-24 bg-[#e0e0e0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="bg-gradient-to-br from-emerald-950 to-emerald-900 rounded-[50px] p-10 lg:p-14 text-center relative overflow-hidden shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff]">
              <div className="absolute inset-0 opacity-5 grid-pattern" />
              <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl" />

              <div className="relative">
                <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center mx-auto mb-6 border border-white/10">
                  <Award className="w-8 h-8 text-gold-400" />
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">Join Our Teaching Team</h2>
                <p className="text-emerald-200/70 max-w-xl mx-auto mb-8">
                  We're always looking for passionate, qualified educators who share our vision
                  of excellence in Islamic education.
                </p>
                <a
                  href="mailto:careers@iqravirtualschool.net"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-gold-500 to-gold-400 text-emerald-950 font-bold rounded-2xl shadow-lg hover:shadow-glow-gold hover:scale-105 transition-all duration-300"
                >
                  <BookOpen className="w-5 h-5" />
                  View Open Positions
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}

export default Faculty;
