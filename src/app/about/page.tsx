'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import LeadershipCard from '@/components/LeadershipCard'

export default function About() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Add a small delay to ensure smooth transition
    const timer = setTimeout(() => {
      router.push('/#about-section')
      setIsLoading(false)
    }, 100)

    return () => clearTimeout(timer)
  }, [router])

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="flex flex-col items-center">
          <div className="relative w-16 h-16">
            {/* Outer ring */}
            <div className="absolute inset-0 border-4 border-primary/20 rounded-full"></div>
            {/* Animated ring */}
            <div className="absolute inset-0 border-4 border-t-primary border-r-secondary border-b-accent border-l-transparent rounded-full animate-spin"></div>
          </div>
          <p className="mt-4 text-primary font-semibold animate-pulse">Loading...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen relative">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 overflow-hidden">
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-4 h-4 bg-primary/20 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${5 + Math.random() * 10}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="relative">
        {/* Hero Section */}
        <div className="text-center py-20">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">About Us</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Learn more about our church, our mission, and the people who make it all possible.
          </p>
        </div>

        {/* Our Story Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Norwich Christian Centre was founded with a vision to create a welcoming space for worship and community. Our journey began with a small group of believers and has grown into a vibrant community of faith.
            </p>
          </div>
        </div>

        {/* Mission Statement Section */}
        <div className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-8">Our Mission</h2>
              <div className="max-w-4xl mx-auto space-y-8">
                <p className="text-xl text-gray-700 leading-relaxed">
                  We strive to be a multi-ethnic, multi-cultural church where there is freedom of Bible teaching, discipleship, worship, and training in the love and fear of God.
                </p>
                <p className="text-xl text-gray-700 leading-relaxed">
                  Our mission is to create a welcoming environment where people from all walks of life can come together to worship, learn, and grow in their faith journey.
                </p>
                <p className="text-xl text-gray-700 leading-relaxed">
                  We are committed to serving our community, spreading the message of God's love, and making a positive impact in the lives of those around us.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Ministry Leaders Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-4xl font-bold text-center mb-12 text-primary">Ministry Leaders</h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="flex items-center gap-8">
              <div className="flex-1">
                <h3 className="text-3xl font-bold mb-4 text-primary tracking-tight">
                  Pastor Doug Laet
                </h3>
                <div className="w-20 h-1 bg-primary/20 mb-6"></div>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Pastor Doug Laet has been serving as the pastor of Norwich Christian Centre since 2010. 
                  He is dedicated to teaching God's Word and shepherding the congregation with love and wisdom.
                </p>
              </div>
              <div className="relative h-[280px] w-[220px] rounded-2xl overflow-hidden shadow-lg flex-shrink-0">
                <Image
                  src="/images/Pr Doug.jpg"
                  alt="Pastor Doug Laet"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="flex items-center gap-8">
              <div className="flex-1">
                <h3 className="text-3xl font-bold mb-4 text-primary tracking-tight">
                  Pastor Lindy Laet
                </h3>
                <div className="w-20 h-1 bg-primary/20 mb-6"></div>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Pastor Lindy Laet serves alongside her husband, supporting the ministry through teaching, 
                  counseling, and leading various church programs. Her passion is helping others grow in their faith.
                </p>
              </div>
              <div className="relative h-[280px] w-[220px] rounded-2xl overflow-hidden shadow-lg flex-shrink-0">
                <Image
                  src="/images/Pr Lindy1.jpg"
                  alt="Pastor Lindy Laet"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 