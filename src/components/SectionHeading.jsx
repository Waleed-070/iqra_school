/**
 * SectionHeading.jsx - Reusable section heading component.
 * Displays a subtitle badge, heading, description, and gold accent line.
 * Used across all pages for consistent visual hierarchy.
 */
import { motion } from 'framer-motion';

function SectionHeading({ subtitle, title, description, centered = true, light = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`mb-16 ${centered ? 'text-center' : ''}`}
    >
      {/* Subtitle badge */}
      {subtitle && (
        <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-4 ${
          light
            ? 'bg-white/10 text-emerald-200'
            : 'bg-emerald-50 text-emerald-700 border border-emerald-100'
        }`}>
          {subtitle}
        </span>
      )}

      {/* Main heading */}
      <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight ${
        light ? 'text-white' : 'text-slate-900'
      }`}>
        {title}
      </h2>

      {/* Gold accent line */}
      <div className={`gold-line mt-5 ${centered ? 'mx-auto' : ''}`} />

      {/* Description */}
      {description && (
        <p className={`mt-6 text-lg max-w-2xl leading-relaxed ${
          centered ? 'mx-auto' : ''
        } ${light ? 'text-emerald-200/80' : 'text-slate-500'}`}>
          {description}
        </p>
      )}
    </motion.div>
  );
}

export default SectionHeading;
