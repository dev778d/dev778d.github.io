'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/90 backdrop-blur-2xl border-b border-white/10 shadow-2xl' : 'bg-black/60 backdrop-blur-xl'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2 group">
          <span className="text-2xl font-bold font-mono text-gradient tracking-tight transition-all group-hover:tracking-wide">
            ASIF<span className="text-neural-cyan" style={{ textShadow: '0 0 20px rgba(0, 217, 255, 0.8)' }}>AI</span>
          </span>
        </Link>

        <ul className="flex items-center space-x-8">
          {['About', 'Expertise', 'Portfolio', 'Systems', 'Contact'].map((item) => (
            <li key={item}>
              <Link
                href={`#${item.toLowerCase()}`}
                className="text-gray-400 hover:text-neural-cyan transition-colors relative group text-sm font-medium"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-neural-cyan transition-all group-hover:w-full" />
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="#contact"
              className="px-5 py-2 bg-gradient-to-r from-neural-cyan to-neural-blue text-black font-bold rounded-lg transition-all hover:-translate-y-0.5"
              style={{ boxShadow: '0 4px 20px rgba(0, 217, 255, 0.4), 0 0 40px rgba(0, 217, 255, 0.2)' }}
            >
              Connect
            </Link>
          </li>
        </ul>
      </div>
    </motion.nav>
  )
}
