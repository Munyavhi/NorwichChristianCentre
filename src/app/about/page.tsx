'use client'

import Image from 'next/image'
import LeadershipCard from '@/components/LeadershipCard'

export default function About() {
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

        {/* About Our Church Section */}
        <div className="py-20 bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-slate-600 to-gray-600 bg-clip-text text-transparent">About Our Church</h2>
            
            <div className="max-w-4xl mx-auto mb-16">
              <p className="text-xl text-center text-gray-700 leading-relaxed font-medium">
                We strive to be a multi-racial, multi-ethnic Revival Worship Center where there is emphasis of Bible teaching, 
                Discipleship, Worship, Soul winning, love and fear of God.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-white rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-slate-100 hover:border-slate-200 transform hover:scale-105">
                <h3 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-slate-600 to-gray-600 bg-clip-text text-transparent">Our Mission</h3>
                <p className="text-gray-700">To spread the love of Christ and build a community of believers who serve God and others.</p>
              </div>

              <div className="text-center p-6 bg-white rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-slate-100 hover:border-slate-200 transform hover:scale-105">
                <h3 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-slate-600 to-gray-600 bg-clip-text text-transparent">Our Vision</h3>
                <p className="text-gray-700">To be a beacon of hope and transformation in Norwich through faith, love, and service.</p>
              </div>

              <div className="text-center p-6 bg-white rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-slate-100 hover:border-slate-200 transform hover:scale-105">
                <h3 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-slate-600 to-gray-600 bg-clip-text text-transparent">Our Values</h3>
                <ul className="text-gray-700 space-y-2">
                  <li className="hover:text-slate-600 transition-colors">Love and fear God, Family, Love, Accountability, Excellency, Humility and Servanthood</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Ministry Leaders Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-4xl font-bold text-center mb-12 text-primary">Ministry Leaders</h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="flex flex-col items-center text-center">
              <div className="relative h-[340px] w-[280px] rounded-2xl overflow-hidden shadow-lg mb-6">
                <Image
                  src="/images/Pr Doug.jpg"
                  alt="Pastor Doug Laet"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-3xl font-bold mb-4 text-primary tracking-tight">
                  Pastor Doug Laet
                </h3>
                <div className="w-20 h-1 bg-primary/20 mb-6 mx-auto"></div>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Pastor Doug Laet has been serving as the pastor of Norwich Christian Centre since 2010. 
                  He is dedicated to teaching God's Word and shepherding the congregation with love and wisdom.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="relative h-[340px] w-[280px] rounded-2xl overflow-hidden shadow-lg mb-6">
                <Image
                  src="/images/Pr Lindy1.jpg"
                  alt="Pastor Lindy Laet"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-3xl font-bold mb-4 text-primary tracking-tight">
                  Pastor Lindy Laet
                </h3>
                <div className="w-20 h-1 bg-primary/20 mb-6 mx-auto"></div>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Pastor Lindy Laet serves alongside her husband, supporting the ministry through teaching, 
                  counseling, and leading various church programs. Her passion is helping others grow in their faith.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Faith Community Section */}
        <div className="py-20 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent mb-6">
                Faith Community
              </h2>
              <div className="relative w-full max-w-4xl mx-auto h-[400px] mb-8 rounded-xl overflow-hidden shadow-2xl ring-4 ring-orange-200">
                <Image
                  src="/images/Fellowship Team3.jpg"
                  alt="Faith Community Fellowship at Norwich Christian Centre"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1200px) 100vw, 1200px"
                  quality={85}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 