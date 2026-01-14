'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function Hero() {
  const [displayedText, setDisplayedText] = useState('')
  const [displayedSubtitle, setDisplayedSubtitle] = useState('')
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0)
  const fullText = 'Asif Iqbal'
  const titles = [
    'AI Systems Architect',
    'RAG Expert',
    'AI Persona Builder',
    'AI Twin Specialist',
    'LLM Engineer'
  ]
  
  useEffect(() => {
    let currentIndex = 0
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(interval)
      }
    }, 100)
    
    return () => clearInterval(interval)
  }, [])
  
  // Looping subtitle animation
  useEffect(() => {
    const startDelay = fullText.length * 100 + 200
    
    const animateTitle = () => {
      const currentTitle = titles[currentTitleIndex]
      let charIndex = 0
      
      // Type out the title with smoother timing
      const typeInterval = setInterval(() => {
        if (charIndex <= currentTitle.length) {
          setDisplayedSubtitle(currentTitle.slice(0, charIndex))
          charIndex++
        } else {
          clearInterval(typeInterval)
          
          // Wait 2.5 seconds, then delete smoothly and move to next title
          setTimeout(() => {
            let deleteIndex = currentTitle.length
            const deleteInterval = setInterval(() => {
              if (deleteIndex >= 0) {
                setDisplayedSubtitle(currentTitle.slice(0, deleteIndex))
                deleteIndex--
              } else {
                clearInterval(deleteInterval)
                setCurrentTitleIndex((prev) => (prev + 1) % titles.length)
              }
            }, 25) // Even smoother, faster delete
          }, 2500)
        }
      }, 50) // Even smoother typing speed
    }
    
    const timeout = setTimeout(animateTitle, startDelay)
    
    return () => clearTimeout(timeout)
  }, [currentTitleIndex])

  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-6 pt-20 relative overflow-hidden">
      {/* Background Brain Image */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/60 z-10" />
        <Image
          src="/images/background.png"
          alt="AI Brain Visualization"
          fill
          className="object-cover object-center opacity-50"
          priority
          quality={100}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30 z-10" />
      </div>
      
      {/* Ambient Glow Effects */}
      <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.3, scale: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="relative w-full h-full max-w-6xl"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-neural-cyan/20 to-neural-purple/20 blur-3xl" />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center relative z-10"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-3 px-8 py-3.5 mb-12 relative group overflow-hidden backdrop-blur-xl"
          style={{
            background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.4) 100%)',
            borderRadius: '60px',
            border: '1px solid rgba(0, 217, 255, 0.2)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4), 0 2px 8px rgba(0, 217, 255, 0.1), inset 0 1px 1px rgba(255, 255, 255, 0.1)',
          }}
        >
          {/* Animated gradient overlay on hover */}
          <div 
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
            style={{
              background: 'linear-gradient(135deg, rgba(0, 217, 255, 0.08), rgba(0, 150, 199, 0.05))',
              borderRadius: '60px',
            }}
          />
          
          {/* Subtle glow on hover */}
          <div 
            className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"
            style={{
              background: 'radial-gradient(circle at center, rgba(0, 217, 255, 0.15), transparent 70%)',
              filter: 'blur(20px)',
              zIndex: -1,
            }}
          />
          
          {/* Verified Badge Icon - More Professional */}
          <div className="relative flex items-center justify-center">
            <svg className="w-5 h-5 text-neural-cyan relative z-10" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <div className="absolute w-6 h-6 bg-neural-cyan/20 rounded-full blur-md"></div>
          </div>
          
          <span className="text-white text-sm font-medium tracking-wider relative z-10 group-hover:text-neural-cyan transition-colors duration-300" 
            style={{ 
              textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)',
              letterSpacing: '0.05em'
            }}>
            Top Rated Upwork AI Engineer
          </span>
          
          {/* Subtle divider */}
          <div className="w-px h-4 bg-gradient-to-b from-transparent via-neural-cyan/30 to-transparent"></div>
          
          {/* Active indicator */}
          <div className="relative flex items-center justify-center">
            <span className="w-2 h-2 bg-neural-cyan rounded-full animate-pulse-slow relative z-10"
              style={{ boxShadow: '0 0 8px rgba(0, 217, 255, 0.8)' }}
            />
            <span className="absolute w-3 h-3 bg-neural-cyan/30 rounded-full animate-ping"></span>
          </div>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-5xl md:text-7xl font-bold mb-6 leading-tight font-heading"
        >
          <span className="block mb-2 text-shadow-strong">
            {displayedText}
            <span className="inline-block w-1 h-12 md:h-16 bg-neural-cyan ml-2 animate-pulse" style={{ verticalAlign: 'middle' }} />
          </span>
          <span className="block text-4xl md:text-6xl text-gradient drop-shadow-2xl" style={{ filter: 'drop-shadow(0 0 30px rgba(0, 217, 255, 0.5))' }}>
            {displayedSubtitle}
            <span className="inline-block w-0.5 h-10 md:h-12 bg-neural-purple ml-1 animate-pulse" style={{ verticalAlign: 'middle' }} />
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed text-shadow"
          style={{ textShadow: '0 2px 10px rgba(0, 0, 0, 0.8)' }}
        >
          Designing production-ready intelligent systems.<br />
          Specializing in Retrieval-Augmented Generation, AI personas,<br />
          and end-to-end enterprise AI architecture.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <Link
            href="#contact"
            className="group relative px-8 py-4 bg-gradient-to-r from-neural-cyan to-neural-blue text-black font-bold rounded-xl overflow-hidden transition-all hover:-translate-y-1"
            style={{ boxShadow: '0 4px 30px rgba(0, 217, 255, 0.4), 0 0 60px rgba(0, 217, 255, 0.2)' }}
          >
            <span className="relative z-10">Start a Conversation</span>
            <div className="absolute inset-0 bg-gradient-to-r from-neural-blue to-neural-cyan opacity-0 group-hover:opacity-100 transition-opacity" />
          </Link>
          <Link
            href="#expertise"
            className="px-8 py-4 glass-effect-strong rounded-xl font-bold text-white hover:bg-white/20 transition-all hover:-translate-y-1 border-2 border-neural-cyan/30 hover:border-neural-cyan/60"
            style={{ boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)' }}
          >
            Explore Capabilities
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-center gap-8 p-8 glass-effect-strong rounded-2xl max-w-2xl mx-auto border-2 border-neural-cyan/20"
          style={{ boxShadow: '0 8px 32px rgba(0, 0, 0, 0.6), 0 0 80px rgba(0, 217, 255, 0.1)' }}
        >
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-neural-cyan font-mono mb-1 drop-shadow-lg" style={{ textShadow: '0 0 20px rgba(0, 217, 255, 0.8)' }}>100%</div>
            <div className="text-sm text-gray-400 uppercase tracking-wider font-medium">Job Success Score</div>
          </div>
          <div className="hidden md:block w-px h-12 bg-neural-cyan/30" />
          <div className="md:hidden w-12 h-px bg-neural-cyan/30" />
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-neural-cyan font-mono mb-1 drop-shadow-lg" style={{ textShadow: '0 0 20px rgba(0, 217, 255, 0.8)' }}>RAG</div>
            <div className="text-sm text-gray-400 uppercase tracking-wider font-medium">Core Specialization</div>
          </div>
          <div className="hidden md:block w-px h-12 bg-neural-cyan/30" />
          <div className="md:hidden w-12 h-px bg-neural-cyan/30" />
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-neural-cyan font-mono mb-1 drop-shadow-lg" style={{ textShadow: '0 0 20px rgba(0, 217, 255, 0.8)' }}>Enterprise</div>
            <div className="text-sm text-gray-400 uppercase tracking-wider font-medium">Production Systems</div>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-6 h-10 border-2 border-neural-cyan/30 rounded-full flex justify-center pt-2"
        >
          <div className="w-1 h-3 bg-neural-cyan rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}
