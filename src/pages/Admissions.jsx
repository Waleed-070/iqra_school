/**
 * Admissions.jsx - Admissions page for Iqra Virtual School.
 * Features an interactive student registration form and an animated
 * onboarding steps checklist.
 */
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  User,
  Calendar,
  GraduationCap,
  Phone,
  Mail,
  FileText,
  CheckCircle2,
  Circle,
  ArrowRight,
  Sparkles,
  ClipboardCheck,
  Send,
  BookOpen,
  Users,
} from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import AnimatedSection from '../components/AnimatedSection';

/* ---- Onboarding Steps Data ---- */
const onboardingSteps = [
  {
    icon: FileText,
    title: 'Submit Application',
    description: 'Complete the online registration form with student and parent information.',
  },
  {
    icon: ClipboardCheck,
    title: 'Document Review',
    description: 'Our admissions team reviews your application and required documents.',
  },
  {
    icon: Users,
    title: 'Family Interview',
    description: 'A brief virtual interview to get to know your family and answer questions.',
  },
  {
    icon: BookOpen,
    title: 'Placement Assessment',
    description: 'A friendly academic assessment to determine the best grade placement.',
  },
  {
    icon: CheckCircle2,
    title: 'Enrollment Confirmation',
    description: 'Receive your acceptance letter and complete the enrollment process.',
  },
];

/* ---- Grade Options ---- */
const gradeOptions = [
  'Kindergarten',
  'Grade 1',
  'Grade 2',
  'Grade 3',
  'Grade 4',
  'Grade 5',
  'Grade 6',
  'Grade 7',
  'Grade 8',
  'Grade 9',
  'Grade 10',
  'Grade 11',
  'Grade 12',
];

function Admissions() {
  /* Form state */
  const [formData, setFormData] = useState({
    studentName: '',
    age: '',
    grade: '',
    parentName: '',
    parentEmail: '',
    parentPhone: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  /* Handle form field changes */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  /* Handle form submission */
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    // In production, you would send data to a backend
  };

  return (
    <div className="overflow-hidden">
      {/* ================================================================
          PAGE HERO
          ================================================================ */}
      <section className="relative bg-gradient-hero pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] grid-pattern" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold-500/10 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/10 mb-6">
              <Sparkles className="w-4 h-4 text-gold-400" />
              <span className="text-sm text-emerald-100 font-medium">Admissions Open 2026–2027</span>
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Begin Your <span className="text-gradient-gold">Journey</span>
            </h1>
            <p className="text-lg text-emerald-200/70 max-w-2xl mx-auto">
              Take the first step toward a transformative educational experience.
              Apply today and join our global community of learners.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================================================================
          ONBOARDING STEPS
          ================================================================ */}
      <section id="onboarding-steps" className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="How It Works"
            title="Enrollment Process"
            description="Our streamlined admissions process is designed to be simple and welcoming."
          />

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {onboardingSteps.map((step, index) => {
                const Icon = step.icon;
                const isActive = index === activeStep;
                const isCompleted = index < activeStep;

                return (
                  <AnimatedSection key={step.title} delay={index * 0.1}>
                    <button
                      id={`step-${index + 1}`}
                      onClick={() => setActiveStep(index)}
                      className={`w-full text-left flex items-start gap-6 p-6 rounded-2xl border transition-all duration-500 ${
                        isActive
                          ? 'bg-emerald-50 border-emerald-200 shadow-card'
                          : isCompleted
                            ? 'bg-emerald-50/50 border-emerald-100'
                            : 'bg-white border-slate-100 hover:border-slate-200 hover:shadow-soft'
                      }`}
                    >
                      {/* Step number / icon */}
                      <div className="shrink-0 relative">
                        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                          isActive
                            ? 'bg-gradient-to-br from-emerald-600 to-emerald-500 shadow-md'
                            : isCompleted
                              ? 'bg-emerald-100'
                              : 'bg-slate-100'
                        }`}>
                          {isCompleted ? (
                            <CheckCircle2 className="w-7 h-7 text-emerald-600" />
                          ) : (
                            <Icon className={`w-7 h-7 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                          )}
                        </div>

                        {/* Connector line */}
                        {index < onboardingSteps.length - 1 && (
                          <div className={`absolute left-1/2 -translate-x-1/2 top-full w-px h-6 ${
                            isCompleted ? 'bg-emerald-300' : 'bg-slate-200'
                          }`} />
                        )}
                      </div>

                      {/* Content */}
                      <div className="flex-1 pt-1">
                        <div className="flex items-center gap-3 mb-1">
                          <span className={`text-xs font-bold uppercase tracking-wider ${
                            isActive ? 'text-emerald-600' : 'text-slate-400'
                          }`}>
                            Step {index + 1}
                          </span>
                        </div>
                        <h3 className={`text-lg font-bold mb-1 ${
                          isActive ? 'text-emerald-900' : 'text-slate-800'
                        }`}>
                          {step.title}
                        </h3>
                        <AnimatePresence>
                          {isActive && (
                            <motion.p
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                              className="text-sm text-slate-500"
                            >
                              {step.description}
                            </motion.p>
                          )}
                        </AnimatePresence>
                      </div>

                      {/* Status indicator */}
                      <div className="shrink-0 pt-2">
                        {isCompleted ? (
                          <span className="px-3 py-1 bg-emerald-100 text-emerald-600 text-xs font-semibold rounded-full">
                            Done
                          </span>
                        ) : isActive ? (
                          <span className="px-3 py-1 bg-emerald-600 text-white text-xs font-semibold rounded-full">
                            Current
                          </span>
                        ) : (
                          <Circle className="w-5 h-5 text-slate-300" />
                        )}
                      </div>
                    </button>
                  </AnimatedSection>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          REGISTRATION FORM
          ================================================================ */}
      <section id="registration-form" className="py-24 lg:py-32 bg-gradient-section grid-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="Apply Now"
            title="Student Registration"
            description="Fill out the form below to begin the enrollment process. Our admissions team will reach out within 48 hours."
          />

          <div className="max-w-3xl mx-auto">
            <AnimatePresence mode="wait">
              {isSubmitted ? (
                /* ---- Success State ---- */
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-white rounded-3xl p-12 shadow-card border border-slate-100 text-center"
                >
                  <div className="w-20 h-20 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-10 h-10 text-emerald-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">
                    Application Submitted!
                  </h3>
                  <p className="text-slate-500 max-w-md mx-auto mb-8">
                    Thank you for your interest in Iqra Virtual School. Our admissions team
                    will review your application and reach out within 48 hours.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        studentName: '',
                        age: '',
                        grade: '',
                        parentName: '',
                        parentEmail: '',
                        parentPhone: '',
                        message: '',
                      });
                    }}
                    className="px-6 py-3 bg-emerald-50 text-emerald-700 font-semibold rounded-xl hover:bg-emerald-100 transition-colors"
                  >
                    Submit Another Application
                  </button>
                </motion.div>
              ) : (
                /* ---- Registration Form ---- */
                <motion.form
                  key="form"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  onSubmit={handleSubmit}
                  className="bg-white rounded-3xl p-8 sm:p-10 lg:p-12 shadow-card border border-slate-100"
                >
                  {/* Student Information */}
                  <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center">
                      <GraduationCap className="w-4 h-4 text-emerald-600" />
                    </div>
                    Student Information
                  </h3>

                  <div className="grid sm:grid-cols-2 gap-5 mb-10">
                    {/* Student Name */}
                    <div className="sm:col-span-2">
                      <label htmlFor="studentName" className="block text-sm font-medium text-slate-700 mb-2">
                        Student Full Name
                      </label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                        <input
                          id="studentName"
                          name="studentName"
                          type="text"
                          value={formData.studentName}
                          onChange={handleChange}
                          required
                          placeholder="Enter student's full name"
                          className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                        />
                      </div>
                    </div>

                    {/* Age */}
                    <div>
                      <label htmlFor="age" className="block text-sm font-medium text-slate-700 mb-2">
                        Age
                      </label>
                      <div className="relative">
                        <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                        <input
                          id="age"
                          name="age"
                          type="number"
                          min="4"
                          max="19"
                          value={formData.age}
                          onChange={handleChange}
                          required
                          placeholder="Student's age"
                          className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                        />
                      </div>
                    </div>

                    {/* Grade */}
                    <div>
                      <label htmlFor="grade" className="block text-sm font-medium text-slate-700 mb-2">
                        Desired Grade
                      </label>
                      <div className="relative">
                        <GraduationCap className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                        <select
                          id="grade"
                          name="grade"
                          value={formData.grade}
                          onChange={handleChange}
                          required
                          className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all appearance-none"
                        >
                          <option value="">Select grade</option>
                          {gradeOptions.map((g) => (
                            <option key={g} value={g}>{g}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Parent / Guardian Information */}
                  <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-gold-100 flex items-center justify-center">
                      <Users className="w-4 h-4 text-gold-600" />
                    </div>
                    Parent / Guardian Information
                  </h3>

                  <div className="grid sm:grid-cols-2 gap-5 mb-10">
                    {/* Parent Name */}
                    <div className="sm:col-span-2">
                      <label htmlFor="parentName" className="block text-sm font-medium text-slate-700 mb-2">
                        Parent / Guardian Name
                      </label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                        <input
                          id="parentName"
                          name="parentName"
                          type="text"
                          value={formData.parentName}
                          onChange={handleChange}
                          required
                          placeholder="Parent or guardian's full name"
                          className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                        />
                      </div>
                    </div>

                    {/* Parent Email */}
                    <div>
                      <label htmlFor="parentEmail" className="block text-sm font-medium text-slate-700 mb-2">
                        Email Address
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                        <input
                          id="parentEmail"
                          name="parentEmail"
                          type="email"
                          value={formData.parentEmail}
                          onChange={handleChange}
                          required
                          placeholder="email@example.com"
                          className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                        />
                      </div>
                    </div>

                    {/* Parent Phone */}
                    <div>
                      <label htmlFor="parentPhone" className="block text-sm font-medium text-slate-700 mb-2">
                        Phone Number
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                        <input
                          id="parentPhone"
                          name="parentPhone"
                          type="tel"
                          value={formData.parentPhone}
                          onChange={handleChange}
                          required
                          placeholder="+1 (555) 000-0000"
                          className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Additional Message */}
                  <div className="mb-8">
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                      Additional Notes (Optional)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Any special requirements, questions, or additional information..."
                      className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    id="submit-application"
                    className="w-full group flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-emerald-700 to-emerald-600 text-white font-bold rounded-2xl shadow-md hover:shadow-glow-green hover:scale-[1.02] transition-all duration-300"
                  >
                    <Send className="w-5 h-5" />
                    Submit Application
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <p className="text-center text-xs text-slate-400 mt-4">
                    By submitting, you agree to our privacy policy and terms of service.
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Admissions;
