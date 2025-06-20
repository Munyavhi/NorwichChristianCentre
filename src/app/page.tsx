'use client'

import Image from 'next/image'
import Link from 'next/link'
import { FaFacebook, FaYoutube, FaMapMarkerAlt, FaChurch, FaClock, FaBook, FaPhone, FaEnvelope, FaPlay, FaPause } from 'react-icons/fa'
import Script from 'next/script'
import ScrollAnimation from '@/components/ScrollAnimation'
import ImageSlider from '@/components/ImageSlider'
import LeadershipCard from '@/components/LeadershipCard'
import AnimatedText from '@/components/AnimatedText'
import { useState, useRef } from 'react'

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const handleVideoPlay = () => setIsPlaying(true)
  const handleVideoPause = () => setIsPlaying(false)

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Church',
    name: 'Norwich Christian Centre',
    description: 'A vibrant multi-racial, multi-ethnic Revival Worship Center in Norwich',
    url: 'https://norwichchristiancentre.org.uk',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Long John Hill',
      addressLocality: 'Norwich',
      postalCode: 'NR1 2EX',
      addressCountry: 'GB'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '52.6278',
      longitude: '1.2983'
    },
    openingHours: 'Mo-Su 10:00-12:00',
    telephone: '+447596996100',
    email: 'info@norwichchristiancentre.org.uk',
    sameAs: [
      'https://www.facebook.com/share/16bg8vPFof/',
      'https://youtube.com'
    ],
    image: '/images/CCC2.jpeg',
    logo: '/images/CCC2.jpeg',
    priceRange: 'Free',
    hasMap: 'https://www.google.com/maps/dir/?api=1&destination=Long+John+Hill+Norwich+NR1+2EX'
  }

  return (
    <>
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="min-h-screen">
        {/* Hero Section with background image */}
        <section className="relative h-screen">
          {/* Background image, overlay */}
          <div className="absolute inset-0 w-full h-full">
            <Image
              src="/bg.jpg"
              alt="Norwich Christian Centre - A welcoming place of worship"
              fill
              className="object-cover"
              priority
              sizes="100vw"
              quality={85}
            />
            <div className="absolute inset-0 bg-black/80" />
          </div>

          {/* Hero Content */}
          <ScrollAnimation animation="fade-in" className="relative h-full flex flex-col items-center justify-center text-white text-center px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Welcome to Norwich Christian Centre
            </h1>
          </ScrollAnimation>
        </section>

        {/* Mission Statement Section */}
        <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg">
                LOVING GOD, REACHING SOULS, CHANGING LIVES
              </h2>
              <div className="w-24 h-1 bg-white/50 mx-auto mb-8 rounded-full"></div>
              <p className="text-2xl text-white/95 font-medium drop-shadow-md">
                THROUGH THE GOSPEL OF CHRIST
              </p>
            </div>
          </div>
        </section>

        {/* Welcome Text Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Image Column */}
              <div className="flex flex-col items-center">
                <div className="relative h-[400px] w-[400px] mx-auto rounded-full overflow-hidden shadow-2xl ring-4 ring-blue-200">
                  <Image
                    src="/images/Pr Doug.jpg"
                    alt="Pastor Doug Laet - Lead Pastor of Norwich Christian Centre"
                    fill
                    className="object-cover"
                    sizes="(max-width: 400px) 100vw, 400px"
                    quality={85}
                    loading="eager"
                  />
                </div>
                <h3 className="text-2xl font-bold mt-4 text-blue-700">Pastor Doug Laet</h3>
                <p className="text-gray-600 font-medium">Lead Pastor</p>
              </div>

              {/* Content Column */}
              <div className="text-center md:text-left">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Join us in worship and fellowship
                </h2>
                <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                  Experience the warmth of our community and the power of worship together.
                </p>
                <div className="flex flex-wrap items-center gap-4">
                  <Link 
                    href="https://www.google.com/maps/dir/?api=1&destination=Long+John+Hill+Norwich+NR1+2EX"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    <FaMapMarkerAlt className="text-xl" />
                    <div className="text-left">
                      <div>Visit Us</div>
                      <div className="text-xs opacity-90">NR1 2EX</div>
                    </div>
                  </Link>
                  <Link 
                    href="https://www.facebook.com/share/16bg8vPFof/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-full font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    <FaFacebook className="text-xl" />
                    Watch Live
                  </Link>
                  <Link 
                    href="#" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-gradient-to-r from-red-500 to-pink-600 text-white px-6 py-3 rounded-full font-semibold hover:from-red-600 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 opacity-50 cursor-not-allowed"
                    onClick={(e) => e.preventDefault()}
                  >
                    <FaYoutube className="text-xl" />
                    YouTube
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Video Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-primary text-center mb-8">
                Our Preacher
              </h2>
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl shadow-primary/20">
                <video
                  src="/images/NCCV1.mp4"
                  className="w-full h-full object-cover object-center"
                  style={{ 
                    objectPosition: 'center 10%',
                    filter: 'brightness(1.05) contrast(1.05)',
                    transform: 'scale(1.02)'
                  }}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                />
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/60"></div>
                {/* Bible Verse Message */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white px-6 animate-float">
                    <p className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                      "Be still and know that I am God."
                    </p>
                    <p className="text-xl md:text-2xl text-white/90 font-medium">
                      —Psalm 46:10
                    </p>
                  </div>
                </div>
              </div>
              <p className="text-gray-600 text-center mt-4 text-lg">
                
              </p>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">CHURCH SERVICE</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-purple-100 hover:border-purple-200 transform hover:scale-105">
                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">SUNDAY SERVICE</h3>
                <p className="text-xl mb-2 text-gray-800 font-semibold">10 AM</p>
                <p className="text-gray-600">Main Worship Service</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-purple-100 hover:border-purple-200 transform hover:scale-105">
                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">WEDNESDAY BIBLE STUDY</h3>
                <p className="text-xl mb-2 text-gray-800 font-semibold">7:00 PM</p>
                <p className="text-gray-600">Join us for Bible Study</p>
              </div>
            </div>
            <div className="text-center mt-12">
              <p className="text-xl italic text-gray-700 mb-4 font-medium">
                "And now I commend you to God and to the word of his grace, which is able to build you up and to give you the inheritance among all those who are sanctified."
              </p>
              <p className="text-lg text-gray-500 font-medium">- Acts 20:32</p>
            </div>
          </div>
        </section>

        {/* GIF and Welcome Text Section */}
        <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* GIF */}
              <div className="text-center mb-12">
                <div className="relative w-full max-w-2xl mx-auto aspect-video rounded-2xl overflow-hidden shadow-2xl">
                  <video
                    src="/images/V1.mp4"
                    className="w-full h-full object-cover"
                    autoPlay
                    loop
                    playsInline
                    preload="auto"
                    ref={videoRef}
                    onPlay={handleVideoPlay}
                    onPause={handleVideoPause}
                  />
                  {/* Custom Play/Pause Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button
                      onClick={togglePlayPause}
                      className="bg-black/50 hover:bg-black/70 text-white p-6 rounded-full transition-all duration-300 transform hover:scale-110 backdrop-blur-sm z-10"
                    >
                      {isPlaying ? (
                        <FaPause className="text-4xl" />
                      ) : (
                        <FaPlay className="text-4xl ml-2" />
                      )}
                    </button>
                  </div>
                </div>
                <div className="mt-6">
                  <p className="text-xl text-gray-700 mb-4">
                    Watch our live services on Facebook
                  </p>
                  <a 
                    href="https://www.facebook.com/share/1CKfvCe5WD/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-full font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    <FaFacebook className="text-xl" />
                    Watch Live on Facebook
                  </a>
                </div>
              </div>

              {/* Welcome Text */}
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <h2 className="text-4xl font-bold text-primary text-center mb-8">
                  Welcome in the Name of Jesus Christ
                </h2>
                <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                  <p>
                    We are so glad you've found your way here. Whether you are visiting out of curiosity, searching for hope, or looking for a spiritual home, know this: you are not here by accident. We believe that God has a purpose for your life, and we are honored to walk with you on this journey of faith.
                  </p>
                  <p>
                    At the heart of everything we do is the life-changing love of Jesus Christ. Our mission is to share His grace, truth, and peace with everyone—no matter your background, questions, or struggles. In a world filled with uncertainty, we offer a message of eternal hope: that through Christ, there is forgiveness, healing, and new life.
                  </p>
                  <p>
                    We are a community of believers who strive to live by faith, be known by love, and be a voice of hope to those around us. Whether you're taking your first steps toward faith or have been walking with Christ for many years, we welcome you with open arms. Together, we grow, serve, and celebrate the goodness of God.
                  </p>
                  <div className="text-center mt-8 p-6 bg-primary/5 rounded-xl">
                    <p className="text-xl italic text-primary mb-2 font-semibold">
                      "Come to me, all you who are weary and burdened, and I will give you rest."
                    </p>
                    <p className="text-gray-600 font-medium">— Matthew 11:28</p>
                  </div>
                  <p className="text-center text-lg font-medium text-gray-700 mt-8">
                    May you find peace in His presence, strength in His promises, and joy in His unfailing love.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ministry Bio Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">MINISTRY LEADERS</h2>
            <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
              <div className="flex flex-col items-center text-center bg-white p-8 rounded-2xl shadow-xl border border-blue-100">
                <div className="relative h-[300px] w-[240px] rounded-2xl overflow-hidden shadow-lg ring-4 ring-blue-200 mb-6">
                  <Image
                    src="/images/Pr Doug.jpg"
                    alt="Pastor Doug Laet"
                    fill
                    className="object-cover"
                    sizes="(max-width: 240px) 100vw, 240px"
                    quality={85}
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent tracking-tight">
                    Pastor Doug Laet
                  </h3>
                  <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mb-6 rounded-full mx-auto"></div>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Pastor Doug Laet has been serving as the pastor of Norwich Christian Centre since 2010. 
                    He is dedicated to teaching God's Word and shepherding the congregation with love and wisdom.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center text-center bg-white p-8 rounded-2xl shadow-xl border border-blue-100">
                <div className="relative h-[300px] w-[240px] rounded-2xl overflow-hidden shadow-lg ring-4 ring-blue-200 mb-6">
                  <Image
                    src="/images/Pr Lindy1.jpg"
                    alt="Pastor Lindy Laet"
                    fill
                    className="object-cover"
                    sizes="(max-width: 240px) 100vw, 240px"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent tracking-tight">
                    Pastor Lindy Laet
                  </h3>
                  <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mb-6 rounded-full mx-auto"></div>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Pastor Lindy Laet serves alongside her husband, supporting the ministry through teaching, 
                    counseling, and leading various church programs. Her passion is helping others grow in their faith.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Image Slider Section */}
        <section className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50">
          <div className="container mx-auto px-4">
            <ImageSlider />
          </div>
        </section>

        {/* Join Our Family Section */}
        <section className="py-20 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Join Our Family</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="text-center md:text-left">
                <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                  We welcome you to be part of our church family. Whether you're new to faith or have been walking with God for years, 
                  there's a place for you here. Join us as we grow together in Christ's love and serve our community.
                </p>
                <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
                  <Link 
                    href="/contact"
                    className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-3 rounded-full font-semibold hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    Get in Touch
                  </Link>
                </div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-emerald-100">
                <blockquote className="text-xl italic text-gray-700">
                  "Being part of Norwich Christian Centre has been a blessing to our family. The warm community and 
                  strong biblical teaching have helped us grow in our faith."
                </blockquote>
                <p className="mt-4 text-gray-500 font-medium">- A Church Member</p>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Team Section */}
        <section className="py-20 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
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
              <AnimatedText />
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <LeadershipCard
                image="/images/CCC1.jpg"
                shape="circle"
              />
              <LeadershipCard
                image="/images/CCC2.jpeg"
                shape="rounded"
              />
              <LeadershipCard
                image="/images/CCC4.jpeg"
                shape="rounded"
              />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about-section" className="py-20 bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-50 scroll-mt-16">
          <div className="container mx-auto px-4">
            <ScrollAnimation animation="slide-up">
              <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-slate-600 to-gray-600 bg-clip-text text-transparent">About Our Church</h2>
              
              <div className="max-w-4xl mx-auto mb-16">
                <p className="text-xl text-center text-gray-700 leading-relaxed font-medium">
                  We strive to be a multi-racial, multi-ethnic Revival Worship Center where there is emphasis of Bible teaching, 
                  Discipleship, Worship, Soul winning, love and fear of God.
                </p>
              </div>
            </ScrollAnimation>

            <div className="grid md:grid-cols-3 gap-8">
              <ScrollAnimation animation="slide-in" className="text-center p-6 bg-white rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-slate-100 hover:border-slate-200 transform hover:scale-105">
                <h3 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-slate-600 to-gray-600 bg-clip-text text-transparent">Our Mission</h3>
                <p className="text-gray-700">To spread the love of Christ and build a community of believers who serve God and others.</p>
              </ScrollAnimation>

              <ScrollAnimation animation="slide-in" className="text-center p-6 bg-white rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-slate-100 hover:border-slate-200 transform hover:scale-105">
                <h3 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-slate-600 to-gray-600 bg-clip-text text-transparent">Our Vision</h3>
                <p className="text-gray-700">To be a beacon of hope and transformation in Norwich through faith, love, and service.</p>
              </ScrollAnimation>

              <ScrollAnimation animation="slide-in" className="text-center p-6 bg-white rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-slate-100 hover:border-slate-200 transform hover:scale-105">
                <h3 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-slate-600 to-gray-600 bg-clip-text text-transparent">Our Values</h3>
                <ul className="text-gray-700 space-y-2">
                  <li className="hover:text-slate-600 transition-colors">Love and fear God, Family, Love, Accountability, Excellency, Humility and Servanthood</li>
                </ul>
              </ScrollAnimation>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-6 bg-gray-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <p className="text-sm mb-2">
              © 2025 Norwich Christian Centre. All rights reserved.
            </p>
            <p className="text-sm">
              Designed by{' '}
              <a 
                href="https://clocept.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:text-secondary transition-colors"
              >
                Clocept
              </a>
            </p>
          </div>
        </footer>
      </div>
    </>
  )
} 