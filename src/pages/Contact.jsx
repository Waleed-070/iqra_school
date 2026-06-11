/**
 * Contact.jsx - Contact page for Iqra Virtual School.
 * Dual-column layout with interactive contact form and contact details.
 */
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  MessageSquare,
  Sparkles,
  Globe,
  ArrowRight,
} from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import AnimatedSection from '../components/AnimatedSection';

/* ---- Contact Details Data ---- */
const contactDetails = [
  {
    icon: Mail,
    title: 'Email Us',
    primary: 'info@iqravirtualschool.net',
    secondary: 'admissions@iqravirtualschool.net',
    gradient: 'from-emerald-600 to-emerald-500',
  },
  {
    icon: Phone,
    title: 'Call Us',
    primary: '+1 (555) 123-4567',
    secondary: '+1 (555) 987-6543',
    gradient: 'from-gold-500 to-gold-400',
  },
  {
    icon: MapPin,
    title: 'Office Address',
    primary: '123 Knowledge Avenue',
    secondary: 'Education City, EC 45678',
    gradient: 'from-emerald-700 to-emerald-600',
  },
  {
    icon: Clock,
    title: 'Office Hours',
    primary: 'Mon – Fri: 8:00 AM – 5:00 PM',
    secondary: 'Sat: 9:00 AM – 1:00 PM (EST)',
    gradient: 'from-gold-600 to-gold-500',
  },
];

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="overflow-hidden">
      {/* ================================================================
          PAGE HERO
          ================================================================ */}
      <section className="relative bg-gradient-hero pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] grid-pattern" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/10 mb-6">
              <MessageSquare className="w-4 h-4 text-gold-400" />
              <span className="text-sm text-emerald-100 font-medium">Get in Touch</span>
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Contact <span className="text-gradient-gold">Us</span>
            </h1>
            <p className="text-lg text-emerald-200/70 max-w-2xl mx-auto">
              Have questions about our programs or admissions? We'd love to hear from you.
              Reach out and our team will respond promptly.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================================================================
          CONTACT INFO CARDS
          ================================================================ */}
      <section id="contact-info" className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {contactDetails.map((detail, index) => {
              const Icon = detail.icon;
              return (
                <AnimatedSection key={detail.title} delay={index * 0.1}>
                  <div className="group bg-white rounded-2xl p-7 shadow-soft border border-slate-100 hover:shadow-card hover:-translate-y-1 transition-all duration-500 text-center h-full">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${detail.gradient} flex items-center justify-center mx-auto mb-5 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3">
                      {detail.title}
                    </h3>
                    <p className="text-sm text-slate-600 mb-1">{detail.primary}</p>
                    <p className="text-sm text-slate-400">{detail.secondary}</p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>

          {/* ================================================================
              DUAL-COLUMN: FORM + MAP/INFO
              ================================================================ */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* ---- Contact Form ---- */}
            <AnimatedSection direction="left">
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-white rounded-3xl p-12 shadow-card border border-slate-100 text-center"
                  >
                    <div className="w-20 h-20 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="w-10 h-10 text-emerald-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">Message Sent!</h3>
                    <p className="text-slate-500 max-w-md mx-auto mb-8">
                      Thank you for reaching out. Our team will get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({ name: '', email: '', subject: '', message: '' });
                      }}
                      className="px-6 py-3 bg-emerald-50 text-emerald-700 font-semibold rounded-xl hover:bg-emerald-100 transition-colors"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    onSubmit={handleSubmit}
                    className="bg-white rounded-3xl p-8 sm:p-10 shadow-card border border-slate-100"
                  >
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Send Us a Message</h3>
                    <p className="text-slate-500 text-sm mb-8">
                      Fill out the form below and we'll get back to you as soon as possible.
                    </p>

                    <div className="space-y-5">
                      {/* Name */}
                      <div>
                        <label htmlFor="contact-name" className="block text-sm font-medium text-slate-700 mb-2">
                          Your Name
                        </label>
                        <input
                          id="contact-name"
                          name="name"
                          type="text"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="Full name"
                          className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                        />
                      </div>

                      {/* Email */}
                      <div>
                        <label htmlFor="contact-email" className="block text-sm font-medium text-slate-700 mb-2">
                          Email Address
                        </label>
                        <input
                          id="contact-email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="email@example.com"
                          className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                        />
                      </div>

                      {/* Subject */}
                      <div>
                        <label htmlFor="contact-subject" className="block text-sm font-medium text-slate-700 mb-2">
                          Subject
                        </label>
                        <select
                          id="contact-subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all appearance-none"
                        >
                          <option value="">Select a subject</option>
                          <option value="admissions">Admissions Inquiry</option>
                          <option value="academics">Academic Programs</option>
                          <option value="tuition">Tuition & Fees</option>
                          <option value="technical">Technical Support</option>
                          <option value="general">General Question</option>
                          <option value="other">Other</option>
                        </select>
                      </div>

                      {/* Message */}
                      <div>
                        <label htmlFor="contact-message" className="block text-sm font-medium text-slate-700 mb-2">
                          Message
                        </label>
                        <textarea
                          id="contact-message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={5}
                          placeholder="How can we help you?"
                          className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all resize-none"
                        />
                      </div>
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      id="contact-submit"
                      className="w-full mt-6 group flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-emerald-700 to-emerald-600 text-white font-bold rounded-2xl shadow-md hover:shadow-glow-green hover:scale-[1.02] transition-all duration-300"
                    >
                      <Send className="w-5 h-5" />
                      Send Message
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </AnimatedSection>

            {/* ---- Right Column: Info & Map Placeholder ---- */}
            <AnimatedSection direction="right">
              <div className="space-y-8">
                {/* Map placeholder */}
                <div className="relative aspect-[4/3] rounded-3xl bg-gradient-to-br from-emerald-50 to-emerald-100/50 border border-emerald-200/30 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 rounded-2xl bg-emerald-100 flex items-center justify-center mx-auto mb-4">
                        <MapPin className="w-8 h-8 text-emerald-600" />
                      </div>
                      <h3 className="text-lg font-bold text-emerald-900 mb-1">Find Us</h3>
                      <p className="text-sm text-emerald-600/60">
                        Interactive map coming soon
                      </p>
                    </div>
                  </div>
                  {/* Grid dots */}
                  <div className="absolute inset-0 opacity-10">
                    <svg className="w-full h-full" viewBox="0 0 400 300">
                      <pattern id="mapDots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                        <circle cx="10" cy="10" r="1" fill="#059669" />
                      </pattern>
                      <rect width="400" height="300" fill="url(#mapDots)" />
                    </svg>
                  </div>
                </div>

                {/* Quick contact card */}
                <div className="bg-gradient-to-br from-emerald-950 to-emerald-900 rounded-2xl p-8 relative overflow-hidden">
                  <div className="absolute inset-0 opacity-5 grid-pattern" />
                  <div className="relative">
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                        <Globe className="w-5 h-5 text-gold-400" />
                      </div>
                      <h3 className="text-lg font-bold text-white">Global Access</h3>
                    </div>
                    <p className="text-emerald-200/70 text-sm leading-relaxed mb-6">
                      As a virtual school, we welcome students from anywhere in the world.
                      Our classes are conducted online, making quality Islamic education
                      accessible to all.
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {['USA', 'UK', 'Canada', 'UAE', 'Malaysia', '25+ More'].map((country) => (
                        <span
                          key={country}
                          className="px-3 py-1.5 bg-white/10 text-emerald-200 text-xs font-medium rounded-full border border-white/10"
                        >
                          {country}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Social / FAQ callout */}
                <div className="bg-white rounded-2xl p-7 shadow-soft border border-slate-100">
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Have More Questions?</h3>
                  <p className="text-sm text-slate-500 mb-5">
                    Visit our FAQ page or connect with us on social media for quick responses.
                  </p>
                  <div className="flex gap-3">
                    <span className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 hover:bg-emerald-600 hover:text-white transition-all cursor-pointer">
                      <Sparkles className="w-5 h-5" />
                    </span>
                    <span className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 hover:bg-emerald-600 hover:text-white transition-all cursor-pointer">
                      <Mail className="w-5 h-5" />
                    </span>
                    <span className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 hover:bg-emerald-600 hover:text-white transition-all cursor-pointer">
                      <Phone className="w-5 h-5" />
                    </span>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
