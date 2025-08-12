// import React from 'react'

// function Container({children}) {
//   return <div className='w-full max-w-7xl mx-auto px-4'>{children}</div>;
  
// }

// export default Container

import React, { useState, useEffect, useRef } from 'react'

function Container({ children, className = '', variant = 'default', animated = false, glowEffect = false }) {
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const containerRef = useRef(null)

  // Intersection Observer for scroll animations
  useEffect(() => {
    if (!animated) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      { threshold: 0.1, rootMargin: '50px' }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [animated])

  // Mouse tracking for glow effect
  useEffect(() => {
    if (!glowEffect) return

    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        })
      }
    }

    const container = containerRef.current
    if (container) {
      container.addEventListener('mousemove', handleMouseMove)
      return () => container.removeEventListener('mousemove', handleMouseMove)
    }
  }, [glowEffect])

  // Variant styles
  const getVariantStyles = () => {
    switch (variant) {
      case 'card':
        return `
          bg-[#eff6e0]/80 backdrop-blur-xl rounded-2xl border border-[#aec3b0]/30 
          shadow-lg hover:shadow-2xl hover:shadow-[#598392]/10 
          transition-all duration-500 hover:-translate-y-1
        `
      case 'glass':
        return `
          bg-[#eff6e0]/20 backdrop-blur-2xl rounded-3xl border border-[#aec3b0]/40 
          shadow-xl hover:shadow-2xl hover:border-[#598392]/60
          transition-all duration-500
        `
      case 'dark':
        return `
          bg-gradient-to-br from-[#01161e]/90 to-[#124559]/80 backdrop-blur-xl 
          rounded-2xl border border-[#598392]/30 shadow-2xl
          hover:shadow-[#598392]/20 transition-all duration-500
        `
      case 'minimal':
        return `
          border-l-4 border-[#598392] hover:border-[#aec3b0] 
          transition-all duration-300 hover:translate-x-2
        `
      case 'floating':
        return `
          bg-[#eff6e0]/90 backdrop-blur-xl rounded-3xl border border-[#aec3b0]/40 
          shadow-2xl hover:shadow-3xl transform hover:scale-[1.02] hover:-translate-y-2
          transition-all duration-500 hover:rotate-1
        `
      default:
        return ''
    }
  }

  return (
    <div 
      ref={containerRef}
      className={`
        w-full max-w-7xl mx-auto px-6 relative
        ${animated ? `transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }` : ''}
        ${getVariantStyles()}
        ${className}
      `}
      style={glowEffect ? {
        '--mouse-x': `${mousePosition.x}px`,
        '--mouse-y': `${mousePosition.y}px`
      } : {}}
    >
      {/* Glow Effect */}
      {glowEffect && (
        <div 
          className="absolute rounded-full pointer-events-none transition-opacity duration-300 opacity-0 hover:opacity-100"
          style={{
            left: `${mousePosition.x - 100}px`,
            top: `${mousePosition.y - 100}px`,
            width: '200px',
            height: '200px',
            background: 'radial-gradient(circle, rgba(89, 131, 146, 0.15) 0%, transparent 70%)',
            filter: 'blur(20px)'
          }}
        />
      )}

      {/* Ambient Floating Particles */}
      {(variant === 'floating' || variant === 'glass') && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-inherit">
          <div className="absolute top-1/4 left-1/6 w-2 h-2 bg-[#598392]/20 rounded-full animate-pulse" style={{animationDelay: '0s'}}></div>
          <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-[#aec3b0]/30 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-1/3 left-1/2 w-1.5 h-1.5 bg-[#eff6e0]/20 rounded-full animate-pulse" style={{animationDelay: '4s'}}></div>
        </div>
      )}

      {/* Corner Accents for Card Variant */}
      {variant === 'card' && (
        <>
          <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#598392]/60 rounded-tl-2xl"></div>
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#598392]/60 rounded-br-2xl"></div>
        </>
      )}

      {/* Gradient Border for Dark Variant */}
      {variant === 'dark' && (
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#598392]/20 via-transparent to-[#aec3b0]/20 pointer-events-none"></div>
      )}

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>

      {/* Interactive Ripple Effect */}
      {variant === 'floating' && (
        <div className="absolute inset-0 rounded-inherit overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-r from-[#598392]/0 via-[#598392]/5 to-[#598392]/0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
        </div>
      )}
    </div>
  )
}

export default Container