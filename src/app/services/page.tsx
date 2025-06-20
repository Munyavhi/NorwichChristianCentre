'use client'

import { FaMusic, FaPray, FaBook, FaHandHoldingHeart, FaUsers, FaPlay, FaPause } from 'react-icons/fa'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import Image from 'next/image'
import { useState, useRef } from 'react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

export default function Services() {
  // Test element to verify updates
  console.log('Services page is rendering')
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

  const slides = [
    {
      image: 'https://placehold.co/1920x1080/1a365d/ffffff?text=Sunday+Worship',
      title: 'Sunday Worship',
      description: 'Join us for our weekly worship service'
    },
    {
      image: 'https://placehold.co/1920x1080/2d3748/ffffff?text=Community+Prayer',
      title: 'Community Prayer',
      description: 'Experience the power of collective prayer'
    },
    {
      image: 'https://placehold.co/1920x1080/e2e8f0/1a365d?text=Bible+Study',
      title: 'Bible Study',
      description: 'Deep dive into God\'s word'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-secondary to-accent">
      {/* Image Slider */}
      <div className="w-full h-[400px] relative px-4 py-8">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={0}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          className="w-full h-full rounded-2xl overflow-hidden"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-full rounded-2xl overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center rounded-2xl"
                  style={{ backgroundImage: `url(${slide.image})` }}
                />
                <div className="absolute inset-0 bg-black/40 rounded-2xl" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* GIF/Video Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl shadow-primary/20">
            <video
              src="/images/V2.mp4"
              className="w-full h-full object-cover object-center"
              style={{ 
                objectPosition: 'center 10%',
                filter: 'brightness(0.8) contrast(1.1)',
                transform: 'scale(1.02)'
              }}
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
          <p className="text-gray-600 text-center mt-4 text-lg">
            
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
          Our Preacher
        </h1>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* Music Section */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 transform transition-all duration-300 hover:scale-[1.02] hover:bg-white/20 shadow-lg hover:shadow-xl hover:shadow-primary/20 border border-white/10">
            <div className="flex items-center gap-3 mb-3">
              <FaMusic className="text-2xl text-primary" />
              <h2 className="text-xl font-semibold text-white">Music</h2>
            </div>
            <p className="text-white/80 text-sm leading-relaxed">
              Worship is a participatory experience. We invite you to join in as we praise God through singing by following the on-screen lyrics.
            </p>
          </div>

          {/* Prayer Section */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 transform transition-all duration-300 hover:scale-[1.02] hover:bg-white/20 shadow-lg hover:shadow-xl hover:shadow-primary/20 border border-white/10">
            <div className="flex items-center gap-3 mb-3">
              <FaPray className="text-2xl text-secondary" />
              <h2 className="text-xl font-semibold text-white">Prayer</h2>
            </div>
            <p className="text-white/80 text-sm leading-relaxed">
              Our prayer during Sunday services allows us to acknowledge our dependence on Christ for building his kingdom and in our personal lives. We pray for the needs of the church and its members.
            </p>
          </div>

          {/* Message Section */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 transform transition-all duration-300 hover:scale-[1.02] hover:bg-white/20 shadow-lg hover:shadow-xl hover:shadow-primary/20 border border-white/10">
            <div className="flex items-center gap-3 mb-3">
              <FaBook className="text-2xl text-accent" />
              <h2 className="text-xl font-semibold text-white">Message</h2>
            </div>
            <p className="text-white/80 text-sm leading-relaxed">
              The teaching and preaching time seeks to communicate God's Truth in compelling, relevant ways. Each service, we pray that God blesses the preaching of the word that it might penetrate our hearts and impact our lives in the week ahead.
            </p>
          </div>

          {/* Offering Section */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 transform transition-all duration-300 hover:scale-[1.02] hover:bg-white/20 shadow-lg hover:shadow-xl hover:shadow-primary/20 border border-white/10">
            <div className="flex items-center gap-3 mb-3">
              <FaHandHoldingHeart className="text-2xl text-primary" />
              <h2 className="text-xl font-semibold text-white">Offering</h2>
            </div>
            <p className="text-white/80 text-sm leading-relaxed">
              We give generously as an act of worship, not under compulsion of any kind but out of a joyful heart.
            </p>
          </div>

          {/* Fellowship Section */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 transform transition-all duration-300 hover:scale-[1.02] hover:bg-white/20 shadow-lg hover:shadow-xl hover:shadow-primary/20 border border-white/10 md:col-span-2">
            <div className="flex items-center gap-3 mb-3">
              <FaUsers className="text-2xl text-secondary" />
              <h2 className="text-xl font-semibold text-white">Fellowship</h2>
            </div>
            <p className="text-white/80 text-sm leading-relaxed">
              Following the service, we spend time getting to know each other better over a light meal and through conversation.
            </p>
          </div>
        </div>
      </div>

      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 overflow-hidden">
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
    </div>
  )
} 