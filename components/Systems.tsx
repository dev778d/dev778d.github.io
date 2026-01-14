'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const systems = [
  {
    label: 'Enterprise RAG Platform',
    title: 'Knowledge Intelligence System',
    description: 'End-to-end RAG platform for Fortune 500 client enabling intelligent document retrieval across 10M+ documents. Multi-modal embeddings, hybrid search, and advanced reranking for 95% answer accuracy.',
    tech: ['LangChain', 'Pinecone', 'OpenAI', 'FastAPI'],
  },
  {
    label: 'AI Agent System',
    title: 'Customer Intelligence Platform',
    description: 'Multi-agent system handling customer queries with specialized AI personas for support, sales, and technical assistance. Reduced response time by 70% while maintaining human-level quality.',
    tech: ['AutoGPT', 'Memory Systems', 'Webhooks', 'Analytics'],
  },
  {
    label: 'Research Assistant',
    title: 'AI-Powered Research System',
    description: 'Intelligent research assistant for biotech firm, analyzing thousands of research papers and extracting insights. Semantic search with citation tracking and confidence scoring for reliable research automation.',
    tech: ['Vector DB', 'PDF Processing', 'Claude', 'Custom RAG'],
  },
]

export default function Systems() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="systems" className="py-32 px-6 relative">
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
            Production Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4">Intelligent Systems Built</h2>
        </motion.div>

        {/* Systems List */}
        <div className="space-y-8">
          {systems.map((system, index) => (
            <motion.div
              key={system.title}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 * index }}
              className="p-8 glass-effect-strong rounded-2xl border-l-4 border-neural-cyan hover:bg-white/10 hover:translate-x-3 hover:shadow-2xl hover:shadow-neural-cyan/20 transition-all group border border-white/10"
              style={{ boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5)' }}
            >
              {/* Label */}
              <span className="inline-block px-3 py-1 bg-neural-purple/10 border border-neural-purple/30 rounded text-xs uppercase tracking-wider text-neural-purple font-semibold mb-4">
                {system.label}
              </span>

              {/* Title */}
              <h3 className="text-3xl font-bold mb-4 group-hover:text-neural-cyan transition-colors text-white text-shadow">
                {system.title}
              </h3>

              {/* Description */}
              <p className="text-gray-300 leading-relaxed text-lg mb-6 text-shadow">
                {system.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-3">
                {system.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-gray-400 font-mono hover:border-neural-cyan/50 hover:text-neural-cyan transition-all"
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
