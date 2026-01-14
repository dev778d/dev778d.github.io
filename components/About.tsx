'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const principles = [
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10"/>
        <path d="M12 6v6l4 2"/>
      </svg>
    ),
    title: 'Production-First',
    description: 'Every system designed for real-world deployment and scale',
  },
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
        <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
        <line x1="12" y1="22.08" x2="12" y2="12"/>
      </svg>
    ),
    title: 'Research-Informed',
    description: 'Leveraging latest AI research for competitive advantage',
  },
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2L2 7l10 5 10-5-10-5z"/>
        <path d="M2 17l10 5 10-5"/>
        <path d="M2 12l10 5 10-5"/>
      </svg>
    ),
    title: 'End-to-End',
    description: 'Complete system design from architecture to deployment',
  },
]

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-neural-cyan text-sm font-semibold uppercase tracking-wider">
            Intelligence Architecture
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4">Building Systems That Think</h2>
        </motion.div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-2xl text-white leading-relaxed font-semibold text-shadow">
              I architect AI systems that bridge the gap between cutting-edge research 
              and business-critical production environments.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed text-shadow">
              My work focuses on Retrieval-Augmented Generation (RAG) systems that combine 
              the power of large language models with proprietary knowledge bases, creating 
              intelligent solutions that are accurate, reliable, and enterprise-ready.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed">
              From AI personas that understand context and intent, to complete intelligent 
              systems that transform how businesses operate — I design solutions that work 
              at scale, in production, for real business outcomes.
            </p>
          </motion.div>

          {/* Principles */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            {principles.map((principle, index) => (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="flex gap-4 p-6 glass-effect-strong rounded-xl hover:bg-white/10 hover:border-neural-cyan/30 hover:translate-x-2 transition-all group border border-white/10"
                style={{ boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)' }}
              >
                <div className="flex-shrink-0 text-neural-cyan group-hover:scale-110 transition-transform">
                  {principle.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-white text-shadow">{principle.title}</h3>
                  <p className="text-gray-300 text-shadow">{principle.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
