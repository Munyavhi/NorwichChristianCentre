'use client'

import { useEffect, useState, useRef } from 'react'

const messages = [
  'Come to me, all who are weary and burdened and I will give you rest.'
]

export default function AnimatedText() {
  const [position, setPosition] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prevPosition) => {
        const newPosition = prevPosition - 0.15 // Even slower animation
        // Reset position when we've scrolled the width of one message
        if (newPosition <= -100) {
          return 0
        }
        return newPosition
      })
    }, 50)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="w-full overflow-hidden bg-primary/5 py-6">
      <div className="relative" ref={containerRef}>
        <div
          className="whitespace-nowrap flex"
          style={{
            transform: `translateX(${position}%)`,
            transition: 'transform 0.05s linear',
          }}
        >
          {/* First message */}
          <div className="flex-shrink-0 text-center px-16 md:px-20 lg:px-24">
            <h3 className="text-2xl md:text-3xl font-bold text-primary tracking-wide">
              {messages[0]}
            </h3>
          </div>
          
          {/* Second message (duplicate for seamless loop) */}
          <div className="flex-shrink-0 text-center px-16 md:px-20 lg:px-24">
            <h3 className="text-2xl md:text-3xl font-bold text-primary tracking-wide">
              {messages[0]}
            </h3>
          </div>
          
          {/* Third message (duplicate for seamless loop) */}
          <div className="flex-shrink-0 text-center px-16 md:px-20 lg:px-24">
            <h3 className="text-2xl md:text-3xl font-bold text-primary tracking-wide">
              {messages[0]}
            </h3>
          </div>
          
          {/* Extra spacing element */}
          <div className="flex-shrink-0 text-center px-16 md:px-20 lg:px-24">
            <h3 className="text-2xl md:text-3xl font-bold text-primary tracking-wide opacity-0">
              {messages[0]}
            </h3>
          </div>
        </div>
      </div>
    </div>
  )
} 