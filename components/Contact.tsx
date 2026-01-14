'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="contact" className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Info Side */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <span className="text-neural-cyan text-sm font-semibold uppercase tracking-wider">
              Let's Build
            </span>
            <h2 className="text-4xl md:text-5xl font-bold">Start a Project</h2>
            <p className="text-xl text-gray-400 leading-relaxed">
              Whether you need a complete AI system architecture, RAG implementation, 
              or intelligent automation — let's discuss how AI can transform your business.
            </p>

            {/* Contact Methods */}
            <div className="space-y-4 pt-6">
              {/* Calendly Button - Featured */}
              <Link
                href="https://calendly.com/asifhmed482/idea-discussion"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 bg-gradient-to-r from-neural-cyan/20 to-neural-blue/20 border-2 border-neural-cyan/50 rounded-xl hover:bg-neural-cyan/30 hover:border-neural-cyan hover:translate-x-2 transition-all group relative overflow-hidden"
                style={{ boxShadow: '0 4px 20px rgba(0, 217, 255, 0.3)' }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-neural-cyan/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <svg className="w-6 h-6 text-neural-cyan group-hover:scale-110 transition-transform relative z-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                  <line x1="16" y1="2" x2="16" y2="6"/>
                  <line x1="8" y1="2" x2="8" y2="6"/>
                  <line x1="3" y1="10" x2="21" y2="10"/>
                  <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01M16 18h.01"/>
                </svg>
                <div className="flex-1 relative z-10">
                  <span className="text-white font-semibold block group-hover:text-neural-cyan transition-colors">Schedule 1-on-1 Meeting</span>
                  <span className="text-gray-400 text-sm">Book a consultation call</span>
                </div>
                <svg className="w-5 h-5 text-neural-cyan group-hover:translate-x-1 transition-transform relative z-10" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M9 5l7 7-7 7"/>
                </svg>
              </Link>

              <Link
                href="https://www.upwork.com/freelancers/asifi12"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 glass-effect rounded-xl hover:bg-white/10 hover:border-neural-cyan/30 hover:translate-x-2 transition-all group"
              >
                <svg className="w-5 h-5 text-neural-cyan group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.548-1.405-.002-2.543-1.143-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z"/>
                </svg>
                <span className="text-gray-300 group-hover:text-neural-cyan transition-colors">Upwork Profile</span>
              </Link>

              <Link
                href="mailto:asifhmed482@gmail.com"
                className="flex items-center gap-4 p-4 glass-effect rounded-xl hover:bg-white/10 hover:border-neural-cyan/30 hover:translate-x-2 transition-all group"
              >
                <svg className="w-5 h-5 text-neural-cyan group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                <span className="text-gray-300 group-hover:text-neural-cyan transition-colors">Email</span>
              </Link>

              <Link
                href="https://www.linkedin.com/in/asif-iqbal-05657922b"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 glass-effect rounded-xl hover:bg-white/10 hover:border-neural-cyan/30 hover:translate-x-2 transition-all group"
              >
                <svg className="w-5 h-5 text-neural-cyan group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <span className="text-gray-300 group-hover:text-neural-cyan transition-colors">LinkedIn</span>
              </Link>
            </div>
          </motion.div>

          {/* CTA Box */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-10 bg-gradient-to-br from-neural-cyan/10 via-neural-purple/10 to-transparent border-2 border-neural-cyan/30 rounded-3xl text-center space-y-6 glass-effect-strong"
            style={{ boxShadow: '0 8px 40px rgba(0, 0, 0, 0.6), 0 0 80px rgba(0, 217, 255, 0.15)' }}
          >
            <h3 className="text-3xl font-bold text-white text-shadow">Ready to Build Intelligence?</h3>
            <p className="text-gray-300 leading-relaxed text-shadow">
              Let's discuss your AI system requirements and create something exceptional.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://calendly.com/asifhmed482/idea-discussion"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-10 py-4 bg-gradient-to-r from-neural-cyan to-neural-blue text-black text-lg font-bold rounded-xl transition-all hover:-translate-y-1 hover:scale-105"
                style={{ boxShadow: '0 8px 40px rgba(0, 217, 255, 0.5), 0 0 80px rgba(0, 217, 255, 0.3)' }}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                  <line x1="16" y1="2" x2="16" y2="6"/>
                  <line x1="8" y1="2" x2="8" y2="6"/>
                  <line x1="3" y1="10" x2="21" y2="10"/>
                </svg>
                Schedule Meeting
              </Link>
              <Link
                href="mailto:asifhmed482@gmail.com"
                className="inline-flex items-center justify-center gap-3 px-10 py-4 border-2 border-neural-cyan text-neural-cyan text-lg font-bold rounded-xl transition-all hover:-translate-y-1 hover:bg-neural-cyan/10"
                style={{ boxShadow: '0 4px 20px rgba(0, 217, 255, 0.3)' }}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                Email Me
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
