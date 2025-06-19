'use client'

import Image from 'next/image'
import Link from 'next/link'
import { FaFacebook, FaYoutube, FaMapMarkerAlt, FaChurch, FaClock, FaBook, FaPhone, FaEnvelope } from 'react-icons/fa'
import Script from 'next/script'
import ScrollAnimation from '@/components/ScrollAnimation'
import ImageSlider from '@/components/ImageSlider'
import LeadershipCard from '@/components/LeadershipCard'
import AnimatedText from '@/components/AnimatedText'

export default function Home() {
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
        <section className="py-20 bg-gradient-to-br from-primary to-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                LOVING GOD, REACHING SOULS, CHANGING LIVES
              </h2>
              <div className="w-24 h-1 bg-white/30 mx-auto mb-8"></div>
              <p className="text-2xl text-white/90">
                THROUGH THE GOSPEL OF CHRIST
              </p>
            </div>
          </div>
        </section>

        {/* Welcome Text Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Image Column */}
              <div className="flex flex-col items-center">
                <div className="relative h-[400px] w-[400px] mx-auto rounded-full overflow-hidden shadow-xl">
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
                <h3 className="text-2xl font-bold mt-4 text-primary">Pastor Doug Laet</h3>
                <p className="text-gray-600">Lead Pastor</p>
              </div>

              {/* Content Column */}
              <div className="text-center md:text-left">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
                  Join us in worship and fellowship
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  Experience the warmth of our community and the power of worship together.
                </p>
                <div className="flex flex-wrap items-center gap-4">
                  <Link 
                    href="https://www.google.com/maps/dir/?api=1&destination=Long+John+Hill+Norwich+NR1+2EX"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-secondary transition-colors shadow-lg"
                  >
                    <FaMapMarkerAlt className="text-xl" />
                    <div className="text-left">
                      <div>Visit Us</div>
                      <div className="text-xs">NR1 2EX</div>
                    </div>
                  </Link>
                  <Link 
                    href="https://www.facebook.com/share/16bg8vPFof/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-[#1877F2] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#0d6efd] transition-colors shadow-lg"
                  >
                    <FaFacebook className="text-xl" />
                    Watch Live
                  </Link>
                  <Link 
                    href="#" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-[#FF0000] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#cc0000] transition-colors shadow-lg opacity-50 cursor-not-allowed"
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
                Experience Our Worship
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
              </div>
              <p className="text-gray-600 text-center mt-4 text-lg">
                Watch a glimpse of our worship service
              </p>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12 text-primary">CHURCH SERVICE</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-2xl font-bold mb-4 text-primary">SUNDAY SERVICE</h3>
                <p className="text-xl mb-2">10 AM</p>
                <p className="text-gray-600">Main Worship Service</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-2xl font-bold mb-4 text-primary">WEDNESDAY BIBLE STUDY</h3>
                <p className="text-xl mb-2">7:00 PM</p>
                <p className="text-gray-600">Join us for Bible Study</p>
              </div>
            </div>
            <div className="text-center mt-12">
              <p className="text-xl italic text-gray-600 mb-4">
                "And now I commend you to God and to the word of his grace, which is able to build you up and to give you the inheritance among all those who are sanctified."
              </p>
              <p className="text-lg text-gray-500">- Acts 20:32</p>
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
                    muted
                    playsInline
                    preload="auto"
                  />
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
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12 text-primary">MINISTRY LEADERS</h2>
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
                    sizes="(max-width: 220px) 100vw, 220px"
                    quality={85}
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
        </section>

        {/* Image Slider Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <ImageSlider />
          </div>
        </section>

        {/* Join Our Family Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12 text-primary">Join Our Family</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="text-center md:text-left">
                <p className="text-xl text-gray-600 mb-8">
                  We welcome you to be part of our church family. Whether you're new to faith or have been walking with God for years, 
                  there's a place for you here. Join us as we grow together in Christ's love and serve our community.
                </p>
                <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
                  <Link 
                    href="/contact"
                    className="bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-secondary transition-colors shadow-lg"
                  >
                    Get in Touch
                  </Link>
                </div>
              </div>
              <div className="bg-gray-50 p-8 rounded-2xl shadow-lg">
                <blockquote className="text-xl italic text-gray-600">
                  "Being part of Norwich Christian Centre has been a blessing to our family. The warm community and 
                  strong biblical teaching have helped us grow in our faith."
                </blockquote>
                <p className="mt-4 text-gray-500">- A Church Member</p>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Team Section */}
        <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                Faith Community
              </h2>
              <div className="relative w-full max-w-4xl mx-auto h-[400px] mb-8 rounded-xl overflow-hidden shadow-xl">
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
        <section id="about-section" className="py-20 bg-white scroll-mt-16">
          <div className="container mx-auto px-4">
            <ScrollAnimation animation="slide-up">
              <h2 className="text-4xl font-bold text-center mb-12 text-primary">About Our Church</h2>
              
              <div className="max-w-4xl mx-auto mb-16">
                <p className="text-xl text-center text-dark leading-relaxed">
                  We strive to be a multi-racial, multi-ethnic Revival Worship Center where there is emphasis of Bible teaching, 
                  Discipleship, Worship, Soul winning, love and fear of God.
                </p>
              </div>
            </ScrollAnimation>

            <div className="grid md:grid-cols-3 gap-8">
              <ScrollAnimation animation="slide-in" className="text-center p-6 bg-light rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-2xl font-semibold mb-4 text-secondary">Our Mission</h3>
                <p className="text-dark">To spread the love of Christ and build a community of believers who serve God and others.</p>
              </ScrollAnimation>

              <ScrollAnimation animation="slide-in" className="text-center p-6 bg-light rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-2xl font-semibold mb-4 text-secondary">Our Vision</h3>
                <p className="text-dark">To be a beacon of hope and transformation in Norwich through faith, love, and service.</p>
              </ScrollAnimation>

              <ScrollAnimation animation="slide-in" className="text-center p-6 bg-light rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-2xl font-semibold mb-4 text-secondary">Our Values</h3>
                <ul className="text-dark space-y-2">
                  <li className="hover:text-primary transition-colors">Love and fear God, Family, Love, Accountability, Excellency, Humility and Servanthood</li>
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