'use client'

import { useEffect, useState } from 'react'

const messages = [
  'Outward Focused',
  'Life Giving',
  'Spirit of excellence',
  'Christ Centred'
]

export default function AnimatedText() {
  const [position, setPosition] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prevPosition) => {
        const newPosition = prevPosition - 1
        // Reset position when we've scrolled the width of one message
        if (newPosition <= -100) {
          return 0
        }
        return newPosition
      })
    }, 50) // Update position every 50ms for smooth animation

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
          {messages.map((message, index) => (
            <div
              key={index}
              className="inline-block w-full text-center px-4"
            >
              <h3 className="text-4xl md:text-5xl font-extrabold text-primary tracking-wide">
                {message}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 