'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'
import { useState, useRef } from 'react'

interface Project {
  id: number
  title: string
  description: string
  link: string
  type: 'video' | 'image'
  media: string
  tags: string[]
  featured?: boolean
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Funzi.ai',
    description: 'AI-powered learning platform with intelligent content generation and personalized learning paths.',
    link: 'https://funzi.ai',
    type: 'video',
    media: '/videos/funzi.mp4', // You'll need to add your video file
    tags: ['AI', 'Education', 'NLP'],
    featured: true,
  },
  {
    id: 2,
    title: 'SouLink App',
    description: 'Revolutionary social linking application with AI-driven connection recommendations.',
    link: 'https://soulinkapp.com',
    type: 'video',
    media: '/videos/Soulink.mp4',
    tags: ['Social', 'AI', 'Networking'],
    featured: true,
  },
  {
    id: 3,
    title: 'AI Twin',
    description: 'Intelligent AI persona that mirrors your communication style and can interact on your behalf.',
    link: 'https://app.openhome.com/api/personalities/demo?token=Asif-rnGU6', // Replace with your actual AI twin link
    type: 'video',
    media: '/videos/ai-twin.mp4', // You'll need to add your video file
    tags: ['AI', 'Persona', 'NLP'],
    featured: true,
  },
  {
    id: 4,
    title: 'Enterprise CRM System',
    description: 'Comprehensive CRM with AI-powered insights, automation, and customer intelligence.',
    link: 'https://medicare.elite-calls.com',
    type: 'image',
    media: '/images/Crm.jpg',
    tags: ['CRM', 'Automation', 'Analytics'],
  },
  {
    id: 5,
    title: 'RAG System',
    description: 'Retrieval Augmented Generation system for enterprise knowledge management and intelligent search.',
    link: 'https://elitebot.app/', // Replace with your actual RAG link
    type: 'video',
    media: '/videos/rag-system.mp4', // You'll need to add your video file
    tags: ['RAG', 'AI', 'Knowledge Base'],
    featured: true,
  },
]

export default function Portfolio() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [hoveredProject, setHoveredProject] = useState<number | null>(null)
  const videoRefs = useRef<{ [key: number]: HTMLVideoElement | null }>({})

  const handleMouseEnter = (projectId: number) => {
    setHoveredProject(projectId)
    const video = videoRefs.current[projectId]
    if (video) {
      video.play()
    }
  }

  const handleMouseLeave = (projectId: number) => {
    setHoveredProject(null)
    const video = videoRefs.current[projectId]
    if (video) {
      video.pause()
      video.currentTime = 0
    }
  }

  return (
    <section id="portfolio" className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-neural-cyan text-sm font-semibold uppercase tracking-wider">
            Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Showcasing AI-powered solutions that drive innovation and transform businesses
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`group relative ${project.featured ? 'lg:col-span-1' : ''}`}
            >
              <Link
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
                onMouseEnter={() => handleMouseEnter(project.id)}
                onMouseLeave={() => handleMouseLeave(project.id)}
              >
                <div 
                  className="relative rounded-2xl overflow-hidden border-2 border-white/10 hover:border-neural-cyan/50 transition-all duration-500"
                  style={{ 
                    boxShadow: hoveredProject === project.id 
                      ? '0 20px 60px rgba(0, 217, 255, 0.3), 0 0 40px rgba(0, 217, 255, 0.2)'
                      : '0 10px 40px rgba(0, 0, 0, 0.4)'
                  }}
                >
                  {/* Media Container */}
                  <div className="relative aspect-video bg-gradient-to-br from-neural-cyan/10 to-neural-purple/10 overflow-hidden">
                    {project.type === 'video' ? (
                      <video
                        ref={(el) => { videoRefs.current[project.id] = el }}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        loop
                        muted
                        playsInline
                      >
                        <source src={project.media} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-neural-cyan/20 to-neural-purple/20 flex items-center justify-center">
                        <img
                          src={project.media}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          onError={(e) => {
                            // Fallback if image doesn't exist
                            e.currentTarget.style.display = 'none'
                            e.currentTarget.parentElement!.innerHTML = `
                              <div class="flex items-center justify-center h-full text-neural-cyan">
                                <svg class="w-20 h-20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                </svg>
                              </div>
                            `
                          }}
                        />
                      </div>
                    )}
                    
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Link icon */}
                    <div className="absolute top-4 right-4 w-10 h-10 bg-neural-cyan/90 rounded-full flex items-center justify-center transform translate-x-12 group-hover:translate-x-0 transition-transform duration-500">
                      <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 bg-black/40 backdrop-blur-xl border-t border-white/10">
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-neural-cyan transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs font-medium bg-neural-cyan/10 border border-neural-cyan/30 rounded-full text-neural-cyan"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* View Project Button */}
                    <div className="mt-4 flex items-center gap-2 text-neural-cyan font-semibold group-hover:gap-4 transition-all">
                      <span>View Project</span>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>

              {/* Featured badge */}
              {project.featured && (
                <div className="absolute -top-3 -left-3 z-10">
                  <div className="px-4 py-2 bg-gradient-to-r from-neural-cyan to-neural-blue text-black text-xs font-bold rounded-full flex items-center gap-2"
                    style={{ boxShadow: '0 4px 20px rgba(0, 217, 255, 0.4)' }}
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    Featured
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
