import React from 'react'

export default function Logo({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg 
      className={className}
      viewBox="0 0 512 512" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: '#00d9ff', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#0099ff', stopOpacity: 1 }} />
        </linearGradient>
        <filter id="logoGlow">
          <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      
      {/* Neural Network Pattern */}
      <g opacity="0.3" stroke="#00d9ff" strokeWidth="2" fill="none">
        <circle cx="256" cy="150" r="8"/>
        <circle cx="200" cy="200" r="8"/>
        <circle cx="312" cy="200" r="8"/>
        <circle cx="256" cy="250" r="8"/>
        <circle cx="180" cy="300" r="8"/>
        <circle cx="332" cy="300" r="8"/>
        <circle cx="256" cy="350" r="8"/>
        <line x1="256" y1="150" x2="200" y2="200"/>
        <line x1="256" y1="150" x2="312" y2="200"/>
        <line x1="200" y1="200" x2="256" y2="250"/>
        <line x1="312" y1="200" x2="256" y2="250"/>
        <line x1="256" y1="250" x2="180" y2="300"/>
        <line x1="256" y1="250" x2="332" y2="300"/>
        <line x1="180" y1="300" x2="256" y2="350"/>
        <line x1="332" y1="300" x2="256" y2="350"/>
      </g>
      
      {/* Main Text */}
      <text 
        x="256" 
        y="280" 
        fontFamily="'Courier New', monospace" 
        fontSize="120" 
        fontWeight="bold" 
        textAnchor="middle" 
        fill="url(#logoGradient)" 
        filter="url(#logoGlow)"
      >
        AI
      </text>
      
      {/* Circuit Lines */}
      <g stroke="#00d9ff" strokeWidth="3" opacity="0.5" fill="none">
        <path d="M 120,256 L 150,256 L 160,246 L 170,266 L 180,256 L 210,256"/>
        <path d="M 302,256 L 332,256 L 342,246 L 352,266 L 362,256 L 392,256"/>
      </g>
    </svg>
  )
}
