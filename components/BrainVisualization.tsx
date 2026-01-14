'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

export default function BrainVisualization() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number
    const particles: Array<{
      x: number
      y: number
      z: number
      vx: number
      vy: number
      vz: number
    }> = []

    const centerX = canvas.width / 2
    const centerY = canvas.height / 2

    // Create brain-like structure with particles
    const initParticles = () => {
      particles.length = 0
      const particleCount = 200

      for (let i = 0; i < particleCount; i++) {
        const angle = Math.random() * Math.PI * 2
        const radius = 80 + Math.random() * 100
        const height = (Math.random() - 0.5) * 80

        particles.push({
          x: Math.cos(angle) * radius,
          y: Math.sin(angle) * radius * 0.7 + height,
          z: Math.sin(angle) * radius * 0.5,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          vz: (Math.random() - 0.5) * 0.3,
        })
      }
    }

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
      initParticles()
    }

    let rotation = 0

    const animate = () => {
      ctx.fillStyle = 'rgba(10, 10, 10, 0.05)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      rotation += 0.003

      // Sort particles by z-index for proper depth rendering
      const sortedParticles = [...particles].sort((a, b) => b.z - a.z)

      sortedParticles.forEach((particle, i) => {
        // Update position
        particle.x += particle.vx
        particle.y += particle.vy
        particle.z += particle.vz

        // Rotate particle
        const rotatedX = particle.x * Math.cos(rotation) - particle.z * Math.sin(rotation)
        const rotatedZ = particle.x * Math.sin(rotation) + particle.z * Math.cos(rotation)

        // Project to 2D
        const scale = 200 / (200 + rotatedZ)
        const x2d = centerX + rotatedX * scale
        const y2d = centerY + particle.y * scale

        // Calculate depth-based properties
        const depth = (rotatedZ + 200) / 400
        const size = 2 + depth * 2
        const opacity = 0.3 + depth * 0.7

        // Draw particle
        ctx.beginPath()
        ctx.arc(x2d, y2d, size, 0, Math.PI * 2)
        
        // Gradient color based on depth
        const hue = 180 + depth * 60 // Cyan to purple
        ctx.fillStyle = `hsla(${hue}, 100%, 60%, ${opacity})`
        ctx.fill()

        // Draw connections to nearby particles
        sortedParticles.slice(i + 1, i + 6).forEach((other) => {
          const dx = particle.x - other.x
          const dy = particle.y - other.y
          const dz = particle.z - other.z
          const distance = Math.sqrt(dx * dx + dy * dy + dz * dz)

          if (distance < 80) {
            const otherRotatedX = other.x * Math.cos(rotation) - other.z * Math.sin(rotation)
            const otherRotatedZ = other.x * Math.sin(rotation) + other.z * Math.cos(rotation)
            const otherScale = 200 / (200 + otherRotatedZ)
            const otherX2d = centerX + otherRotatedX * otherScale
            const otherY2d = centerY + other.y * otherScale

            const lineOpacity = (1 - distance / 80) * opacity * 0.3

            ctx.beginPath()
            ctx.moveTo(x2d, y2d)
            ctx.lineTo(otherX2d, otherY2d)
            ctx.strokeStyle = `rgba(0, 217, 255, ${lineOpacity})`
            ctx.lineWidth = 1
            ctx.stroke()
          }
        })

        // Bounce particles within bounds
        const maxDist = 120
        const distFromCenter = Math.sqrt(particle.x * particle.x + particle.y * particle.y + particle.z * particle.z)
        if (distFromCenter > maxDist) {
          particle.vx *= -0.8
          particle.vy *= -0.8
          particle.vz *= -0.8
        }
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)
    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.5, delay: 0.5 }}
      className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none hidden lg:block"
    >
      <div className="relative w-full h-full">
        {/* Glow effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-neural-cyan/20 to-neural-purple/20 blur-[100px] animate-pulse-slow" />
        <div className="absolute inset-0 bg-gradient-to-br from-neural-cyan/10 to-transparent blur-3xl" />
        
        {/* Canvas */}
        <canvas
          ref={canvasRef}
          className="w-full h-full"
          style={{ filter: 'drop-shadow(0 0 40px rgba(0, 217, 255, 0.4))' }}
        />
        
        {/* Code overlay effect */}
        <div className="absolute inset-0 opacity-20 text-[8px] font-mono text-neural-cyan overflow-hidden pointer-events-none">
          <div className="animate-float whitespace-nowrap">
            const neuralNetwork = new Brain()<br/>
            function processIntelligence(data)<br/>
            return model.predict(embeddings)<br/>
            await rag.retrieve(query)<br/>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
