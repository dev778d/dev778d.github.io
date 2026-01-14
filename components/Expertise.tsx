'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const expertiseAreas = [
  {
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L2 7l10 5 10-5-10-5z"/>
        <path d="M2 17l10 5 10-5"/>
        <path d="M2 12l10 5 10-5"/>
      </svg>
    ),
    title: 'Retrieval-Augmented Generation',
    description: 'Advanced RAG architectures combining vector databases, semantic search, and LLMs for accurate, context-aware AI systems. From chunking strategies to reranking pipelines.',
    tech: ['Vector Embeddings', 'Semantic Search', 'Context Optimization', 'Multi-Modal RAG'],
  },
  {
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    title: 'AI Personas & Agents',
    description: 'Intelligent agents with distinct personalities, knowledge domains, and decision-making capabilities. Designed for customer interaction, internal automation, and specialized workflows.',
    tech: ['Conversational AI', 'Memory Systems', 'Multi-Agent Orchestration', 'Tool Integration'],
  },
  {
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
        <line x1="9" y1="9" x2="15" y2="9"/>
        <line x1="9" y1="15" x2="15" y2="15"/>
      </svg>
    ),
    title: 'Enterprise AI Systems',
    description: 'Complete intelligent systems architecture for production environments. Scalable, secure, and optimized for business-critical operations with robust monitoring and evaluation.',
    tech: ['System Architecture', 'API Design', 'Performance Optimization', 'Production Deployment'],
  },
  {
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
    title: 'LLM Engineering',
    description: 'Expert-level prompt engineering, fine-tuning strategies, and model optimization. Working with GPT-4, Claude, open-source models, and custom training pipelines.',
    tech: ['Prompt Engineering', 'Fine-Tuning', 'Model Selection', 'Cost Optimization'],
  },
]

export default function Expertise() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="expertise" className="py-32 px-6 relative">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neural-cyan/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-neural-cyan text-sm font-semibold uppercase tracking-wider">
            Core Capabilities
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4">AI Expertise</h2>
        </motion.div>

        {/* Expertise Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {expertiseAreas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="p-8 glass-effect-strong rounded-2xl hover-lift hover:bg-white/10 hover:border-neural-cyan/30 hover:shadow-2xl hover:shadow-neural-cyan/20 group border-2 border-white/10"
              style={{ boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5)' }}
            >
              {/* Icon & Title */}
              <div className="mb-6">
                <div className="text-neural-cyan mb-4 group-hover:scale-110 transition-transform inline-block">
                  {area.icon}
                </div>
<h3 className="text-2xl font-bold text-white text-shadow">{area.title}</h3>
            </div>

            {/* Description */}
            <p className="text-gray-300 leading-relaxed mb-6 text-shadow">{area.description}</p>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2">
                {area.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 bg-neural-cyan/10 border border-neural-cyan/20 rounded-lg text-sm text-neural-cyan font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
