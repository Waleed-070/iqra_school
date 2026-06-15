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
import SubmitButton from '../components/SubmitButton';
import FloatingInput from '../components/FloatingInput';
import AnimatedSection from '../components/AnimatedSection';

/* ---- Onboarding Steps Data ---- */
const onboardingSteps = [
  {
    iconSrc: '/icons/document.gif',
    title: 'Submit Application',
    description: 'Complete the online registration form with student and parent information.',
  },
  {
    iconSrc: '/icons/resume.gif',
    title: 'Document Review',
    description: 'Our admissions team reviews your application and required documents.',
  },
  {
    iconSrc: '/icons/team.gif',
    title: 'Family Interview',
    description: 'A brief virtual interview to get to know your family and answer questions.',
  },
  {
    iconSrc: '/icons/spell-book.gif',
    title: 'Placement Assessment',
    description: 'A friendly academic assessment to determine the best grade placement.',
  },
  {
    iconSrc: '/icons/check.gif',
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
                            <img 
                              src={step.iconSrc} 
                              alt={step.title} 
                              className={`w-8 h-8 object-contain ${isActive ? 'mix-blend-screen' : 'mix-blend-multiply opacity-50'}`} 
                              style={isActive ? { filter: 'invert(1)' } : {}}
                            />
                          )}
                        </div>

                        {index < onboardingSteps.length - 1 && (
                          <div className={`absolute left-1/2 -translate-x-1/2 top-full w-px h-6 ${
                            isCompleted ? 'bg-emerald-300' : 'bg-slate-200'
                          }`} />
                        )}
                      </div>

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
                      <FloatingInput
                        id="studentName"
                        label="Student Full Name"
                        value={formData.studentName}
                        onChange={handleChange}
                        required
                        Icon={User}
                      />
                    </div>

                    {/* Age */}
                    <div>
                      <FloatingInput
                        id="age"
                        type="number"
                        min="4"
                        max="19"
                        label="Age"
                        value={formData.age}
                        onChange={handleChange}
                        required
                        Icon={Calendar}
                      />
                    </div>

                    {/* Grade */}
                    <div>
                      <FloatingInput
                        as="select"
                        id="grade"
                        label="Desired Grade"
                        value={formData.grade}
                        onChange={handleChange}
                        required
                        Icon={GraduationCap}
                        options={gradeOptions}
                      />
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
                      <FloatingInput
                        id="parentName"
                        label="Parent / Guardian Name"
                        value={formData.parentName}
                        onChange={handleChange}
                        required
                        Icon={User}
                      />
                    </div>

                    {/* Parent Email */}
                    <div>
                      <FloatingInput
                        id="parentEmail"
                        type="email"
                        label="Email Address"
                        value={formData.parentEmail}
                        onChange={handleChange}
                        required
                        Icon={Mail}
                      />
                    </div>

                    {/* Parent Phone */}
                    <div>
                      <FloatingInput
                        id="parentPhone"
                        type="tel"
                        label="Phone Number"
                        value={formData.parentPhone}
                        onChange={handleChange}
                        required
                        Icon={Phone}
                      />
                    </div>
                  </div>

                  {/* Additional Message */}
                  <div className="mb-8">
                    <FloatingInput
                      as="textarea"
                      id="message"
                      label="Additional Notes (Optional)"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                    />
                  </div>
{/* Submit Application */}
                  <SubmitButton />

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
