'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const techCategories = [
  {
    title: 'AI & ML',
    items: ['OpenAI GPT-4', 'Claude', 'LangChain', 'LlamaIndex', 'HuggingFace', 'Transformers'],
  },
  {
    title: 'Vector & Data',
    items: ['Pinecone', 'Weaviate', 'ChromaDB', 'FAISS', 'PostgreSQL', 'MongoDB'],
  },
  {
    title: 'Backend & Infrastructure',
    items: ['Python', 'FastAPI', 'Node.js', 'Docker', 'AWS', 'Azure'],
  },
]

export default function TechStack() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="py-32 px-6 relative">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neural-purple/5 to-transparent pointer-events-none" />

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
            Technology Stack
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4">Tools & Frameworks</h2>
        </motion.div>

        {/* Categories */}
        <div className="space-y-12">
          {techCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 * categoryIndex }}
            >
              <h3 className="text-2xl font-bold mb-6">{category.title}</h3>
              <div className="flex flex-wrap gap-4">
                {category.items.map((item, itemIndex) => (
                  <motion.span
                    key={item}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 * categoryIndex + 0.05 * itemIndex }}
                    className="px-6 py-3 glass-effect-strong rounded-xl text-gray-300 hover:bg-white/10 hover:border-neural-cyan/30 hover:text-neural-cyan hover:-translate-y-1 transition-all cursor-default border border-white/10"
                    style={{ boxShadow: '0 4px 16px rgba(0, 0, 0, 0.4)' }}
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
