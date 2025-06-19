'use client'

import { useEffect, useRef } from 'react'

interface ScrollAnimationProps {
  children: React.ReactNode
  className?: string
  animation?: 'slide-up' | 'slide-in' | 'fade-in' | 'scale' | 'float'
}

export default function ScrollAnimation({ 
  children, 
  className = '', 
  animation = 'slide-up' 
}: ScrollAnimationProps) {
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    )

    const currentElement = elementRef.current
    if (currentElement) {
      observer.observe(currentElement)
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement)
      }
    }
  }, [])

  const getAnimationClass = () => {
    switch (animation) {
      case 'slide-up':
        return 'animate-slide-up'
      case 'slide-in':
        return 'animate-slide-in'
      case 'fade-in':
        return 'animate-fade-in'
      case 'scale':
        return 'animate-scale'
      case 'float':
        return 'animate-float'
      default:
        return 'animate-slide-up'
    }
  }

  return (
    <div 
      ref={elementRef} 
      className={`animate-on-scroll ${getAnimationClass()} ${className}`}
    >
      {children}
    </div>
  )
} 