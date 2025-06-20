'use client'

import { useEffect, useState } from 'react'

const messages = [
  'Come to me, all who are weary and burdened and I will give you rest.  '
]

export default function AnimatedText() {
  const [position, setPosition] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prevPosition) => {
        const newPosition = prevPosition - 0.3
        // Reset position when we've scrolled the width of one message
        if (newPosition <= -100) {
          return 0
        }
        return newPosition
      })
    }, 50) // Update position every 50ms for slower animation

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="w-full overflow-hidden bg-primary/5 py-6">
      <div className="relative">
        <div
          className="whitespace-nowrap"
          style={{
            transform: `translateX(${position}%)`,
            transition: 'transform 0.05s linear',
          }}
        >
          {/* Duplicate the message to create seamless loop */}
          {messages.map((message, index) => (
            <div
              key={`first-${index}`}
              className="inline-block w-full text-center px-8"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-primary tracking-wide">
                {message}
              </h3>
            </div>
          ))}
          {messages.map((message, index) => (
            <div
              key={`second-${index}`}
              className="inline-block w-full text-center px-8"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-primary tracking-wide">
                {message}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 